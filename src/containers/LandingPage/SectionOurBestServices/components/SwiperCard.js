// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/swiper.min.css';
// import 'swiper/components/navigation/navigation.min.css';
import ImageLocal from '../Rectangle_2722.png';
import ImageLocal1 from '../Rectangle_2722-1.png';
import ImageLocal2 from '../Rectangle_2722-2.png';
import CartItemOurBestServices from './CartItemOurBestServices';
import { filters } from '../../../../marketplace-custom-config';

const dataImage = [
  { key: 'beautyWellness', ig: ImageLocal },
  { key: 'hairdressers', ig: ImageLocal1 },
  { key: 'hourseWork', ig: ImageLocal2 },
  { key: 'fitness', ig: ImageLocal1 },
];

const SwiperCard = () => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      //   navigation={true}
      modules={[Navigation]}
      className="mySwiper"
      loop={true}
      allowTouchMove={false}
    >
      {filters[3].config.options.map((e, i) => {
        const objIg = dataImage.find(k => k.key === e.key);
        return (
          <SwiperSlide key={i}>
            <CartItemOurBestServices data={{ ...e, ...objIg }} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SwiperCard;
