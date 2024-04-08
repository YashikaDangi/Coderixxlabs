import React from 'react';
import { Grid } from '@mui/material';
import "./App.css";

const Body = () => {
  return (
    <div className='flex'>
    <div className="text-left md:w-1/2 z-10 xxl:max-w-2xl w-1/2 h-1/2 opacity-100 object-fill px-12">
      <div className='text-7xl p-4 m-2 my-10 tracking-wide '>
        <h1 className=" text-white"><strong>Unlock</strong> the Power</h1>
        <h1 className="my-4 text-white ">of <strong className="hover:text-purple-300 bg-gradient-to-t from-purple-300 to-purple-200 bg-clip-text text-transparent " class="horizontal">Blockchain</strong></h1>
      </div>
      <div className="flex">
        <p className="p-4 selection:ml-10 text-md text-[#838383] tracking-wide">Welcome to Coderixx, where we unlock the power of blockchain technology to create innovative 
        and user-friendly applications, games, and smart contracts. Our team of experts specializes in 
        developing solutions for [<strong className='text-white'>BTC</strong> and <strong className='text-white'>Solana blockchain</strong>, as well as NFTs].</p>
      </div>
      <div>
        <button className="relative inline-flex items-center text-white justify-center text-lg border border-purple-400 rounded-lg hover w-40 h-15 p-4 mt-10 mb-10 ml-4 bg-transparent">Projects</button>
      </div>
      <Grid container spacing={4}   alignItems="center" className='mb-10 px-2 ml-0'>
        <Grid item>
          <div className='px-10 border-r '>
            <strong className='text-4xl text-purple-400  '>30+</strong>
            <p className='text-lg text-gray-300 mt-4  '>Projects</p>
          </div>
        </Grid>
        <Grid item>
          <div className="text-white">
            <strong className='text-4xl text-purple-400 ml-2 '>20+</strong>
            <p className='text-lg text-gray-300 mt-4'>Countries</p>
          </div>
        </Grid>
      </Grid>
      </div>

       {/* https://st2.depositphotos.com/5366154/12147/v/450/depositphotos_121470512-stock-illustration-vector-neon-light-circle-in.jpg */}
    <img src="https://img.freepik.com/premium-vector/abstract-light-lines-movement-speed-purple-light-everyday-glowing-effect-semicircular-wave-light-trail-curve-swirl-car-headlights-incandescent-optical-fiber-png_267774-2274.jpg" 
    alt="wave2" className='right-0  mb-20'></img>
    </div>
  );
};

export default Body;
