import CityRide from "@/Icons/cityRide";

export default function Features() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 font-onest">
<h2 className="text-[36px] font-extrabold text-center text-zinc-900 dark:text-white mb-20">Features</h2>
<br />
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg p-6 border border-gray-300 mb-16">
          <img
            src="https://placehold.co/150x150"
            alt="City Rides Illustration"
            className="w-50 h-50 mx-auto"
            style={{marginTop:'-100px'}}
          />
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">City rides</h3>
          <p className="text-zinc-600 dark:text-zinc-300 mb-5">
            Our Pleasure is to serve you at every second of the clock while taking care of your safety. Each driver registered at our platform is firstly verified with his vehicle then allowed to pick-up rides.
          </p>
        </div>
        <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg p-6 border border-gray-300 mb-16">
          <img
            src="https://placehold.co/150x150"
            alt="City Rides Illustration"
            className="w-50 h-50 mx-auto"
            style={{marginTop:'-100px'}}
          />
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">City rides</h3>
          <p className="text-zinc-600 dark:text-zinc-300 mb-5">
            Our Pleasure is to serve you at every second of the clock while taking care of your safety. Each driver registered at our platform is firstly verified with his vehicle then allowed to pick-up rides.
          </p>
        </div>
        <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg p-6 border border-gray-300 mb-16">
          <img
            src="https://placehold.co/150x150"
            alt="City Rides Illustration"
            className="w-50 h-50 mx-auto"
            style={{marginTop:'-100px'}}
          />
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">City rides</h3>
          <p className="text-zinc-600 dark:text-zinc-300 mb-5">
            Our Pleasure is to serve you at every second of the clock while taking care of your safety. Each driver registered at our platform is firstly verified with his vehicle then allowed to pick-up rides.
          </p>
        </div>
        <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg p-6 border border-gray-300 mb-16">
          <img
            src="https://placehold.co/150x150"
            alt="City Rides Illustration"
            className="w-50 h-50 mx-auto"
            style={{marginTop:'-100px'}}
          />
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">City rides</h3>
          <p className="text-zinc-600 dark:text-zinc-300 mb-5">
            Our Pleasure is to serve you at every second of the clock while taking care of your safety. Each driver registered at our platform is firstly verified with his vehicle then allowed to pick-up rides.
          </p>
        </div>
        {/* Repeat the same structure for other feature cards */}
      </div>
      <div className="mt-10 text-center -mt-10"> {/* Added -mt-10 class to move the button 10px up */}
        <button className="items-center justify-center w-full md:w-[253px] h-12 md:h-[54px] px-4 md:px-[20px] py-2 gap-2 md:gap-[8px] text-[#6D41A2] bg-[#6D41A226] rounded-[8px] shadow-md hover:bg-[#6D41A2] hover:text-white transition-colors">
          More about our features
        </button>
      </div>
    </div>
  );
}
