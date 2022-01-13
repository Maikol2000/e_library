import React, { useEffect, useState } from "react";
import "./style.css";

import u_arrow_up_down from "../../../../../../assets/img/u_arrow_up_down.png";
import u_eye from "../../../../../../assets/img/u_eye.png";

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
import { useDispatch, useSelector } from "react-redux";
import { actDanhSachTaiLieu } from "./module/action";
import { RootState } from "../../../../../../store/store";
import Loading from "../../../../../share/loading/Loading";

interface Data {
  id: any;
  tenTaiLieu: string;
  phanLoai: boolean;
  giangVien: string;
  ngayGui: string;
  tinhTrang: number;
  pheDuyetTaiLieu: any;
  eye: any;
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

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

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
    id: "tenTaiLieu",
    numeric: false,
    disablePadding: false,
    label: "Tên tài liệu",
  },
  {
    id: "phanLoai",
    numeric: true,
    disablePadding: false,
    label: "Phân loại",
  },
  {
    id: "giangVien",
    numeric: true,
    disablePadding: false,
    label: "Giảng viên",
  },
  {
    id: "ngayGui",
    numeric: true,
    disablePadding: false,
    label: "Ngày gửi",
  },
  {
    id: "tinhTrang",
    numeric: true,
    disablePadding: false,
    label: "Tình trạng",
  },
  {
    id: "pheDuyetTaiLieu",
    numeric: true,
    disablePadding: false,
    label: "Phép duyệt tài liệu",
  },
  {
    id: "eye",
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

export default function EnhancedTable() {
  const dispatch = useDispatch();
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof Data>("tenTaiLieu");
  const [selected, setSelected] = React.useState<readonly string[]>([]);

  const { dsTaiLieuMonReducer, loading } = useSelector(
    (state: RootState) => state.dsTaiLieuMonReducer
  );

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
      const newSelecteds = dsTaiLieuMonReducer?.map((n: { id: any }) => n.id);
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
  const pageCount = Math.ceil(dsTaiLieuMonReducer?.length / docsPerPage);
  const changePage = ({ selected }: any) => {
    setPageNumber(selected);
  };

  useEffect(() => {
    dispatch(actDanhSachTaiLieu());
  }, []);

  return (
    <>
    {loading && <Loading />}
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
              rowCount={dsTaiLieuMonReducer?.length}
            />
            <TableBody>
              {dsTaiLieuMonReducer
                ?.slice(pagesVisited, pagesVisited + docsPerPage)
                .map(
                  (
                    row: {
                      tenTaiLieu: any;
                      phanLoai: any;
                      giangVien: any;
                      ngayGui: any;
                      tinhTrang: any;
                    },
                    index: React.Key | null | undefined
                  ) => {
                    const {
                      tenTaiLieu,
                      phanLoai,
                      giangVien,
                      ngayGui,
                      tinhTrang,
                    } = row;
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
                          {tenTaiLieu}
                        </TableCell>
                        <TableCell align="right">
                          {phanLoai ? <p>Bài giảng</p> : <p>Tài nguyên</p>}
                        </TableCell>
                        <TableCell align="right">{giangVien}</TableCell>
                        <TableCell align="right">{ngayGui}</TableCell>
                        <TableCell align="right">{tinhTrang}</TableCell>
                        <TableCell align="right">
                          {tinhTrang == 1 && (
                            <p className="text_table_1_dstml">Đã phê duyệt</p>
                          )}
                          {tinhTrang == 2 && (
                            <div>
                              <button className="custom_btn_table_dstlm_1">
                                Phê duyệt
                              </button>{" "}
                              {"   "}
                              <button className="custom_btn_table_dstlm_2">
                                Hủy
                              </button>
                            </div>
                          )}
                          {tinhTrang == 3 && (
                            <p className="text_table_1_dstml">Đã hủy</p>
                          )}
                        </TableCell>
                        <TableCell align="right">
                          <img src={u_eye} alt="..." />
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
