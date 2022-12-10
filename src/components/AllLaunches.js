import React, { useEffect, useState } from "react";
import SpaceServices from "../services/SpacexServices";
import Table from "./Table";

const AllLaunches = () => {
  const [data, setData] = useState();

  useEffect(() => {
    SpaceServices.getAllLaunches().then((res) => {
      setData(res.data);
    });
  }, []);

  console.log(data);

  return (
    <>
      <Table data={data} />
    </>
  );
};

export default AllLaunches;
