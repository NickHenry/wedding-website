import json
import gspread
from oauth2client.service_account import ServiceAccountCredentials

scope = ['https://spreadsheets.google.com/feeds',
         'https://www.googleapis.com/auth/drive']

credentials = ServiceAccountCredentials.from_json_keyfile_name('credentials.json', scope)
    
def lambda_handler(event, context):
    
    gc = gspread.authorize(credentials)
    
    # Open a worksheet from spreadsheet with one shot
    sht1 = gc.open_by_key('1demuZzYfzRnAHnzFXO8V152CasObQqzEQd4e22qX9OU')
    worksheet = sht1.worksheet("RSVPs")
    values_list = worksheet.get_all_values()
    
    current_length = len(values_list)
    
    people = [
      {
        "name": "Nick",
        "diet": "nut-free"
      },
      {
        "name": "Sophie",
        "diet": "none"
      }
    ]
    
    for i in range(len(people)):
      worksheet.update_cell(current_length + (i + 1), 1, "ATTENDING")
      worksheet.update_cell(current_length + (i + 1), 2, people[i]["name"])
      worksheet.update_cell(current_length + (i + 1), 3, people[i]["diet"])
      worksheet.update_cell(current_length + (i + 1), 4, len(people))

    return {
        'statusCode': 200,
        'body': json.dumps('Hello from Lambda!')
    }
