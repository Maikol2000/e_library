import React from "react";
import arrow from "../../../assets/img/arrow.png";

import "./style.css"

export default function SelectNienKhoa() {
  return (
    <>
      <section className="nien_khoa">
        <span style={{ width: "73px" }}>Niên khóa</span>
        <span className="custom_seclect">
          <select id="form-control">
            <option selected>2020-2021</option>
            <option>2015-2016</option>
            <option>2018-2019</option>
          </select>
          <section className="arrow">
            <img src={arrow} alt="..." />
          </section>
        </span>
      </section>
    </>
  );
}
