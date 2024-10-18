"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import React, { useRef, useState } from "react";
import Link from "next/link";

function Nav() {
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
    if (option === "Secretary's Desk") {
      return "/administration/secretarysDesk";
    }
    if (option === "Principal's Desk") {
      return "/administration/principalsDesk";
    }
    if (option === "Governing Body") {
      return "/management/governingBody";
    }
    if (option === "IQAC") {
      return "/management/IQAC";
    }
    if (option === "Committees & Cell") {
      return "/management/committeesNcell";
    }
    if (option === "Rules & Regulations") {
      return "/management/rulesNregulations";
    }
    if (option === "Courses Offered") {
      return "/academics/coursesOffered";
    }
    if (option === "Admission Procedure") {
      return "/academics/admissionProcedure";
    }
    if (option === "Fees Structure") {
      return "/academics/feeStructure";
    }
    if (option === "Academic Calender") {
      return "/academics/academicCalender";
    }
    if (option === "The Topper's Page") {
      return "/academics/toppersPage";
    }
    if (option === "English") {
      return "/departments/english";
    }
    if (option === "Mathematics") {
      return "/departments/maths";
    }
    if (option === "Physics") {
      return "/departments/physics";
    }
    if (option === "Chemistry") {
      return "/departments/chemistry";
    }
    if (option === "Botany") {
      return "/departments/botany";
    }
    if (option === "Zoology") {
      return "/departments/zoology";
    }
    if (option === "Information Technology") {
      return "/departments/IT";
    }
    if (option === "Commerce") {
      return "/departments/commerce";
    }
    if (option === "Non Teaching Staff") {
      return "/departments/nonTeachingStaff";
    }
    if (option === "Hostel") {
      return "/facilities/hostel";
    }
    if (option === "Canteen") {
      return "/facilities/canteen";
    }
    if (option === "Library") {
      return "/facilities/library";
    }
    if (option === "Sports") {
      return "/facilities/sports";
    }
    if (option === "Laboratory") {
      return "/facilities/laboratory";
    }
    if (option === "Medical") {
      return "/facilities/medical";
    }
    if (option === "Student Grievance Form") {
      return "/studentsCell/studentGrievanceForm";
    }
    if (option === "NSS Unit") {
      return "/studentsCell/nssUnit";
    }
    if (option === "Alumni") {
      return "/studentsCell/alumni";
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

  const handleMouseOver = (nav) => {
    if (navItems[nav]) {
      setCurrentNav(nav);
      gsap.to(boxRef.current, {
        duration: 0.25,
        opacity: 1,
        height: "auto",
        paddingBottom: "36px",
        paddingTop: "36px",
        ease: "power1.inOut",
        display: "block",
      });
    } else {
      console.error(`Invalid nav key: `, nav);
    }
  };

  const handleMouseOut = () => {
    setCurrentNav();
    gsap.to(boxRef.current, {
      duration: 0.25,
      opacity: 0,
      height: 0,
      paddingBottom: 0,
      paddingTop: 0,
      ease: "power1.inOut",
      display: "none",
    });
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
    <>
      <div className="min-[200px]:max-[1180px]:hidden desk:block  desk:pt-1.5 bg-sate-400 desk:sticky top-0 z-[9999] ">
        <div className="relative flex justify-center h-[50px] ">
          <div className="absolute overflow-hidden dark:bg-[#4948481a] bg-[#ffffff1a] bg-opacity-50 backdrop-blur-md rounded-[25px] border-[1px] border-[#666666] ">
            <div className="navStill flex gap-[10px] px-[23px] text-base  cursor-pointer border-b-[0.5px] border-[#666666] ">
              {Object.keys(navItems).map((nav) => (
                <Link href={ifHomeOrContact(nav)} key={nav}>
                  <div
                    key={nav}
                    id={nav}
                    onMouseEnter={() => {
                      handleMouseOver(nav);
                    }}
                    onMouseOut={handleMouseOut}
                    className="item h-[50px]   rounded-full hover:rounded-none px-[13px] flex justify-center items-center font-inter object-contain hover:font-bold  "
                  >
                    {nav.replace(/_/g, " ")}
                  </div>
                </Link>
              ))}
            </div>
            <div
              ref={boxRef}
              id="options"
              onMouseEnter={() => handleMouseOver(currentNav)}
              onMouseLeave={handleMouseOut}
              className="z-50 "
            >
              {currentNav &&
                navItems[currentNav] &&
                navItems[currentNav].map((option) => (
                  <Link href={routedOption(option)} className="">
                    <div
                      key={option}
                      className=" z-50 pl-9 h-[40px] w-full font-semibold   text-2xl font-inter hover:cursor-pointer hover:text-blue-500 transition ease-in-out"
                    >
                      {option}
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
