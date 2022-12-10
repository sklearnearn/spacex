import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
const Navbar = () => {
  return (
    <Paper>
      <Grid container justifyContent="center">
        <Grid item sm={3}>
          <img src="spacexlogo.png" alt="logo" style={{ width: "100%" }} />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Navbar;
