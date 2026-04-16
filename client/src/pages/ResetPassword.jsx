import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
const ResetPassword = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const [hideConfirmPassword, setHideConfirmPassword] = useState(true);

  const toggleHidePassword = () => setHidePassword((prev) => !prev);
  const toggleConfirmHidePassword = () =>
    setHideConfirmPassword((prev) => !prev);
  return (
    <div className="py-10 w-full">
      <div className="bg-cardBg border border-border rounded-xl px-8 py-10 flex flex-col gap-6 max-w-lg mx-auto   shadow-md">
        {/* title */}
        <div className="flex justify-center">
          <h2 className="page-title">reset password</h2>
        </div>

        <form className="flex flex-col gap-4  mt-6">
          <div className="relative">
            <input
              type={hidePassword ? "password" : "text"}
              required
              placeholder="NEW PASSWORD"
              className="w-full form-input"
            />

            <button
              type="button"
              onClick={toggleHidePassword}
              className="absolute right-2 top-2 cursor-pointer text-lg text-mutedText hover:text-accentHover "
            >
              {hidePassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
            </button>
          </div>
          <div className="relative">
            <input
              type={hideConfirmPassword ? "password" : "text"}
              required
              placeholder="CONFIRM PASSWORD"
              className="w-full form-input"
            />

            <button
              type="button"
              onClick={toggleConfirmHidePassword}
              className="absolute right-2 top-2 cursor-pointer text-lg text-mutedText hover:text-accentHover "
            >
              {hideConfirmPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
            </button>
          </div>
          <button type="submit" className="btn py-1.5 px-6 mt-6 rounded">
            set new password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
