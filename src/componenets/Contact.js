//helper function that will check if the email is valid
import { validateEmail } from "./utils/helpers";
import React, { useState } from "react";
//emialjs we use for sending emails 
import emailjs from '@emailjs/browser';



function Form() {

  // set state variable and their values to an empty string
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === "email") {
      setEmail(inputValue);
    
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    //check if the email is not valid. If so we set an error message to be displayed on the page.
    if (!validateEmail(email)) {
      setErrorMessage("Invalid email address, please try again.");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
    }
    else if (!email || !name || !message){
      setErrorMessage("Please fill out all fields and try again.");
      return;
    }
    //otherwise send an email
    else { 
      emailjs.send('service_ogffocu','template_ztxgvpn', {name, message, email}, 'dcYWRObc2znj37P7C')
      .then((response) => {
         console.log('SUCCESS!', response.status, response.text);
      }, (err) => {
         console.log('FAILED...', err);
      });
   
      setErrorMessage("Thank you for contacting me, I will get back to you as soon as possible.");
    }


    //clear out the input after sending en email
    setName("");
    setEmail("");
    setMessage("");
  };

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
        <div className=" p-10 flex flex-col items-center justify-center text-center">
          <div className="text-center">
            <div>
              <form className="w-full max-w-lg font-mono backdrop-sepia-0 shadow-2xl bg-white/30 p-4 content-center  group my-4">
              <h1 className="mt-6 text-lg font-bold leading-8 text-gray-600 sm:text-4xl">Contact</h1>
                <div className="flex flex-wrap py-6 mb-20">
                  <div className="w-full md:w-1/2 p-5 mb-6 md:mb-0">
                    <input
                      className="text-center"
                      value={name}
                      name="name"
                      onChange={handleInputChange}
                      type="text"
                      placeholder="name"
                    />
                  </div>
                  <div className="w-full md:w-1/2 p-5 mb-6 md:mb-0">
                    <input
                      className="text-center"
                      value={email}
                      name="email"
                      onChange={handleInputChange}
                      type="email"
                      placeholder="email"
                    />
                  </div>
                  <div className ="w-full  p-8 m-6 ">
                    <textarea
                      className="text-center"
                      value={message}
                      name="message"
                      onChange={handleInputChange}
                      type="message"
                      placeholder="message"
                    />
                  </div>
                </div>
                <button type="button" onClick={handleFormSubmit}>
                  Submit
                </button>
              </form>
              {errorMessage && (
                <div>
                  <p className="error-text">{errorMessage}</p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <svg
            className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
            viewBox="0 0 1155 678"
          >
            <path
              fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
              fillOpacity=".3"
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
}

export default Form;
