import Link from "next/link";

function Footer() {
  return (
    <>
      <div id="anchor" className="anchor bg-[#09090b]">
        <div className="mx-6 py-6 desk:mx-24 desk:pt-[70px] desk:pb-4 text-[#E0D9D9] desk:max-[1919px]:mx-16 desk:max-[1919px]:pt-[50px]">
          <div className="grid grid-cols-2 gap-x-6 gap-y-14 desk:flex desk:justify-between">
            <div className=" min-[200px]:max-[1180px]:order-4 desk:grow-[4] min-[200px]:max-[1180px]:col-span-2">
              <p className="font-inter font-normal text-2xl desk:text-3xl leading-[30px]">
                Pranab Jubilee College
              </p>
              <p className="font-inter font-normal text-sm desk:text-lg leading-[25px] desk:leading-[30px]">
                Bokajan - 782480{" "}
              </p>{" "}
              <p className="font-inter font-normal text-sm desk:text-lg leading-[25px] desk:leading-[30px]">
                KarbiAnglong (Assam){" "}
              </p>{" "}
              <p className="font-inter font-normal text-sm desk:text-lg leading-[25px] desk:leading-[30px]">
                Phone no. 03675-299925
              </p>{" "}
              <p className="font-inter font-normal text-sm desk:text-lg leading-[25px] desk:leading-[30px]">
                Email:{" "}
                <a href="mailto:pranabcollege@yahoo.com">
                  pranabjubileecollege@gmail.com{" "}
                </a>{" "}
              </p>
              <br />
              <br />
            </div>
            <div className=" min-[200px]:max-[1180px]:order-2 desk:grow-[1]">
              <p className="font-inter text-base desk:text-lg font-medium min-[200px]:max-[1180px]:hidden leading-[30px]">
                External Links
              </p>
              <p className="min-[200px]:max-[1180px]:hidden font-inter text-base desk:text-lg font-normal leading-[30px]">
                <a
                  href="https://www.ugc.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:text-white"
                >
                  University Grants Commission
                </a>
              </p>
              <p className="desk:hidden font-inter text-base desk:text-lg font-normal leading-[30px]">
                <a
                  href="https://www.ugc.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  UGC
                </a>
              </p>
              <p className="min-[200px]:max-[1180px]:hidden font-inter text-base desk:text-lg font-normal leading-[30px]">
                <a
                  href="https://ausexamination.ac.in/"
                  target="_blank"
                  className=" hover:text-white"
                  rel="noopener noreferrer"
                >
                  Assam University, Silchar
                </a>
              </p>
              <p className="desk:hidden font-inter text-base desk:text-lg font-normal leading-[30px]">
                <a
                  href="https://ausexamination.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
                AU, Silchar
              </p>
              <Link
                className="font-inter text-base desk:text-lg font-normal leading-[30px]"
                href="/about/aboutUs"
              >
                <p>About us</p>
              </Link>
            </div>
            {/* <div className=" min-[200px]:max-[1180px]:order-3 min-[200px]:max-[1180px]:col-span-2 desk:mt-[28px] desk:grow-[1]">
              <p className="font-inter text-base desk:text-lg font-normal leading-[30px]">
                National Scholarship Program
              </p>
              <p className="font-inter text-base desk:text-lg font-normal leading-[30px]">
                Nagaland State Scholarship
              </p>
              <Link
                href="/library/questionBank"
                className="font-inter text-base desk:text-lg font-normal leading-[30px]"
              >
                <p>Question bank</p>
              </Link>
              <Link
                href="/calender/holidayList"
                className="font-inter text-base desk:text-lg font-normal leading-[30px]"
              >
                <p>Holiday list</p>
              </Link>
            </div> */}
          </div>
          {/* <div className="relative w-full h-[138px] min-[200px]:max-[1180px]:hidden">
            <div
              id="backToTop "
              className="absolute right-0 group transition duration-300 ease-in-out h-full w-[138px] flex items-center justify-center"
            >
              <a
                id="bTT"
                onClick={() => {
                  document
                    .getElementById("bTT")
                    .addEventListener("click", () => {
                      document
                        .getElementById("head")
                        .scrollIntoView({ behavior: "smooth" });
                    });
                }}
                className="transition duration-300 ease-in-out "
              >
                <svg
                  id="btt"
                  className="arrow hover:h-[80px] hover:w-[80px] transition-all duration-300 ease-in-out"
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="32" cy="32" r="32" fill="#BB86FC" />
                  <path
                    d="M48.3494 30.4745C48.123 30.7017 47.8539 30.882 47.5576 31.0051C47.2613 31.1281 46.9437 31.1914 46.6229 31.1914C46.3021 31.1914 45.9844 31.1281 45.6881 31.0051C45.3919 30.882 45.1228 30.7017 44.8963 30.4745L34.4374 20.0156V49.875C34.4374 50.5214 34.1806 51.1414 33.7235 51.5985C33.2664 52.0556 32.6464 52.3125 31.9999 52.3125C31.3534 52.3125 30.7335 52.0556 30.2763 51.5985C29.8192 51.1414 29.5624 50.5214 29.5624 49.875V20.0156L19.0994 30.4745C18.6415 30.9324 18.0205 31.1897 17.3729 31.1897C16.7253 31.1897 16.1042 30.9324 15.6463 30.4745C15.1884 30.0166 14.9312 29.3955 14.9312 28.7479C14.9312 28.1003 15.1884 27.4793 15.6463 27.0214L30.2713 12.3964C30.4978 12.1691 30.7669 11.9888 31.0631 11.8658C31.3594 11.7428 31.6771 11.6794 31.9979 11.6794C32.3187 11.6794 32.6363 11.7428 32.9326 11.8658C33.2289 11.9888 33.498 12.1691 33.7244 12.3964L48.3494 27.0214C48.5767 27.2478 48.757 27.5169 48.88 27.8132C49.003 28.1095 49.0664 28.4271 49.0664 28.7479C49.0664 29.0687 49.003 29.3864 48.88 29.6827C48.757 29.979 48.5767 30.248 48.3494 30.4745Z"
                    fill="black"
                  />
                </svg>
              </a>
            </div>
          </div> */}
          <div
            id="copyright&social"
            className="grid grid-cols-1 gap-6 min-[200px]:max-[1180px]:mt-[30px] desk:flex desk:h-[28px] desk:items-center desk:justify-between"
          >
            <div className="min-[200px]:max-[1180px]:text-sm order-2">
              &#169; Copyright Pranab College,2024. All rights reserved
            </div>
            <div className="  flex gap-x-5 desk:gap-x-2.5 items-center justify-center order-1">
              <span>
                <a
                  href="https://www.facebook.com/pranabanandawomenscollege"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="hover:h-[40px] hover:w-[40px]"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="fill-[#E0D9D9]"
                      d="M12 2.04004C6.5 2.04004 2 6.53004 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85004C10.44 7.34004 11.93 5.96004 14.22 5.96004C15.31 5.96004 16.45 6.15004 16.45 6.15004V8.62004H15.19C13.95 8.62004 13.56 9.39004 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5879 18.0622 20.3856 19.6099 18.5701C21.1576 16.7546 22.0054 14.4457 22 12.06C22 6.53004 17.5 2.04004 12 2.04004Z"
                    />
                  </svg>
                </a>
              </span>
              <span>
                <a
                  href="https://www.instagram.com/pranab_college"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="hover:h-[40px] hover:w-[40px]"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.5 12C2.5 7.522 2.5 5.282 3.891 3.891C5.282 2.5 7.521 2.5 12 2.5C16.478 2.5 18.718 2.5 20.109 3.891C21.5 5.282 21.5 7.521 21.5 12C21.5 16.478 21.5 18.718 20.109 20.109C18.718 21.5 16.479 21.5 12 21.5C7.522 21.5 5.282 21.5 3.891 20.109C2.5 18.718 2.5 16.479 2.5 12Z"
                      stroke="#E0D9D9"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17.508 6.5H17.498M16.5 12C16.5 13.1935 16.0259 14.3381 15.182 15.182C14.3381 16.0259 13.1935 16.5 12 16.5C10.8065 16.5 9.66193 16.0259 8.81802 15.182C7.97411 14.3381 7.5 13.1935 7.5 12C7.5 10.8065 7.97411 9.66193 8.81802 8.81802C9.66193 7.97411 10.8065 7.5 12 7.5C13.1935 7.5 14.3381 7.97411 15.182 8.81802C16.0259 9.66193 16.5 10.8065 16.5 12Z"
                      stroke="#E0D9D9"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </span>
              <span>
                <a
                  href="https://www.youtube.com/channel/UCMWCjcMqk5VPzTAv3dJ0zyQ"
                  target="_blank"
                >
                  <svg
                    className="hover:h-[40px] hover:w-[40px]"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="fill-[#E0D9D9]"
                      d="M10 15L15.19 12L10 9V15ZM21.56 7.17C21.69 7.64 21.78 8.27 21.84 9.07C21.91 9.87 21.94 10.56 21.94 11.16L22 12C22 14.19 21.84 15.8 21.56 16.83C21.31 17.73 20.73 18.31 19.83 18.56C19.36 18.69 18.5 18.78 17.18 18.84C15.88 18.91 14.69 18.94 13.59 18.94L12 19C7.81 19 5.2 18.84 4.17 18.56C3.27 18.31 2.69 17.73 2.44 16.83C2.31 16.36 2.22 15.73 2.16 14.93C2.09 14.13 2.06 13.44 2.06 12.84L2 12C2 9.81 2.16 8.2 2.44 7.17C2.69 6.27 3.27 5.69 4.17 5.44C4.64 5.31 5.5 5.22 6.82 5.16C8.12 5.09 9.31 5.06 10.41 5.06L12 5C16.19 5 18.8 5.16 19.83 5.44C20.73 5.69 21.31 6.27 21.56 7.17Z"
                    />
                  </svg>
                </a>
              </span>
              <span>
                <a href="mailto:pranabcollege@yahoo.com">
                  <svg
                    className="hover:h-[40px] hover:w-[40px]"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.75 3H22.25C23.216 3 24 3.784 24 4.75V18.75C24 19.2141 23.8156 19.6592 23.4874 19.9874C23.1592 20.3156 22.7141 20.5 22.25 20.5H1.75C1.28587 20.5 0.840752 20.3156 0.512563 19.9874C0.184374 19.6592 0 19.2141 0 18.75L0 4.75C0 3.784 0.784 3 1.75 3ZM1.5 7.412V18.75C1.5 18.888 1.612 19 1.75 19H22.25C22.3163 19 22.3799 18.9737 22.4268 18.9268C22.4737 18.8799 22.5 18.8163 22.5 18.75V7.412L12.98 13.845C12.388 14.245 11.612 14.245 11.02 13.845L1.5 7.412ZM1.5 4.75V5.602L11.86 12.602C11.9013 12.6299 11.9501 12.6449 12 12.6449C12.0499 12.6449 12.0987 12.6299 12.14 12.602L22.5 5.602V4.75C22.5 4.6837 22.4737 4.62011 22.4268 4.57322C22.3799 4.52634 22.3163 4.5 22.25 4.5H1.75C1.6837 4.5 1.62011 4.52634 1.57322 4.57322C1.52634 4.62011 1.5 4.6837 1.5 4.75Z"
                      className="fill-[#E0D9D9]"
                    />
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
