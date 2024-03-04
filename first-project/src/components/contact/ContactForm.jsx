import React from "react";

const ContactForm = () => {
  return (
    <div className="contactForm w-2/5 p-10 bg-transparent">
      <form>
        <h2 className="text-left text-2xl text-white font-medium">
          Send Message
        </h2>

        <div className="inputBox relative w-full mt-3">
          <div className="flex">
            <div className="inputBox relative w-1/3 mt-3 mr-9">
              <input
                type="text"
                required="required"
                placeholder="First Name"
                className="w-full py-1 px-0 text-base my-4 mx-0 border-b-2 border-white outline-none resize-none bg-transparent placeholder-white" // Added placeholder-white class
              />
            </div>
            <div className="inputBox relative w-1/3 mt-3">
              <input
                type="text"
                required="required"
                placeholder="Last Name"
                className="w-full py-1 px-0 text-base my-4 mx-0 border-b-2 border-white outline-none resize-none bg-transparent placeholder-white" // Added placeholder-white class
              />
            </div>
          </div>
        </div>

        <div className="inputBox relative w-full mt-3">
          <input
            type="text"
            required="required"
            placeholder="Email"
            className="w-3/4 py-1 px-0 text-base my-4 mx-0 border-b-2 border-white outline-none resize-none bg-transparent placeholder-white" // Added placeholder-white class
          />
        </div>

        <div className="inputBox relative w-full mt-3">
          <textarea
            required="required"
            placeholder="Type your Message"
            className="bg-transparent w-3/4 py-1 px-0 text-base my-4 mx-0 border-b-2 border-white outline-none resize-none placeholder-white" // Added placeholder-white class
          ></textarea>
        </div>

        <div className="inputBox relative w-full mt-3">
          <input
            type="submit"
            value="Send"
            className="py-1 px-0 w-3/4 cursor-pointer text-base my-4 mx-0 outline-none resize-none bg-white rounded-lg font-bold text-black"
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
