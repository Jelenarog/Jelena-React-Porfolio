import React, { useState } from 'react';
import Navbar from '../src/componenets/Navbar';
import Project from '../src/componenets/Project';
import About from '../src/componenets/About';
import Contact from '../src/componenets/Contact';
import Resume from '../src/componenets/Resume';
import Home from '../src/componenets/Home';
import Footer from '../src/componenets/footer';


function App () {
  const [currentPage, setCurrentPage] = useState('Home');

  // Depending on the value of currentPage, we return the corresponding component
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Project') {
      return <Project />;
    }
    if (currentPage === 'Contact') {
        return <Contact />;
      }
    if (currentPage === 'Resume') {
     return <Resume />;
      }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="min-h-screen">
      {/* We are passing the currentPage from state and the function to update it */}
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      <Footer/>
    </div>

  );
}





export default App;


