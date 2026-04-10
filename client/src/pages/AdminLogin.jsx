import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { FaLock } from "react-icons/fa";

const AdminLogin = () => {
  const [hidePassword, setHidePassword] = useState(true);

  const toggleHidePassword = () => {
    setHidePassword((prev) => !prev);
  };

  return (
    <>
      <div className="py-12 w-full">
        <div className="bg-cardBg border border-border rounded-xl px-8 py-10 flex flex-col gap-6 max-w-lg mx-auto   shadow-md">
          {/* title */}

          <h2 className=" flex gap-3 justify-center items-center font-semibold tracking-wide text-lg uppercase">
            <FaLock />
            admin portal access
          </h2>
          <p className="text-sm text-mutedText text-center">
            Restricted access. Authorized personnel only.
          </p>

          {/* form */}
          <form className="flex flex-col gap-4  mt-6">
            {/* email */}
            <input
              type="email"
              required
              placeholder="E-MAIL"
              className="form-input "
            ></input>
            {/* password */}
            <div className="relative">
              <input
                type={hidePassword ? "password" : "text"}
                required
                placeholder="PASSWORD"
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

            <NavLink to="/resetpassword">
              <span className="text-sm text-bodyText  font-extralight underline">
                Forgot password?
              </span>
            </NavLink>

            {/* login button */}

            <button type="submit" className=" btn px-6 py-1.5 rounded">
              LOG IN
            </button>
          </form>

          {/* right side ends */}
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
