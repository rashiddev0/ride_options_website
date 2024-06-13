export default function SafetyandPleasure() {
    return (
        <div className="container mx-auto p-4 font-onest">
          <div className="flex flex-col md:flex-row mb-8">
            <div className="md:w-1/2 md:order-2">
              <img className="rounded-lg w-full" src="https://placehold.co/600x400" alt="Driving a car" />
            </div>
            <div className="md:w-1/2 md:order-1 flex flex-col justify-center p-4">
              <h2 className="text-[36px] text-2xl font-bold mb-4">Safety and Pleasure</h2>
              <p className="text-zinc-600 mb-4">
                Our Pleasure is to serve you at every second of the clock while taking care of your safety. Each driver registered on our platform is first verified with his vehicle then allowed to pick up rides. Customers can share their ride with loved ones to avoid any inconvenience. Moreover, reports against drivers can also be generated within 7 days through the application, easily.
              </p>
              <a
                  href="/"
                  className="inline-flex items-center justify-center w-full md:w-[170px] h-12 md:h-[54px] px-4 md:px-[20px] py-2 gap-2 md:gap-[8px] text-[#6D41A2] bg-[#6D41A226] rounded-[8px] shadow-md hover:bg-[#6D41A2] hover:text-white transition-colors"
              >
                  <span className="text-sm md:text-base">Learn More</span>
                  <svg
                      className="w-4 h-4 ml-2 md:ml-0 md:mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                  >
                      <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                      ></path>
                  </svg>
              </a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row mb-8">
            <div className="md:w-1/2">
              <img className="rounded-lg w-full" src="https://placehold.co/600x400" alt="Mobile navigation" />
            </div>
            <div className="md:w-1/2 flex flex-col justify-center p-4">
              <h2 className="text-[36px] text-2xl font-bold mb-4">Why Ride Options!</h2>
              <p className="text-zinc-600 mb-4">
                Ride Options offers a seamless transportation experience with a user-friendly app, diverse ride options, and a focus on safety and satisfaction. Whether commuting, running errands, or exploring the city, trust in our dependable service and dedicated support team to make every journey convenient and enjoyable. Ride confidently with Ride Options.
              </p>
              <a
                  href="/"
                  className="inline-flex items-center justify-center w-full md:w-[170px] h-12 md:h-[54px] px-4 md:px-[20px] py-2 gap-2 md:gap-[8px] text-[#6D41A2] bg-[#6D41A226] rounded-[8px] shadow-md hover:bg-[#6D41A2] hover:text-white transition-colors"
              >
                  <span className="text-sm md:text-base">Learn More</span>
                  <svg
                      className="w-4 h-4 ml-2 md:ml-0 md:mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                  >
                      <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                      ></path>
                  </svg>
              </a>
            </div>
          </div>
        </div>
    )
}
