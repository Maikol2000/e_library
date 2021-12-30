import React from "react";
import LeaderCompoennt from "../components/leaderComponent/LeaderCompoennt";
import NavBarNavBarForLeader from "../containers/navbarForLeader/NavBarForLeader";

export default function LayOutLeader() {
  // const isLoggin = Boolean(localStorage.getItem("access_token"))
  // if (!isLoggin) return <Redirect to="/login" />
  return (
    <div className="row">
      <div className="col-1">
        <NavBarNavBarForLeader />
      </div>
      <div className="col-11">
        <LeaderCompoennt />
      </div>
    </div>
  );
}
