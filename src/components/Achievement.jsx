import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { publications } from "../constants";
import "./Achievement.scss";

const Publication = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding}`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Some Glimpses on...</p>
          <h2 className={styles.sectionHeadText}>Achievements and Publications.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 justify-center p-6 ${styles.paddingX} gap-7`}>
      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {publications.map((Publication) => (
          <li className='text-white-100 text-[15px] pl-1'>{Publication.title}</li>
        ))}
        </ul>
      </div>
    </div>
  );
};

export default SectionWrapper(Publication, "");