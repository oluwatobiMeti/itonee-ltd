import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import img1 from '../../assets/images/image1.jpeg'
import img2 from '../../assets/images/image2.jpeg'
import img3 from '../../assets/images/image3.jpeg'

const ImageSlider = () => {

  const images = [{
    id: 1,
    src: img1,
    alt: "Image 1"
  },
  {
    id: 2,
    src: img2,
    alt: "Image 2 "
  },
  {
    id: 3,
    src: img3,
    alt: "Image 3"
  }
  ];
const settings = {
	infinite: true,
	dots: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	lazyLoad: true,
	autoplay: true,
autoplaySpeed: 2000,
};
return (
	<div className="imgslider">
		<Slider className="slide" {...settings}>
    <div key="1">
			<img src={img1} alt="image"/>
			</div>
      <div key="2">
			<img src={img2} alt="image"/>
			</div>
      <div key="3">
			<img src={img3} alt="image"/>
		</div>
		</Slider>
	</div>
)
}
export default ImageSlider;