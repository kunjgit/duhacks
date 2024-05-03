"use client";
import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";

import {
  FaDiscord,
  FaInstagram,
  FaLinkedinIn,
  FaMailBulk,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const SOCIALS = {
    instagram: "https://instagram.com/duhacks2022?igshid=YmMyMTA2M2Y=",
    discord: "https://discord.gg/T2fzD8c2j2",
    linkedin: "https://www.linkedin.com/company/duhacks/",
    twitter: "https://twitter.com/DuHacks?t=CPjNJmQX1JxhIHb_YI0Tuw&s=09",
    email: "mailto:contact@duhacks.tech",
    mail: "contact@duhacks.tech",
  };

  return (
    <footer className="mt-24 pt-5 lg:pt-8 pb-2 lg:pb-8 bg-black bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20">
      <div className="flex flex-col">
        <div className="lg:hidden flex justify-center mb-7 font-bold"/>
      
        <div className="flex justify-center text-sm lg:text-3xl space-x-4 mb-9">
          <a href="https://discord.gg/T2fzD8c2j2">
            <span className="sr-only">Discord</span>
           <FaDiscord/>
          </a>
          <div className=" border-r-2 transform rotate-12 " />
          <a href="https://twitter.com/DuHacks">
            <span className="sr-only">Twitter</span>
            <FaXTwitter/>

          </a>
          <div className=" border-r-2 transform rotate-12" />

          <a href="https://www.linkedin.com/company/duhacks/">
            <span className="sr-only ">LinkedIn</span>
            <FaLinkedinIn/>

          </a>
          <div className=" border-r-2 transform rotate-12" />

          <a href="https://www.youtube.com/@duhacks9111">
            <span className="sr-only">YouTube</span>
            <FaYoutube/>
          </a>
          <div className=" border-r-2 transform rotate-12" />

          <a href="https://instagram.com/duhacks2024">
            <span className="sr-only">Instagram</span>
            <FaInstagram/>
          </a>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-8 lg:gap-y-0 xl:gap-x-36 items-center justify-around text-xs xl:text-sm">
            <div className="lg:grid grid-cols-3 text-center hidden">
            <a  href="mailto:gdsc@ddu.ac.in">
                Contact Us
            </a>
             <a href="https://discord.gg/T2fzD8c2j2" target="_blank" rel="noreferrer">Join Discord</a>
            </div>
            <div className="flex justify-center">
              <img
                src="/assets/images/dsc.png"
                alt="DSC"
                className="w-44 lg:w-56"
              />
            </div>
            <div className="mx-5 lg:mx-0 text-center">
              Copyrights © 2023. All rights reserved by DUHacks 3.0
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
