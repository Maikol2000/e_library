import React from "react";
import QuesttionChiTietDeThi from "./questtionChiTietDeThi/QuesttionChiTietDeThi";

import "./style.css";

export default function ChiTietDeThi(props: any) {
  const { giangVien, hinhThuc, mon, tenDeThi, time } = props.location.state;
  return (
    <div style={{marginTop:"2rem"}}>
      <div className="line_head_ctdt">
        <div className="line_head_ctdt_right_around">
          <div className="line_head_ctdt_1">
            <div className="line_head_ctdt_right">
              <p>Môn học:</p>
              <p>Thời lượng:</p>
            </div>
            <div className="line_head_ctdt_left">
              <p>{mon}</p>
              <p>{time}</p>
            </div>
          </div>
          <div className="line_head_ctdt_2">
            <div className="line_head_ctdt_right">
              <p>Tên đề thi:</p>
              <p>Hình thức:</p>
            </div>
            <div className="line_head_ctdt_left">
              <p>{tenDeThi}</p>
              <p>{hinhThuc ? "Trắc nghiệm" : "Tự luận"}</p>
            </div>
          </div>
          <div className="line_head_ctdt_3">
            <div className="line_head_ctdt_right">
              <p>Giáo viên đào tạo:</p>
              <p>Ngày tạo:</p>
            </div>
            <div className="line_head_ctdt_left">
              <p>{giangVien}</p>
              <p>24/02/2021</p>
            </div>
          </div>
        </div>
        <div className="line_head_ctdt_left_around">
            <div className="btn_ctdt">
                <button>Hủy phê duyệt</button>
                <button>Phê duyệt</button>
            </div>
        </div>
      </div>
      <div className="question_ctdt">
          <QuesttionChiTietDeThi />
      </div>
    </div>
  );
}
