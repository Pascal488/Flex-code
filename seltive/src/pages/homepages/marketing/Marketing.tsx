import React from "react";
import { Googleicon } from "../../authpages/Signin";
import { BsFacebook, BsLinkedin, BsPinterest, BsTwitter } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { FiLink } from "react-icons/fi";

const Marketing = () => {
  const styles = {
    maincontainer: {
      display: "flex",
      justifyContent: "space-around",
      gap: "20px",
    },
    container: {
      display: "flex",
      justifyContent: "space-around",
      padding: "6px",
      width: "160px",
      alignItems: "center",
      borderRadius: "2px",
      cursor: "pointer",
    },
    textstyle: {
      fontWeight: "600",
    },
  };
  return (
    <div className="p-5 ">
      <h1 className="text-gray-700 font-semibold text-2xl dark:text-blue-500">Marketing</h1>
      <p className="mb-10 text-gray-500 dark:text-gray-400">
        Integrate various digital marketing tools
      </p>
      <div style={styles.maincontainer}>
        <div className="transition ease-in-out delay-150 flex flex-wrap gap-5 max-w-3xl ">
          <div style={styles.container} className="bg-white dark:bg-slate-900 shadow-md ">
            <span className="text-2xl">{Googleicon}</span>
            <span style={styles.textstyle} className="dark:text-blue-500">Google Ads</span>
          </div>
          <div style={styles.container} className="bg-white dark:bg-slate-900 shadow-md ">
            <span className="text-xl text-blue-500">
              <BsFacebook />
            </span>
            <span className="dark:text-blue-500">Facebook Ads</span>
          </div>
          <div style={styles.container} className=" bg-white dark:bg-slate-900 shadow-md ">
            <span className="text-xl text-blue-600">
              <BsLinkedin />
            </span>
            <span style={styles.textstyle} className=" dark:text-blue-500">LinkedIn Ads</span>
          </div>
          <div style={styles.container} className="bg-white dark:bg-slate-900 shadow-md ">
            <span className="text-xl text-red-600">
              <BsPinterest />
            </span>
            <span style={styles.textstyle} className="dark:text-blue-500">Pinterest Ads</span>
          </div>
          <div style={styles.container} className="bg-white dark:bg-slate-900 shadow-md ">
            <span className="text-xl">
              <FaTiktok />
            </span>
            <span style={styles.textstyle} className="dark:text-blue-500">TikTok Ads</span>
          </div>
          <div style={styles.container} className=" bg-white dark:bg-slate-900 shadow-md ">
            <span className="text-xl text-blue-500">
              <BsTwitter />
            </span>
            <span style={styles.textstyle} className="dark:text-blue-500">Twitter Ads</span>
          </div>
          <div style={styles.container} className="bg-white dark:bg-slate-900 shadow-md ">
            <span className="text-2xl text-indigo-700">
              <HiMail />
            </span>
            <span style={styles.textstyle} className="dark:text-blue-500">Email Marketing</span>
          </div>
          <div style={styles.container} className="bg-white dark:bg-slate-900 shadow-md ">
            <span className="text-xl text-indigo-700">
              <FiLink />
            </span>
            <span style={styles.textstyle} className="dark:text-blue-500" >Affiliate Marketing</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
