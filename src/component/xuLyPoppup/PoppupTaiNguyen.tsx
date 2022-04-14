import React from "react";

type Props = {
  state: string;
};

export default function PoppupTaiNguyen(props: Props) {
  return (
    <div
      className="modal fade"
      id="modal_tai_nguyen"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-xl">
        <div className="modal-content bg_video_tai_nguyen">
          <span
            className="custom_X_close"
            aria-hidden="true"
            data-dismiss="modal"
            aria-label="Close"
          >
            ×
          </span>
          <div className="modal-body modal_body_tai_nguyen">
            <h5 className="title_modal_body_tai_nguyen">
              Tổng quan về {props.state} ở Việt Nam
            </h5>
            <div className="text_line_one_modal_body_tai_nguyen">
              <span>Vài nét về {props.state}</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Impedit, aperiam qui. Assumenda quidem ullam molestiae,
                doloremque voluptatibus quibusdam minima accusamus at vitae
                dolorem omnis sequi dolore sed consequatur soluta tempore? Atque
                aliquid veritatis assumenda soluta rem et nesciunt, dolorum
                neque eveniet perferendis, laudantium nemo fugit exercitationem!
                Temporibus magnam porro quibusdam.
              </p>
            </div>
            <div className="text_line_two_modal_body_tai_nguyen">
              <span>1. Tổng quan:</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                ipsum, odio dicta temporibus, neque adipisci laborum in animi
                tempore ad aliquam minima facilis beatae, exercitationem quas
                architecto laboriosam error cupiditate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
