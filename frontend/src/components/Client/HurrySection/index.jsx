import styles from "./index.module.css";
const HurrySection = () => {
  return (
    <div className={styles.background}>
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col justify-between items-center min-h-[80vh] py-15 relative">
          <div className="text-center z-10 mb-10 py-10">
            <p className="text-lg text-white mb-5">THE SEASON BEGINS</p>
            <div className="flex flex-col md:flex-row gap-3 items-center text-white font-bold text-2xl md:text-4xl tracking-[8px] mb-5">
              <span>PROMOTION</span>
              <span className="text-[#E74C30]"> SALE OFF 50%</span>
            </div>
            <button className="bg-purple-900 text-white py-4 px-10 cursor-pointer transition duration-300 hover:bg-black">
              SHOP NOW
            </button>
          </div>
          <p className="absolute bottom-55 md:bottom-49 lg:bottom-55 text-7xl md:text-9xl lg:text-[155px] text-white/20 font-semibold uppercase z-0 tracking-[8px]">
            Hurry
          </p>
          <div className="text-white text-center mt-10 z-10">
            <h1 className="text-3xl md:text-5xl font-semibold tracking-normal mb-5">
              BEFORE OFFER ENDS
            </h1>
            <p className="text-lg">Expired</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HurrySection;
