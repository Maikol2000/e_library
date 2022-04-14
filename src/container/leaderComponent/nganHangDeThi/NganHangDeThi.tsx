import React, { useState } from "react";
import "./style.css";
//img
import fi_download from "../../../assets/img/fi_download.png";
import arrow from "../../../assets/img/arrow.png";
import fi_search from "../../../assets/img/fi_search.png";

import TableNganHangDeThi from "./tableNganHangDeThi/TableNganHangDeThi";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import PoppupTaiXuong from "../../../component/xuLyPoppup/PoppupTaiXuong";

export default function NganHangDeThi() {
  const { dsNganHangDeThi, loading } = useSelector(
    (state: RootState) => state.dsNganHangDeThiReducer
  );

  const [search, setsearch] = useState<any>();
  const onSearch = (e: any) => {
    return setsearch(e.target.value);
  };

  return (
    <>
      <PoppupTaiXuong />
      <div className="ngan_hang_de_thi">
        <p className="title_ngan_hang_de_thi">Danh sách đề thi</p>
        <div className="ngan_hang_de_thi_huy_phe_duyet">
          <section
            className="imgDSTLMRight"
            data-toggle="modal"
            data-target="#modal_tai_xuong"
          >
            <img src={fi_download} alt="..." />
          </section>
          <section className="btnDSTLMRight">
            <button data-toggle="modal" data-target="#model_huy">
              Hủy phê duyệt
            </button>
            <button data-toggle="modal" data-target="#modalPheDuyet">
              Phê duyệt
            </button>
          </section>
        </div>
        <div className="table_ngan_hang_de_thi">
          <section className="danh_sach_mon_leader_custom_selection">
            <section className="danh_sach_mon_list_tab">
              <section className="danh_sach_mon_list">
                <div className="select_main">
                  <select className="select_hoi_dap_one">
                    <option disabled selected>
                      Tất cả tình trạng
                    </option>
                    <option>Đã phê duyệt</option>
                    <option>Chờ phê duyệt</option>
                  </select>
                  <section className="img_select">
                    <img src={arrow} alt="..." />
                  </section>
                </div>
              </section>
              <section className="danh_sach_mon_list">
                <div className="select_main">
                  <select className="select_hoi_dap_one">
                    <option disabled selected>
                      Niên khóa
                    </option>
                    <option>2020 - 2019</option>
                    <option>2019 - 2018</option>
                    <option>2018 - 2019</option>
                  </select>
                  <section className="img_select">
                    <img src={arrow} alt="..." />
                  </section>
                </div>
              </section>
              <section className="danh_sach_mon_list">
                <div className="select_main">
                  <select className="select_hoi_dap_one">
                    <option disabled selected>
                      Tắt cả môn học
                    </option>
                    <option>Thương mại điện tử</option>
                    <option>Nguyên lý kế toán</option>
                    <option>Hệ thống thông tin</option>
                    <option>Luật thương mại</option>
                    <option>Ngân hàng</option>
                  </select>
                  <section className="img_select">
                    <img src={arrow} alt="..." />
                  </section>
                </div>
              </section>
              <section className="danh_sach_mon_list">
                <div className="select_main">
                  <select className="select_hoi_dap_one">
                    <option disabled selected>
                      Tắt cả giảng viên
                    </option>
                    <option>Ng A</option>
                    <option>Le B</option>
                    <option>Trần C</option>
                  </select>
                  <section className="img_select">
                    <img src={arrow} alt="..." />
                  </section>
                </div>
              </section>
            </section>
            <section className="danh_sach_mon_custom_input">
              <input
                placeholder="tìm tên giảng viên"
                type="text"
                onChange={onSearch}
              />
              <img src={fi_search} alt="..." />
            </section>
          </section>
          <div>
            <TableNganHangDeThi
              dsNganHangDeThi={dsNganHangDeThi}
              loading={loading}
              search={search}
            />
          </div>
        </div>
      </div>
    </>
  );
}
