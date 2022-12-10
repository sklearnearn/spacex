import React, { useEffect, useState } from "react";
import SpaceServices from "../services/SpacexServices";
const LaunchDetails = ({ id }) => {
  const [data, setData] = useState();
  //   useEffect(() => {
  //     SpaceServices.getOneLaunch(id).then((response) => {
  //       setData(response.data);
  //     });
  //   }, [id]);

  //   console.log(data);

  return <></>;
};

export default LaunchDetails;
