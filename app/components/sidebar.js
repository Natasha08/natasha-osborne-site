'use client';

import Link from 'next/link';
import Image from 'next/image';
import profileImage from '@/public/profile_image.jpg';
import {EnvelopeIcon} from '@heroicons/react/24/solid';

const Sidebar = () => (
  <div className="lg:ml-12 lg:fixed lg:left-0 lg:top-0 h-fit justify-between p-4 pl-1 text-white z-10 lg:w-1/3 bg-opacity-0 w-screen col-span-1 lg:col-span-2 main-container">
    <div className="flex flex-col items-center space-y-4">
      <div className="pt-14 flex flex-col items-center justify-center mx-auto">
        <header className="text-center text-4xl pb-10 font-semibold z-20 tracking-wide text-[#f5f5f5]">
          Natasha Osborne
        </header>
        <p className="text-center text-2xl font-medium pb-6 transition-colors duration-300 text-[#d4af37] z-20 hover:text-[#ffcc80]">
          Full Stack Software Engineer
        </p>
        <p className="text-center text-md max-w-96 font-light pt-4 z-20 leading-loose text-[#f5f5f5]">
          Delivering complete app solutions, from database modeling to
          deployment on leading PaaS platforms, and publishing on the Google
          Play and Apple App Stores.
        </p>
        <div className="mt-8 mx-10 h-auto w-auto max-w-96 flex justify-center z-20">
          <div className="relative group">
            <Image
              src={profileImage}
              alt="My profile image"
              className="rounded-lg h-auto w-auto transform transition-transform duration-300 hover:scale-105"
              style={{
                border: '2px solid rgba(212, 175, 55, 0.6)',
                borderRadius: '12px',
                boxShadow:
                  '0px 4px 10px rgba(0, 0, 0, 0.3), 0px 6px 20px rgba(0, 0, 0, 0.6)',
                filter: 'brightness(1.2)',
              }}
              priority
            />

            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-white text-sm">
                <Link href="https://github.com/natasha08" target="_blank">
                  View Profile
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Social Media Links */}
    <div className="flex flex-col items-center space-y-4 pt-8">
      <div className="text-xs leading-relaxed text-[#f5f5f5]">
        © 2024{' '}
        <Link
          href="https://natasha-osborne.dev"
          className="hover:underline hover:text-[#ffdc73]"
        >
          Natasha Osborne
        </Link>
        . All Rights Reserved.
      </div>
      <div className="flex flex-row items-center">
        <Link href="https://github.com/natasha08" target="_blank">
          <Image
            src="/octocat.png"
            alt="Github Logo"
            height={30}
            width={30}
            className="h-auto w-auto"
          />
        </Link>
        <Link href="https://www.linkedin.com/in/natashaosborne/" target="_blank" className="">
          <Image
            src="/LI-Logo.png"
            alt="LinkedIn profile"
            height={50}
            width={50}
            className="h-auto w-auto"
          />
        </Link>
        <Link
          href="mailto: admin@natasha-osborne.dev"
          className="font-medium hover:text-[#ffdc73] hover:underline"
        >
          <EnvelopeIcon className="h-7 w-7 ml-2 top-4 text-gray-500 hover:fill-[#d4af37]" />
        </Link>
      </div>
    </div>
  </div>
);

export default Sidebar;

export const PAGES = [
  {id: 'home', label: 'Home'},
  {id: 'about', label: 'About'},
  {id: 'resume', label: 'Resume'},
];
