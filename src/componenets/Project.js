import React from "react";
import { Work } from "./subcomponents/work";
import WorkoutProject from "../Images/HomepagePic.png";
import TechBlog from "../Images/Tech-blog.png";
import WatherDashboard from "../Images/Weather-Dashboard.png";
import JsQuiz from "../Images/JavascryptQuiz.png";
import FarmersMarket from './../Images/Farmers-Market.png'

const Project = () => {
  return (
    <div>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <svg
            className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
            viewBox="0 0 1155 678"
          >
            <path
              fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
              fillOpacity=".3"
              d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
            />
            <defs>
              <linearGradient
                id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                x1="1155.49"
                x2="-78.208"
                y1=".177"
                y2="474.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9089FC" />
                <stop offset="1" stopColor="#FF80B5" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="p-6 flex flex-col items-center justify-center text-center">
          <h1 className="text-center mt-6 text-lg font-bold leading-8 text-gray-600 sm:text-2xl">
            Check out some of my amazing projects!
          </h1>
          <Work
            projectName={"Bring-Popcorn"}
            image={
              "https://user-images.githubusercontent.com/113480175/204420954-2ac95b90-e01d-4e13-9fd1-1af25179e199.png"
            }
            gitHubRepo={"https://github.com/NBADRAUN/Bring-Popcorn"}
            description={"A movie search website, click here to visit Github repo."}
            link={"https://nbadraun.github.io/Bring-Popcorn/genre.html"}
          />
          <Work
            projectName={"GetFit"}
            image={WorkoutProject}
            gitHubRepo={"https://github.com/Jelenarog/Workout-planner"}
            description={"Workout website, click here to visit my GitHub repo."}
            link={"https://workout-planner.herokuapp.com/"}
          />
           <Work
            projectName={"Tech-Blog"}
            image={TechBlog}
            gitHubRepo={"https://github.com/Jelenarog/Tech-blog"}
            description={"Tech-blog website, click here to visit Github repo."}
            link={"https://serene-bayou-31049.herokuapp.com/"}
          />
           <Work
            projectName={"Weather Dashboard"}
            image={WatherDashboard}
            gitHubRepo={"https://github.com/Jelenarog/Weather-Dashboard"}
          description={"Weather-dashboard website, click here to visit Github repo."}
            link={"https://jelenarog.github.io/Weather-Dashboard/"}
          />
           <Work
            projectName={"JavaScrypt quiz"}
            image={JsQuiz }
            gitHubRepo={"https://github.com/Jelenarog/Quiz"}
            description={"A JavaScript quiz, click here to visit Github repo."}
            link={"https://jelenarog.github.io/Quiz/"}
        
          />
            <Work
     projectName={"Farmers Market"}
     image={FarmersMarket}
      link={'https://farmermarket.herokuapp.com/'}/>
  
        </div>
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <svg
            className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
            viewBox="0 0 1155 678"
          >
            <path
              fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
              fillOpacity="3"
              d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
            />
            <defs>
              <linearGradient
                id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                x1="1155.49"
                x2="-78.208"
                y1=".177"
                y2="474.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9089FC" />
                <stop offset="1" stopColor="#FF80B5" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};
export default Project;
