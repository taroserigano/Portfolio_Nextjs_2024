import React, { useRef } from "react";
import {
  motion,
  useScroll,
} from "framer-motion";
import LiIcon from "./LiIcon";


const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-primary dark:text-primaryDark"
            href={companyLink}
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm"> {work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (

      <div className="my-64">
        <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
          Experience
        </h2>

        <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
          <motion.div
            className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
            style={{ scaleY: scrollYProgress }}
          />
          <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
            <Details
              position="Fullstack Dev - Solutions Specialist "
              company="Deloitte"
              companyLink="https://www2.deloitte.com/us/en.html"
              time="2023-Present"
              address="Austin, Texas"
              work="Worked for various clients including IRS, State of Texas and Corteva developing both on the frontend and backend using tech stack such as React, Redux, Node & Express, Springboot, MongoDB, GraphQL and SQL."
            />

            <Details
              position="Software Engineer - Associate"
              company="JPMorgan Chase & Co."
              companyLink="https://www.jpmorgan.com/global"
              time="2021-2023"
              address="Chicago, IL"
              work="Worked in a team responsible for developing a mortgage trading application using React,, Springboot, Node & Express and SQL on the cloud platform. Also worked on trading engine system using Python."
            />

            <Details
              position="Software Developer"
              company="Glocalize"
              companyLink=""
              time="2018-2021"
              address="Remote"
              work="Developed new applications using HTML, CSS, Bootstrap, React and Redux to build core responsive UI components. Also worked on building backend restful APIs."
            />

            <Details
              position="Fullstack Web Developer"
              company="Freelance"
              companyLink=""
              time="2016-2017"
              address="Los Angeles, CA"
              work="Design and develop a variety of web and software applications for various clients using React, Redux, Node, SQL, MongoDB, SQL and AWS."
            />


          </ul>
        </div>
        </div>
    );
};

export default Experience;
