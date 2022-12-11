import React, { useEffect, useState } from "react";
import SpaceServices from "../services/SpacexServices";
import Table from "./Table";
const PastLaunches = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    SpaceServices.getPastLaunches().then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, []);

  console.log(data);

  return (
    <>
      <Table data={data} loading={loading} />
    </>
  );
};

export default PastLaunches;
