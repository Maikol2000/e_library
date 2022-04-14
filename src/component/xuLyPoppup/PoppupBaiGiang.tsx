import React from "react";

import play_Circle from "../../assets/img/play_Circle (1).png";

export default function PoppupBaiGiang() {
  return (
    <div
      className="modal fade"
      id="modal_bai_giang"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-xl">
        <div className="modal-content bg_video_bai_giang">
            <span className="custom_X_close" aria-hidden="true" data-dismiss="modal" aria-label="Close">
              ×
            </span>
          <div className="modal-body modal_body_bai_giang">
            <img src={play_Circle} alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
}
