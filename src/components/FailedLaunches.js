import React, { useEffect, useState } from "react";
import SpaceServices from "../services/SpacexServices";
import Table from "./Table";
const FailedLaunches = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    SpaceServices.getAllFailedLaunches().then((res) => {
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

export default FailedLaunches;
