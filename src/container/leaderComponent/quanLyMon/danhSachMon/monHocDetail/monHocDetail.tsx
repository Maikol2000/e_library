import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import "./style.css";

import laptop from "../../../../../assets/img/laptop.jpg";
import play_Circle from "../../../../../assets/img/play_Circle (1).png";
import Vector from "../../../../../assets/img/Vector (2).png";

import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function DanhSachMonDetail(props: any) {
  const history = useHistory();
  const { giangVien, maMonHoc, moTa, tenMonHoc } = props.location.state;

  const [bg1, setBg1] = useState(false);
  const [bg2, setBg2] = useState(false);
  const [bg3, setBg3] = useState(false);
  const onChangeBgAccordionOne = () => {
    setBg1(!bg1);
  };
  const onChangeBgAccordionTwo = () => {
    setBg2(!bg2);
  };
  const onChangeBgAccordionThree = () => {
    setBg3(!bg3);
  };

  return (
    <>
      <section className="tongQuanDanhSachDT">
        <p className="tongQuanDanhSachDTTextMain">Tổng quan</p>
        <section className="thongTinDoc">
          <section className="thongTinDocMot">
            <section className="thongTinDocsMottext">
              <p>Mã môn học: </p>
              <p>Môn học:</p>
            </section>
            <section>
              <p>{maMonHoc}</p>
              <p>{tenMonHoc}</p>
            </section>
          </section>
          <section className="thongTinDocHai">
            <section className="thongTinDocsMottext">
              <p>Giảng viên: </p>
              <p>Mô tả:</p>
            </section>
            <section>
              <p>{giangVien}</p>
              <p>{moTa}</p>
            </section>
          </section>
        </section>
      </section>
      <section className="danhSachChuDe">
        <p>Danh sách chủ đề</p>

        <div className="accordion" id="accordionExample">
          <div className="card">
            <div
              className={`card-header custom_header_accordion ${
                bg1 && "card_custom_bg_accordion"
              }`}
              id="headingOne"
            >
              <a
                className="text-left custom_link_accordion"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                onClick={onChangeBgAccordionOne}
              >
                <Icon
                  className="custom_img_chevron_big_right"
                  icon={faChevronRight}
                />
              </a>
              <span className="danhSachChuDeTextMain">
                Giới thiệu chung về {tenMonHoc}
              </span>
            </div>
            <div
              id="collapseOne"
              className="collapse"
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                <div className="video_accordion text-center">
                  <Link
                    to={{
                      pathname: `/page-leader/Danh sách môn học/${tenMonHoc}`,
                      state: props.location.state
                    }}
                  >
                    <img src={laptop} alt="..." />
                    <img src={play_Circle} alt="..." />
                  </Link>
                </div>
                <div className="tai_nguyen">
                  <p>Tài nguyên</p>
                  <section className="link_download">
                    <section className="link_download_one">
                      <section>
                        <img src={Vector} alt="..." />
                        <span>HTKL_KT45P_10A1.doc</span>
                      </section>
                      <button className="custom_btn_red_pink">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-download"
                          viewBox="0 0 16 16"
                        >
                          <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                          <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                        </svg>
                        <span>Tải xuống</span>
                      </button>
                    </section>
                    <section className="link_download_one">
                      <section>
                        <img src={Vector} alt="..." />
                        <span>HTKL_KT45P_10A1.doc</span>
                      </section>
                      <button className="custom_btn_red_pink">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-download"
                          viewBox="0 0 16 16"
                        >
                          <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                          <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                        </svg>
                        <span>Tải xuống</span>
                      </button>
                    </section>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </section>
                </div>
                <div className="card">
                  <div
                    className={`card-header custom_header_accordion ${
                      bg3 && "card_custom_bg_accordion"
                    }`}
                    id="headingThree"
                  >
                    <a
                      className="text-left custom_link_accordion"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                      onClick={onChangeBgAccordionThree}
                    >
                      <Icon
                        className="custom_img_chevron_big_right"
                        icon={faChevronRight}
                      />
                    </a>
                    <span className="danhSachChuDeTextMain">
                      {tenMonHoc} đã thay đổi sự phát triển của nền kinh tế thế
                      giới
                    </span>
                  </div>
                  <div
                    id="collapseThree"
                    className="collapse"
                    aria-labelledby="headingThree"
                  >
                    <div className="card-body tong_quan">
                      <span>1. Quá trình:</span>
                      <p className="tong_quan_body_text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eveniet dolores repudiandae ducimus labore ex, nisi
                        ipsum distinctio aut architecto tempora reiciendis
                        doloremque autem, illo et sed, nulla amet sit sunt?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div
              className={`card-header custom_header_accordion ${
                bg2 && "card_custom_bg_accordion"
              }`}
              id="headingTwo"
            >
              <a
                className="text-left custom_link_accordion"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="true"
                aria-controls="collapseTwo"
                onClick={onChangeBgAccordionTwo}
              >
                <Icon
                  className="custom_img_chevron_big_right"
                  icon={faChevronRight}
                />
              </a>
              <span className="danhSachChuDeTextMain">{tenMonHoc}</span>
            </div>
            <div
              id="collapseTwo"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                <div className="video_accordion text-center">
                  <img src={laptop} alt="..." />
                  <img src={play_Circle} alt="..." />
                </div>
                <div className="tai_nguyen">
                  <p>Tài nguyên</p>
                  <section className="link_download">
                    <section className="link_download_one">
                      <section>
                        <img src={Vector} alt="..." />
                        <span>HTKL_KT45P_10A1.doc</span>
                      </section>
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-download"
                          viewBox="0 0 16 16"
                        >
                          <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                          <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                        </svg>
                        <span>Tải xuống</span>
                      </button>
                    </section>
                    <section className="link_download_one">
                      <section>
                        <img src={Vector} alt="..." />
                        <span>HTKL_KT45P_10A1.doc</span>
                      </section>
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-download"
                          viewBox="0 0 16 16"
                        >
                          <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                          <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                        </svg>
                        <span>Tải xuống</span>
                      </button>
                    </section>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
