import React, { useEffect, useState } from "react";
import SpaceServices from "../services/SpacexServices";
import Table from "./Table";
const UpcomingLaunches = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    SpaceServices.getUpcomingLaunches().then((res) => {
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

export default UpcomingLaunches;
