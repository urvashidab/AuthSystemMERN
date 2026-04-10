import React from "react";
import { NavLink } from "react-router-dom";
import { features, steps } from "../assets/data";

const Home = () => {
  return (
    <div className="flex flex-col gap-14 py-10">
      {/* ── hero section------- */}
      <section className="flex flex-col items-center text-center gap-6 py-10">
        <h2 className="text-3xl font-bold">
          Secure Login. Verified Users. Protected Access.
        </h2>

        <p className="text-sm md:text-base text-mutedText font-light max-w-md leading-relaxed">
          A clean, token-based authentication system built with Node.js and
          React. Register, log in, reset passwords — all secured and ready to
          use.
        </p>

        <div className="flex gap-4 mt-4 flex-col sm:flex-row">
          <NavLink to="/login" className="btn px-6 py-1.5 ">
            Get Started
          </NavLink>
          <NavLink to="/about" className="btn px-6 py-1.5">
            Learn More
          </NavLink>
        </div>
      </section>

      {/* ── Features ───────────────────────────────────── */}
      <section className="flex flex-col gap-10">
        <div className="flex justify-center">
          <h2 className="page-title text-xl">Why This Project</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-cardBg border border-border rounded-xl px-6 py-7 flex flex-col gap-3 hover:shadow-sm hover:shadow-accent transition-all duration-200"
            >
              <div className="text-accent">{feature.icon}</div>
              <h3 className="text-sm font-semibold tracking-wider uppercase text-headingText">
                {feature.title}
              </h3>
              <p className="text-xs text-mutedText leading-relaxed ">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* line */}
      <div className="border-t border-border" />

      {/* how works */}
      <section className="flex flex-col gap-10">
        <div className="flex justify-center">
          <h2 className="page-title text-xl">How It Works</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col gap-3 items-start">
              <span className="text-3xl font-light text-accent opacity-50 tracking-widest">
                {step.step}
              </span>
              <h3 className="text-sm font-semibold tracking-wider uppercase text-headingText">
                {step.label}
              </h3>
              <p className="text-xs text-mutedText leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── line ────────────────────────────────────── */}
      <div className="border-t border-border" />

      {/* ready to explore */}

      <section className="flex flex-col items-center text-center gap-5 py-6">
        <p className="text-xs tracking-[0.25em] uppercase text-mutedText">
          Ready to explore?
        </p>
        <h2 className="text-2xl md:text-3xl font-light tracking-widest text-headingText">
          Start with a free account
        </h2>
        <p className="text-sm text-mutedText font-light max-w-sm leading-relaxed">
          No credit card. No setup fee. Just clean, working authentication.
        </p>
        <NavLink to="/login" className="btn px-6 py-1.5 mt-2">
          Create Account
        </NavLink>
      </section>
    </div>
  );
};

export default Home;
