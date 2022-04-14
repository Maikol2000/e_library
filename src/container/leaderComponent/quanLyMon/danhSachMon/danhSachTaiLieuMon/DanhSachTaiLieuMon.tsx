import React, { useEffect, useState } from "react";
import "./style.css";
//img
import fi_download from "../../../../../assets/img/fi_download.png";
import arrow from "../../../../../assets/img/arrow.png";
import fi_search from "../../../../../assets/img/fi_search.png";
import TableDSTLM from "./tableDSTLM/TableDSTLM";
import PoppupPheDuyet from "../../../../../component/xuLyPoppup/PoppupPheDuyet";
import PoppupHuy from "../../../../../component/xuLyPoppup/PoppupHuy";
import PoppupBaiGiang from "../../../../../component/xuLyPoppup/PoppupBaiGiang";
import PoppupTaiNguyen from "../../../../../component/xuLyPoppup/PoppupTaiNguyen";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../store/store";
import { actDanhSachTaiLieu } from "./tableDSTLM/module/action";

export default function DanhSachTaiLieuMon(props: any) {

  const dispatch = useDispatch()
  const [search, setsearch] = useState<any>();
  const { dsTaiLieuMonReducer, loading } = useSelector(
    (state: RootState) => state.dsTaiLieuMonReducer
  );

  const onSearch = (e: any) => {
    return setsearch(e.target.value);
  };

  useEffect(() => {
    dispatch(actDanhSachTaiLieu());
  }, []);

  return (
    <>
      <PoppupPheDuyet />
      <PoppupHuy/>
      <PoppupBaiGiang />
      <PoppupTaiNguyen state={props.location.state}/>
      <div className="danhSachTaiLieuMon">
        <div className="danhSachTaiLieuMonHead">
          <h2 className="textDSTaiLieuMon">{props.location.state}</h2>{" "}
          <div className="danhSachTaiLieuMonHeadRight">
            <section className="imgDSTLMRight">
              <img src={fi_download} alt="..." />
            </section>
            <section className="btnDSTLMRight">
              <button>Hủy phê duyệt</button>
              <button data-toggle="modal" data-target="#modalPheDuyet">
                Phê duyệt
              </button>
            </section>
          </div>
        </div>
        <div className="danhSachTaiLieuMonTable">
          <section className="danhSachTaiLieuMonTableHeader">
            <div className="select_main">
              <select className="select_hoi_dap_one">
                <option disabled>Tắt cả tình trạng</option>
                <option>Đã phê duyệt</option>
                <option>Chờ phê duyệt</option>
              </select>
              <section className="img_select">
                <img src={arrow} alt="..." />
              </section>
            </div>
            <section className="danh_sach_mon_custom_input ds_tai_lieu_custom_input">
              <input placeholder="tìm tên giảng viên" type="text" onChange={onSearch}/>
              <img src={fi_search} alt="..." />
            </section>
          </section>
          <div style={{ height: 400, width: "100%" }}>
            <TableDSTLM  search={search} dsTaiLieuMonReducer={dsTaiLieuMonReducer} loading={loading}/>
          </div>
        </div>
      </div>
    </>
  );
}

