import React from "react";
import "./style.css";
import u_arrow_up_down from "../../../../assets/img/u_arrow_up_down.png";

import {
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  tableCellClasses,
} from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function ModalTepRiengTu() {
  const { allFilePrivate } = useSelector(
    (state: RootState) => state.allFileReducer
  );

  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-lg modal-dialog-centered"
          role="document"
        >
          <div className="modal-content">
              <h5 className="modal-title modal_title_tep_rieng" id="exampleModalLabel">
                Thêm tệp
              </h5>
            <div className="modal-body">
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead>
                    <TableRow className="tb_heade_tep_rieng_tu">
                      <StyledTableCell>&nbsp;&nbsp;</StyledTableCell>
                      <StyledTableCell align="right">
                        Thể loại <img src={u_arrow_up_down} alt="..." />
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        Tên&nbsp; <img src={u_arrow_up_down} alt="..." />
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        Kích thước&nbsp; <img src={u_arrow_up_down} alt="..." />
                      </StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {allFilePrivate?.map((item: any, index: any) => (
                      <StyledTableRow key={index}>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                        <StyledTableCell component="th" scope="row">
                          {item.loai}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {item.ten}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {item.size}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          <span className="custom_X_close">×</span>
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
            <div style={{ textAlign: "center" }}>
              <button
                type="button"
                className="btn_huy_modal_tep_rieng"
                data-dismiss="modal"
              >
                Hủy
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
