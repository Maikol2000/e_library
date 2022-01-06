import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
//component
import SelectNienKhoa from "../../../../containers/share/selectNienKhoa/SelectNienKhoa";
//img
import arrow from "../../../../assets/img/arrow.png";
import fi_search from "../../../../assets/img/fi_search.png";
import list_danh_sach_mon_hoc from "../../../../assets/img/List danh sach mon hoc.png";
//mui
import { styled } from "@mui/material/styles";
import {
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
//action
import { actDanhSachTepriengTu } from "../../homeLeader/action/action";
//type root
import { RootState } from "../../../../store/store";
//Paginate
import ReactPaginate from "react-paginate";
import { useHistory } from "react-router-dom";
//font awesome
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";

export default function DanhSachMon() {
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(actDanhSachTepriengTu());
  }, []);

  const danhSachTepRiengTuDaTaiLenGanDay = useSelector(
    (state: RootState) =>
      state.homeLeaderReducer.danhSachTepRiengTuDaTaiLenGanDay
  );

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(even)": {
      backgroundColor: theme.palette.action.hover,
    },
  }));

  //paginate cho danh sách tài liệu liệu môn học xem gần đây
  const [pageNumber, setPageNumber] = useState(0);

  //input
  const [perPage, setperPage] = useState(2);
  const onChangeInputNum = (e: any) => {
    setperPage(e.target.value);
  };

  const docsPerPage = perPage;
  const pagesVisited = pageNumber * docsPerPage;
  const pageCount = Math.ceil(
    danhSachTepRiengTuDaTaiLenGanDay.length / docsPerPage
  );
  const changePage = ({ selected }: any) => {
    setPageNumber(selected);
  };

  //filter input table
  const [search, setsearch] = useState<any>();
  const onSearch = (e: any) => {
    return setsearch(e.target.value);
  };

  const filteredDocs = danhSachTepRiengTuDaTaiLenGanDay.filter((docs: any) => {
    if (search) {
      return docs.giangVien.toLowerCase().indexOf(search.toLowerCase()) != -1;
    } else {
      return danhSachTepRiengTuDaTaiLenGanDay;
    }
  });

  return (
    <>
      <section className="danh_sach_mon_nien_khoa">
        <SelectNienKhoa />
      </section>
      <section className="danh_sach_mon_leader">
        <section className="danh_sach_mon_leader_custom_selection">
          <section className="danh_sach_mon_list_tab">
            <section className="danh_sach_mon_list">
              <span style={{ width: "73px" }}>Môn học</span>
              <span className="danh_sach_mon_custom_seclect">
                <select className="danh_sach_mon_custom_sel">
                  <option disabled selected>
                    Tắt cả môn học
                  </option>
                  <option>Thương mại điện tử</option>
                  <option>Nguyên lý kế toán</option>
                  <option>Hệ thống thông tin</option>
                  <option>Luật thương mại</option>
                  <option>Ngân hàng</option>
                </select>
                <section className="danh_sach_mon_arrow">
                  <img src={arrow} alt="..." />
                </section>
              </span>
            </section>
            <section className="danh_sach_mon_list">
              <span style={{ width: "73px" }}>Giảng viên</span>
              <span className="danh_sach_mon_custom_seclect">
                <select className="danh_sach_mon_custom_sel">
                  <option disabled selected>
                    Tắt cả giảng viên
                  </option>
                  <option>Nguyễn Văn A</option>
                  <option>Nguyên lý B</option>
                  <option>Bé C</option>
                </select>
                <section className="danh_sach_mon_arrow">
                  <img src={arrow} alt="..." />
                </section>
              </span>
            </section>
            <section className="danh_sach_mon_list">
              <span style={{ width: "73px" }}>Môn học</span>
              <span className="danh_sach_mon_custom_seclect">
                <select className="danh_sach_mon_custom_sel">
                  <option disabled selected>
                    Tắt cả tình trạng
                  </option>
                  <option>Thương mại điện tử</option>
                  <option>Nguyên lý kế toán</option>
                  <option>Hệ thống thông tin</option>
                  <option>Luật thương mại</option>
                  <option>Ngân hàng</option>
                </select>
                <section className="danh_sach_mon_arrow">
                  <img src={arrow} alt="..." />
                </section>
              </span>
            </section>
          </section>
          <section className="danh_sach_mon_custom_input">
            <input
              placeholder="tìm tên giảng viên"
              onChange={onSearch}
              type="text"
            />
            <img src={fi_search} alt="..." />
          </section>
        </section>
        <section className="danh_sach_mon_list_subject">
          <TableContainer component={Paper}>
            <Table aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Mã môn học</StyledTableCell>
                  <StyledTableCell align="right">Tên môn học</StyledTableCell>
                  <StyledTableCell align="right">Giảng viên</StyledTableCell>
                  <StyledTableCell align="right">
                    Số tài liệu chờ duyệt
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    Tình trạng tài liệu môn
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    Ngày gửi phê duyệt
                  </StyledTableCell>
                  <StyledTableCell align="right"></StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredDocs
                  .slice(pagesVisited, pagesVisited + docsPerPage)
                  .map(
                    (
                      row: {
                        giangVien: any;
                        maMonHoc: any;
                        ngayGui: any;
                        taiLieuChoSd: any;
                        tenMonHoc: any;
                        tinhTrangTaiLieuMon: any;
                      },
                      index: React.Key | null | undefined
                    ) => {
                      const {
                        giangVien,
                        maMonHoc,
                        ngayGui,
                        taiLieuChoSd,
                        tenMonHoc,
                        tinhTrangTaiLieuMon,
                      } = row;
                      return (
                        <StyledTableRow key={index}>
                          <StyledTableCell component="th" scope="row">
                            {maMonHoc}
                          </StyledTableCell>
                          <StyledTableCell
                            style={{ cursor: "pointer" }}
                            component="th"
                            scope="row"
                            onClick={() =>
                              history.push({
                                pathname: `/page-leader/Quảng lý học viên/${tenMonHoc}`,
                                state: row,
                              })
                            }
                          >
                            {tenMonHoc}
                          </StyledTableCell>
                          <StyledTableCell component="th" scope="row">
                            {giangVien}
                          </StyledTableCell>
                          <StyledTableCell component="th" scope="row">
                            {taiLieuChoSd}
                          </StyledTableCell>
                          <StyledTableCell component="th" scope="row">
                            {tinhTrangTaiLieuMon ? (
                              <span className="daPheDuyet">Đã phê duyệt</span>
                            ) : (
                              <span className="choPheDuyet">Chờ xét duyệt</span>
                            )}
                          </StyledTableCell>
                          <StyledTableCell component="th" scope="row">
                            {ngayGui}
                          </StyledTableCell>
                          <StyledTableCell component="th" scope="row">
                            <img src={list_danh_sach_mon_hoc} alt="..." />
                          </StyledTableCell>
                        </StyledTableRow>
                      );
                    }
                  )}
              </TableBody>
            </Table>
          </TableContainer>
          <section className="danh_sach_mon_line_end">
            <section className="danh_sach_mon_custom_input_line_end">
              <span>Hiển thị</span>{" "}
              <input
                onChange={onChangeInputNum}
                type="number"
                value={perPage}
              />{" "}
              <span>hàng trong mỗi trang</span>
            </section>
            <ReactPaginate
              previousLabel={"PreviousDSM"}
              nextLabel={"NextDSM"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"paginateBttnDSM"}
              previousLinkClassName={"previousBttnDSM"}
              nextLinkClassName={"nextBttnDSM"}
              disabledClassName={"disablePaginateDSM"}
              activeClassName={"activePaginateDSM"}
            />
          </section>
        </section>
      </section>
    </>
  );
}
function toLowerCase(search: any): any {
  throw new Error("Function not implemented.");
}
