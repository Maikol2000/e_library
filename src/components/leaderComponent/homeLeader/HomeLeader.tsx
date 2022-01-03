import React, { useEffect, useState } from "react";
import "./style.css";

//carousel
import Slider from "react-slick";

//img
import arrow from "../../../assets/img/arrow.png";
import { useDispatch, useSelector } from "react-redux";
import { actDanhSachLíchuDocVideo } from "./action/action";
//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

// setting slick
const settings = {
  infinite: false,
  speed: 500,
  rows: 2,
  slidesPerRow: 2,
};

interface T {
  giangVien: string;
  moTa: string;
  name: string;
  nameId: string;
}

export default function HomeLeader() {
  // var dispatch = useDispatch();
  // dispatch(actDanhSachLíchuDocVideo());

  // const [state, setstate] = useState<object[]>([])

  //lấy Tài liệu môn học đã xem gần đây
  // const danhSachLichSuTaiLieu = useSelector(
  //   (state: { danhSachLichSuVideoReducer: { danhSachLichSuTaiLieu: any } }) =>
  //     state.danhSachLichSuVideoReducer.danhSachLichSuTaiLieu
  // );

  //paginate
  // const perpage = 8 / 10;
  // const pages = Math.ceil(danhSachLichSuTaiLieu.length / perpage);
  // const paginate = [];

  return (
    <>
      <p className="home_leader_main_text">Trang Chủ</p>
      <section className="home_leader">
        <section className="home_leader_line_1">
          <section className="home_leader_line_1_left">
            <span style={{ width: "73px" }}>Niên khóa</span>
            <span className="custom_seclect_leader_home">
              <select id="form-control">
                <option selected>2020-2021</option>
                <option>2015-2016</option>
                <option>2018-2019</option>
              </select>
              <section className="arrow">
                <img src={arrow} alt="..." />
              </section>
            </span>
          </section>
          <section className="home_leader_line_1_right">
            <section className="mon__hoc common_line_1_right">
              <p className="line_1_right_text_1">12</p>
              <p className="line_1_right_text_2">Môn học</p>
              <section className="circle_1"></section>
              <section className="circle_2"></section>
              <section className="circle_3"></section>
            </section>
            <section className="giang__vien common_line_1_right">
              <p className="line_1_right_text_1">32</p>
              <p className="line_1_right_text_2">Giảng viên</p>
              <section className="circle_4"></section>
              <section className="circle_5"></section>
            </section>
            <section className="tep__rieng__tu common_line_1_right">
              <p className="line_1_right_text_1">13</p>
              <p className="line_1_right_text_2">Tệp riêng</p>
              <section className="circle_6"></section>
              <section className="circle_7"></section>
            </section>
            <section className="de__thi common_line_1_right">
              <p className="line_1_right_text_1">132</p>
              <p className="line_1_right_text_2">Đề thi</p>
              <section className="circle_8"></section>
              <section className="circle_9"></section>
              <section className="circle_10"></section>
            </section>
          </section>
        </section>
        <div className="home_leader_line_2">
          <p className="home_leader_line_2_text">
            Tài liệu môn học đã xem gần đây
          </p>
          <section className="tab_home_main">
            <section className="tab_home">
              <section className="cont">
                <img
                  src="https://picsum.photos/200"
                  alt="..."
                  className="tab_home_img"
                />
                <section className="tab_home_content">
                  <span className="tab_text_1">Phat</span>
                  <span className="tab_text_2">web</span>
                  <span className="tab_text_3">web</span>
                  <span className="tab_text_4">giang vien: Hoa hoa</span>
                </section>
              </section>
            </section>
            <section className="tab_home">
              <section className="cont">
                <img
                  src="https://picsum.photos/200"
                  alt="..."
                  className="tab_home_img"
                />
                <section className="tab_home_content">
                  <span className="tab_text_1">Phat</span>
                  <span className="tab_text_2">web</span>
                  <span className="tab_text_3">web</span>
                  <span className="tab_text_4">giang vien: Hoa hoa</span>
                </section>
              </section>
            </section>
            <section className="tab_home">
              <section className="cont">
                <img
                  src="https://picsum.photos/200"
                  alt="..."
                  className="tab_home_img"
                />
                <section className="tab_home_content">
                  <span className="tab_text_1">Phat</span>
                  <span className="tab_text_2">web</span>
                  <span className="tab_text_3">web</span>
                  <span className="tab_text_4">giang vien: Hoa hoa</span>
                </section>
              </section>
            </section>
            <section className="tab_home">
              <section className="cont">
                <img
                  src="https://picsum.photos/200"
                  alt="..."
                  className="tab_home_img"
                />
                <section className="tab_home_content">
                  <span className="tab_text_1">Phat</span>
                  <span className="tab_text_2">web</span>
                  <span className="tab_text_3">web</span>
                  <span className="tab_text_4">giang vien: Hoa hoa</span>
                </section>
              </section>
            </section>
            <section className="tab_home">
              <section className="cont">
                <img
                  src="https://picsum.photos/200"
                  alt="..."
                  className="tab_home_img"
                />
                <section className="tab_home_content">
                  <span className="tab_text_1">Phat</span>
                  <span className="tab_text_2">web</span>
                  <span className="tab_text_3">web</span>
                  <span className="tab_text_4">giang vien: Hoa hoa</span>
                </section>
              </section>
            </section>
            <section className="tab_home">
              <section className="cont">
                <img
                  src="https://picsum.photos/200"
                  alt="..."
                  className="tab_home_img"
                />
                <section className="tab_home_content">
                  <span className="tab_text_1">Phat</span>
                  <span className="tab_text_2">web</span>
                  <span className="tab_text_3">web</span>
                  <span className="tab_text_4">giang vien: Hoa hoa</span>
                </section>
              </section>
            </section>
            <section className="tab_home">
              <section className="cont">
                <img
                  src="https://picsum.photos/200"
                  alt="..."
                  className="tab_home_img"
                />
                <section className="tab_home_content">
                  <span className="tab_text_1">Phat</span>
                  <span className="tab_text_2">web</span>
                  <span className="tab_text_3">web</span>
                  <span className="tab_text_4">giang vien: Hoa hoa</span>
                </section>
              </section>
            </section>
            <section className="tab_home">
              <section className="cont">
                <img
                  src="https://picsum.photos/200"
                  alt="..."
                  className="tab_home_img"
                />
                <section className="tab_home_content">
                  <span className="tab_text_1">Phat</span>
                  <span className="tab_text_2">web</span>
                  <span className="tab_text_3">web</span>
                  <span className="tab_text_4">giang vien: Hoa hoa</span>
                </section>
              </section>
            </section>
          </section>
          <div className="home_line_2_arow">
            <section className="home_line_2_arow_1 arrow_disappear">
              <FontAwesomeIcon icon={faAngleLeft} />
            </section>
            <section className="home_line_2_arow_2">
              <FontAwesomeIcon icon={faAngleRight} />
            </section>
          </div>
        </div>
        <section className="home_leader_line_3">
          <section className="home_table_line_3">
            <p>Thống kê truy cập</p>
            <table className="home_list_table">
              <thead>
                <tr className="home_table_left">
                  <th>Đang truy cập</th>
                  <th>Lượt truy cập hôm nay</th>
                  <th>Lượt truy cập tuần này</th>
                  <th>Lượt truy cập tháng này</th>
                  <th>Tổng lượt truy cập</th>
                </tr>
              </thead>
              <tbody>
                <tr className="home_table_right">
                  <td>31</td>
                  <td>97</td>
                  <td>1,298</td>
                  <td>31</td>
                  <td>31</td>
                </tr>
              </tbody>
            </table>
          </section>
          <section className="home_leader_file_private">
            <p>Tệp riêng tư tải lên gần đây</p>
            <section className="home_leader_file_private_show">
              <section className="file_private">
                <img src="" alt="..." />
                <section className="file_private_content">
                  <span>Thương mại điện tử là.docx</span>
                  <span>12:01 12/12/2021</span>
                  <span>Thương mại điện tử</span>
                  <span>Giảng viên: Hoa Hoa</span>
                </section>
              </section>
            </section>
          </section>
        </section>
      </section>
    </>
  );
}
