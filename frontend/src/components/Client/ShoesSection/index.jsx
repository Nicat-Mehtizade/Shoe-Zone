import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ShoesSection = () => {
  return (
    <div className="mb-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-5 py-5">
          <div className="flex flex-col gap-5 px-5 lg:px-0 lg:w-[30%]">
            <div className="h-[250px] lg:h-[400px] shadow-[0px_6px_12px_4px_rgba(0,0,0,0.35)] cursor-pointer relative">
              <img
                src="https://huge-shoes.myshopify.com/cdn/shop/files/collection3_large.jpg?v=1613156071"
                alt=""
                className="w-full h-full object-cover"
              />
              <p className="absolute inset-0 flex items-start justify-start p-6 text-3xl font-semibold">
                SPORTS
              </p>
            </div>
            <div className="h-[250px] lg:h-[400px] shadow-[0px_6px_12px_4px_rgba(0,0,0,0.35)] cursor-pointer relative">
              <img
                src="https://huge-shoes.myshopify.com/cdn/shop/files/collection2_6fd1e403-7021-427d-8be1-8bf857c8aacf_large.jpg?v=1613157026"
                alt=""
                className="w-full h-full object-cover"
              />
              <p className="absolute inset-0 flex items-start justify-start p-6 text-3xl font-semibold">
                BOOTS
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5 px-5 lg:px-0 lg:w-[30%]">
            <div className="h-[250px] lg:h-[400px] shadow-[0px_6px_12px_4px_rgba(0,0,0,0.35)] cursor-pointer relative">
              <img
                src="https://huge-shoes.myshopify.com/cdn/shop/files/collection5_47277ffa-efcf-413d-a764-b4b5be9e4e99_large.jpg?v=1613157025"
                alt=""
                className="w-full h-full object-cover"
              />
              <p className="absolute inset-0 flex items-start justify-start p-6 text-3xl font-semibold">
                FORMAL
              </p>
            </div>
            <div className="h-[250px] lg:h-[400px] shadow-[0px_6px_12px_4px_rgba(0,0,0,0.35)] cursor-pointer relative">
              <img
                src="https://huge-shoes.myshopify.com/cdn/shop/files/collection4_1d1d931a-3265-4eae-ac45-7e8a9cb3702e_large.jpg?v=1613157026"
                alt=""
                className="w-full h-full object-cover"
              />
              <p className="absolute inset-0 flex items-start justify-start p-6 text-3xl font-semibold">
                CASUAL
              </p>
            </div>
          </div>
          <div className="h-[410px] md:h-[820px] shadow-[0px_6px_12px_4px_rgba(0,0,0,0.35)] px-5 lg:px-0 lg:w-[40%]">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper h-full"
            >
              <SwiperSlide>
                <div className="h-full relative">
                  <img
                    src="https://huge-shoes.myshopify.com/cdn/shop/files/Shoe_2.jpg?v=1613157025"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[rgba(180,180,180,0.7)] flex flex-col justify-end p-10 md:p-20">
                    <h1 className="text-3xl md:text-6xl font-bold mb-6">
                      SNEEK PEEK
                    </h1>
                    <p className="bg-black h-[5px] w-12 mb-5"></p>
                    <p className="text-lg md:text-2xl">SPORTS EDITION*</p>
                    <p className="text-lg md:text-2xl">*DISCOUNT AVAILABLE</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-full relative">
                  <img
                    src="https://huge-shoes.myshopify.com/cdn/shop/files/Shoe_3.jpg?v=1613157025"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[rgba(180,180,180,0.7)] flex flex-col justify-end p-10 md:p-20">
                    <h1 className="text-3xl md:text-6xl font-bold mb-6">
                      SIGNS
                    </h1>
                    <p className="bg-black h-[5px] w-12 mb-5"></p>
                    <p className="text-lg md:text-2xl">
                      MAKE THIS SEASON YOURS
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-full relative">
                  <img
                    src="https://huge-shoes.myshopify.com/cdn/shop/files/dropdown_3_menu_image_3.jpg?v=1613524987"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[rgba(180,180,180,0.7)] flex flex-col justify-end p-10 md:p-20">
                      <h1 className="text-3xl md:text-6xl font-bold mb-6">
                      COSMOS STORES
                    </h1>
                    <p className="bg-black h-[5px] w-12 mb-5"></p>
                    <p className="text-lg md:text-2xl">
                      MAKE THIS SEASON YOURS
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoesSection;
