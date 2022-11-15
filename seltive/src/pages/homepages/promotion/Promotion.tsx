import React from "react";

const Promotion = () => {
  const styles = {
    backgroundColor: "white",
    paddingLeft: "208px",
    paddingRight: "208px",
    paddingTop: "56px",
    paddingBottom: "56px",
    borderRadius: "5px",
  };
  return (
    <div className="p-5">
      <h1 className="text-gray-700 font-semibold text-2xl">Promotion</h1>
      <p className="mb-10 text-gray-500">
        Setup promotions for your customers, either on the entire store or
        specific products
      </p>
      <div className="flex  flex-wrap gap-5 max-w-5xl ">
        <div style={styles} className="shadow-sm"></div>
        <div className="shadow-sm" style={styles}></div>
        <div className="shadow-sm" style={styles}></div>
        <div className="shadow-sm" style={styles}></div>
        <div className="shadow-sm" style={styles}></div>
        <div className="shadow-sm" style={styles}></div>
      </div>
    </div>
  );
};

export default Promotion;
