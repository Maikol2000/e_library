import React, { useState } from "react";
import "./style.css";

type Props = {
  name: string | null | undefined;
};

export default function ModalDoiTen({ name }: Props) {
  const x: any = name?.split(".");
  const [text, settext] = useState();
  return (
    <>
      <div
        className="modal fade"
        id="modal_doi_ten"
        data-backdrop="static"
        data-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <h5 className="modal-title custom_model_doi_ten">Đổi tên tệp</h5>
            <div className="modal-body custom_model_body_doi_ten">
              <input
                type="text"
                placeholder={x && x[0]}
                onChange={(e: any) => settext(e.target.value)}
              />
              <span>{x && x[1]}</span>
            </div>
            <div className="custom_btn_doi_ten">
              <button type="button" data-dismiss="modal">
                Hủy
              </button>
              <button
                type="button"
                data-dismiss="modal"
                className={text ? "change_text_doi_ten" : ""}
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
