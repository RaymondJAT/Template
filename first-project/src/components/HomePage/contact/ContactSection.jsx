import React from "react";
import ContactForm from "./ContactForm";
import place from "../../../assets/contact/map.png";
import phone from "../../../assets/contact/phone.png";
import email from "../../../assets/contact/email.png";

const ContactPage = () => {
  return (
    <section className="relative py-0 px-24 flex justify-center items-center flex-col bg-stone-950">
      <div className="container w-full flex flex-col md:flex-row justify-between items-center ml-32 mt-8">
        <div className="contactInfo w-full md:w-6/12 flex flex-col md:mr-8">
          <div className="box relative py-10 px-0 flex">
            <div className="icon min-w-14 justify-center items-center rounded-full text-base">
              <img src={place} alt="map img" className="w-14 h-14" />
            </div>
            <div className="text flex ml-12 text-base text-white flex-col font-semibold">
              <h3>Address</h3>
              <p className="text-left font-light text-white">
                Lorem ipsum, dolor sit <br />
                amet consectetur, adipisicing elit. <br />
                Maiores, culpa.
              </p>
            </div>
          </div>
          <div className="box relative py-10 px-0 flex">
            <div className="icon min-w-14 h-14 justify-center items-center rounded-full text-base">
              <img src={phone} alt="phone img" className="w-14 h-14" />
            </div>
            <div className="text flex ml-12 text-base text-white flex-col font-semibold">
              <h3>Phone</h3>
              <p className="text-left font-light text-white">0911-456-7890</p>
            </div>
          </div>
          <div className="box relative py-12 px-0 flex">
            <div className="icon min-w-14 h-14 justify-center items-center rounded-full text-base">
              <img src={email} alt="email img" className="w-16 h-16" />
            </div>
            <div className="text flex ml-12 pt-2 text-base text-white flex-col font-semibold">
              <h3>Email</h3>
              <p className="text-left font-light text-white">
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
