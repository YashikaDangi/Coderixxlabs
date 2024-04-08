import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  return (
    <div className="w-3.4  mb-40 " id="Testimonials">
    <div className="flex justify-end items-start mr-10 mt-0" >
      <img src="https://coderixx.com/assets/images/Style.webp" className="mr-0" alt="lines"></img>
      </div>
      <h1 className="text-white text-5xl ml-20 pb-4 tracking-wide border-b border-purple-400 w-20">Testimonials</h1>
      <div className="mt-20 p-4 m-4 px-[170px] h-[364px] justify-center slider-container ">
        <Slider {...settings}>
          {data.map((d) => (
            <div key={d.name} className="bg-[#13131E] h-[450px] text-white rounded-xl  border-orange-800 ">
              <div className="h-56 rounded-t-x flex justify-center items-center">
                <img src={d.img} alt="" className="h-40 w-40 rounded-full"></img>
              </div>
              <div className="flex flex-col justify-center items-center gap-4 p-4">
                <p className="text-xl font-semibold">{d.name}</p>
                <p className="text-center text-[#838383]">{d.review}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const data = [
  {
    name: "LJI Synx",
    img: '/test5.png',
    review: "Awesome website, super fast, and very well designed! I was like no way are we going to say there going to turn this around. You've been awesome thank you so much! "
  },
  {
    name: "Thunder Seeker",
    img: '/test4.png',
    review: "Man looks dope on the phone! Gotta check it out on laptop soon. Looking forward to showing it to my team. Love your work bro. Really appreciate it."
  },
  {
    name: "StephenV",
    img: '/test6.png',
    review: "I know, I keep throwing things at you and you;re doing a killer job bringing them to life! Thank you for all your work. I greatly appreciate you.*"
  },
  {
    name: "Joey II TAG",
    img: '/test1.png',
    review: "Congrats on your launch, loving it so far! Looking forward to seeing what's next, you're all killing it! Seriously amazing job could not be more happy."
  },
  {
    name: "Evaldi",
    img: '/test2.png',
    review: "Absolutely thrilled with the outcome! Your agency's proficiency shines through the lightning-quick website and its stunning design. We were skeptical about the timeline, but you delivered beyond our expectations. Thank you for your outstanding efforts!"
  },
  {
    name: "Gizmo",
    img: '/test3.png',
    review: "Incredible work! Your team's expertise is evident in the blazing-fast website and its impeccable design. We were amazed by the turnaround time and couldn't & apost be happier with the results. Thank you for a fantastic job."
  }
];

export default Testimonials;
