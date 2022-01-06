import React from "react";
import "./style.css";

export default function HoiDap() {
  return (
    <>
      <section className="hoi_dap">
        <section className="select_hoi_dap">
          <select className="select_hoi_dap_one">
            <option selected disabled>Tất cả môn học</option>
            <option>1</option>
            <option>1</option>
            <option>1</option>
          </select>
          <select className="select_hoi_dap_two">
            <option>1</option>
            <option>1</option>
            <option>1</option>
          </select>
          <select className="select_hoi_dap_three">
            <option>1</option>
            <option>1</option>
            <option>1</option>
          </select>
        </section>
        <button className="btn_dat_cau_hoi">Đặt câu hỏi</button>
      </section>
    </>
  );
}
