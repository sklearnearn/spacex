import { Chip } from "@mui/material";
import MUIDataTable from "mui-datatables";
import React, { useEffect, useState } from "react";
import SpaceServices from "../services/SpacexServices";
import Table from "./Table";

const SuccessfulLaunches = () => {
  const [data, setData] = useState();
  useEffect(() => {
    SpaceServices.getAllSuccessfulLaunches().then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <>
      <Table data={data} />
    </>
  );
};

export default SuccessfulLaunches;
