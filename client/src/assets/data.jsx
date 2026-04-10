import React from "react";
import { TbShieldLock } from "react-icons/tb";
import { LuZap, LuKeyRound, LuRefreshCw } from "react-icons/lu";
import { FaGithub, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

export const features = [
  {
    id: 1,
    icon: <TbShieldLock size={22} />,
    title: "Secure by Default",
    desc: "Passwords hashed with bcrypt. Every request protected with signed JWT tokens.",
  },
  {
    id: 2,
    icon: <LuZap size={22} />,
    title: "Fast Integration",
    desc: "Clean REST endpoints. Plug into any frontend in minutes — no overhead.",
  },
  {
    id: 3,
    icon: <LuKeyRound size={22} />,
    title: "Token Based Auth",
    desc: "Stateless authentication using access and refresh tokens. No sessions to manage.",
  },
  {
    id: 4,
    icon: <LuRefreshCw size={22} />,
    title: "Password Reset",
    desc: "Built-in reset flow with secure time-limited tokens sent straight to email.",
  },
];

export const steps = [
  {
    id: 1,
    step: "01",
    label: "Register",
    desc: "Create your account with a name, email and password.",
  },
  {
    id: 2,
    step: "02",
    label: "Verify",
    desc: "Receive a secure token and confirm your identity.",
  },
  {
    id: 3,
    step: "03",
    label: "Access",
    desc: "Log in and get authenticated access to protected routes.",
  },
];

export const socialIcons = [
  {
    id: 1,
    icon: <FaGithub />,
    url: "https://github.com/urvashidab",
  },

  {
    id: 2,
    icon: <FaInstagram />,
    url: "https://instagram.com/yourname",
  },
  {
    id: 3,
    icon: <FaXTwitter />,
    url: "https://twitter.com/yourname",
  },
  {
    id: 4,
    icon: <FaFacebookF />,
    url: "https://facebook.com/urvashi14",
  },
];
