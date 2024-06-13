import React from 'react';
import DownloadSvg from '@/Icons/download';
export default function CustomerReview() {
  return (
    <div className="bg-zinc-50 dark:bg-zinc-900 py-12 font-onest">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[36px] text-center text-3xl leading-9 font-extrabold text-zinc-900 dark:text-white">
          Hear from our customers
        </h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-zinc-800 shadow-lg rounded-lg p-6">
            <div className="flex items-center space-x-4">
              <img className="w-12 h-12 rounded-full" src="https://placehold.co/48x48" alt="User 1" />
              <div>
                <h3 className="text-lg font-medium text-zinc-900 dark:text-white">Yasmin Shafiq</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">CTO Purelogics</p>
              </div>
              <div className="ml-auto text-yellow-500">
                <span className="text-lg font-semibold">5</span> <span>⭐</span>
              </div>
            </div>
            <p className="mt-4 text-zinc-600 dark:text-zinc-300">
              “I like it because I like to travel far and still can connect with high speed.I like it because I like to travel far and still can connect with high speed.”
            </p>
          </div>
          <div className="bg-white dark:bg-zinc-800 shadow-lg rounded-lg p-6">
            <div className="flex items-center space-x-4">
              <img className="w-12 h-12 rounded-full" src="https://placehold.co/48x48" alt="User 2" />
              <div>
                <h3 className="text-lg font-medium text-zinc-900 dark:text-white">Ikram Hussain</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">Senior Flutter Developer</p>
              </div>
              <div className="ml-auto text-yellow-500">
                <span className="text-lg font-semibold">5</span> <span>⭐</span>
              </div>
            </div>
            <p className="mt-4 text-zinc-600 dark:text-zinc-300">
              “I like it because I like to travel far and still can connect with high speed.I like it because I like to travel far and still can connect with high speed.”
            </p>
          </div>
          <div className="bg-white dark:bg-zinc-800 shadow-lg rounded-lg p-6">
            <div className="flex items-center space-x-4">
              <img className="w-12 h-12 rounded-full" src="https://placehold.co/48x48" alt="User 3" />
              <div>
                <h3 className="text-lg font-medium text-zinc-900 dark:text-white">Sana Javed</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">UI/UX Designer @ VD</p>
              </div>
              <div className="ml-auto text-yellow-500">
                <span className="text-lg font-semibold">5</span> <span>⭐</span>
              </div>
            </div>
            <p className="mt-4 text-zinc-600 dark:text-zinc-300">
              “I like it because I like to travel far and still can connect with high speed.I like it because I like to travel far and still can connect with high speed.”
            </p>
          </div>
        </div>
        <br /><br /><br /><br />
        <div className="bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600 p-8 rounded-lg flex flex-col md:flex-row items-center justify-between text-white">
          <div className="flex-1 mb-4 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">Download now!</h2>
            <p className="mb-4">Our Pleasure is to serves you at every second of the clock while taking care of your safety. Each driver registered at our platform is firstly verified with his vehicle then allowed to pick-up rides.</p>
            <div className="flex space-x-4" id='phone'>
          <a href="#" className="relative bg-black text-white py-2 px-4 rounded-lg flex items-center" style={{ width: '180px', height: '52px' }}>
            <img src="https://via.placeholder.com/20" alt="App Store" className="mr-2" />
            <span className="absolute" style={{ top: '8px', left: '30px' }}>Download on the</span>
            <span className="absolute" style={{ top: '28px', left: '30px' }}>App Store</span>
          </a>
          {/* <a href="#" className="relative bg-black text-white py-2 px-4 rounded-lg flex items-center" style={{ width: '180px', height: '52px' }}>
            <img src="https://via.placeholder.com/20" alt="Google Play" className="mr-2" />
            <span className="absolute" style={{ top: '8px', left: '30px' }}>GET IT ON</span>
            <span className="absolute" style={{ top: '28px', left: '30px' }}>Google Play</span>
          </a> */}
          <a href="#" className="relative bg-black text-white py-2 px-4 rounded-lg flex items-center" style={{ marginRight: "100px",width:"147px",height:"66px" }}>  <span className="ml-2 flex items-center" style={{}}><DownloadSvg /></span>
  GET IT ON <br />Google Playstore
</a>
        </div>

          </div>
          <div className="flex-1 flex justify-center items-center relative">
            <img src="https://placehold.co/150x300" alt="Phone Image" className="absolute z-10 transform -rotate-6" />
            <img src="https://placehold.co/150x300" alt="Phone Image" className="absolute z-20 transform rotate-6" />
            <a href="#" className="bg-white text-blue-500 py-2 px-4 rounded-lg shadow-lg absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2 flex items-center" style={{ marginRight: "100px",width:"147px",height:"66px" }}>
  Download <span className="ml-2 flex items-center" style={{}}><DownloadSvg /></span>
</a>

          </div>
        </div>
      </div>
      <br />
    </div>
  );
}
