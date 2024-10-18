"use client";
import { Menu, X } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Nav from "./Nav";
import Sidebar from "./Sidebar";

const collegeLogo = "/assets/logo/PJC.png";
const bssLogo = "/assets/logo/BSS_logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = () => {
    setIsVisible(!isVisible);
    setIsOpen(!isOpen);
  };

  const boxRef = useRef(null);

  useEffect(() => {
    if (isVisible) {
      gsap.to(boxRef.current, {
        duration: 0.25,
        opacity: 1,
        visibility: "visible",
        height: "auto",
        display: "block",
      });
    } else {
      gsap.to(boxRef.current, {
        duration: 0.25,
        opacity: 0,
        visibility: "hidden",
        height: 0,
        display: "none",
      });
    }
  }, [isVisible]);

  return (
    <>
      <div className=" min-[200px]:max-[1180px]:fixed min-[200px]:max-[1180px]:w-full z-50 bg-orange-700 text-white">
        <div
          id="head"
          className="     flex h-14    pl-4 pr-4 desk:h-full  desk:justify-center desk:pt-2.5 desk:pb-2.5"
        >
          <div>
            <div className="hidden desk:block">
              <Link href="/">
                <Image
                  src={collegeLogo}
                  className="top-0 left-0 "
                  width={128}
                  height={128}
                  alt="collegeLogo"
                />
              </Link>
            </div>
          </div>
          <div className="  bg items-center justify-between max-[1180px]:w-full flex desk:pl-32 desk:pr-32 ">
            <div className="">
              <Link href="/">
                <p className="  font-inter font-semibold text-xl desk:font-bold desk:text-5xl desk:font-poppins  desk:uppercase desk:tracking-[.18em] desk:text-center">
                  Pranab Jubilee College
                </p>
              </Link>
              <p className="font-roboto text-base leading-5 text-center hidden desk:block desk:mt-[5px]">
                Affiliated to Assam University, Silchar <br />
                Managed by Bharat Sevashram Sangha <br />
                Pranab Vidyapith Campus, Bokajan - 782480, KarbiAnglong (Assam)
              </p>
            </div>
            <button className="right-0 desk:hidden" onClick={handleToggle}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
          <div className="hidden desk:block">
            <Image
              className="object-contain"
              width={128}
              height={128}
              src={bssLogo}
              alt="bssLogo"
            />
          </div>
        </div>
        {/*calling nav element for desktop, its hidden for mobile  */}
        <div className="desk:hidden min-[200px]:max-[1180px]:z-50" ref={boxRef}>
          {isVisible && <Sidebar onLinkClick={handleToggle} />}
        </div>
      </div>
      <Nav />
    </>
  );
};

export default Header;
