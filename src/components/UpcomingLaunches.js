import React, { useEffect, useState } from "react";
import SpaceServices from "../services/SpacexServices";
import Table from "./Table";
const UpcomingLaunches = () => {
  const [data, setData] = useState();
  useEffect(() => {
    SpaceServices.getUpcomingLaunches().then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <>
      <Table data={data} />
    </>
  );
};

export default UpcomingLaunches;
