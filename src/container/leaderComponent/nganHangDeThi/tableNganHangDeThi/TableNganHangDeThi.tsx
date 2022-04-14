import React, { useEffect, useState } from "react";
import "./style.css";

import u_arrow_up_down from "../../../../assets/img/u_arrow_up_down.png";
import u_eye from "../../../../assets/img/u_eye.png";
import file_1 from "../../../../assets/img/file-1.png";
import file_2 from "../../../../assets/img/file-2.png";
import file_3 from "../../../../assets/img/file-3.png";
import file_4 from "../../../../assets/img/file-4.png";
import file_5 from "../../../../assets/img/File-5.png";

import ReactPaginate from "react-paginate";

import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Paper,
  Checkbox,
} from "@mui/material";
import Loading from "../../../share/loading/Loading";

import PoppupHuy from "../../../../component/xuLyPoppup/PoppupHuy";
import PoppupPheDuyet from "../../../../component/xuLyPoppup/PoppupPheDuyet";
import { useDispatch } from "react-redux";
import { actNganHangDeThi } from "./module/action";
import { useHistory } from "react-router-dom";

interface Data {
  loai: string;
  tenDeThi: string;
  mon: string;
  giangVien: string;
  hinhThuc: boolean;
  time: number;
  tinhTrang: number;
  pheDuyet: any;
  vertical: any;
}

type Order = "asc" | "desc";

interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: "loai",
    numeric: false,
    disablePadding: false,
    label: "Loại file",
  },
  {
    id: "tenDeThi",
    numeric: false,
    disablePadding: false,
    label: "Tên đề thi",
  },
  {
    id: "mon",
    numeric: true,
    disablePadding: false,
    label: "Môn học",
  },
  {
    id: "giangVien",
    numeric: true,
    disablePadding: false,
    label: "Giảng viên",
  },
  {
    id: "hinhThuc",
    numeric: true,
    disablePadding: false,
    label: "Hình thức",
  },
  {
    id: "time",
    numeric: true,
    disablePadding: false,
    label: "Thời lượng",
  },
  {
    id: "tinhTrang",
    numeric: true,
    disablePadding: false,
    label: "Tình trạng",
  },
  {
    id: "pheDuyet",
    numeric: true,
    disablePadding: false,
    label: "Phê duyệt",
  },
  {
    id: "vertical",
    numeric: true,
    disablePadding: false,
    label: " ",
  },
];

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead className="head_table_DSTLM">
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        {headCells.map((headCell, index) => (
          <TableCell
            key={index}
            align="left"
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              <img src={u_arrow_up_down} alt="..." />
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

type Props = {
  dsNganHangDeThi: any;
  loading: boolean;
  search: string;
};

export default function TableRepRiengTu({
  dsNganHangDeThi,
  loading,
  search,
}: Props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof Data>("loai");
  const [selected, setSelected] = React.useState<readonly string[]>([]);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = dsNganHangDeThi?.map((n: { id: any }) => n.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, name: any) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const isSelected = (name: any) => selected.indexOf(name) !== -1;
  //custom input and Paginate
  const [perPage, setperPage] = useState(2);
  const onChangeInputNum = (e: any) => {
    setperPage(e.target.value);
  };
  const [pageNumber, setPageNumber] = useState(0);

  const docsPerPage = perPage;
  const pagesVisited = pageNumber * docsPerPage;
  const pageCount = Math.ceil(dsNganHangDeThi?.length / docsPerPage);
  const changePage = ({ selected }: any) => {
    setPageNumber(selected);
  };

  //filter input table
  const filteredDocs = dsNganHangDeThi?.filter((docs: any) => {
    if (search) {
      return docs.giangVien.toLowerCase().indexOf(search.toLowerCase()) != -1;
    } else {
      return dsNganHangDeThi;
    }
  });

  useEffect(() => {
    dispatch(actNganHangDeThi());
  }, []);

  return (
    <>
      {loading && <Loading />}
      <PoppupHuy />
      <PoppupPheDuyet />
      <PoppupHuy />
      <Box sx={{ width: "100%" }}>
        <Paper>
          <TableContainer>
            <Table aria-labelledby="tableTitle">
              <EnhancedTableHead
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={filteredDocs?.length}
              />
              <TableBody>
                {filteredDocs
                  ?.slice(pagesVisited, pagesVisited + docsPerPage)
                  .map(
                    (
                      row: {
                        time: any;
                        tinhTrang: any;
                        tenDeThi: string;
                        mon: any;
                        giangVien: any;
                        hinhThuc: any;
                      },
                      index: React.Key | null | undefined
                    ) => {
                      const {
                        time,
                        tinhTrang,
                        tenDeThi,
                        mon,
                        giangVien,
                        hinhThuc,
                      } = row;
                      const loaiArr = tenDeThi.split(".");
                      const isItemSelected = isSelected(index);
                      const labelId = `enhanced-table-checkbox-${index}`;

                      return (
                        <TableRow
                          hover
                          onClick={(event) => handleClick(event, index)}
                          role="checkbox"
                          aria-checked={isItemSelected}
                          tabIndex={-1}
                          key={index}
                          selected={isItemSelected}
                        >
                          <TableCell padding="checkbox">
                            <Checkbox
                              color="primary"
                              checked={isItemSelected}
                              inputProps={{
                                "aria-labelledby": labelId,
                              }}
                            />
                          </TableCell>
                          <TableCell component="th" align="right" id={labelId}>
                            {loaiArr[1] == "doc" && (
                              <img
                                src={file_1}
                                alt="..."
                                className="img_table_rieng_tu"
                              />
                            )}
                            {loaiArr[1] == "ppt" && (
                              <img
                                src={file_2}
                                alt="..."
                                className="img_table_rieng_tu"
                              />
                            )}
                            {loaiArr[1] == "xlsx" && (
                              <img
                                src={file_3}
                                alt="..."
                                className="img_table_rieng_tu"
                              />
                            )}
                          </TableCell>
                          <TableCell align="right">{tenDeThi}</TableCell>
                          <TableCell align="right">{mon}</TableCell>
                          <TableCell align="right">{giangVien}</TableCell>
                          <TableCell align="right">
                            {hinhThuc ? "Trắc nghiệm" : "Tự luận"}
                          </TableCell>
                          <TableCell align="right">{time}</TableCell>
                          <TableCell align="right">
                            {tinhTrang == 1 && (
                              <p className="tinhTrangNganHangDeThi">
                                Chờ phê duyệt
                              </p>
                            )}
                            {tinhTrang == 2 && (
                              <p className="tinhTrangNganHangDeThi">
                                Chưa bắt đầu
                              </p>
                            )}
                            {tinhTrang == 3 && (
                              <p className="tinhTrangNganHangDeThi">
                                Đã tiến hành
                              </p>
                            )}
                            {tinhTrang == 4 && (
                              <p className="tinhTrangNganHangDeThi">
                                Đã hoàn thành
                              </p>
                            )}
                          </TableCell>
                          <TableCell align="right">
                            {tinhTrang === 1 && (
                              <div className="btn_phe_duyet_table">
                                <button
                                  className="btn_phe_duyet_NHDT"
                                  data-toggle="modal"
                                  data-target="#modalPheDuyet"
                                >
                                  Xác nhận
                                </button>
                                <button
                                  className="btn_huy_duyet_NHDT"
                                  data-toggle="modal"
                                  data-target="#model_huy"
                                >
                                  Hủy
                                </button>
                              </div>
                            )}
                            {tinhTrang == 2 && (
                              <p className="tinhTrangNganHangDeThi">
                                Chưa phê duyệt
                              </p>
                            )}
                            {tinhTrang == 3 && (
                              <p className="tinhTrangNganHangDeThi">Đã hủy</p>
                            )}
                            {tinhTrang == 4 && (
                              <p className="tinhTrangNganHangDeThiDaPheDuyet">
                                Đã phê duyệt
                              </p>
                            )}
                          </TableCell>
                          <TableCell align="right">
                            <img
                              style={{ cursor: "pointer" }}
                              src={u_eye}
                              alt="..."
                              onClick={() =>
                                history.push({
                                  pathname:
                                    "/page-leader/Ngân hàng đề thi/Chi tiết đề thi",
                                  state: row,
                                })
                              }
                            />
                          </TableCell>
                        </TableRow>
                      );
                    }
                  )}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
        <section className="danh_sach_mon_line_end">
          <section className="danh_sach_mon_custom_input_line_end">
            <span>Hiển thị</span>{" "}
            <input
              onChange={onChangeInputNum}
              type="number"
              min="1"
              max="5"
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
      </Box>
    </>
  );
}
