"use client";
import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { Library } from "lucide-react";
import Link from "next/link";

function Sidebar({ onLinkClick }) {
  const boxRef = useRef(null);
  const [currentNav, setCurrentNav] = useState(null);

  const routedOption = (option) => {
    if (option === "The College") {
      return "/aboutUs/theCollege";
    }
    if (option === "Pranabanandaji Maharaj") {
      return "/aboutUs/pranabanandajiMaharaj";
    }
    if (option === "Mission & Vision") {
      return "/aboutUs/missionNvision";
    }
    if (option === "Prayer") {
      return "/aboutUs/prayer";
    }
    return "#";
  };

  const navItems = {
    Home: "",
    About: [
      "The College",
      "Pranabanandaji Maharaj",
      "Mission & Vision",
      "Prayer",
    ],
    Administration: ["Secretary's Desk", "Principal's Desk"],
    Management: [
      "Governing Body",
      "IQAC",
      "Committees & Cell",
      "Rules & Regulations",
    ],
    Academics: [
      "Courses Offered",
      "Admission Procedure",
      "Fees Structure",
      "Academic Calender",
      "The Topper's Page",
    ],
    Departments: [
      "English",
      "Mathematics",
      "Physics",
      "Chemistry",
      "Botany",
      "Zoology",
      "Information Technology",
      "Commerce",
      "Non Teaching Staff",
    ],
    Facilities: [
      "Hostel",
      "Canteen",
      "Library",
      "Sports",
      "Laboratory",
      "Medical",
    ],
    Students_Cell: ["Student Grievance Form", "NSS Unit", "Alumni"],
    Contact: "",
  };

  const handleNavClick = (nav) => {
    if (nav === "Home" || nav === "Contact") {
      return;
    } else {
      if (nav === currentNav) {
        // If the current nav item is clicked again, close it
        setCurrentNav(null);
        gsap.to(boxRef.current, {
          duration: 0.5,
          opacity: 0,
          height: 0,
          paddingBottom: 0,
          paddingTop: 0,
          ease: "power1.inOut",
          display: "none",
        });
      } else {
        // Open the clicked nav item
        setCurrentNav(nav);
        gsap.to(boxRef.current, {
          duration: 0.5,
          opacity: 1,
          height: "auto",
          paddingBottom: "20px",
          paddingTop: "20px",
          ease: "power1.inOut",
          display: "block",
        });
      }
    }
  };

  const ifHomeOrContact = (item) => {
    if (item === "Home") {
      return "/";
    }
    if (item === "Contact") {
      return "/contact";
    }
    return "#";
  };

  return (
    <div className="z-[9999] absolute w-80 h-screen right-0 p-4 overflow-y-auto text-black dark:text-white bg-[#ffffff1a] bg-opacity-50 backdrop-blur-md dark:bg-[#4948481a]">
      <div className="relative z-50">
        {Object.keys(navItems).map((nav) => (
          <div key={nav} className="z-50 ">
            <div
              id={nav}
              onClick={() => handleNavClick(nav)}
              className="z-50 p-4 text-xl font-semibold cursor-pointer font-inter"
            >
              <Link href={ifHomeOrContact(nav)}>{nav.replace(/_/g, " ")}</Link>
            </div>
            {currentNav === nav && (
              <div
                ref={boxRef}
                id="options"
                className="z-50 p-4 font-medium text-black rounded-md dark:text-white text-md"
              >
                {navItems[currentNav].map((option, index) => (
                  <Link href={routedOption(option)}>
                    <div
                      key={index}
                      className="z-50 p-2 pl-5 rounded-md "
                      //   onClick={onLinkClick}
                    >
                      {option}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
