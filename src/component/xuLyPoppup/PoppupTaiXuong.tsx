import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export default function PoppupTaiXuong() {

    const dsNganHangDeThi = useSelector((state:RootState) => state.dsNganHangDeThiReducer.dsNganHangDeThi)

  return (
    <>
      <div
        className="modal fade"
        id="modal_tai_xuong"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content custom_modal_phe_duyet">
            <h5 className="modal-title custom_title_modal_phe_duyet">
              Phê duyệt
            </h5>
            <div className="modal-body custom_text_modal_phe_duyet">
              Xác nhận muốn tải xuống <span className="so_tep_NHDT"> { dsNganHangDeThi && dsNganHangDeThi?.length} tệp</span> đã chọn. Các file đã chọn sẽ được
              lưu dưới dạng .rar.
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
