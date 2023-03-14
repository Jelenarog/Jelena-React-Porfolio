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

    <div style={styles.navStyles}>
      <header className="">
      <nav
 
          >
          <div className="flex shadow-2xl justify-between p-5 lg:px-8  flex flex-row-reverse ...">
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto px-6 py-6 "
          aria-label="Global">
             
                <div className="hidden lg:flex lg:gap-x-12">
                  <a
                    href="#home"
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => handlePageChange("Home")}
                  >
                    Home
                  </a>
                  <a
                    href="#about"
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => handlePageChange("About")}
                  >
                    About
                  </a>
                  <a
                    href="#projects"
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => handlePageChange("Project")}
                  >
                    Projects
                  </a>
            
                  <a
                    href="#contact"
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => handlePageChange("Contact")}
                  >
                    Contact
                  </a>

                  <a
                    href="#resume"
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => handlePageChange("Resume")}
                  >
                    Resume
                  </a>
                </div>
              </div>
              </div>
      
        </nav>
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-50"></div>
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-slate-200 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <a
                    href="#home"
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => handlePageChange("Home")}
                  >
                    Home
                  </a>
                  <a
                    href="#about"
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => handlePageChange("About")}
                  >
                    About
                  </a>
                  <a
                    href="#projects"
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => handlePageChange("Project")}
                  >
                    Projects
                  </a>
            
                  <a
                    href="#contact"
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => handlePageChange("Contact")}
                  >
                    Contact
                  </a>

                  <a
                    href="#resume"
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => handlePageChange("Resume")}
                  >
                    Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>


    </div>



  );
}

export default Navbar;
