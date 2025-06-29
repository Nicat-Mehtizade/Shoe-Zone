import styles from "./index.module.css";
import { NavLink } from "react-router-dom";

const ForgotPasswordPage = () => {
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
            <div className="flex flex-col gap-6 justify-center items-start pb-5">
              <h1 className="text-xl">Reset your password</h1>
              <p>We will send you an email to reset your password.</p>
              <input
                className="bg-white border border-gray-300 w-full p-3 transition duration-300 focus:outline-none focus:ring-1 focus:ring-purple-900"
                type="email"
                placeholder="Email"
              />
              <div className="flex justify-between items-center w-full">
                <button className="text-white font-medium text-sm bg-purple-900 transition duration-500 hover:bg-black py-4 px-6 cursor-pointer">
                  SUBMIT
                </button>
                <button className="cursor-pointer transition duration-500 hover:text-purple-800">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
