import { Chip } from "@mui/material";
import MUIDataTable from "mui-datatables";
import React, { useEffect, useState } from "react";
import SpaceServices from "../services/SpacexServices";
import Table from "./Table";

const SuccessfulLaunches = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    SpaceServices.getAllSuccessfulLaunches().then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Table data={data} loading={loading} />
    </>
  );
};

export default SuccessfulLaunches;
