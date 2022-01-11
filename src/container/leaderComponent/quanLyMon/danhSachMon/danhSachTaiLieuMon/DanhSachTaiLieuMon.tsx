import React from "react";
import "./style.css";

import fi_download from "../../../../../assets/img/fi_download.png"

export default function DanhSachTaiLieuMon(props: any) {
  return (
    <div className="danhSachTaiLieuMon">
      <div className="danhSachTaiLieuMonHead">
        <h2 id="textDSTaiLieuMon">{props.location.state}</h2>{" "}
        <div className="danhSachTaiLieuMonHeadRight">
            <section id="imgDSTLMRight">
                <img src={fi_download} alt="..." />
            </section>
            <section id="btnDSTLMRight">
                <button>Hủy phê duyệt</button>
                <button>Phê duyệt</button>
            </section>
        </div>
      </div>
    </div>
  );
}
