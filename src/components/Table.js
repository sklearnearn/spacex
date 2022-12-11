import React, { useRef, useState } from "react";
import Chip from "@mui/material/Chip";
import MUIDataTable from "mui-datatables";
import ViewLaunch from "./ViewLaunch";
import CircularIndeterminate from "./Progress";
import { Container } from "@mui/material";

const Table = ({ data, loading }) => {
  const [dataInRow, setDataInRow] = useState({});
  const launchRef = useRef(null);

  const columns = [
    {
      label: "No:",
      name: "flight_number",
    },
    {
      label: "Launched (UTC)",
      name: "launch_date_utc",
    },
    {
      label: "Location",
      name: "launch_site.site_name",
    },
    {
      label: "Mission",
      name: "mission_name",
    },
    {
      label: "Orbit",
      name: "",
      options: {
        customBodyRenderLite: (index) => {
          let orbit = data[index].rocket.second_stage.payloads[0].orbit;
          return orbit;
        },
      },
    },
    {
      label: "Launch Status",
      name: "launch_site.launch_success",
      options: {
        customBodyRenderLite: (index) => {
          let status = data[index].launch_success;

          return status ? (
            <Chip label="success" color="success" />
          ) : status == false ? (
            <Chip label="failed" color="error" />
          ) : (
            <Chip label="upcoming" color="warning" />
          );
        },
      },
    },
    {
      label: "Rocket",
      name: "rocket.rocket_name",
    },
  ];

  const options = {
    enableNestedDataAccess: ".",
    selectableRowsHideCheckboxes: true,
    onRowClick: (rowData, rowMeta) => {
      let launch = data[rowMeta.dataIndex];
      setDataInRow(launch);
      launchRef.current.handleOpenDialog();
    },
  };

  console.log(dataInRow);

  return (
    <>
      {loading ? (
        <Container
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            height: "70vh",
          }}
        >
          <CircularIndeterminate />
        </Container>
      ) : (
        <MUIDataTable columns={columns} data={data} options={options} />
      )}
      <ViewLaunch launch={dataInRow} ref={launchRef} />
    </>
  );
};

export default Table;
