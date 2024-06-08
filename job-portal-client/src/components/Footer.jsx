import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6';
import { FcSearch } from "react-icons/fc";

export default function Footer() {
  return (
    <>
    <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <FcSearch className='text-blue text-3xl font-bold'/>
      <span className="ml-3 text-xl text-blue">Job Portal</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2024 Job Portal — Soumen Jana
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a className="text-gray-500">
       <FaFacebook/>
      </a>
      <a className="ml-3 text-gray-500">
        <FaTwitter/>
      </a>
      <a className="ml-3 text-gray-500">
        <FaInstagram/>
      </a>
      <a className="ml-3 text-gray-500">
        <FaLinkedin/>
      </a>
    </span>
  </div>
</footer>
    </>
  )
}
