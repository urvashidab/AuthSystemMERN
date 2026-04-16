import React from "react";
import { NavLink } from "react-router-dom";
const ForgotPassword = () => {
  return (
    <div className="py-10 w-full">
      <div className="bg-cardBg border border-border rounded-xl px-8 py-10 flex flex-col gap-6 max-w-lg mx-auto   shadow-md">
        {/* title */}
        <div className="flex justify-center">
          <h2 className="page-title">forgot password</h2>
        </div>

        <p className="text-sm text-mutedText font-light leading-relaxed mt-4 ">
          Enter your registered email and we'll send you a link to reset
          password.
        </p>

        <form className="flex flex-col gap-4  mt-6">
          <input
            type="email"
            required
            placeholder="E-MAIL"
            className="form-input "
          ></input>
          <button type="submit" className="btn py-1.5 px-6 mt-6 rounded">
            send reset link
          </button>
        </form>

        <NavLink to="/login">
          <span className="text-sm text-bodyText  font-extralight ">
            Back to LOG IN
          </span>
        </NavLink>
      </div>
    </div>
  );
};

export default ForgotPassword;
