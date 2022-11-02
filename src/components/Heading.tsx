import React, { FC } from 'react'
import ResumeDownloadButton from './ResumeDownloadButton';
import Hamburger from './Hamburger'

const Heading: FC = () => {

  return (
    <div className={`sticky flex w-full bg-stone-200 dark:bg-zinc-900 top-0 pt-6 pb-6 z-40" ${localStorage.getItem("mode") === "dark"?"darkMode":"lightMode"}`}>
      <div className="w-1/3"></div>
      <div className="flex w-5/12 justify-center items-center">
        <span className="text-gray-500"> 
          &lt;Title&gt; 
        </span> 
        <p className="mx-4 text-2xl font-bold text-black dark:text-slate-50">
          Ninad Sutrave
        </p>
        <span className="text-gray-500"> 
          &lt;/Title&gt; 
        </span>
      </div>
      {
        (window.innerWidth > 1024) ?
        <ResumeDownloadButton /> : <Hamburger />
      }
    </div>
  )
}

export default Heading