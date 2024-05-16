import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomePageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      <div>
        <img
          className="rounded-md shadow-md hover:shadow-lg transition duration-300 w-full"
          src="https://ecoyaan.com/images/carousel-3.png"
          alt="Are you a business that truly cares about sustainability? We would love to work with you"
        />
      </div>
      <div>
        <img
          className="rounded-md shadow-md hover:shadow-lg transition duration-300 w-full"
          src="https://ecoyaan.com/images/carousel-2.png"
          alt="Slide 2"
        />
      </div>
      <div>
        <img
          className="rounded-md shadow-md hover:shadow-lg transition duration-300 w-full"
          src="https://ecoyaan.com/images/carousel-1.png"
          alt="Slide 3"
        />
      </div>
    </Slider>
  );
};

export default HomePageSlider;
