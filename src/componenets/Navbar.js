import React from "react";
const styles = {
  navStyles: {
    background: "#D9D3D6",
  },
};

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Navbar({ currentPage, handlePageChange }) {
  return (
    <header className="absolute inset-x-0 top-0 z-50 py-2 ">
      <nav className=" p-6 lg:px-8 " aria-label="Global">
        <div className="">
          <div className="flex justify-between lg:gap-x-12 shadow-xl">
            <div
              className="flex py-2 px-3 text-gray-600
        "
            >
              <p className="font-sans hover:font-serif text-xl font-black shadow-lg">
                Jelena Rogic
              </p>
            </div>
            <div className="hidden md:flex flex space-x-5 py-2 px-3 shadow-xlg">
              <a
                href="#home"
                className="text-sm font-semibold leading-6 text-gray-900 active:bg-violet-700 "
                onClick={() => handlePageChange("Home")}
              >
                Home
              </a>

              <a
                href="#about"
                className="text-sm font-semibold leading-6 text-gray-900 active:bg-violet-700"
                onClick={() => handlePageChange("About")}
              >
                About
              </a>

              <a
                href="#projects"
                className="text-sm font-semibold leading-6 text-gray-900"
                onClick={() => handlePageChange("Project")}
              >
                Projects
              </a>

              <a
                href="#resume"
                className="text-sm font-semibold leading-6 text-gray-900"
                onClick={() => handlePageChange("Resume")}
              >
                Resume
              </a>
              <a
                href="#contact"
                className="text-sm font-semibold leading-6 text-gray-900"
                onClick={() => handlePageChange("Contact")}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div
        className="md:hidden flex  items-center space-x-1"
        role="dialog"
        aria-modal="true"
      >
        <div className="inset-0 z-50"></div>
        <div className="">
          <div className="">
            <div className="-">
              <div className="space-x-2">

                <a
                  href="#home"
                  className="rounded-lg py-2.5 px-1 text-base font-semibold text-gray-900 hover:bg-gray-50"
                  onClick={() => handlePageChange("Home")}
                >
                  Home
                </a>

                <a
                  href="#about"
                  className="rounded-lg py-2.5 px-1 text-base font-semibold text-gray-900 hover:bg-gray-50"
                  onClick={() => handlePageChange("About")}
                >
                  About me
                </a>

                <a
                  href="#projects"
                  className="rounded-lg py-2.5 px-1 text-base font-semibold text-gray-900 hover:bg-gray-50"
                  onClick={() => handlePageChange("Projects")}
                >
                  Projects
                </a>

                <a
                  href="#resume"
                  className="rounded-lg py-2.5 px-1 text-base font-semibold text-gray-900 hover:bg-gray-50"
                  onClick={() => handlePageChange("Resume")}
                >
                  Resume
                </a>

                <a
                  href="#contact"
                  className="rounded-lg py-2.5 px-1 text-base font-semibold text-gray-900 hover:bg-gray-50"
                  onClick={() => handlePageChange("Contact")}
                >
                  Contact
                </a>
  
              </div>
            </div>
          </div>
        </div>
      </div>

 
    </header>
  );
}

export default Navbar;
