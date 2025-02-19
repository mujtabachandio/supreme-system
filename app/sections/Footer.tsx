import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <span style={{ fontFamily: "var(--font-audiowide), sans-serif" }} className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                MUJTABA
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4">
            <div>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link href="#home" className="hover:underline">Home</Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link href="#about" className="hover:underline">About</Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link href="#skills" className="hover:underline">Skills</Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link href="#projects" className="hover:underline">Projects</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2025 MUJTABA. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:mt-0 space-x-5">
            <Link href="https://x.com/MujtabaChandi0" target='_blank' className="text-gray-500 hover:text-white duration-300 dark:hover:text-white">Twitter</Link>
            <Link href="https://github.com/mujtabachandio?tab=repositories" target='_blank' className="text-gray-500 hover:text-white duration-300 dark:hover:text-white">GitHub</Link>
            <Link href="https://www.linkedin.com/in/mujtaba-chandio-dev/" target='_blank' className="text-gray-500 hover:text-white duration-300 dark:hover:text-white">LinkedIn</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
