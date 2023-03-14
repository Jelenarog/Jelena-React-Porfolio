import React from 'react';
import {Work} from './subcomponents/work'
import WorkoutProject from  '../Images/HomepagePic.png'

const Project = () => {
  return (
    <div className=" p-6 flex flex-col items-center justify-center text-center">
    
      <h1 className='text-center mt-6 text-lg font-bold leading-8 text-gray-600 sm:text-2xl'>Check out some of my amazing projects!</h1>
      <Work
     projectName={"Bring-Popcorn"}
     image={'https://user-images.githubusercontent.com/113480175/204420954-2ac95b90-e01d-4e13-9fd1-1af25179e199.png'}
     description={'This is a movie website'}
      link={'https://nbadraun.github.io/Bring-Popcorn/genre.html'}/>
     <Work
     projectName={"Bring-Popcorn"}
     image={WorkoutProject}
     description={'This is a workout website'}
      link={'https://workout-planner.herokuapp.com/'}/>

    </div>
  );
};
export default Project;