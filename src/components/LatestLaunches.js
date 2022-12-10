import React, { useEffect, useState } from "react";
import Table from "./Table";
import SpaceServices from "../services/SpacexServices";
const LastestLaunches = () => {
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

export default LastestLaunches;
