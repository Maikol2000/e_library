import React from "react";
import { Route, Switch } from "react-router-dom";

//component
import { HomeLeader } from "./homeLeader/HomeLeader";
import DanhSachMon from "./quanLyMon/danhSachMon/DanhSachMon";
import TroGiup from "./troGiup/TroGiup";
import CaiDatHeThong from "./caiDatHeThong/CaiDatHeThong";
import NganHangDeThi from "./nganHangDeThi/NganHangDeThi";
import PhepDuyetTaiLieu from "./quanLyMon/phepDuyetTaiLieu/PhepDuyetTaiLieu";
import TepRiengTu from "./tepRiengTu/TepRiengTu";
import ThongBao from "./thongBao/ThongBao";
import MonHocDetail from "./quanLyMon/danhSachMon/monHocDetail/monHocDetail";
import XemMonHoc from "./quanLyMon/danhSachMon/xemMonHoc/XemMonHoc";

export default function LeaderCompoennt() {
  return (
    <div className="content">
      <Switch>
        <Route exact path="/page-leader/Trang Chủ" component={HomeLeader} />
        <Route
          path="/page-leader/Quảng lý học viên/Danh sách môn học"
          component={DanhSachMon}
        />
        <Route path="/page-leader/Danh sách môn học/:id" component={XemMonHoc} />
        <Route
          exact
          path="/page-leader/Quảng lý học viên/Phê duyệt tài liệu môn học"
          component={PhepDuyetTaiLieu}
        />
        <Route
          path="/page-leader/Quảng lý học viên/:id"
          component={MonHocDetail}
        />
        <Route path="/page-leader/Tệp riêng tư" component={TepRiengTu} />
        <Route path="/page-leader/Ngân hàng đề thi" component={NganHangDeThi} />
        <Route path="/page-leader/Thông báo" component={ThongBao} />
        <Route path="/page-leader/Cài đặt hệ thống" component={CaiDatHeThong} />
        <Route path="/page-leader/Trợ giúp" component={TroGiup} />
      </Switch>
    </div>
  );
}
