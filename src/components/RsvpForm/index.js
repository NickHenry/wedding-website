import React, { Component } from "react";

import {
  Button,
  TextField,
  FormControlLabel,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  Fab
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import AddIcon from "@material-ui/icons/Add";
import PersonSelect from "../PersonSelect";

const styles = theme => ({
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    display: "flex",
    flexDirection: "column"
  },
  margin: {
    margin: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  group: {
    flexDirection: "row"
  },
  party: {
    display: "flex",
    flexWrap: "no-wrap",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: theme.spacing(2)
  },
  partyItem: {
    flexGrow: 1
  },
  buttonControls: {
    marginLeft: theme.spacing(5),
    marginTop: theme.spacing(1)
  }
});

class RsvpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [{ name: "", dietRestrictions: "" }]
    };
    this.submit = this.submit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onPersonChange = this.onPersonChange.bind(this);
    this.addPerson = this.addPerson.bind(this);
    this.removePerson = this.removePerson.bind(this);
  }

  onChange(data) {
    const target = data.currentTarget || data;
    this.setState({
      [target.name]: target.value
    });
  }

  addPerson() {
    this.setState({
      people: [...this.state.people, { name: "", dietRestrictions: "" }]
    });
  }

  removePerson(index) {
    const people = this.state.people;
    people.splice(index, 1);
    this.setState({
      people
    });
  }

  submit() {
    console.log("FORM SUBMIT", this.state);
    return;
  }

  onPersonChange(index, person) {
    const people = this.state.people;
    people[index] = person;
    this.setState({
      people
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.paper}>
        <form className={classes.form} noValidate data-netlify="true" name="rsvp" method="post">
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Are you coming?</FormLabel>
            <RadioGroup
              aria-label="attendance"
              name="attendance"
              className={classes.group}
            >
              <FormControlLabel
                value="true"
                control={<Radio onChange={this.onChange} />}
                label="Yes"
              />
              <FormControlLabel value="false" control={<Radio onChange={this.onChange} />} label="No" />
            </RadioGroup>
          </FormControl>
          <FormControl className={classes.party}>
            <TextField
              variant="outlined"
              margin="normal"
              label="Number of People in your group"
              value={this.state.people.length}
              className={classes.partyItem}
              InputProps={{
                readOnly: true
              }}
            />
            <Fab
              size="small"
              color="primary"
              aria-label="Add"
              onClick={this.addPerson}
              className={classes.buttonControls}
              disabled={this.state.people.length >= 10}
            >
              <AddIcon />
            </Fab>
          </FormControl>

          {this.state.people.map((person, index) => (
            <PersonSelect
              key={index}
              index={index}
              person={person}
              onChange={this.onPersonChange}
              onRemoval={
                this.state.people.length > 1 ? this.removePerson : null
              }
            />
          ))}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Send
          </Button>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(RsvpForm);
