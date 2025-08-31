import React from 'react'

export default function Achievements() {
  const achiverment = [
    {
      img: "achievements/leetcode.png",
      title: "LeetCode",
      year: "2025",
      tag: "Data Structure & Algorithm",
      description: "Top 10.14% | Highest rating 1777",
      link: "https://leetcode.com/u/A_Ringer/",
    },
    {
      img: "achievements/codeforces.svg",
      title: "CodeForces",
      year: "2025",
      tag: "Competitive Programming",
      description: "Specialist, Highest Rating : 1457",
      link: "https://codeforces.com/profile/A_Ringer22",
    },
    {
      img: "achievements/codechef.png",
      title: "CodeChef",
      year: "2025",
      tag: "Competitive Programming",
      description: "3⭐️, Highest Rating : 1795",
      link: "https://www.codechef.com/users/appu_224",
    },
    {
      img: "achievements/gfg.svg",
      title: "GeeksForGeeks",
      year: "2025",
      tag: "Data Structure & Algorithm",
      description: "IIT Ropar 6th Rank",
      link: "https://www.geeksforgeeks.org/user/a_ringer22/",
    },
    {
      img: "achievements/research.png",
      title: "Researcg Paper",
      year: "2025",
      tag: "Research",
      description: "SLM as an Adaptive Cache Layer for LLMs",
      link: "https://openreview.net/forum?id=f7ymGDiNRu",
    },
    {
      img: "achievements/research.png",
      title: "Researcg Paper",
      year: "2025",
      tag: "Research",
      description: "Pose2Talk: Egocentric Emotion Recognition and Real-Time Conversational Support in AR ",
      link: "https://openreview.net/forum?id=cYHHOmTmck",
    },
    {
      img: "achievements/gold.jpeg",
      title: "Gold Medalist",
      year: "2023",
      tag: "Sports",
      description: "1st Position | Weightlifting in IIT Mandi Sports Fest (Ranneeti)",
      link: "",
    },
    {
      img: "achievements/trophy.jpeg",
      title: "Trophy Winner",
      year: "2023",
      tag: "Sports",
      description: "2nd Position | 11 KM Merathon in IIT Ropar",
      link: "",
    },
    {
      img: "achievements/bronze.jpeg",
      title: "2 Bronze Medalist",
      year: "2023 and 2024",
      tag: "Sports",
      description: "3rd Position | Football in IIT Ropar Sports Fest (IYSC)",
      link: "",
    },
  ]

  return (
    <div id="Achievements_page" className='flex flex-col p-10 gap-10 items-center justify-center bg-gradient-to-b from-black to-gray-700'>
        <h1 className='flex justify-center text-white text-5xl font-[400] ' >Achievement</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full'>
          {achiverment.map((achive, i) => {
            return (
              <div key={i} className='flex flex-col justify-center items-center gap-4 bg-gray-700 p-5 m-5 rounded-lg shadow-lg hover:scale-105 ease-in duration-300'>
                <img src={achive.img} alt={achive.title} className='w-full h-40 object-contain'/>
                <h1 className='text-white text-2xl font-[500]'>{achive.title} <span className='text-green-300'>({achive.year})</span></h1>
                <h2 className='text-gray-300 text-md font-[300]'>{achive.tag}</h2>
                <p className=' text-white text-lg font-[400]'>{achive.description}</p>
                {achive.link && <a href={achive.link} target="_blank" rel="noopener noreferrer" className='text-blue-500 hover:underline'>View More</a>}
              </div>
            )
          })}
        </div>
    </div>
  )
}
