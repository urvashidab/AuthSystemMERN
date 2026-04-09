import React from "react";
import { FaGithub, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border py-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        {/* left — branding */}
        <p className="text-xs tracking-[0.3em] uppercase text-mutedText">
          © {year} Urvashi — All Rights Reserved
        </p>

        {/* center — tagline */}
        {/* <p className="text-xs tracking-[0.2em] uppercase text-mutedText ">
          Built by a human, not AI. Probably.
        </p> */}

        {/* right — social icons */}
        <div className="flex gap-6 text-base text-mutedText">
          <a
            href="https://github.com/urvashidab"
            target="_blank"
            rel="noreferrer"
            className="hover:text-bodyText transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://instagram.com/yourname"
            target="_blank"
            rel="noreferrer"
            className="hover:text-bodyText transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com/yourname"
            target="_blank"
            rel="noreferrer"
            className="hover:text-bodyText transition"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://facebook.com/yourname"
            target="_blank"
            rel="noreferrer"
            className="hover:text-bodyText transition"
          >
            <FaFacebookF />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
