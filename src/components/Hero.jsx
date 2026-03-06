import React from "react"
import { motion } from "framer-motion"
import { styles } from "../styles"
import { ComputersCanvas } from "./canvas"
import { linkedin } from "../assets"

const Hero = () => {
  return (
    <section className="relative w-full sm:h-screen min-h-[400px] mx-auto">

      {/* ===== TEXT CONTENT ===== */}
      <div
        className={`${styles.paddingX} absolute top-[120px] inset-0 max-w-7xl mx-auto flex flex-row items-start gap-5 z-20`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="violet-gradient w-1 sm:h-80 h-40" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Tarmidzi</span>
          </h1>

          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I love to explore and experiment
            <br className="sm:block hidden" />

            {/* DOWNLOAD CV */}
            <a
              href="https://drive.google.com/drive/folders/1y_WrYjtHTEm0pn2IaZ38EpCGtMavmiOa?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#4f8cff] hover:underline hover:text-white transition cursor-pointer mt-2"
            >
              Download my CV <span className="text-sm">↗</span>
            </a>
          </p>
        </div>
      </div>

      {/* ===== MOBILE LINKEDIN ===== */}
      <div className="absolute top-[320px] w-full flex justify-center gap-8 sm:hidden z-20">
        <a
          href="https://www.linkedin.com/in/ahmad-firdaus-tarmidzi-503629221/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} alt="linkedin" className="h-10 w-10" />
        </a>
      </div>

      {/* ===== 3D CANVAS ===== */}
      <div className="absolute inset-0 z-0">
        <ComputersCanvas />
      </div>

      {/* ===== SCROLL INDICATOR ===== */}
      <div className="absolute hidden sm:flex bottom-10 w-full justify-center items-center z-20">
        <a href="#about">
          <div className="w-[32px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>

    </section>
  )
}

export default Hero
