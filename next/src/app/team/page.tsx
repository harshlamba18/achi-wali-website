import Navbar from "../components/navbar";
import TeamJPG from "../assets/team.jpg";

export default function GameDev() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="h-screen">
        <div className="relative w-full h-full overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={TeamJPG.src}
              alt="Our Team"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 sm:px-8 md:px-16 lg:px-24">
            <div className="max-w-5xl mx-auto text-center">
              {/* <span className="inline-block px-4 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm font-semibold mb-6 border border-pink-500/30">
                Game Development Team
              </span> */}

              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-tight drop-shadow-lg fade-in">
                Our <span className="text-pink-400">Team</span>
              </h1>

              <div className="w-24 h-1 bg-pink-500 mx-auto mb-8"></div>

              <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-gray-200 mb-10 fade-in-2">
                We&apos;re a diverse group of passionate developers, artists,
                and storytellers committed to creating immersive gaming
                experiences that push creative and technical boundaries.
              </p>

              {/* <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                <button className="px-8 py-3 bg-pink-500 hover:bg-pink-400 text-gray-900 font-bold rounded-md transition duration-300 transform hover:scale-105 hover:shadow-lg">
                  Meet the Team
                </button>
                <button className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold rounded-md transition duration-300 transform hover:scale-105">
                  View Our Projects
                </button>
              </div> */}
            </div>

            <div className="absolute bottom-16">
              <span className="inline-flex flex-col items-center animate-bounce">
                <svg
                  className="w-8 h-8 text-pink-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                <span className="mt-2 text-pink-400 font-light">
                  Scroll Down
                </span>
              </span>
            </div>
          </div>

          <div className="absolute top-10 left-10 w-40 h-40 border-t-4 border-l-4 border-pink-500/20 hidden lg:block"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 border-b-4 border-r-4 border-pink-500/20 hidden lg:block"></div>
        </div>
      </section>
    </div>
  );
}
