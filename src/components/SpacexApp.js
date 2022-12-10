import React from "react";
import ButtonGroup from "./ButtonGroup";
import Navbar from "./Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import AllLaunches from "./AllLaunches";
import SuccessfulLaunches from "./SuccessfulLaunches";
import FailedLaunches from "./FailedLaunches";
import UpcomingLaunches from "./UpcomingLaunches";
import PastLaunches from "./PastLaunches";
import LastestLaunches from "./LatestLaunches";

const SpacexApp = () => {
  return (
    <>
      <Navbar />
      <ButtonGroup />

      <Routes>
        <Route path="" element={<Navigate to="/all" />} />
        <Route path="/all" element={<AllLaunches />} />
        <Route path="/upcoming" element={<UpcomingLaunches />} />
        <Route path="/successful" element={<SuccessfulLaunches />} />
        <Route path="/failed" element={<FailedLaunches />} />
        <Route path="/past" element={<PastLaunches />} />
        <Route path="/latest" element={<LastestLaunches />} />
      </Routes>
    </>
  );
};

export default SpacexApp;
