import React from "react";
const styles = {
  navStyles: {
    background: "#D9D3D6",
  },
};

const visible = () =>{

}
// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Navbar({ currentPage, handlePageChange }) {

  return (
    <header className="absolute inset-x-0 top-0 z-50 py-2 ">
      <nav className=" p-6 lg:px-8 " x-data="" aria-label="Global">
        <div className="">
          <div className="flex justify-between lg:gap-x-12 shadow-xl">
            <div
              className="flex py-2 text-gray-600
        "
            >
              <p className="font-sans hover:font-serif lg:text-xl font-black shadow-lg">
                Jelena Rogic
              </p>
              <button className="lg:hidden ml-5 inline-flex items-center justify-center border ml-auto h-5 w-5"> 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

              </button>
            </div>
            <div className="md:flex flex lg:space-x-5 py-2 px-3 shadow-xlg lg:flex-row flex-col text-sm font-semibold leading-6 text-gray-900 ">
            
              <a
                href="#home"
                onClick={() => handlePageChange("Home")}
                className={currentPage === 'Home' ? 'bg-gray-50 px-1' : 'bg-pink-50 px-1'}
              >
                Home
              </a>

              <a
                href="#about"
                className={currentPage === 'About' ? 'bg-gray-50 px-1' : 'bg-pink-50 px-1'}
                onClick={() => handlePageChange("About")}
              >
                About
              </a>

              <a
                href="#projects"
                className={currentPage === 'Project' ? 'bg-gray-50 px-1' : 'bg-pink-50 px-1'}
                onClick={() => handlePageChange("Project")}
              >
                Projects
              </a>

              <a
                href="#resume"
                className={currentPage === 'Resume' ? 'bg-gray-50 px-1' : 'bg-pink-50 px-1'}
                onClick={() => handlePageChange("Resume")}
              >
                Resume
              </a>
              <a
                href="#contact"
                className={currentPage === 'Contact' ? 'bg-gray-50 px-1' : 'bg-pink-50 px-1'}
                onClick={() => handlePageChange("Contact")}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
     
    </header>
  );
}

export default Navbar;
