import * as React from "react";
import "./style.css";
import { Breadcrumbs as BC, Link, Typography } from "@mui/material";
import { withRouter } from "react-router-dom";

function Breadcrumbs(props: any) {
  const {
    history,
    location: { pathname },
  } = props;

  const pathnames = pathname.split("/").filter((x: any) => x);
  const pathLength = pathnames.slice(2, pathnames.length);

  return (
    <>
      <BC aria-label="breadcrumb">
        {pathLength.length > 0 ? (
          <Link onClick={() => history.push(pathname)}>{pathnames[1]}</Link>
        ) : (
          <Typography>{pathnames[1]}</Typography>
        )}
        {pathLength.map((name: any, index: any) => {
          const routeTo = `/${pathLength.slice(0, index).join("/")}`;
          const isLast = index === pathLength.length - 1;
          return isLast ? (
            <Typography>{name}</Typography>
          ) : (
            <Link onClick={() => history.push(routeTo)}>{name}</Link>
          );
        })}
      </BC>
    </>
  );
}

export default withRouter(Breadcrumbs);
