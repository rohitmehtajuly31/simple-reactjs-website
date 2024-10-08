import React from 'react';
import Header from './Header';
import Footer from './footer';
import Column from './column';
const Home = () => {
  return (
    <div className='flex flex-col mx-5'>
    <div className='flex flex-row justify-between'>
      <div className=" bg-zinc-200 ">Integration % Solution</div>
      <div className=" bg-zinc-700 "><button>submit now </button></div>
    </div>
      <div className='flex flex-row my-8 pb-7'>
        <div className="w-3/5  h-96 flex flex-col justify-start "><h1>Run your business anytime and anywhere, on any device</h1>
        <p className='w-4/5'>airSlate SignNow is the eSignature solution SMBs and enterprises rely on: easy, reliable, at the right price, and scales with your document workflows.</p>
        <button className='my-5 w-[150px] h-10 rounded p-0.5 bg-red-700 '>Request a Demo</button>
     
        </div>
        <div className="w-3/6  h-96">
      
        <div className="flex flex-wrap justify-end gap-2 w-full mt-3  ">
  <img className="w-full max-w-[200px] h-auto" src="https://marketing-static.signnow.com/208/images/solutions-catalog/frame1.png" alt="Description of image" />
  <img className="max-w-[250px] max-h-[100px]" src="https://marketing-static.signnow.com/208/images/solutions-catalog/frame5.png" alt="Description of image" />
  <img className="w-full max-w-[80px] max-h-[150px]" src="https://marketing-static.signnow.com/208/images/solutions-catalog/frame6.svg" alt="Description of image" />
  <img className="max-w-[150px] h-auto relative my-[-20px]" src="https://marketing-static.signnow.com/208/images/solutions-catalog/frame3.png" alt="Description of image" />
  <img className="w-full max-w-[200px] h-auto" src="https://marketing-static.signnow.com/208/images/solutions-catalog/frame1.png" alt="Description of image" />
  <img className="w-full max-w-[80px] max-h-[150px]" src="https://marketing-static.signnow.com/208/images/solutions-catalog/frame6.svg" alt="Description of image" />
  </div>

       
        </div>
      </div>
      {/* h2 */}  
      <div className='flex justify-center items-center pb-10'>
    <h2 className='text-3xl font-extrabold text-center text-black'>Explore the airSlate SignNow solution tailored to your industry</h2>
</div>
{/* columns */}
<Column/>

<div className='flex flex-row justify-between mx-5 bg-indigo-900 rounded-md px-7'>
  <div className="flex flex-col w-[40%]  justify-start items-start my-12">
     <h4 className='mb-4 text-white'>GO BEYOND ESIGNATURES</h4>
     <h2 className='text-xl mb-4 font-bold text-center text-white'> Business Cloud</h2>
     <p className='text-sm mb-4 text-white'>Automate business processes with the ultimate suite of tools that are customizable for any use case.</p>
     <button className='px-7 py-4 bg-blue-600  rounded-md text-center '><span className='font-bold text-white'>Request a Demo</span></button>
     </div>

  <div className="flex flex-col w-[60%]  my-12">
    <div className="flex flex-row mb-2   ">
      <div className="flex  w-[10%]"><img className='rounded-full w-10 h-10' src="data:image/png;base64,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" alt="" /></div>
      <div className='w-[90%]'>  <h2 className='text-xl text-white'>
    <span className='font-bold'>Automate business processes</span> with the ultimate suite of tools that are customizable for any use case
  </h2></div>
    </div>

    <div className="flex flex-row mb-4">
      <div className="flex  w-[10%]"><img className='rounded-full w-10 h-10' src="data:image/png;base64,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" alt="" /></div>
      <div className='w-[90%]'>  <h2 className='text-xl text-white'>
    <span className='font-bold'>Automate business processes</span> with the ultimate suite of tools that are customizable for any use case
  </h2></div>
    </div>

    <div className="flex flex-row mb-4">
      <div className="flex  w-[10%]"><img className='rounded-full w-10 h-10' src="data:image/png;base64,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" alt="" /></div>
      <div className='w-[90%]'>  <h2 className='text-xl text-white'>
    <span className='font-bold'>Automate business processes</span> with the ultimate suite of tools that are customizable for any use case
  </h2></div>
    </div>

  </div>
</div>
<div className='flex mx-5 my-7'>
  <div className="flex flex-row">
    <div className="w-[25%] mx-7">
      <img className='w-50' src="https://marketing-static.signnow.com/209/images/global/badges/Best-Support-Summer-2024.svg" alt="" />
    </div>
    <div className="w-[25%] mx-7">
      <img className='w-50' src="https://marketing-static.signnow.com/209/images/global/badges/Best-Support-Summer-2024.svg" alt="" />
    </div>
    <div className="w-[25%] mx-7">
      <img className='w-50' src="https://marketing-static.signnow.com/209/images/global/badges/Best-Support-Summer-2024.svg" alt="" />
    </div>
    <div className="w-[25%] mx-7">
      <img className='w-50' src="https://marketing-static.signnow.com/209/images/global/badges/Best-Support-Summer-2024.svg" alt="" />
    </div>
    <div className="w-[25%] mx-7">
      <h1 className='text-2xl'>Thousands of companies love airSlate SignNow</h1>
    </div>
  </div>
</div>

{/* drive */}

<div className="flex mx-5">
<div className="flex-flex-col w-[45%]"><h1 className='text-3xl mb-4'>Connect airSlate SignNow with your apps</h1>
<p>Drive your business forward with airSlate SignNow integrations. Initiate eSignature workflows without leaving your CRM, productivity app, or cloud storage.</p></div>
<div className="flex flex-wrap w-[65%] bg-white justify-center">
<div className=' mx- mb-4 flex w-[25%] border border-black   rounded-sm items-center justify-center '>
  <div className='w-20 h-20'><img className='' src="data:image/png;base64,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" alt="" />
  </div>
  </div>

  <div className='mx-2 mb-4  flex w-[25%] border border-black bg-white  rounded-sm items-center justify-center '>
  <div className='w-20 h-20'><img className='' src="data:image/png;base64,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" alt="" />
  </div>
  </div>
 

  <div className='mx-2 mb-4 flex w-[25%] border border-black bg-white  rounded-sm items-center justify-center '>
  <div className='w-20 h-20'><img className='' src="data:image/png;base64,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" alt="" />
  </div>
  </div>

  <div className='mx-2 mb-4 flex w-[25%] border border-black bg-white  rounded-sm items-center justify-center '>
  <div className='w-20 h-20'><img className='' src="data:image/png;base64,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" alt="" />
  </div>
  </div>

  <div className='mx-2 mb-4 flex w-[25%] border border-black bg-white  rounded-sm items-center justify-center '>
  <div className='w-20 h-20'><img className='' src="data:image/png;base64,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" alt="" />
  </div>
  </div>

  <div className='mx-2 mb-4 flex w-[25%] border border-black bg-white  rounded-sm items-center justify-center '>
  <div className='w-20 h-20'><img className='' src="data:image/png;base64,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" alt="" />
  </div>
  </div>
  
</div>

</div>

<div className="flex justify-center items-center">
  <h1>What our customers are saying</h1>
</div>

<div className="flex x-5 justify-between">
  <div className="flex-flex-col w-[54%] px-20 py-24 bg-blue-800 rounded-md">
    <div className="flex-flex-col w-[100%]"><h2 className='text-2xl text-white'>"When COVID-19 occurred we converted to 100% teletherapy within a week. Now I'm doing that intake contract work via airSlate SignNow and it has simplified the workflow."</h2>
    
   <p className='mt-10 text-white'>Mark Rufflow</p>
    </div>
  
  </div>
  <div className="flex-flex-col w-[45%] px-20 py-24 bg-blue-900 rounded-md">
  <div className="flex-flex-col w-[10 0%]"><h2 className='text-2xl text-white'>"When COVID-19 occurred we converted to 100% teletherapy within a week. Now I'm doing that intake contract work via airSlate SignNow and it has simplified the workflow."</h2>
    
    <p className='mt-10 text-white'>Mark Rufflow</p>
     </div>
  </div>
</div>


<div className="flex justify-center items-center my-7">
  <h1> Connect airSlate SignNow with your apps
  </h1>
</div>

     

       

      <Footer/>
    </div>
  );
};



export default Home;
