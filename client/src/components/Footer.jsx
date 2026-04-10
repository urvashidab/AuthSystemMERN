import React from "react";
import { socialIcons } from "../assets/data";
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
          {socialIcons.map((socialIcon) => (
            <a
              key={socialIcon.id}
              href={socialIcon.url}
              target="_blank"
              rel="noreferrer"
              className="hover:text-bodyText transition"
            >
              {socialIcon.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
