import { FaShoppingBasket } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";

const NewArrivalsSection = ({ products }) => {
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
                  onClick={() => handleDetails(p._id)}
                  className="text-center p-4"
                >
                  <img
                    className="w-full h-[400px] shadow-[0px_6px_12px_4px_rgba(0,0,0,0.35)] p-5 mb-5 object-cover"
                    src={p.bannerImage}
                    alt="shoe image"
                  />
                  <p className="text-2xl font-semibold uppercase border-b pb-3 mb-3">
                    {p.title}
                  </p>
                  <div className="flex items-center justify-between px-3">
                    <p className="font-black text-2xl">
                      ${p.price.toFixed(2)}
                    </p>
                    <FaShoppingBasket className="text-4xl cursor-pointer transition duration-300 hover:text-purple-800" />
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
