import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./index.css";

const Banner = () => {
  return (
    <div className="max-w-[1400px] mx-auto px-5 md:px-0">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={{ clickable: true }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative w-full h-[700px]">
            <img
              src="https://huge-shoes.myshopify.com/cdn/shop/files/shoe7.jpg?v=1613156880"
              className="w-full h-full object-cover"
              alt=""
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute sm:left-40">
                <h1 className="text-3xl md:text-5xl text-[#C5EC31] font-bold mb-3">
                  ZEN VIVID 15
                </h1>
                <p className="text-lg md:text-xl text-[#C5EC31] mb-5">
                  The best Sellers from $99.00
                </p>
                <button className="bg-[#C5EC31] py-4 px-6 text-sm font-medium transition duration-500 hover:bg-white cursor-pointer">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-[700px]">
            <img
              src="https://huge-shoes.myshopify.com/cdn/shop/files/2021-10-16.jpg?v=1634378303"
              className="w-full h-full object-cover"
              alt=""
            />
            <div className="absolute inset-0 flex items-start justify-center pt-16">
              <div className="text-center">
                <h1 className="text-3xl md:text-5xl font-semibold mb-4">STARTS FROM</h1>
                <p className="text-lg mb-5">$ 745</p>
                <button className="bg-[#98EBE2] py-4 px-6 text-sm font-medium transition duration-500 hover:bg-white cursor-pointer">
                  VIEW COLLECTION
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-[700px]">
            <img
              src="https://huge-shoes.myshopify.com/cdn/shop/files/shoe9.jpg?v=1613156880"
              className="w-full h-full object-cover"
              alt=""
            />
            <div className="absolute inset-0 flex items-center justify-center md:justify-end md:pr-30">
              <div className="text-start w-[400px]">
                <p className="mb-4 text-lg">summer canvas</p>
                <h1 className="text-5xl font-semibold mb-4 text-[#4C4029]">FROM THE SUMMER</h1>
                <p className="text-lg mb-5">
                  Ullamcorper eget nulla facilisi etiam dignissim. Quis eleifend
                  quam adipiscing vitae proin sagittis nisl rhoncus mattis.
                  Scelerisque eu ultrices
                </p>
                <button className="bg-[#4C4029] text-[#f7eaa6] py-4 px-6 text-sm font-medium transition duration-500 hover:bg-white hover:text-black cursor-pointer">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
