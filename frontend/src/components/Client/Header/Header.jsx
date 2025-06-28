import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import { ChevronDown, Mail, Phone } from "lucide-react";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.left}>
          <div className={styles.info}>
            <div className={styles.phone}>
              <Phone size={15} />
              <p>9876543210</p>
            </div>
            <div className={styles.email}>
              <Mail size={15} />
              <p>zYm0A@example.com</p>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.rightLinks}>
            <div className={styles.link}>
              <Link to="/">Store Location</Link>
            </div>
            <div className={styles.link}>
              <Link to="/">Track Your Order</Link>
            </div>
            <div className={styles.link}>
              <p>USD</p>
            </div>
            <div className={styles.link}>
              <ChevronDown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
