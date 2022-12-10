import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Link } from "react-router-dom";

const SelectLabelsDate = () => {
  const [launchDate, setLaunchDate] = React.useState("past");

  const handleChange = (event) => {
    setLaunchDate(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={launchDate}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          size="small"
        >
          <MenuItem value="latest">
            <Link
              to="/latest"
              value="latest"
              style={{ textDecoration: "none", color: "initial" }}
            >
              Last 6 Months
            </Link>
          </MenuItem>
          <MenuItem value="past">
            <Link
              to="/past"
              value="past"
              style={{ textDecoration: "none", color: "initial" }}
            >
              Past 6 Months
            </Link>
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};
export default SelectLabelsDate;
