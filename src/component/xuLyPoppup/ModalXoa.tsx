import React from "react";

export default function ModalXoa() {
  return (
    <>
      <div
        className="modal fade"
        id="modal_xoa"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog  modal-dialog-centered">
          <div className="modal-content modal_content_xoa">
            <h5 className="modal_xoa_title" id="exampleModalLabel">
              Xác nhận xóa
            </h5>
            <div className="modal-body">
              Bạn có chắc chắn muốn xóa tệp này khỏi thư viện không?
            </div>
            <div className="custom_btn_doi_ten">
              <button type="button" data-dismiss="modal">
                Hủy
              </button>
              <button type="button" data-dismiss="modal" className="btn_xoa">
                Xóa
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
