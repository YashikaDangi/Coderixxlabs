import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Services = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    rows: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div id="Services" className="w-3.4 m-auto mb-40 px-10 p-8 justify-center items-center bg-[#FFECD5] bg-[url('https://coderixx.com/assets/images/ServiceCubeStyleBottom.webp')]">
      {/* <div>
        <img src="https://coderixx.com/assets/images/Waves-Layer.webp" alt="wave1" className="bg-white-shade w-full opacity-1"></img>
      </div> */}
      <div className="flex justify-end items-start">
      <img src="https://coderixx.com/assets/images/ServiceStyle.webp" className="mr-0" alt="lines"></img>
      </div>
      <h1 className="text-black text-5xl ml-20 pb-4 tracking-wide border-b border-black w-20">Services</h1>
      <div className="mt-10 w-full justify-center item-center px-[101px] mb-40 p-4 m-4 gap-4 flex flex-col border-black">
        <Slider {...settings}>
          {data.map((d, index) => (
            <div
              key={d.name}
              className={`h-[300px] text-white rounded-xl gap-4 mb-5 ${
                index % 2 === 0 ? 'bg-[#F7931A]' : 'bg-[#13131E]'
              }`}
            >
              <div className="h-46 rounded-t-x flex justify-center items-center">
                <img src={d.img} alt="" className=" h-1/2 w-15 mt-4 rounded-full object-fill "></img>
              </div>

              <div className="flex flex-col justify-center items-center gap-4 p-4">
                <p className={`text-xl font-semibold items-center mb-4 ${index % 2 === 0 ? 'text-[#13131E]' : 'text-[#F7931A]'}`}>
                  {d.name}
                </p>
                <p className="text-center text-sm text-grey-700 items-center justify-center">{d.review}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {/* <div>
        <img src="https://coderixx.com/assets/images/Wavest-Layer.webp" alt="wave" className="bg-white-shade w-full opacity-1"></img>
      </div> */}
    </div>
  );
};

const data = [
  {
    img: '/coding.png',
    name: (<h1 className=" text-black" >Software Development</h1>),
    review:
      (<p className="text-grey-700 item-center">Our expert team specializes in creating dynamic and engaging websites tailored to meet your specific needs. Whether you require a simple informational site or a complex e-commerce platform, we have the skills and experience to deliver a seamless online presence for your business. </p>)
  },
  
  {
    img:'/coding.png',
    name: (<h1 className="text-black">Comprehensive</h1>),
    review:
      "Our expert team specializes in creating dynamic and engaging websites tailored to meet your specific needs. Whether you require a simple informational site or a complex e-commerce platform, we have the skills and experience to deliver a seamless online presence for your business.",
  },
  {
    img: '/loudspeaker.png',
    name: (<h1 className="text-black">Digital Marketing Services</h1>),
    review:
      "Stay ahead in the rapidly evovling digital landcape with our cutting-edge Web3 marketing solutions. Our marketing experts harness the power of blockchain technology and decentralized platforms to boost your online visibility, engage your target audience, and drive meaningful results for your business.",
  },
  {
    img: '/s2.png',
    name: (<h1 className="text-black">Mobile App Design</h1>),
    review:
      "Our expert team specializes in creating dynamic and engaging websites tailored to meet your specific needs. Whether you require a simple informational site or a complex e-commerce platform, we have the skills and experience to deliver a seamless online presence for your business.",
  },
  {
    img: '/coding.png',
    name: (<h1 className="text-black">Consulting Services</h1>),
    review:
      "Our consulting services are geared towards providing valuable insights and strategic guidance to optimize your online presence. From analyzing your existing website to formulating effective marketing strategies, we'll assist you in making informed decisions to enhance your digital success.",
  },
  {
    img: '/coding.png',
    name: (<h1 className="text-orange-800">B.SaaS Products </h1>),
    review:
      "Our expert team specializes in creating dynamic and engaging websites tailored to meet your specific needs. Whether you require a simple informational site or a complex e-commerce platform, we have the skills and experience to deliver a seamless online presence for your business..",
  },
  {
    img: '/loudspeaker.png',
    name: (<h1 className="text-black">UI/UX Design</h1>),
    review:
      "We understand the visual appeal of your website is crucial to making a lasting impression on visitors. Our talented designers will work closely with you to craft stunning and user-friendly interfaces that reflect your brand identity while ensuring a delightful user experience.",
  },
  
  {
    img: '/s1.png',
    name: (<h1 className="text-orange-800">Content Creation</h1>),
    review:
      "Our expert team specializes in creating dynamic and engaging websites tailored to meet your specific needs. Whether you require a simple informational site or a complex e-commerce platform, we have the skills and experience to deliver a seamless online presence for your business.",
  },
  
  {
    img: '/s2.png',
    name: (<h1 className="text-orange-800">Services for Web3 Clients</h1>),
    review:
      "Incredible work! Your team's expertise is evident in the blazing-fast website and its impeccable design. We were amazed by the turnaround time and couldn't & apost be happier with the results. Thank you for a fantastic job.",
  },
  
  {
    img: '/coding.png',
    name: (<h1 className="text-orange-800">User Experience Testing</h1>),
    review:
      "Our expert team specializes in creating dynamic and engaging websites tailored to meet your specific needs. Whether you require a simple informational site or a complex e-commerce platform, we have the skills and experience to deliver a seamless online presence for your business.",
  },
  
  {
    img: '/s1.png',
    name: (<h1 className="text-orange-800">Video Editing</h1>),
    review:
      "Our expert team specializes in creating dynamic and engaging websites tailored to meet your specific needs. Whether you require a simple informational site or a complex e-commerce platform, we have the skills and experience to deliver a seamless online presence for your business.",
  },
  
  {
    img: '/s2.png',
    name: (<h1 className="text-orange-800">Cross-cutting Services</h1>),
    review:
      "Our expert team specializes in creating dynamic and engaging websites tailored to meet your specific needs. Whether you require a simple informational site or a complex e-commerce platform, we have the skills and experience to deliver a seamless online presence for your business.",
  },
];

export default Services;