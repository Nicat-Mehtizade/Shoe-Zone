import {
  ChevronRight,
  Facebook,
  Home,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Twitter,
} from "lucide-react";
import styles from "./Footer.module.scss";
import { FaChevronRight } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.info}>
          <div className={styles.logo}>
            <img src="Footer-Logo.webp" alt="" />
          </div>
          <div className={styles.input}>
            <div>
              <input type="text" placeholder="Your email address" />
            </div>
          </div>
          <div className={styles.chevy}>
            <FaChevronRight />
          </div>
          <div className={styles.links}>
            <div className={styles.icon}>
              <Twitter />
            </div>
            <div className={styles.icon}>
              <Facebook />
            </div>
            <div>
              <Linkedin />
            </div>
            <div>
              <Instagram />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.section}>
          <div className={styles.sectionTitle}>Contact Us</div>
          <div className={styles.link}>
            <div>
              <Home size={15} />
            </div>
            No: 58 A, East Madison Street Baltimore, MD, USA 4508
          </div>
          <div className={styles.link}>
            <Phone size={15} /> +1 000 - 123456789
          </div>
          <div className={styles.link}>
            <Mail size={15} />
            info@example.com
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.sectionTitle}>Info</div>
          <div className={styles.link}>
            <ChevronRight size={15} />
            <span>Search Terms</span>
          </div>
          <div className={styles.link}>
            <ChevronRight size={15} />
            <span>Advanced Search</span>
          </div>
          <div className={styles.link}>
            <ChevronRight size={15} />
            <span>Orders and Returns</span>
          </div>
          <div className={styles.link}>
            <ChevronRight size={15} />
            <span>Consultant</span>
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.sectionTitle}>Help & FAQs</div>
          <div className={styles.link}>
            <ChevronRight size={15} />
            <span>Help</span>
          </div>
          <div className={styles.link}>
            <ChevronRight size={15} />
            <span>About</span>
          </div>
          <div className={styles.link}>
            <ChevronRight size={15} />
            <span>Contact</span>
          </div>
          <div className={styles.link}>
            <ChevronRight size={15} />
            <span>Privacy Policy</span>
          </div>
          <div className={styles.link}>
            <ChevronRight size={15} />
            <span>Best Sellers</span>
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.sectionTitle}>Support</div>
          <div className={styles.link}>
            <ChevronRight size={15} />
            <span>Best Sellers</span>
          </div>
          <div className={styles.link}>
            <ChevronRight size={15} />
            <span>Support</span>
          </div>
          <div className={styles.link}>
            <ChevronRight size={15} />
            <span>Customer Service</span>
          </div>
          <div className={styles.link}>
            <ChevronRight size={15} />
            <span>About Us</span>
          </div>
          <div className={styles.link}>
            <ChevronRight size={15} />
            <span>Help and FAQs</span>
          </div>
        </div>
      </div>
      <div className={styles.last}>
        <ul style={{ display: "flex", listStyle: "none", gap: "10px" }}>
          <li>Search Terms</li>
          <li>|</li>
          <li>Advanced Search</li>
          <li>|</li>
          <li>Orders and Returns</li>
          <li>|</li>
          <li>Consultant</li>
          <li>|</li>
          <li>Help & FAQs</li>
        </ul>
      </div>
      <div className={styles.copyright}>
        <div className={styles.holder}>
          <div className={styles.content}>
            <p>Copyright © 2025 All Rights Reserved</p>
            <div className={styles.cards}>
              <div className={styles.card}>
                <img src="Visacard.png" alt="" />
              </div>
              <div className={styles.card}>
                <img src="Mastercard.png" alt="" />
              </div>
              <div className={styles.card}>
                <img src="Paypalcard.webp" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
