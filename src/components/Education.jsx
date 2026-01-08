import React from "react";
import { motion } from "framer-motion";
import { educations } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";

const EducationCard = ({ education, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.3, 0.75)}
    className="bg-[#0f1c2e] border border-[#1f3b64] rounded-xl p-6 min-w-[280px] shadow-lg"
  >
    {/* HEADER */}
    <div className="flex items-center gap-3 mb-3">
      <img
        src={education.icon}
        alt={education.school}
        className="w-12 h-12 object-contain"
      />
      <div>
        <h3 className="text-white font-bold text-[18px]">
          {education.school}
        </h3>
        <p className="text-[#7db9ff] text-[14px]">
          {education.degree}
        </p>
      </div>
    </div>

    {/* DATE */}
    <p className="text-white-100 text-[14px] mb-2">
      {education.date}
    </p>

    {/* SCORE */}
    <p className="text-[#9ecbff] font-semibold mb-3">
      {education.score}
    </p>

    {/* ACTIVITIES */}
    <ul className="list-disc ml-5 space-y-2 text-white-100 text-[14px]">
      {education.activities.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  </motion.div>
);

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Academic Journey</p>
        <h2 className={styles.sectionHeadText}>Education.</h2>
      </motion.div>

      {/* HORIZONTAL (DESKTOP) */}
      <div className="mt-16 hidden md:flex gap-8 overflow-x-auto pb-6">
        {educations.map((education, index) => (
          <EducationCard
            key={index}
            education={education}
            index={index}
          />
        ))}
      </div>

      {/* VERTICAL (MOBILE) */}
      <div className="mt-16 flex flex-col gap-8 md:hidden">
        {educations.map((education, index) => (
          <EducationCard
            key={index}
            education={education}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
