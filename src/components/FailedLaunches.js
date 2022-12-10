import React, { useEffect, useState } from "react";
import SpaceServices from "../services/SpacexServices";
import Table from "./Table";
const FailedLaunches = () => {
  const [data, setData] = useState();
  useEffect(() => {
    SpaceServices.getAllFailedLaunches().then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <>
      <Table data={data} />
    </>
  );
};

export default FailedLaunches;
