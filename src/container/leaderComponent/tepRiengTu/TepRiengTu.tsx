import React, { useEffect, useState } from "react";
import "./style.css";

import fi_download from "../../../assets/img/fi_download.png";
import arrow from "../../../assets/img/arrow.png";
import fi_search from "../../../assets/img/fi_search.png";
import TableRepRiengTu from "./tableTepRiengTu/TableRepRiengTu";
import { useDispatch, useSelector } from "react-redux";
import { actAllFile } from "./tableTepRiengTu/module/action";
import { RootState } from "../../../store/store";
import ModalTepRiengTu from "./modalTepRiengTu/ModalTepRiengTu";

export default function TepRiengTu() {
  const dispatch = useDispatch();
  const { allFilePrivate, loading } = useSelector(
    (state: RootState) => state.allFileReducer
  );

  useEffect(() => {
    dispatch(actAllFile());
  }, []);

  const [search, setsearch] = useState<any>();

  const onSearch = (e: any) => {
    return setsearch(e.target.value);
  };

  return (
    <>
      <div className="tep_rieng_tu_line_1">
        <div className="img_down_tep_rieng_tu">
          <img src={fi_download} alt="..." />
        </div>
        <button
          className="btn_up_load_dang_tai"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Đăng tải
        </button>
        <ModalTepRiengTu />
      </div>
      <div className="tep_rieng_tu_line_2">
        <section className="tep_rieng_tu_line_2_selc_input">
          <div className="select_main">
            <select className="select_the_loai_one">
              <option selected disabled>
                Thể loại
              </option>
              <option>Mp4</option>
              <option>Mp3</option>
              <option>Doc</option>
              <option>Pptx</option>
              <option>Xlsx</option>
            </select>
            <section className="img_select">
              <img src={arrow} alt="..." />
            </section>
          </div>
          <div className="input_tep_rieng_tu">
            <input
              type="text"
              placeholder="Tìm tên người chỉnh sửa"
              onChange={onSearch}
            />
            <img src={fi_search} alt="..." placeholder="Tìm kết quả theo tên" />
          </div>
        </section>
        <div className="tep_rieng_tu_line_2_table">
          <TableRepRiengTu
            allFilePrivate={allFilePrivate}
            loading={loading}
            search={search}
          />
        </div>
      </div>
    </>
  );
}
