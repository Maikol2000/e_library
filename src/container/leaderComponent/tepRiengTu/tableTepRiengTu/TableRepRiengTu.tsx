import React, { useState } from "react";
import "./style.css";

import u_arrow_up_down from "../../../../assets/img/u_arrow_up_down.png";
import more_vertical from "../../../../assets/img/more_vertical.png";
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
import PoppupBaiGiang from "../../quanLyMon/danhSachMon/danhSachTaiLieuMon/xuLyPoppup/PoppupBaiGiang";
import PoppupTaiNguyen from "../../quanLyMon/danhSachMon/danhSachTaiLieuMon/xuLyPoppup/PoppupTaiNguyen";
import ModalDoiTen from "./modal/ModalDoiTen";
import ModalXoa from "./modal/ModalXoa";

interface Data {
  loai: string;
  ten: string;
  nguoiChinhSua: string;
  lastUpdate: string;
  size: number;
  vertical: any;
}

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = "asc" | "desc";

function stableSort<T>(
  array: readonly T[],
  comparator: (a: T, b: T) => number
) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

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
    label: "Loại tài liệu",
  },
  {
    id: "ten",
    numeric: false,
    disablePadding: false,
    label: "Tên",
  },
  {
    id: "nguoiChinhSua",
    numeric: true,
    disablePadding: false,
    label: "Giảng viên",
  },
  {
    id: "lastUpdate",
    numeric: true,
    disablePadding: false,
    label: "Ngày gửi",
  },
  {
    id: "size",
    numeric: true,
    disablePadding: false,
    label: "Tình trạng",
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
  allFilePrivate: any;
  loading: boolean;
  search: string;
};

export default function TableRepRiengTu({
  allFilePrivate,
  loading,
  search,
}: Props) {
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
      const newSelecteds = allFilePrivate?.map((n: { id: any }) => n.id);
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
  const pageCount = Math.ceil(allFilePrivate?.length / docsPerPage);
  const changePage = ({ selected }: any) => {
    setPageNumber(selected);
  };

  //filter input table
  const filteredDocs = allFilePrivate?.filter((docs: any) => {
    if (search) {
      return (
        docs.nguoiChinhSua.toLowerCase().indexOf(search.toLowerCase()) != -1
      );
    } else {
      return allFilePrivate;
    }
  });

  const onChangeShow = (e: any) => {
    const show = document.querySelectorAll(".list_group_show_action");
    show[e.target.className]?.classList.toggle("actionShow");
  };

  const [name, setname] = useState<string | null | undefined>();

  const onChangeName = (e: string) => {
    setname(e);
  };

  return (
    <>
      {loading && <Loading />}
      <PoppupBaiGiang />
      <PoppupTaiNguyen state={""} />
      <ModalDoiTen name={name} />
      <ModalXoa />
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
                        loai: any;
                        ten: any;
                        nguoiChinhSua: any;
                        lastUpdate: any;
                        size: any;
                      },
                      index: React.Key | null | undefined
                    ) => {
                      const { loai, ten, nguoiChinhSua, lastUpdate, size } =
                        row;
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
                            {loai == "doc" && (
                              <img
                                src={file_1}
                                alt="..."
                                className="img_table_rieng_tu"
                              />
                            )}
                            {loai == "pptx" && (
                              <img
                                src={file_2}
                                alt="..."
                                className="img_table_rieng_tu"
                              />
                            )}
                            {loai == "xlsx" && (
                              <img
                                src={file_3}
                                alt="..."
                                className="img_table_rieng_tu"
                              />
                            )}
                            {loai == "mp4" && (
                              <img
                                src={file_5}
                                alt="..."
                                className="img_table_rieng_tu"
                              />
                            )}
                          </TableCell>
                          <TableCell align="right">{ten}</TableCell>
                          <TableCell align="right">{nguoiChinhSua}</TableCell>
                          <TableCell align="right">{lastUpdate}</TableCell>
                          <TableCell align="right">{size}</TableCell>
                          <TableCell align="right">
                            <img
                              style={{ cursor: "pointer" }}
                              src={more_vertical}
                              alt="..."
                              onClick={(e) => onChangeShow(e)}
                              className={`${index}`}
                            />
                            <div className="list_group_show_action">
                              <p
                                data-toggle="modal"
                                data-target={
                                  loai == "mp4"
                                    ? "#modal_tai_nguyen"
                                    : "#modal_bai_giang"
                                }
                              >
                                Xem trước
                              </p>
                              <p
                                data-toggle="modal"
                                data-target="#modal_doi_ten"
                                onClick={() => onChangeName(ten)}
                              >
                                Đổi tên
                              </p>
                              <p>Tải xuống</p>
                              <p data-toggle="modal" data-target="#modal_xoa">Xóa</p>
                            </div>
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
