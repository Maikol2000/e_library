import React, { useState } from "react";
import "./style.css";
//mui
import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
//img
import laptop from "../../../../../assets/img/laptop.jpg";
import play_Circle from "../../../../../assets/img/play_Circle (1).png";
import Frame1 from "../../../../../assets/img/Frame 502.png";
import Frame2 from "../../../../../assets/img/Frame 506.png";
import chevron_duo_left from "../../../../../assets/img/chevron_duo_left.png";
import fi_chevrons_right from "../../../../../assets/img/fi_chevrons-right.png";
import HoiDap from "./hoiDap/HoiDap";

export default function XemMonHoc(props: any) {
  const { giangVien, maMonHoc, tenMonHoc, moTa } = props.location.state;
  //set up mui
  const [value, setValue] = React.useState("1");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  //show or hide
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const genderText = () => {
    if (!isOpen) {
      return moTa.slice(0, 100);
    }
    return moTa;
  };

  return (
    <div className="xem_mon_hoc">
      <div className="xem_mon_hoc_left">
        <section className="video_doc">
          <section className="top_video">
            <img src={Frame1} alt="..." />
            <img src={Frame2} alt="..." />
          </section>
          <section className="bottom_video">
            <p>
              {maMonHoc} - Giới thiệu chung về {tenMonHoc} - GV: {giangVien}
            </p>
          </section>
          <img className="video_doc_img_one" src={laptop} alt="..." />
          <img className="video_doc_img_two" src={play_Circle} alt="..." />
        </section>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Tổng quan" value="1" />
                <Tab label="Hỏi đáp" value="2" />
                <Tab label="Thông báo môn học" value="3" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <section className="tong_quan_select_one">
                <p>Giảng viên:</p>
                <p>Mô tả:</p>
              </section>
              <section className="tong_quan_select_two">
                <p>{giangVien}</p>
                <p>{genderText()}</p>
                {moTa.length > 100 && (
                  <p className="custom_btn_show_hide" onClick={toggle}>
                    {isOpen ? "Thu lại " : "Xem thêm "}
                    {isOpen ? (
                      <img src={chevron_duo_left} alt="..." />
                    ) : (
                      <img src={fi_chevrons_right} alt="..." />
                    )}
                  </p>
                )}
              </section>
            </TabPanel>
            <TabPanel value="2">
              <HoiDap />
            </TabPanel>
            <TabPanel value="3">Item Three</TabPanel>
          </TabContext>
        </Box>
      </div>
      <div className="xem_mon_hoc_right"></div>
    </div>
  );
}
