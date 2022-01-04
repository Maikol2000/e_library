import { useEffect, useState } from "react";
import "./style.css";

//Paginate
import ReactPaginate from "react-paginate";

//img
import arrow from "../../../assets/img/arrow.png";
import { useDispatch, useSelector } from "react-redux";
import { actDanhSachLichSuDocVideo } from "./action/action";
import play_Circle from "../../../assets/img/play_Circle.png";
import file_1 from "../../../assets/img/file-1.png";
import file_2 from "../../../assets/img/file-2.png";
import file_3 from "../../../assets/img/file-3.png";
import file_4 from "../../../assets/img/file-4.png";

import { RootState } from "../../../store/store";

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

export const HomeLeader = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actDanhSachLichSuDocVideo());
  }, []);

  const danhSachLichSuTaiLieu = useSelector(
    (state: RootState) => state.danhSachLichSuVideoReducer.danhSachLichSuTaiLieu
  );

  //paginate cho danh sách người dùng chờ xác nhận vào khóa học
  const [pageNumber, setPageNumber] = useState(0);
  const docsPerPage = 8;
  const pagesVisited = pageNumber * docsPerPage;

  const pageCount = Math.ceil(danhSachLichSuTaiLieu.length / docsPerPage);

  const changePage = ({ selected }: any) => {
    setPageNumber(selected);
  };

  return (
    <>
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
            {danhSachLichSuTaiLieu
              .slice(pagesVisited, pagesVisited + docsPerPage)
              .map((docs: any) => {
                const { giangVien, name, nameId, moTa } = docs;
                return (
                  <section className="tab_home">
                    <section className="cont">
                      <img
                        src="https://picsum.photos/200"
                        alt="..."
                        className="tab_home_img"
                      />
                      <img
                        src={play_Circle}
                        alt="..."
                        className="play_Circle"
                      />
                      <section className="tab_home_content">
                        <span className="tab_text_1">{name}</span>
                        <span className="tab_text_2">{moTa}</span>
                        <span className="tab_text_3">{nameId}</span>
                        <span className="tab_text_4">
                          giang vien: {giangVien}
                        </span>
                      </section>
                    </section>
                  </section>
                );
              })}
          </section>

          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginateBttn"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"disablePaginate"}
            activeClassName={"activePaginate"}
          />
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
            <div className="home_leader_file_private_tab">
              <section className="home_leader_file_private_show">
                <section className="file_private">
                  <img src={file_1} alt="..." />
                  <section className="file_private_content">
                    <span>Thương mại điện tử là.docx</span>
                    <span>12:01 12/12/2021</span>
                    <span>Thương mại điện tử</span>
                    <span>Giảng viên: Hoa Hoa</span>
                  </section>
                </section>
              </section>
              <section className="home_leader_file_private_show">
                <section className="file_private">
                  <img src={file_2} alt="..." />
                  <section className="file_private_content">
                    <span>Lịch sử mỹ thuật.docx</span>
                    <span>12:01 12/12/2021</span>
                    <span>Lịch sử mỹ thuật</span>
                    <span>Giảng viên: Ms. Yến</span>
                  </section>
                </section>
              </section>
              <section className="home_leader_file_private_show">
                <section className="file_private">
                  <img src={file_3} alt="..." />
                  <section className="file_private_content">
                    <span>Danh sách ông tập.docx</span>
                    <span>12:01 10/11/2021</span>
                    <span>Ngữ Văn</span>
                    <span>Giảng viên: Lê Hoa</span>
                  </section>
                </section>
              </section>
            </div>
            <p>Hiển thị 10 tệp tài liệu đã xem gần đây nhất</p>
            <section className="arrow_home_leader_line_3">
              <span> {"<"} </span>
              <span>{">"}</span>
            </section>
          </section>
        </section>
      </section>
    </>
  );
};
