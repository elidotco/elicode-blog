import React, { useEffect, useState, Fragment } from "react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Menu, Transition } from "@headlessui/react";
import { getCategories } from "../services";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

import { CiSearch } from "react-icons/ci";
import { IoMenuOutline } from "react-icons/io5";
import { BiBell } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";

const Header = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // const [category, setCategory] = useState([]);
  // useEffect(() => {
  //   getCategories().then((newcategory) => setCategory(newcategory));
  // }, []);

  // return (
  //   <div className=" font-semibold  text-white    mb-8">
  //     <div className=" w-full flex justify-between items-center nav border-blue-400 lg:py-8 py-5 px-10 capitalize">
  //       <div className="md:float-left ">
  //         <Link prefetch={false} href="/">
  //           <a className="cursor-pointer font-bold lg:text-4xl text-2xl">
  //             EliCode
  //           </a>
  //         </Link>
  //       </div>
  //       <div>
  //         <div className="hidden md:float-left md:flex flex-row text-center items-center">
  //           <Link prefetch={false} href="/">
  //             <a className="px-3 text-center cursor-pointer  ">Home</a>
  //           </Link>

  //           <Link prefetch={false} href="/about">
  //             <a className="px-3 text-center cursor-pointer ">About</a>
  //           </Link>

  //           <Menu as="div" className={dr()}>
  //             <div>
  //               <Menu.Button className="inline-flex w-full justify-center rounded-md font-semibold px-4 py-2 text-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
  //                 Options
  //                 <ChevronDownIcon
  //                   className="ml-2 -mr-1 h-5 w-5 "
  //                   aria-hidden="true"
  //                 />
  //               </Menu.Button>
  //             </div>
  //             <Transition
  //               as={Fragment}
  //               enter="transition ease-out duration-100"
  //               enterFrom="transform opacity-0 scale-95"
  //               enterTo="transform opacity-100 scale-100"
  //               leave="transition ease-in duration-75"
  //               leaveFrom="transform opacity-100 scale-100"
  //               leaveTo="transform opacity-0 scale-95"
  //             >
  //               <Menu.Items className="absolute right-0 mt-2 w-72 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 flex  text-gray-700 justify-center focus:outline-none">
  //                 <div className="px-1 py-4 flex flex-col gap-5  ">
  //                   {category.map((item) => (
  //                     <Menu.Item key={item.slug}>
  //                       <Link
  //                         prefetch={false}
  //                         key={item.slug}
  //                         href={`/category/${item.slug}`}
  //                       >
  //                         <a className="px-2 py-3">{item.name}</a>
  //                       </Link>
  //                     </Menu.Item>
  //                   ))}
  //                 </div>
  //               </Menu.Items>
  //             </Transition>
  //           </Menu>

  //           <Link prefetch={false} href="/contact">
  //             <a className="px-3 text-center cursor-pointer  ">Contact</a>
  //           </Link>
  //           <Link prefetch={false} href="/templates">
  //             <a className="px-3 text-center cursor-pointer  ">Templates</a>
  //           </Link>
  //         </div>
  //       </div>

  //       <div className=" md:hidden">
  //         <span
  //           onClick={() => {
  //             setIsOpen(!isOpen);
  //           }}
  //           className={`animate-spin`}
  //         >
  //           {isOpen ? (
  //             <XMarkIcon className="h-7 w-7" />
  //           ) : (
  //             <Bars3Icon className="h-7 w-7 " />
  //           )}
  //           <span className="sr-only">
  //             {isOpen ? "Close Menu" : "Open Menu"}
  //           </span>
  //         </span>
  //       </div>

  //       <div
  //         className={`${
  //           isOpen ? "flex opacity-100" : "hidden opacity-70"
  //         } mx-auto absolute top-20 z-50  left-0 w-full bg-gray-500 transition  px-4 md:hidden bg-opacity-60`}
  //       >
  //         <div className="w-full bg-gray-100  text-gray-700">
  //           <div className="flex flex-col py-5 px-3 justify-center gap-10">
  //             <div className="flex-col flex border-b text-gray-700 border-blue-400 py-5 gap-3">
  //               {category.map((item) => {
  //                 return (
  //                   <Link
  //                     prefetch={false}
  //                     key={item.slug}
  //                     href={`/category/${item.slug}`}
  //                   >
  //                     <a className="px-1 capitalize py-1">{item.name}</a>
  //                   </Link>
  //                 );
  //               })}
  //             </div>
  //             <div className=" items-center  flex flex-col">
  //               <Link prefetch={false} className="py-3 px-3" href="/">
  //                 <a className="py-1 cursor-pointer ">Home</a>
  //               </Link>
  //               <Link prefetch={false} className="py-3 px-3" href="/about">
  //                 <a className="py-1 cursor-pointer ">About</a>
  //               </Link>
  //               <Link prefetch={false} className="py-3 px-3" href="/contact">
  //                 <a className="py-1 cursor-pointer ">Contact</a>
  //               </Link>
  //               <Link prefetch={false} className="py-3 px-3" href="/templates">
  //                 <a className="py-1 cursor-pointer ">Templates</a>
  //               </Link>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );

  const [isOpen, setIsOpen] = useState(false);
  const menu = [
    {
      name: "blog",
      path: "/blog",
    },
    {
      name: "news",
      path: "/news",
    },
    {
      name: "Tutorials",
      path: "/tutorials",
    },
    {
      name: "template",
      path: "/templates",
    },
    {
      name: "contact Us",
      path: "/contact",
    },
  ];
  return (
    <div
      className="w-full nav  items-center 
    flex-col md:flex-row md:justify-between flex px-5 justify-center mb-10"
    >
      <Link href="/" prefetch={false}>
        <div className="my-5 flex flex-row">
          <span className="text-[25px] font-bold uppercase  cursor-pointer text-black">
            ELicode
          </span>
        </div>
      </Link>
      <div>
        <div
          className={`${
            isOpen
              ? "  absolute h-full top-0 w-full left-0 bottom-0 bg-gray-800  bg-opacity-50 z-50 "
              : "hidden md:block md:static"
          }`}
          onClick={() => setIsOpen(false)}
          onScroll={() => setIsOpen(false)}
        >
          <nav className="hidden  md:block">
            <ul className="flex flex-row gap-x-5">
              {menu.map((item, index) => {
                return (
                  <li
                    className="text-[16px] capitalize font-semibold text-[#878787] "
                    key={index}
                  >
                    <Link
                      href={item.path}
                      legacyBehavior={true}
                      prefetch={false}
                    >
                      <a
                        className=" hover:text-blue-600 hover:transition-all hover:border-b-4 border-blue-700 hover:pb-5 hover:duration-150 duration-150 px-2"
                        href={item.path}
                      >
                        <span>{item.name}</span>
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="fixed bg-gray-600 w-full bg-opacity-50">
            <div className="md:hidden w-4/6 pb-20 bg-white h-full ">
              <div className="flex items-center py-7 justify-between border-b px-4">
                <div className="">
                  <span className="text-2xl uppercase font-bold items-center">
                    ELicode
                  </span>
                </div>

                <span
                  className="text-2xl cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  <AiOutlineClose />
                </span>
              </div>

              <ul
                className="flex px-5
            justify-start
            flex-col"
              >
                {menu.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="py-6 text-lg font-medium text-gray-500 border-b capitalize hover:text-blue-500 hover:text-xl"
                    >
                      <Link
                        href={item.path}
                        legacyBehavior={true}
                        prefetch={false}
                      >
                        <a href={item.path}>
                          <span>{item.name}</span>
                        </a>
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className="px-6 mt-10 border border-blue-600 hover:bg-blue-600 py-2 w-32 h-10 align-middle mx-auto rounded-full text-lg flex items-center justify-center uppercase hover:text-white text-blue-600 hover:transition-all transition-all duration-200 cursor-pointer font-bold">
                subscribe
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-5 flex flex-row gap-x-4 items-center">
        <span className="w-10 h-10 p-2 hover:bg-blue-500 hover:text-white rounded-full bg-slate-200 items-center flex text-xl justify-center">
          <CiSearch />
        </span>
        <span className="w-10 h-10 p-2 hover:bg-blue-500 hover:text-white  rounded-full bg-slate-200 items-center flex text-xl justify-center">
          <BiBell />
        </span>
        <span
          className="w-10 h-10 p-2 hover:bg-blue-500 hover:text-white rounded-full bg-slate-200 items-center flex text-xl justify-center md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <IoMenuOutline />
        </span>
      </div>
    </div>
  );

  function dr() {
    return "relative inline-block text-left z-50";
  }
};

export default Header;
