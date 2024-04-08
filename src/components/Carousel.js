import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Carousel = () => {

  return(
    <div class="gallery">
      <div class="gallery-container">
        <img class="gallery-item item1" src="https://coderixx.com/assets/images/pastprojects/BackupScreenShot%20(6).webp" data-index="1"></img>
        <img class="gallery-item  item2" src="https://coderixx.com/assets/images/pastprojects/BackupScreenShot%20(1).webp" data-index="2"></img>
        <img class="gallery-item  item3" src="https://coderixx.com/assets/images/pastprojects/BackupScreenShot%20(2).webp" data-index="3"/>
        <img class="gallery-item  item-4" src="https://coderixx.com/assets/images/pastprojects/BackupScreenShot%20(5).webp" data-index="4"/>
        <img class="gallery-item  item5" src="https://coderixx.com/assets/images/pastprojects/BackupScreenShot%20(4).webp" data-index="5"/>



        </div>
        <div class="gallery-controls"></div>
    </div>
  );
  // const images = [
  //   "https://coderixx.com/assets/images/pastprojects/BackupScreenShot%20(6).webp",
  //   "https://coderixx.com/assets/images/pastprojects/BackupScreenShot%20(1).webp",
  //   "https://coderixx.com/assets/images/pastprojects/BackupScreenShot%20(2).webp",
  //   "https://coderixx.com/assets/images/pastprojects/BackupScreenShot%20(5).webp",
  //   "https://coderixx.com/assets/images/pastprojects/BackupScreenShot%20(4).webp",
  //   "https://coderixx.com/assets/images/pastprojects/BackupScreenShot%20(7).webp",
  //   "https://coderixx.com/assets/images/pastprojects/BackupScreenShot%20(8).webp",
  //   "https://coderixx.com/assets/images/pastprojects/BackupScreenShot%20(9).webp",
  //   "https://coderixx.com/assets/images/pastprojects/BackupScreenShot%20(10).webp",
  //   "https://coderixx.com/assets/images/pastprojects/BackupScreenShot%20(14).webp",
  //   "https://coderixx.com/assets/images/pastprojects/BackupScreenShot%20(15).webp",
  //   "https://coderixx.com/assets/images/pastprojects/TagFlip%20(1).webp",
  //   "https://coderixx.com/assets/images/pastprojects/BackupScreenShot%20(3).webp",
  //   "https://coderixx.com/assets/images/pastprojects/AIO%20(1).webp",
  //   "https://coderixx.com/assets/images/pastprojects/Mom%20(1).webp",
  // ];

  // const settings = {

  //   className: "center",
  //   dots: true,
  //   infinite: true,
  //   speed: 1000,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   centerPadding: "0px",
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   cssEase: "linear",
  //   responsive: [
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         centerPadding: "50px",
  //         dots: true,
  //       },
  //     },
  //   ],
  // };

  // return (
  //   <div>
  //     <h2 className="text-center mb-4">Projects</h2>
  //     <Slider {...settings} class="conatiner" className="overflow-hidden relative transition-shadow left-0 flex-shrink-0  ">
  //       {images.map((image, index) => (
  //         <div class="gallery" key={index} className="carousel-item px-2">
  //           <img src={image} alt="1" className="oblect-fill rounded-lg shadow-md transition-all duration-300 opacity-50 scale-90 slick-slide swiper-slide overflow-hidden" />
  //         </div>
          
  //       ))}
  //       <div class="gallery-controls"></div>
  //     </Slider>
  //   </div>
  // );
}

export default Carousel;
