import React from "react";
import SelectLabelsLaunchStatus from "./SelectLabelsLaunchStatus";
import { Container, Grid } from "@mui/material";
import SelectLabelsDate from "./SelectLabelsDate";
const ButtonGroup = () => {
  return (
    <Container maxWidth="md">
      <Grid container justifyContent="space-between">
        <SelectLabelsDate />
        <SelectLabelsLaunchStatus />
      </Grid>
    </Container>
  );
};

export default ButtonGroup;
