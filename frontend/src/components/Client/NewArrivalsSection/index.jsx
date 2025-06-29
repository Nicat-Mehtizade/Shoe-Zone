import { FaShoppingBasket } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";

const NewArrivalsSection = ({ products }) => {
  const [hoverImageId, setHoverImageId] = useState(null);
  const nav = useNavigate();

  const handleDetails = (id) => {
    nav(`product/${id}`);
  };

  return (
    <div>
      <div className="max-w-[1400px] mx-auto">
        <div className="py-10">
          <div className="border-l-4 border-[#571F7C] pl-3 mb-8">
            <h1 className="text-4xl font-bold mb-2">NEW ARRIVALS</h1>
            <p className="text-lg">Just in now</p>
          </div>
          <Swiper
            modules={[Pagination]}
            className="mySwiper px-5 cursor-grab active:cursor-grabbing"
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            {products.map((p) => (
              <SwiperSlide key={p._id}>
                <div
                  onMouseEnter={() => setHoverImageId(p._id)}
                  onMouseLeave={() => setHoverImageId(null)}
                  onClick={() => handleDetails(p._id)}
                  className="text-center p-4"
                >
                  <div className="relative w-full h-[400px] p-5 mb-5">
                    <div className="w-full h-full relative">
                      <img
                        src={p.images[0]}
                        alt="hover"
                        className={`absolute inset-0 w-full h-full object-cover shadow-[0px_6px_12px_4px_rgba(0,0,0,0.35)] transition-opacity duration-500 ${
                          hoverImageId === p._id ? "opacity-100" : "opacity-0"
                        }`}
                      />

                      <img
                        src={p.bannerImage}
                        alt="default"
                        className={`absolute inset-0 w-full h-full object-cover shadow-[0px_6px_12px_4px_rgba(0,0,0,0.35)] transition-opacity duration-500 ${
                          hoverImageId === p._id ? "opacity-0" : "opacity-100"
                        }`}
                      />
                      <p
                        className={`absolute right-3 top-3 text-sm p-2 flex justify-center items-center gap-1 text-white bg-purple-900 ${
                          p.discount ? "block" : "hidden"
                        }`}
                      >
                        Save <span className="font-bold">{p.discount}%</span>
                      </p>
                      <div
                        className={`flex gap-3 absolute transition duration-500 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
                          hoverImageId === p._id ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <button
                          onClick={(e) => e.stopPropagation()}
                          className="bg-black text-white w-10 h-10 flex justify-center items-center text-xl transition duration-300 hover:bg-purple-900 cursor-pointer"
                        >
                          <CiHeart />
                        </button>
                        <button
                          onClick={(e) => e.stopPropagation()}
                          className="bg-black text-white w-10 h-10 flex justify-center items-center text-xl transition duration-300 hover:bg-purple-900 cursor-pointer"
                        >
                          <CiSearch />
                        </button>
                      </div>
                    </div>
                  </div>{" "}
                  <p className="text-2xl font-semibold uppercase border-b pb-3 mb-3">
                    {p.title}
                  </p>
                  <div className="flex items-center justify-between px-3">
                    <div className="flex gap-3 items-center">
                      <p className="font-black text-2xl">
                        $
                        {p.discount
                          ? (p.price - (p.price * p.discount) / 100).toFixed(2)
                          : p.price.toFixed(2)}
                      </p>
                      <p
                        className={`${
                          p.discount ? "block" : "hidden"
                        } text-xs text-gray-500 line-through`}
                      >
                        ${p.price.toFixed(2)}
                      </p>
                    </div>
                    <button>
                      <FaShoppingBasket
                        onClick={(e) => e.stopPropagation()}
                        className="text-4xl cursor-pointer transition duration-300 hover:text-purple-800"
                      />
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default NewArrivalsSection;
