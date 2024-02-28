import React from "react";

const ContactForm = () => {
  return (
    <div className="contactForm w-2/5 p-10 bg-transparent">
      <form>
        <h2 className="text-left text-2xl text-red-700 font-medium">
          Send Message
        </h2>

        <div className="inputBox relative w-full mt-3">
          <input
            type="text"
            required="required"
            className="w-full py-1 px-0 text-base my-4 mx-0 border-none border-b-2 border-red-700 outline-none resize-none bg-transparent"
          />
          <span className="absolute left-0 py-1 px-0 text-base my-3 mx-0 pointer-events-none transition-duration-500 text-red-950">
            Full Name
          </span>
        </div>

        <div className="inputBox relative w-full mt-3">
          <input
            type="text"
            required="required"
            className="w-full py-1 px-0 text-base my-4 mx-0 border-none border-b-2 border-red-700 outline-none resize-none bg-transparent"
          />
          <span className="absolute left-0 py-1 px-0 text-base my-3 mx-0 pointer-events-none transition-duration-500 text-red-950">
            Email
          </span>
        </div>

        <div className="inputBox relative w-full mt-3">
          <textarea
            required="required"
            className="bg-transparent w-full py-1 px-0 text-base my-4 mx-0 border-none border-b-2 border-red-700 outline-none resize-none"
          ></textarea>
          <span className="absolute left-0 py-1 px-0 text-base my-3 mx-0 pointer-events-none transition-duration-500 text-red-950">
            Type your Message
          </span>
        </div>

        <div className="inputBox relative w-full mt-3">
          <input
            type="submit"
            value="Send"
            className="w-full py-1 px-0 text-base my-4 mx-0 border-none border-b-2 border-red-700 outline-none resize-none"
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
