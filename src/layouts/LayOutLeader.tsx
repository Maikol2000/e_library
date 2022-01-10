import React, { useEffect, useState } from "react";
import "./style.css";
import LeaderCompoennt from "../container/leaderComponent/LeaderCompoennt";
import Breadcrumbs from "../component/breadcrumbs/Breadcrumbs";
import NavBarNavBarForLeader from "../component/navbarForLeader/NavBarForLeader";
import LogOut from "../container/share/auth/logOut/LogOut";

export default function LayOutLeader() {
  return (
    <>
      <div className="row" style={{ flexWrap: "nowrap", marginRight: "0" }}>
        <section className="col_one">
          <NavBarNavBarForLeader />
        </section>
        <LogOut />
        <section className="col_two">
          <Breadcrumbs />
          <LeaderCompoennt />
        </section>
      </div>
    </>
  );
}
