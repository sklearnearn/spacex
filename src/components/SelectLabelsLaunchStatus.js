import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Link, Outlet } from "react-router-dom";

const SelectLabelsLaunchStatus = () => {
  const [launchStatus, setLaunchStatus] = React.useState("all");
  const handleChange = (e) => {
    setLaunchStatus(e.target.value);
  };

  console.log(launchStatus);

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={launchStatus}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          size="small"
        >
          <MenuItem value="all">
            <Link
              to="/all"
              value="all"
              style={{ textDecoration: "none", color: "initial" }}
            >
              All Launches
            </Link>
          </MenuItem>

          <MenuItem value="upcoming">
            <Link
              to="/upcoming"
              value="upcoming"
              style={{ textDecoration: "none", color: "initial" }}
            >
              Upcoming Launches
            </Link>
          </MenuItem>

          <MenuItem value="successful">
            <Link
              to="/successful"
              value="successful"
              style={{ textDecoration: "none", color: "initial" }}
            >
              Successful Launches
            </Link>
          </MenuItem>
          <MenuItem value="failed">
            <Link
              to="/failed"
              value="failed"
              style={{ textDecoration: "none", color: "initial" }}
            >
              Failed Launches
            </Link>
          </MenuItem>
        </Select>
      </FormControl>
      <Outlet />
    </div>
  );
};
export default SelectLabelsLaunchStatus;
