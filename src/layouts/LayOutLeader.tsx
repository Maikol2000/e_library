import React, { useEffect, useState } from "react";
import "./style.css"
import LeaderCompoennt from "../container/leaderComponent/LeaderCompoennt";
import Breadcrumbs from "../component/breadcrumbs/Breadcrumbs";
import NavBarNavBarForLeader from "../component/navbarForLeader/NavBarForLeader";

export default function LayOutLeader() {
  // const isLoggin = Boolean(localStorage.getItem("access_token"))
  // if (!isLoggin) return <Redirect to="/login" />

  return (
    <>
      <div className="row" style={{ flexWrap: "nowrap" }}>
        <section className="col-1 col_one">
          <NavBarNavBarForLeader />
        </section>
        <section className="col-10 col_two">
          <Breadcrumbs />
          <LeaderCompoennt />
        </section>
      </div>
    </>
  );
}
