import { IconBrandGithub, IconBrandLinkedin, IconBrandX } from '@tabler/icons-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="w-full relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="py-20">
            <div className="py-8 text-center">
              <h3 className="font-manrope text-3xl text-white font-bold mb-4">
                Let&apos;s Connect
              </h3>
              <p className="text-gray-500">
                I am always open to new opportunities and collaborations. Feel free to reach out to me.
              </p>
            </div>
            
            <div className="flex justify-center items-center gap-3">
              <Link
                href="/Contact"
                className="bg-indigo-600 rounded-full shadow-md py-3 px-6 flex items-center gap-2 transition-all duration-500 text-sm text-white hover:bg-indigo-700"
              >
                Get started
              </Link>
            </div>
          </div>
          
          <div className="py-7 border-t border-gray-200">
            <div className="flex items-center justify-center flex-col gap-7 lg:justify-between lg:flex-row">
              <span className="text-sm text-gray-500">
                © <Link href="/" className="hover:underline">Mujtaba Chandio</Link> 2025, All rights reserved.
              </span>
              <ul className="flex items-center text-sm text-gray-500 gap-9">
                <li><Link href="https://x.com/MujtabaChandi0" className="hover:underline"><IconBrandX /></Link></li>
                <li><Link href="https://www.linkedin.com/in/mujtaba-chandio-dev/" className="hover:underline"><IconBrandLinkedin /></Link></li>
                <li><Link href="https://github.com/mujtabachandio" className="hover:underline"><IconBrandGithub /></Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
