import React, { useEffect, useState } from "react";
import Table from "./Table";
import SpaceServices from "../services/SpacexServices";
const LastestLaunches = () => {
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

export default LastestLaunches;
