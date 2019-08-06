import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { DIETARY_OPTIONS } from "../../settings";

const useStyles = makeStyles(theme => ({
  diet: {
    marginLeft: theme.spacing(1),
    minWidth: 180,
    flexGrow: 0
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export default function DietSelector(props) {
  const classes = useStyles();

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  return (
    <FormControl variant="outlined" className={classes.diet}>
      <InputLabel ref={inputLabel} htmlFor="dietRestrictions">
        Diet Restrictions
      </InputLabel>
      <Select
        value={props.value}
        onChange={props.onChange}
        input={
          <OutlinedInput
            labelWidth={labelWidth}
            name="dietRestrictions"
            id="dietRestrictions"
          />
        }
      >
        {DIETARY_OPTIONS.map(item => (
          <MenuItem key={item} value={item}>{item}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
