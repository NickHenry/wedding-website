import React, { Component } from "react";

import { TextField, FormControl, Fab } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import DietSelector from "../DietSelector";
import DeleteIcon from "@material-ui/icons/Delete";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "no-wrap",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: theme.spacing(2)
  },
  buttonControls: {
    marginLeft: theme.spacing(5),
    marginTop: theme.spacing(1)
  },
  name: {
    flexGrow: 1
  }
});

class PersonSelect extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onRemoval = this.onRemoval.bind(this);
  }

  onChange(data) {
    let target = data.currentTarget;
    if (!target.name) {
      target = data.target;
    }
    const person = this.props.person;
    person[target.name] = target.value;
    this.props.onChange(this.props.index, person);
  }

  onRemoval() {
    if (this.props.onRemoval) {
      this.props.onRemoval(this.props.index);
    }
  }

  render() {
    const { classes } = this.props;
    const { dietRestrictions, name, key } = this.props.person;
    return (
      <FormControl fullWidth className={classes.root}>
        <TextField
          required
          variant="outlined"
          id="name"
          label="Name"
          name="name"
          autoComplete="name"
          autoFocus
          className={classes.name}
          onChange={this.onChange}
          value={name}
        />
        <DietSelector value={dietRestrictions} onChange={this.onChange} />
        <Fab
          size="small"
          color="primary"
          aria-label="Minus"
          onClick={this.onRemoval}
          className={classes.buttonControls}
          disabled={!!!this.props.onRemoval}
        >
          <DeleteIcon />
        </Fab>
      </FormControl>
    );
  }
}

export default withStyles(styles)(PersonSelect);
