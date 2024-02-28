import React from "react";
import ContactForm from "./ContactForm";

const ContactPage = () => {
  return (
    <section className="relative min-h-screen py-14 px-24 flex justify-center items-center flex-col bg-slate-200">
      <div className="container w-full flex flex-col md:flex-row justify-between items-center mt-8">
        <div className="contactInfo w-full md:w-6/12 flex flex-col md:mr-8">
          <div className="box relative py-5 px-0 flex">
            <div className="icon min-w-14 h-14 bg-red-700 justify-center items-center rounded-full text-base">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M384 476.1L192 421.2V35.9L384 90.8V476.1zm32-1.2V88.4L543.1 37.5c15.8-6.3 32.9 5.3 32.9 22.3V394.6c0 9.8-6 18.6-15.1 22.3L416 474.8zM15.1 95.1L160 37.2V423.6L32.9 474.5C17.1 480.8 0 469.2 0 452.2V117.4c0-9.8 6-18.6 15.1-22.3z" />
              </svg>
            </div>
            <div className="text flex ml-5 text-base text-red-700 flex-col font-semibold">
              <h3>Address</h3>
              <p className="text-left font-light text-red-700">
                Lorem ipsum, dolor sit <br />
                amet consectetur, adipisicing elit. <br />
                Maiores, culpa.
              </p>
            </div>
          </div>
          <div className="box relative py-5 px-0 flex">
            <div className="icon min-w-14 h-14 bg-red-700 justify-center items-center rounded-full text-base">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
              </svg>
            </div>
            <div className="text flex ml-5 text-base text-red-700 flex-col font-semibold">
              <h3>Phone</h3>
              <p className="text-left font-light text-red-700">0911-456-7890</p>
            </div>
          </div>
          <div className="box relative py-5 px-0 flex">
            <div className="icon min-w-14 h-14 bg-red-700 justify-center items-center rounded-full text-base">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
              </svg>
            </div>
            <div className="text flex ml-5 text-base text-red-700 flex-col font-semibold">
              <h3>Email</h3>
              <p className="text-left font-light text-red-700">
                sampleEmail@email.com
              </p>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactPage;
