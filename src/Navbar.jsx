import React from "react";
import { Link } from "react-router-dom";
import { BiShoppingBag } from "react-icons/bi";

function Navbar({ TotalCount }) {
  return (
    <div className="py-3 bg-white border-b border-gray-100 md:py-4">
      <div className="  max-w-7xl max-h-[64px] flex items-center justify-between px-5 mx-3 ">
        <img
          className=" w-28 md:w-36"
          src="https://trycasuals.com/wp-content/uploads/2019/06/print-1-1.svg"
          alt="error"
        />
        <div className="flex items-center justify-between space-x-5 ">
          <ul className="md:flex md:space-x-9 md:text-[14px] md:text-gray-500 hidden   ">
            <Link to="" className=" hover:text-primary-500">
              HOME
            </Link>
            <li className=" hover:text-primary-500">ALL PRODUCTS</li>
            <li className=" hover:text-primary-500">ABOUT</li>
            <li className=" hover:text-primary-500">CONTACT</li>
            <li className=" hover:text-primary-500">ACCOUNT</li>
          </ul>

          <Link to="/CartPage">
            <BiShoppingBag className="mb-2 text-4xl md:text-5xl text-primary-500 pointer-cursor" />
          </Link>
          <span className="m-0"> {TotalCount} </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
