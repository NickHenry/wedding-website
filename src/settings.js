import { createMuiTheme } from "@material-ui/core/styles";
import image1 from "./images/1.png";
import image2 from "./images/2.jpg";
export const theme = createMuiTheme({
  spacing: 4,
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    text: {
      main: "#404040",
    }
  }
});

export const DIETARY_OPTIONS = [
  "None",
  "Gluten-free",
  "Nut-free",
  "Vegan",
  "Other"
];

export const images = [
  image1,
  image2
];

