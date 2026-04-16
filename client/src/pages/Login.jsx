import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

const Login = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [hidePassword, setHidePassword] = useState(true);
  const [hideConfirmPassword, setHideConfirmPassword] = useState(true);

  const toggleHidePassword = () => {
    setHidePassword((prev) => !prev);
  };

  const toggleConfirmPassword = () => {
    setHideConfirmPassword((prev) => !prev);
  };

  const toggleLogIn = () => {
    setIsLoginMode((prev) => !prev);
  };

  return (
    <>
      <div className="py-6 w-full">
        <div className="bg-cardBg border border-border rounded-xl px-8 py-10 flex flex-col gap-6 max-w-lg mx-auto   shadow-md">
          {/* title */}

          <div className="flex justify-center">
            <h2 className="page-title">
              {isLoginMode ? "LOG IN" : "REGISTER"}
            </h2>
          </div>

          {/* form */}
          <form id="loginForm" className="flex flex-col gap-4  mt-6">
            {/* name */}
            {!isLoginMode && (
              <input
                type="text"
                required
                placeholder="NAME"
                className="form-input "
              ></input>
            )}
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
            {!isLoginMode && (
              <div className="relative">
                <input
                  type={hideConfirmPassword ? "password" : "text"}
                  required
                  placeholder="CONFIRM PASSWORD"
                  className="w-full form-input"
                />

                <button
                  type="button"
                  onClick={toggleConfirmPassword}
                  className="absolute right-2 top-2 cursor-pointer text-lg text-mutedText hover:text-accentHover"
                >
                  {hideConfirmPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
                </button>
              </div>
            )}

            {isLoginMode ? (
              <NavLink to="/forgotpassword">
                <span className="text-sm text-bodyText  font-extralight underline">
                  Have you forgotten your password?
                </span>
              </NavLink>
            ) : (
              <div className="flex gap-1 text-sm">
                <p className="text-mutedText">Already have an account?</p>

                <button
                  type="button"
                  onClick={toggleLogIn}
                  className="underline cursor-pointer text-primaryText"
                >
                  LOG IN
                </button>
              </div>
            )}

            {/* login button */}

            <div className="flex gap-6 mt-10 flex-col lg:flex-row ">
              <button type="submit" className="flex-1 btn px-6 py-1.5 rounded">
                {isLoginMode ? "LOG IN" : "REGISTER"}
              </button>
              {/* register */}
              <button
                onClick={toggleLogIn}
                type="button"
                className="flex-1 btn px-6 py-1.5 rounded"
              >
                {isLoginMode ? "REGISTER" : "BACK TO LOG IN"}
              </button>
            </div>
          </form>

          <div className="flex text-sm mt-10 ">
            <div className="flex gap-1">
              <p className="text-mutedText ">Need Help?</p>
              <NavLink to="/contact">
                <p className="text-sm text-primaryText text-underline font-extralight">
                  Contact Us
                </p>
              </NavLink>
            </div>
          </div>

          {/* right side ends */}
        </div>
      </div>
    </>
  );
};

export default Login;
