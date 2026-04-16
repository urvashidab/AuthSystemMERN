import React from "react";
import { socialIcons } from "../assets/data";
import { MdOutlineMailOutline } from "react-icons/md";
import { LuPhone } from "react-icons/lu";

const Contact = () => {
  return (
    <div className="py-10 w-full">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* ── left side ─────────────────────────────── */}
        <div className="flex flex-col gap-10">
          {/* heading */}
          <div className="flex flex-col gap-3">
            <p className="text-xs tracking-[0.3em] uppercase text-mutedText">
              Get in touch
            </p>
            <div>
              <h2 className="page-title">Let's Talk</h2>
            </div>
            <p className="text-sm text-mutedText font-light leading-relaxed mt-4 max-w-xs">
              Have a question, a suggestion, or just want to say hello? I'd love
              to hear from you.
            </p>
          </div>

          {/* contact details */}
          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <div className="mt-0.5 text-accent">
                <MdOutlineMailOutline size={18} />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-xs uppercase tracking-widest text-mutedText">
                  Email
                </span>
                <a
                  href="mailto:urvashi.ucoe@gmail.com"
                  className="text-sm text-bodyText hover:text-accent transition-colors duration-150 underline underline-offset-4"
                >
                  urvashi.ucoe@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-0.5 text-accent">
                <LuPhone size={18} />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-xs uppercase tracking-widest text-mutedText">
                  Phone
                </span>
                <p className="text-sm text-bodyText">+1 647-965-0612</p>
              </div>
            </div>
          </div>

          {/* socials */}
          <div className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-widest text-mutedText">
              Find me on
            </p>
            <div className="flex gap-4">
              {socialIcons.map((icon) => (
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="text-mutedText hover:text-accent transition-colors duration-150 text-lg"
                  key={icon.id}
                  href={icon.url}
                >
                  {icon.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── right side — form ─────────────────────── */}
        <div className="bg-cardBg border border-border rounded-xl px-8 py-10 flex flex-col gap-6  shadow-md">
          <div className="flex flex-col gap-1 mb-2">
            <h3 className="text-base font-semibold tracking-wider uppercase text-headingText">
              Send a Message
            </h3>
            <p className="text-xs text-mutedText font-light">
              I'll get back to you as soon as possible.
            </p>
          </div>

          <form className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <label className="text-xs uppercase tracking-widest text-mutedText">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                required
                className="form-input placeholder:opacity-70"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs uppercase tracking-widest text-mutedText">
                Email
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                required
                className="form-input placeholder:opacity-70"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs uppercase tracking-widest text-mutedText">
                Message
              </label>
              <textarea
                required
                placeholder="Write your message here..."
                rows="5"
                className=" mb-2   py-2 px-2 outline-none placeholder:text-placeholderText  transition-colors duration-200 resize-none placeholder:opacity-70"
              />
            </div>

            <button type="submit" className="btn w-full py-2 px-8 ">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
