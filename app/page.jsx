import React from "react";
import ImageCarausal from "./Components/imageCarausal";
import Image from "next/image";

const president = "/assets/images/BSSpresident.jpg";

const page = () => {
  return (
    <main>
      <section className="flex justify-center gap-5 p-5">
        <div className="flex flex-col items-center justify-center w-1/4 ">
          <div className="p-5 ">
            <p>DOWNLOAD</p>
          </div>
          <marquee behavior="" className="flex justify-center " direction="up">
            <div className="flex flex-col ">
              <a href="#">Comming Soon</a>
              <a href="#">Comming Soon</a>
              <a href="#">Comming Soon</a>
              <a href="#">Comming Soon</a>
              <a href="#">Comming Soon</a>
            </div>
          </marquee>
        </div>
        <div className="w-1/2 ">
          <ImageCarausal />
        </div>
        <div className="flex flex-col items-center justify-center w-1/4 ">
          <div className="p-5 ">
            <p>E-notices</p>
          </div>
          <marquee behavior="" className="flex justify-center " direction="up">
            <div className="flex flex-col ">
              <a href="#">Comming Soon</a>
              <a href="#">Comming Soon</a>
              <a href="#">Comming Soon</a>
              <a href="#">Comming Soon</a>
              <a href="#">Comming Soon</a>
            </div>
          </marquee>
        </div>
      </section>
      <section></section>
      <section></section>
      <section className="flex justify-center p-5">
        <div className="flex flex-col w-2/3 gap-5">
          <div className=" bg-[#880808]">
            <p className="p-5 text-2xl text-center text-white ">
              BSS Secretary Message
            </p>
          </div>
          <div className="flex items-center justify-center ">
            <Image
              src={president}
              className="top-0 left-0 "
              width={303}
              height={303}
              alt="collegeLogo"
            />
          </div>
          <div>
            <p className="font-bold text-center">
              Pranab Jubilee College, Bokajan (estd. 2010) has been striving for
              excellence as a goal in the field of learning with an emphasis of
              developing cognitive, conative and affective domains of the
              learners. With a team of well-qualified and enthusiastic faculty
              along with their diverse experience and expertise, the college is
              fully involved in providing quality education that help learners
              to adapt themselves in this competitive world. The college also
              tries to ensure that our students are equipped with the best of
              skills and knowledge and are ready to play their role as future
              global citizens. Our experiences give us opportunity to take pride
              in motivating our students to explore and develop their interests
              and potential. We also welcome and encourage an open and positive
              communication with parents in the form of
              parent-teacher-interaction, as we see them as rightful partners in
              education of their children...
            </p>
          </div>
        </div>
      </section>
      <section className="flex justify-center p-5 ">
        <div className="flex flex-col w-2/3 gap-5">
          <div className=" bg-[#880808]">
            <p className="p-5 text-2xl text-center text-white ">
              About Our College
            </p>
          </div>

          <div className="flex flex-col gap-6 ">
            <p className="font-bold ">
              Pranab Jubilee College, Bokajan was established in the year 2010
              under the banner of Bharat Sevashram Sangha, with Science and
              Commerce stream. Initially the college started only Higher
              Secondary sections and in the year 2012 it has started B. Com
              (Pass and Honours) course and in the year 2013 it has extended
              Degree classes by starting B.Sc (Pass & Honours) course.
            </p>
            <p className="font-bold ">
              The Pranab Jubilee College is the only degree college with Science
              and Commerce stream in the Bokajan Sub-Division of Karbi Anglong
              District. The Higher Secondary Section of the college is under
              Assam Higher Secondary Education Council, Guwahati and operating
              the Degree Section under Assam University, Silchar.
            </p>
            <p className="font-bold ">
              The College is surrounded by lush of green trees and natural
              beauties which make it unique and provides an ideal atmosphere for
              study. The college is situated just 3 kms (approx) away from the
              Bokajan Railway station and from Sukhanjan market it is only 1/2
              km.
            </p>
            <p className="font-bold ">
              The main objective of the college is to disseminate and advance
              knowledge by providing instructional facilities in the college.
              The college not only provides institutional education but also
              helps the students to build their moral character, ethical and
              social relation and create interest and love for the country as a
              whole.
            </p>
            <p className="font-bold ">
              The college is fast developing and is endowed with amenities /
              facilities such as Hostels (boys and girls), Staff Quarters,
              Health care Centre, Ambulance facilities, Library (where
              sufficient volume of books and journals are available for
              students), Well equipped laboratory, Campus under fully CCTV
              surveillance, Well equipped laboratory, Play ground, Remedial
              Coaching facility for the students, Free and Concessional
              Studentship for poor and meritious students and lot more.
            </p>
            <p className="font-bold ">
              The college is well equipped with experience and dedicated faculty
              members.
            </p>
            <p className="font-bold ">
              During the last years, the college has made impressive strides in
              the establishing itself as a premier institution of learning by
              blending quality education, socially relevant academic endeavours
              and tireless striving for excellence.
            </p>
          </div>
        </div>
      </section>
      <section className="flex justify-center p-5 ">
        <div className="flex flex-col w-2/3 gap-5">
          <div className=" bg-[#880808]">
            <p className="p-5 text-2xl text-center text-white ">
              Courses Offered
            </p>
          </div>

          <div className="flex flex-col gap-14 ">
            <div className="flex flex-col gap-6">
              <p className="font-bold ">Higher Secondary</p>
              <ul className="pl-5 list-disc list-inside ">
                <li>Arts</li>
                <li>Science</li>
                <li>Commerce</li>
              </ul>
            </div>
            <div className="flex flex-col gap-6">
              <p className="font-bold ">FOUR YEAR UG COURSE, AS PER NEP 2020</p>
              <ul className="pl-5 list-disc list-inside ">
                <li> Bachelor of Arts</li>
                <li> Bachelor of Science</li>
                <li> Bachelor of Commerce</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
