import { useState } from "react";
import styles from "./BestSellers.module.scss";

const options = ["ALL", "SALE", "BEST", "NEW"];

const BestSellers = () => {
  const [activeOption, setActiveOption] = useState(0);

  const handleOptionClick = (index) => {
    setActiveOption(index);
  };

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h2 className={styles.title}>BEST SELLERS</h2>
        <div className={styles.justnow}>
          <p className={styles.text}>Just in now</p>
        </div>
      </div>

      <div className={styles.options}>
        {options.map((option, index) => (
          <div
            key={index}
            className={`${styles.option} ${
              activeOption === index ? styles.active : ""
            }`}
            onClick={() => handleOptionClick(index)}
          >
            <h2>{option}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
