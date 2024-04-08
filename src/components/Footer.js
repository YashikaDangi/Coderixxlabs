import React from 'react';
import { Twitter, LinkedIn, Discord } from '@mui/icons-material';

const Footer = () => {
  return (
    <footer className="bg-[#13131E] text-white py-8" id="Footer">
      <div className="container mx-auto flex justify-between">
        {/* About Us Column */}
        <div className="w-2/3 pr-4 ">
          <h3 className="text-lg font-bold mb-4">About Us</h3>
          <p className="text-sm mb-4 w-2/3 text-[#838383] tracking-wide">At Coderixx, we have a passion for blockchain technology, and we are dedicated to helping businesses worldwide unlock its full potential. Our team of experts brings a wealth of
           experience and expertise in the blockchain industry, so you can rest assured that you are in good hands.</p>
          <form className="mb-4 flex gap-4 w-full">
            <input type="email" placeholder="Email" className="w-1/2 px-5 py-2 rounded-md mb-2 text-[#838383]" />
            <button type="submit" className="bg-orange-600 hover:bg-blue-600 text-black px-4 py-2 mb-2 rounded-md">Submit</button>
          </form>
        </div>
        
        {/* Access Column */}
        <div className="pr-20">
          <h3 className="text-lg font-bold mb-4">Access</h3>
          <ul className='w-1/4 px-4  border-gray-700 border-l '>
            <li className="mb-2 text-[#838383]"><a href="#">Home</a></li>
            <li className="mb-2 text-[#838383]"><a href="#">Testimonials</a></li>
              <li className="mb-2 text-[#838383]"><a href="#">Services</a></li>
            <li className="mb-2 text-[#838383]"><a href="#">Projects</a></li>
          </ul>
        </div>
        
        {/* Social Media Column */}
        <div className="w-1/4 pl-4 ">
          <h3 className="text-lg px-20 font-bold mb-4">Social Media</h3>
          <ul className='border-l w-1/4 px-20 border-gray-700'>
              <li className="flex items-center mb-2 underline text-[#838383]"><Twitter className="text-[#838383] hover:text-[#F7931A] mr-2" /><a href="#">Discord</a></li><br></br>
            <li className="flex items-center mb-2 underline text-[#838383]"><Twitter className="text-[#838383] hover:text-[#F7931A] mr-2" />Twitter<a href="#"></a></li><br></br>
            <li className="flex items-center mb-2 underline text-[#838383]"><LinkedIn className="text-[#838383] hover:text-[#F7931A] mr-2" /><a href="#">LinkedIn</a></li>
          </ul>
        </div>
      </div>
    {/* Footer Bottom Line */}
    <hr className="border-t border-[#F7931A] mt-8 md:w-3/3 mx-auto" />
      {/* Copywrite */}
      <div className="text-center mt-4 text-[#838383]">
        <p>Copyright &copy; 2022, Coderixx</p>
      </div>
    </footer>
  );
};

export default Footer;
