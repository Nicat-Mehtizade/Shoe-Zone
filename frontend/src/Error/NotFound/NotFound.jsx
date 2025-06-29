import styles from "./index.module.css";
import { NavLink } from "react-router-dom";

const NotFound = () => {
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
              <p>404 Not Found</p>
            </div>
          </div>
        </div>
        <div className="max-w-[1100px] mx-auto py-20">
          <div>
            <h1 className="text-5xl font-medium mb-10">404 Page Not Found</h1>
            <p className="text-lg font-medium">
              The page you requested does not exist. Click here to continue
              shopping.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
