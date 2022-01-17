import React from "react";

import "./style.css"

export default function PoppupPheDuyet() {
  return (

      <>
        <div
          className="modal fade"
          id="modalPheDuyet"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content custom_modal_phe_duyet">
              <h5 className="modal-title custom_title_modal_phe_duyet" id="exampleModalLabel">
                Phê duyệt
              </h5>
              <div className="modal-body custom_text_modal_phe_duyet">
                Xác nhận muốn phê duyệt đề thi này và các thông tin bên trong?
                Sau khi phê duyệt sẽ không thể hoàn tác.
              </div>
              <div className="custom_btn_modal_phe_duyet">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Hủy
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-dismiss="modal"
                >
                  Xác nhận
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
  );
}
