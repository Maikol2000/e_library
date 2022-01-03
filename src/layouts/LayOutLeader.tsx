import React from "react";
import LeaderCompoennt from "../components/leaderComponent/LeaderCompoennt";
import NavBarNavBarForLeader from "../containers/navbarForLeader/NavBarForLeader";

export default function LayOutLeader() {
  // const isLoggin = Boolean(localStorage.getItem("access_token"))
  // if (!isLoggin) return <Redirect to="/login" />
  return (
    <div className="row" style={{flexWrap:"nowrap"}}>
      <section className="col-1" style={{marginRight:"5rem"}}>
        <NavBarNavBarForLeader />
      </section>
      <section className="col-10" style={{paddingTop:"3rem"}}>
        <LeaderCompoennt />
      </section>
    </div>
  );
}
