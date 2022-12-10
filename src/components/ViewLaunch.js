import React, { forwardRef, useImperativeHandle, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { padding } from "@mui/system";
const ViewLaunch = ({ launch }, ref) => {
  const [open, setOpen] = useState(false);
  const handleOpenDialog = () => {
    setOpen(true);
  };
  const handleDialogClose = () => {
    setOpen(false);
  };
  useImperativeHandle(ref, () => {
    return {
      handleOpenDialog,
    };
  });
  return (
    <>
      <Dialog open={open}>
        <Container sx={{ padding: "20px" }}>
          <Grid container position="relative">
            <Grid item>
              <img
                width="100px"
                height="120px"
                src={launch?.links?.mission_patch_small}
              />
            </Grid>
            <Grid item>
              <Typography>{launch?.mission_name}</Typography>
              <Typography>{launch?.rocket?.rocket_name}</Typography>
            </Grid>
            <Grid item position="absolute" top="20px" right="20px">
              <Button onClick={handleDialogClose}>X</Button>
            </Grid>
          </Grid>
          <Grid container sx={{ marginBottom: "15px" }}>
            <Typography>{launch?.details}</Typography>
            <a href={launch?.links?.wikipedia} target="blank">
              Wikipedia
            </a>
          </Grid>
          <Grid container flexDirection="column">
            <Grid item sx={{ display: "flex" }}>
              <p style={{ marginRight: "50px" }}>Flight Number </p>
              <p>{launch?.flight_number}</p>
            </Grid>
            <Divider />
            <Grid item sx={{ display: "flex" }}>
              <p style={{ marginRight: "50px" }}>Mission Name </p>
              <p>{launch?.mission_name}</p>
            </Grid>
            <Divider />
            <Grid item sx={{ display: "flex" }}>
              <p style={{ marginRight: "50px" }}>Rocket Type </p>
              <p>{launch?.rocket?.rocket_type}</p>
            </Grid>
            <Divider />
            <Grid item sx={{ display: "flex" }}>
              <p style={{ marginRight: "50px" }}>Rocket Name </p>
              <p>{launch?.rocket?.rocket_name}</p>
            </Grid>
            <Divider />
            <Grid item sx={{ display: "flex" }}>
              <p style={{ marginRight: "50px" }}>Manufacturer </p>
              <p>{launch?.rocket?.second_stage?.payloads[0]?.manufacturer}</p>
            </Grid>
            <Divider />
            <Grid item sx={{ display: "flex" }}>
              <p style={{ marginRight: "50px" }}>Nationality </p>
              <p>{launch?.rocket?.second_stage?.payloads[0]?.nationality}</p>
            </Grid>
            <Grid item sx={{ display: "flex" }}>
              <p style={{ marginRight: "50px" }}>Launch Date </p>
              <p>{launch?.launch_date_local}</p>
            </Grid>
            <Grid item sx={{ display: "flex" }}>
              <p style={{ marginRight: "50px" }}>Payload Type </p>
              <p>{launch?.rocket?.second_stage?.payloads[0]?.payload_type}</p>
            </Grid>
            <Grid item sx={{ display: "flex" }}>
              <p style={{ marginRight: "50px" }}>Orbit </p>
              <p>{launch?.rocket?.second_stage?.payloads[0]?.orbit}</p>
            </Grid>
            <Grid item sx={{ display: "flex" }}>
              <p style={{ marginRight: "50px" }}>Launch Site </p>
              <p>{launch?.launch_site?.site_name}</p>
            </Grid>
          </Grid>
        </Container>
        <Typography></Typography>
      </Dialog>
    </>
  );
};

export default forwardRef(ViewLaunch);
