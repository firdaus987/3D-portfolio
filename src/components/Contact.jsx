import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  return (
    <div className="xl:mt-12 xl:flex-row flex flex-col-reverse gap-10 overflow-hidden">
      
      {/* CONTACT INFO */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div className="mt-10 flex flex-col gap-6 text-white text-[16px]">
          
          <div>
            <span className="font-semibold text-secondary">Email</span>
            <p className="mt-1">
              <a
                href="mailto:ahmfirdaus59@gmail.com"
                className="hover:text-white transition"
              >
                ahmfirdaus59@gmail.com
              </a>
            </p>
          </div>

          <div>
            <span className="font-semibold text-secondary">WhatsApp</span>
            <p className="mt-1">
              <a
                href="https://wa.me/6282233814533"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                +62 822-3381-4533
              </a>
            </p>
          </div>

          <div>
            <span className="font-semibold text-secondary">LinkedIn</span>
            <p className="mt-1">
              <a
                href="https://www.linkedin.com/in/ahmad-firdaus-tarmidzi-503629221"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition break-all"
              >
                linkedin.com/in/ahmad-firdaus-tarmidzi
              </a>
            </p>
          </div>

          <div>
            <span className="font-semibold text-secondary">Instagram</span>
            <p className="mt-1">
              <a
                href="https://www.instagram.com/a.firdaus.zi/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                @a.firdaus.zi
              </a>
            </p>
          </div>

          <div>
            <span className="font-semibold text-secondary">Address</span>
            <p className="mt-1 text-white">
              Gresik, East Java (61119)
            </p>
          </div>
        </div>
      </motion.div>

      {/* EARTH CANVAS */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
