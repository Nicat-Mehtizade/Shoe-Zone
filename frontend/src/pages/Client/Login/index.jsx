import styles from "./index.module.css";
import { NavLink } from "react-router-dom";
const Login = () => {
  return (
    <div>
      <div>
        <div className={styles.background}>
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center">
            <h1 className="text-white text-4xl font-semibold mb-4 uppercase">
              Account
            </h1>
            <div className="text-white font-medium flex items-center gap-2">
              <NavLink
                className="transition duration-500 hover:text-purple-900"
                to={"/"}
              >
                Home
              </NavLink>
              <p>/</p>
              <p>Account</p>
            </div>
          </div>
        </div>
        <div className="max-w-[1400px] mx-auto py-20">
          <div className="bg-[#F7F7F7] max-w-[600px] mx-auto p-7">
            <div className="flex flex-col gap-6 justify-center items-start pb-5  border-b-2 border-gray-200 ">
              <input
                className="bg-white border border-gray-300 w-full p-3 transition duration-300 focus:outline-none focus:ring-1 focus:ring-purple-900"
                type="email"
                placeholder="Email"
              />

              <input
                className="bg-white border border-gray-300 w-full p-3 transition duration-300 focus:outline-none focus:ring-1 focus:ring-purple-900"
                type="password"
                placeholder="Password"
              />
              <button className="text-white font-medium text-sm bg-purple-900 transition duration-500 hover:bg-black py-4 px-6 cursor-pointer">
                SIGN IN
              </button>
            </div>
            <div className="flex py-6 px-4 justify-evenly items-center">
              <NavLink
                className="transition duration-500 hover:text-purple-900 cursor-pointer"
                to={"/forgot-password"}
              >
                Forgot your password?
              </NavLink>
              <NavLink
                className="transition duration-500 hover:text-purple-900 cursor-pointer"
                to={"/register"}
              >
                Create account
              </NavLink>
              <NavLink
                className="transition duration-500 hover:text-purple-900 cursor-pointer"
                to={"/"}
              >
                Return to Store
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
