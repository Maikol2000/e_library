import React from "react";
import "./style.css";

import arrow from "../../../../../../assets/img/arrow.png";

export default function HoiDap() {
  return (
    <>
      <div className="hoi_dap">
        <div className="select_hoi_dap">
          <div className="select_main">
            <select className="select_hoi_dap_one">
              <option selected disabled>
                Tất cả môn học
              </option>
              <option>Thương mại điện tử</option>
              <option>Nguyên lý kế toán</option>
              <option>Hệ thống thông tin</option>
              <option>Luật thương mại</option>
            </select>
            <section className="img_select">
              <img src={arrow} alt="..." />
            </section>
          </div>
          <div className="select_main">
            <select className="select_hoi_dap_two">
              <option selected disabled>
                Sắp xếp theo mới nhất
              </option>
              <option>Sắp xếp theo cũ nhất</option>
              <option>Nhiều tương tác nhất</option>
            </select>
            <section className="img_select">
              <img src={arrow} alt="..." />
            </section>
          </div>
          <div className="select_main">
            <select className="select_hoi_dap_three">
              <option selected disabled>
                Lọc những câu hỏi theo
              </option>
              <option>Câu hỏi mới nhất</option>
              <option>Câu hỏi cũ nhất</option>
              <option>Câu hỏi được quan tâm nhất</option>
            </select>
            <section className="img_select">
              <img src={arrow} alt="..." />
            </section>
          </div>
        </div>
        <section className="hoi_dap_btn">
          <button className="custom_btn_red_pink">
            Đặt câu hỏi
          </button>
        </section>
      </div>
    </>
  );
}
