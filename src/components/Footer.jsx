import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import styles from "../styles.js";

const Footer = () => {
  return (
    // 01122533180 & 01025771991
    <>
      <div className={`${styles.boxWidth} ${styles.flexCenter}`}>
        <ul className={`${styles.flexCenter} list-none`}>
          <li className={`${styles.padding}`}>
            <a href="mailto:abdelghanymohamed81@gmail.com" target={"_blank"}>
              <i class="fa-duotone fa-envelopes-bulk text-white text-2xl cursor-pointer"></i>
            </a>
          </li>
          <li className={`${styles.padding}`}>
            <a href="tel:01122533180" target={"_blank"}>
              <i class="fa-duotone fa-phone text-white text-2xl cursor-pointer"></i>
            </a>
          </li>
          <li className={`${styles.padding}`}>
            <a href="https://www.behance.net/0f87d033" target={"_blank"}>
              <i class="fa-brands fa-square-behance text-white text-2xl cursor-pointer"></i>
            </a>
          </li>
        </ul>
      </div>
      <section className={`${styles.flexCenter} flex-col`}>
        <img src={logo} className="w-[102px] h-[47px]" alt="hoobank" />
        <p className=" mb-6 text-dimWhite text-[15px] leading-[25px] font-extralight capitalize">
          ©2022 Abd-Elghany Mohmamed All Rights reserved
        </p>
      </section>
    </>
  );
};

export default Footer;
