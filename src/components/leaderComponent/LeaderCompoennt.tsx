import React from "react";
import { Route, Switch } from "react-router-dom";

//component
import HomeLeader from "./homeLeader/HomeLeader";
import DanhSachMon from "./quanLyMon/danhSachMon/DanhSachMon";
import TroGiup from "./troGiup/TroGiup";
import CaiDatHeThong from "../../components/leaderComponent/caiDatHeThong/CaiDatHeThong";
import NganHangDeThi from "../../components/leaderComponent/nganHangDeThi/NganHangDeThi";
import PhepDuyetTaiLieu from "../../components/leaderComponent/quanLyMon/phepDuyetTaiLieu/PhepDuyetTaiLieu";
import TepRiengTu from "../../components/leaderComponent/tepRiengTu/TepRiengTu";
import ThongBao from "../../components/leaderComponent/thongBao/ThongBao";


export default function LeaderCompoennt() {
  return (
      <div className="content">
        <Switch>
          <Route exact path="/page-leader">{HomeLeader}</Route>
          <Route path="/page-leader/danh-sach-mon">{DanhSachMon}</Route>
          <Route path="/page-leader/phe-duyet-tai-lieu">
            {PhepDuyetTaiLieu}
          </Route>
          <Route path="/page-leader/tep-rieng-tu">{TepRiengTu}</Route>
          <Route path="/page-leader/ngan-hang-de-thi">{NganHangDeThi}</Route>
          <Route path="/page-leader/thong-bao">{ThongBao}</Route>
          <Route path="/page-leader/cai-dat-he-thong">{CaiDatHeThong}</Route>
          <Route path="/page-leader/tro-giup">{TroGiup}</Route>
        </Switch>
      </div>
  );
}
