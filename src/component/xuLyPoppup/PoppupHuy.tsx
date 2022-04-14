import { Checkbox } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

import "./style.css";

export default function PoppupHuy() {
  const [textArea, settextArea] = useState();
  const currentUser = useSelector(
    (state: RootState) => state.authReduser.currentUser
  );
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <>
      <div
        className="modal fade"
        id="model_huy"
        data-backdrop="static"
        data-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content custom_model_huy">
            <h5 className="modal-title" id="staticBackdropLabel">
              Hủy phê duyệt tài liệu
            </h5>
            <div className="modal-body">
              <section className="custom_modal_huy_line">
                <span>
                  Ngày bắt đầu <i>*</i>
                </span>
                <input type="date" className="custom_modal_huy_ip_date" />
              </section>
              <section className="custom_modal_huy_line">
                <span>
                  Người hủy<i>*</i>{" "}
                </span>
                <input
                  type="text"
                  className="custom_modal_huy_ip_text"
                  value={currentUser}
                />
              </section>
              <section className="custom_modal_huy_line">
                <span>
                  Ghi chú<i>*</i>{" "}
                </span>
                <textarea
                  className="custom_modal_huy_ip_text_area"
                  placeholder="Lorem ipsum dolor sit,..."
                  onChange={(e: any) => settextArea(e.target.value)}
                />
              </section>
              <section className="custom_check_box_huy">
                <Checkbox
                  {...label}
                  sx={{ "& .MuiSvgIcon-root": { fontSize: 30 } }}
                />
                Gửi thông báo cho người tạo
              </section>
            </div>
            <div className="custom_btn_huy">
              <button type="button" data-dismiss="modal">
                Hủy
              </button>
              <button
                type="button"
                className={textArea ? "custom_active_btn_huy" : ""}
              >
                Lưu
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
