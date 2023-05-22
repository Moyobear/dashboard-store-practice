import React from "react";
import {
  RiHome3Line,
  RiStore2Line,
  RiCompass4Line,
  RiPieChart2Line,
  RiMailLine,
  RiNotification2Line,
  RiLoginBoxLine,
  RiSettings2Line,
} from "react-icons/ri";

export default function Sidebar({ showMenu }) {
  return (
    <div
      className={`bg-[#1f1d2b] fixed lg:left-0 top-0 w-24 h-full flex flex-col justify-between py-6 rounded-tr-xl rounded-br-xl z-50 transition-all ${
        showMenu ? "left-0" : "-left-full"
      }`}
    >
      <div>
        {/* <h1 className="text-2xl text-gray-300 uppercase font-bold text-center my-5">
          Logo
        </h1> */}
        <div className="flex justify-center rounded-xl">
          <RiStore2Line className="text-3xl text-[#ec7c6a]/50 uppercase font-bold text-center my-5" />
        </div>
        <ul className="pl-3">
          <li className="bg-[#262837] p-3 rounded-tl-xl rounded-bl-xl">
            <a
              href="#"
              className="bg-[#ec7c6a] p-3 flex justify-center rounded-xl text-white"
            >
              <RiHome3Line className="text-2xl" />
            </a>
          </li>
          <li className="hover:bg-[#262837] p-3 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a] p-3 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <RiCompass4Line className="text-2xl" />
            </a>
          </li>
          <li className="hover:bg-[#262837] p-3 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a] p-3 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <RiPieChart2Line className="text-2xl" />
            </a>
          </li>
          <li className="hover:bg-[#262837] p-3 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a] p-3 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <RiMailLine className="text-2xl" />
            </a>
          </li>
          <li className="hover:bg-[#262837] p-3 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a] p-3 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <RiNotification2Line className="text-2xl" />
            </a>
          </li>
          <li className="hover:bg-[#262837] p-3 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a] p-3 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <RiSettings2Line className="text-2xl" />
            </a>
          </li>
        </ul>
      </div>
      <div>
        <ul className="pl-3">
          <li className="hover:bg-[#262837] p-3 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a] p-3 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <RiLoginBoxLine className="text-2xl" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
