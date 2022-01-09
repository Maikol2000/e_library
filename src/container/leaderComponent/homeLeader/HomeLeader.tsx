import { useEffect, useState } from "react";
import "./style.css";

//Paginate
import ReactPaginate from "react-paginate";

//img
import { useDispatch, useSelector } from "react-redux";
import { actDanhSachLichSuDocVideo } from "./moduleLichXuDungTaiLieu/action";
import play_Circle from "../../../assets/img/play_Circle.png";
import file_1 from "../../../assets/img/file-1.png";

import { RootState } from "../../../store/store";
import SelectNienKhoa from "../../share/selectNienKhoa/SelectNienKhoa";
import Loading from "../../share/loading/Loading";
import { actDanhSachTepriengTu } from "./moduleTepRiengTu/action";

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
    dispatch(actDanhSachTepriengTu());
  }, []);

  const danhSachLichXuDungTaiLieu = useSelector(
    (state: RootState) =>
      state.dsLichXuDungTaiLieuReducer.danhSachLichXuDungTaiLieu
  );
  const loading1 = useSelector(
    (e: RootState) => e.dsLichXuDungTaiLieuReducer.loading
  );
  const danhSachTepRiengTuDaTaiLenGanDay = useSelector(
    (state: RootState) =>
      state.dsTepRiengTuReducer.danhSachTepRiengTuDaTaiLenGanDay
  );
  const loading2 = useSelector((e: RootState) => e.dsTepRiengTuReducer.loading);

  //paginate cho danh sách tài liệu liệu môn học xem gần đây
  const [pageNumber, setPageNumber] = useState(0);
  const docsPerPage = 8;
  const pagesVisited = pageNumber * docsPerPage;
  const pageCount = Math.ceil(danhSachLichXuDungTaiLieu?.length / docsPerPage);
  const arr1 = danhSachLichXuDungTaiLieu?.slice(
    pagesVisited,
    pagesVisited + docsPerPage
  );

  //paginate cho danh sách Tệp riêng tư tải lên gần đây
  const [pageNumberTwo, setPageNumberTwo] = useState(0);
  const docsPerPageTwo = 3;
  const pagesVisitedTwo = pageNumberTwo * docsPerPageTwo;
  const pageCountTwo = Math.ceil(
    danhSachTepRiengTuDaTaiLenGanDay?.length / docsPerPageTwo
  );
  const arr2 = danhSachTepRiengTuDaTaiLenGanDay?.slice(
    pagesVisitedTwo,
    pagesVisitedTwo + docsPerPageTwo
  );

  const changePage = ({ selected }: any) => {
    setPageNumber(selected);
  };
  const changePageTwo = ({ selected }: any) => {
    setPageNumberTwo(selected);
  };

  return (
    <>
      <section className="home_leader">
        {loading1 && loading2 &&  <Loading />}
        <section className="home_leader_line_1">
          <SelectNienKhoa />
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
            {arr1?.map((docs: any, index: number) => {
              const { giangVien, name, nameId, moTa } = docs;
              return (
                <section key={index} className="tab_home">
                  <section className="cont">
                    <div className="tab_home_main_img_line2">
                      <img
                        src="https://picsum.photos/200"
                        alt="..."
                        className="tab_home_img"
                      ></img>
                      <img
                        src={play_Circle}
                        alt="..."
                        className="play_Circle"
                      />
                    </div>

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
              {arr2?.map((doc: any, index: any) => {
                const { giangVien, ngayGui, tenMonHoc, nameFile } = doc;
                const nameNew = () => {
                  if (nameFile.length > 12) {
                    return nameFile.slice(0, 12) + "...";
                  }
                  return nameFile;
                };
                return (
                  <section
                    key={index}
                    className="home_leader_file_private_show"
                  >
                    <section className="file_private">
                      <img src={file_1} alt="..." />
                      <section className="file_private_content">
                        <span>{nameNew()}</span>
                        <span>{ngayGui}</span>
                        <span>{tenMonHoc}</span>
                        <span>Giảng viên: {giangVien}</span>
                      </section>
                    </section>
                  </section>
                );
              })}
            </div>
            <p className="home_leader_file_private_text">Hiển thị 10 tệp tài liệu đã xem gần đây nhất</p>
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              pageCount={pageCountTwo}
              onPageChange={changePageTwo}
              containerClassName={"paginateBttn"}
              previousLinkClassName={"previousBttn"}
              nextLinkClassName={"nextBttn"}
              disabledClassName={"disablePaginate"}
              activeClassName={"activePaginate"}
            />
          </section>
        </section>
      </section>
    </>
  );
};
