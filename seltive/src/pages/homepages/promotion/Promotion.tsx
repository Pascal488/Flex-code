import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BsFillLightningChargeFill } from "react-icons/bs";
import {
  HiCollection,
  HiColorSwatch,
  HiGift,
  HiReceiptTax,
} from "react-icons/hi";
import { HiArchiveBox } from "react-icons/hi2";

const Promotion = () => {
  const styles = {
    outer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "white",
      width: "416px",
      gap: "12px",
      padding: "12px",
      borderRadius: "5px",
      maxWith: "50%",
    },
    innner: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "80px",
      height: "80px",
      borderRadius: "5px",
    },
    honeelement: {
      color: "rgb(75 85 99 / var(--tw-text-opacity))",
      marginBottom: "4px",
      fontWeight: "600",
    },
  };
  return (
    <div className="p-5">
      <h1 className="text-gray-700 font-semibold text-2xl">Promotion</h1>
      <p className="mb-10 text-gray-500">
        Setup promotions for your customers, either on the entire store or
        specific products
      </p>
      <div className="flex  flex-wrap gap-5 max-w-5xl ">
        <div
          className="shadow-sm transition ease-in-out delay-150 hover:scale-105 hover:duration-300 cursor-pointer"
          style={styles.outer}
        >
          <div style={styles.innner} className="bg-red-200">
            <HiGift className="text-5xl text-red-700" />
          </div>
          <div>
            <h1 style={styles.honeelement}>
              Contest, Sweepstakes, or giveaways
            </h1>
            <p className="max-w-[300px] text-xs text-gray-500 font-extrabold">
              Run a giveaway contest to your customers for a chance to win your
              product or products as prize.
            </p>
          </div>
        </div>

        <div
          className="shadow-sm transition ease-in-out delay-150 hover:scale-105 hover:duration-300 cursor-pointer"
          style={styles.outer}
        >
          <div style={styles.innner} className="bg-indigo-200">
            <BsFillLightningChargeFill className="text-5xl text-indigo-700" />
          </div>
          <div>
            <h1 style={styles.honeelement}>Flash Sale</h1>
            <p className="max-w-[300px] text-xs text-gray-500 font-extrabold">
              Provide a high value product at a discount price for a limited
              amount of time.
            </p>
          </div>
        </div>
        <div
          className="shadow-sm transition ease-in-out delay-150 hover:scale-105 hover:duration-300 cursor-pointer"
          style={styles.outer}
        >
          <div style={styles.innner} className="bg-green-200">
            <HiArchiveBox className="text-5xl text-green-700" />
          </div>
          <div>
            <h1 style={styles.honeelement}>Free or Low-priced Samples</h1>
            <p className="max-w-[300px] text-xs text-gray-500 font-extrabold">
              Offer free samples or low-priced samples of your premium product
              to potential customers.
            </p>
          </div>
        </div>
        <div
          className="shadow-sm transition ease-in-out delay-150 hover:scale-105 hover:duration-300 cursor-pointer"
          style={styles.outer}
        >
          <div style={styles.innner} className="bg-yellow-200">
            <HiColorSwatch className="text-5xl text-yellow-700" />
          </div>
          <div>
            <h1 style={styles.honeelement}>Deals</h1>
            <p className="max-w-[300px] text-xs text-gray-500 font-extrabold">
              Offer great deals to your cutomers and increase your purchases.
            </p>
          </div>
        </div>
        <div
          className="shadow-sm transition ease-in-out delay-150 hover:scale-105 hover:duration-300 cursor-pointer"
          style={styles.outer}
        >
          <div style={styles.innner} className="bg-gray-200">
            <HiCollection className="text-5xl text-gray-700" />
          </div>
          <div>
            <h1 style={styles.honeelement}>Exclusive Cross-Sale</h1>
            <p className="max-w-[300px] text-xs text-gray-500 font-extrabold">
              Offer an exclusive product that is only available when a customer
              purchase something specific.
            </p>
          </div>
        </div>
        <div
          className="shadow-sm transition ease-in-out delay-150 hover:scale-105 hover:duration-300 cursor-pointer"
          style={styles.outer}
        >
          <div style={styles.innner} className="bg-red-200">
            <HiReceiptTax className="text-5xl text-red-700" />
          </div>
          <div>
            <h1 style={styles.honeelement}>Coupons or Discounts</h1>
            <p className="max-w-[300px] text-xs text-gray-500 font-extrabold">
              Set up expiring coupons that are delivered to prospects or
              customers at strategic times
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
