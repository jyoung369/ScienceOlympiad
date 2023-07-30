'use client'
import Profile from "../components/Profile"
import { Libre_Franklin, Playfair } from 'next/font/google'

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const libre = Libre_Franklin({subsets: ['latin']})
const play = Playfair({
  subsets: ['latin'],
  display: "swap"
})

export default function MeetTeam() {

  const profiles = [
    {id: 1, name: "Allen Chang", role: "President", imgRoute: "/images/blankProfile.jpeg", info: "ANYTHING ANYTHING ANYTHING"},
    {id: 2, name: "Sparsh Kudrimoti", role: "Vice President", imgRoute: "/images/blankProfile.jpeg", info: "ANYTHING ANYTHING ANYTHING"},
    {id: 3, name: "Vidit Pokharna", role: "Finance Officer", imgRoute: "/images/blankProfile.jpeg", info: "ANYTHING ANYTHING ANYTHING"},
    {id: 4, name: "Siva Appana", role: "Build Director", imgRoute: "/images/blankProfile.jpeg", info: "ANYTHING ANYTHING ANYTHING"},
    {id: 5, name: "Sean Ru", role: "Build Director", imgRoute: "/images/blankProfile.jpeg", info: "ANYTHING ANYTHING ANYTHING"},
    {id: 6, name: "Dylan Chandra", role: "Build Director", imgRoute: "/images/blankProfile.jpeg", info: "ANYTHING ANYTHING ANYTHING"},
    {id: 7, name: "Syaam Khandaker", role: "Exam Director", role2: "Physics", imgRoute: "/images/blankProfile.jpeg", info: "ANYTHING ANYTHING ANYTHING"},
    {id: 8, name: "Tonya Melnikova", role: "Exam Director/Chemistry", imgRoute: "/images/blankProfile.jpeg", info: "ANYTHING ANYTHING ANYTHING"},
    {id: 9, name: "Cade Jones", role: "Exam Director/Biology", imgRoute: "/images/blankProfile.jpeg", info: "ANYTHING ANYTHING ANYTHING"},
    {id: 10, name: "Shriya Nayak", role: "Exam Director/Earth Science", imgRoute: "/images/blankProfile.jpeg", info: "ANYTHING ANYTHING ANYTHING"},
    {id: 11, name: "Ashika Srivastava", role: "Logistics/Competitor Logistics", imgRoute: "/images/blankProfile.jpeg", info: "ANYTHING ANYTHING ANYTHING"},
    {id: 12, name: "Morgan Duvall", role: "Logistics/Volunteer Logistics", imgRoute: "/images/blankProfile.jpeg", info: "ANYTHING ANYTHING ANYTHING"},
    {id: 13, name: "Jason Katz", role: "Logistics/Tournament Logistics", imgRoute: "/images/blankProfile.jpeg", info: "ANYTHING ANYTHING ANYTHING"},
    {id: 14, name: "Harsha Gaddipati", role: "Public Relations", imgRoute: "/images/blankProfile.jpeg", info: "ANYTHING ANYTHING ANYTHING"},
    {id: 15, name: "Julie Young", role: "Technology", imgRoute: "/images/blankProfile.jpeg", info: "ANYTHING ANYTHING ANYTHING"},
  ]

  //Stagger animation below was modified from Leigh Halliday's YouTube tutorial titled 'Staggered Animations in React with Framer Motion in 5 Minutes'. The video can be found at this link: https://www.youtube.com/watch?v=u_95SPKE6vg&ab_channel=LeighHalliday

  return (
    <main className="bg-slate-200 dark:bg-black flex flex-col items-center w-screen">
      <AnimatePresence>
      <motion.div
          initial={{opacity:0.5}}
          animate={{opacity:1}}
          transition={{duration:1}}
        >
        <div id="title" className="flex flex-row justify-center bg-[url('/images/background-1.jpg')] w-screen py-10">
          <h1 className= {`${play.className} text-white dark:text-darkBlue dark:bg-white font-bold text-5xl border-4 border-white m-10 p-8 lg:px-48 shadow-lg flex justify-center`}>
           About&nbsp;Us 
          </h1>
          <figure className="hidden lg:block">
            <Image src="images/gtbuilding.jpg" alt="Picture of one of the buildings on Georgia Tech's campus" width="300" height="200" className="mb-2"/>
            <figcaption className="sr-only">Picture of one of the buildings on Georgia Tech's campus</figcaption>
          </figure>
        </div>
        </motion.div>
      <div className="w-screen">
      <p className={`${libre.className} text-lg lg:mx-64 mx-8 text-center p-4 flex justify-center border-4 border-darkBlue dark:text-white mt-4`}>
      Science Olympiad at Georgia Tech is an undergraduate student group with a mission to engage and empower students striving to become scientists and engineers through improving the Science Olympiad experience. 
      <br/>
      <br />
        We work around the year both within Georgia Tech and in the Atlanta area to promote Science Olympiad opportunities for students. We are especially excited to be hosting the Georgia Science Olympiad State Tournament for the 3rd year in a row, and this would not be possible without the dedication and effort of our members!
      </p>
      </div>

      <div id="line" className="border border-black w-[80%] mt-[5vh]">
      </div>

      <h1 className={`text-lightBlue font-mono dark:text-darkBlue dark:bg-lightBlue font-bold text-3xl border-2 border-white m-10 p-6 lg:px-64 shadow-lg bg-darkBlue w-72 flex justify-center ${play.className}`}>
      🐝&nbsp;The&nbsp;Team&nbsp;🐝
      </h1>
      </AnimatePresence>
      <AnimatePresence >
        <div className="lg:mx-72 grid grid-cols-1 twoCol:grid-cols-2 threeCol:grid-cols-3">
          {profiles.map((profile, i) => (
            <motion.div
            key={profile.id}
            initial={{opacity:0.5}}
            whileInView={{opacity:1}}
            transition={{duration:0.2, delay:i*0.1}}
            >
              <Profile name={profile.name} role={profile.role} imgRoute={profile.imgRoute} color={profile.id % 2 === 0} info={profile.info}/>
            </motion.div>
          ))}
          </div>
      </AnimatePresence>
      <hr />
    </main>
  )
}
