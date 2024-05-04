"use client";

import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="p-5 lg:p-20 flex flex-wrap gap-10 justify-between">
        <div className="flex items-center">
          <img className="w-[400px]" src="https://mindyweiss.com/wp-content/themes/mindy-weiss-2020/img/logo.svg" />
        </div>
        <div className="flex gap-3 items-center">
          <a
            href="https://example.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook />
          </a>
          <a
            href="https://example.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram />
          </a>
          <a
            href="https://example.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter />
          </a>
          <a
            href="https://example.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin />
          </a>
        </div>
      </div>
      <div className="p-5 bg-slate-200 text-center">
        <p>&copy; 2024 Blake. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
