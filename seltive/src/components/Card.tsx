import React from "react";
import { AiOutlineStar } from "react-icons/ai";

const Card = () => {
  return (
    <div className="w-[350px] ">
      <img
        src="
               https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80
                "
        alt="Image"
        className="w-[350px] h-[200px] rounded-t-xl bg-black"
      />
      <div className="bg-white w-[350px] p-3 h-[260px] shadow-xl rounded-b-md">
        <span className="flex items-center justify-center gap-1 bg-indigo-200 text-indigo-600 w-20 h-6 rounded-md shadow-sm">
          <AiOutlineStar className="text-yellow-500" />
          4.8 (56)
        </span>

        <ul className="list-none p-2">
          <li className="font-extrabold text-xl text-black">
            Algebra solutions with steps for standard seven students.
          </li>
          <li className="font-semibold text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim
            purus turpis sed id. Facilisis placerat at massa vitae volutpat mus.
            Scelerisque cursus porttitor vel turpis. Adipiscing nec etiam
            adipiscing nunc, risus orci, amet est.
          </li>
        </ul>
        <span className="flex w-full justify-between p-2 items-center">
          <span>TZS 2000</span>
          <button className="bg-indigo-600 w-[70px] h-[30px] rounded-sm text-white">
            BUY
          </button>
        </span>
      </div>
    </div>
  );
};

export default Card;
