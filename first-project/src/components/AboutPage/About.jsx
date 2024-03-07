import React from "react";
import hero from "../../assets/5L/hero.jpg";
import ceo from "../../assets/5L/CEO.png";

const About = () => {
  const styles = {
    backgroundImage: `linear-gradient(rgba(10, 0, 0, 0.8), rgba(10, 0, 0, 1)),url(${hero})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  };

  const bg = {
    background: "#E7E5E4",
  };

  const border = {
    background: "#FF0000",
  };

  const red = {
    color: "#FF0000",
  };

  return (
    <section style={bg}>
      <div
        className="w-full px-4 md:px-8 lg:px-16 xl:px-20 pt-64 pb-10"
        style={styles}
      >
        <h1 className="text-stone-200 text-7xl font-bold capitalize">
          who we are
        </h1>
      </div>

      <div className="container">
        <div className="heading w-11/12 m-auto text-center">
          <div
            className="wrapper w-5/6 my-12 mx-auto flex justify-between items-center"
            style={{ gap: "100px" }}
          >
            <div className="content w-1/2 my-20 mx-6">
              <h1 className="text-left text-4xl font-bold" style={red}>
                5L SOLUTIONS SUPPLY & <br />
                ALLIED SERVICE CORP.
              </h1>
              <p className="text-justify mt-5 text-md leading-normal font-medium">
                The Company was formed as a Corporation in September 29, 2015.
                Although still a young company at the present time, it has
                serviced a sizeable number of residences and stores during the
                first year of operations, with a workforce of twenty (20)
                skilled and professional personnel over 200 stores initially,
                located in the Luzon and Visayas Region of the Philippines. Now,
                our company has increased to more than 100 employees and over
                2000 stores and companies nationwide. providing technical
                equipment and services in the field of Information Technology in
                offices, residences, companies and manufacturing organization
                across various industries. Subsequent to service engagement, the
                Company has the capability to design, install and repair
                electronic and electrical powered devices or equipment such as
                CCTV, cable, air conditioning, system, security system
                customized to Customer requirement.
              </p>
            </div>

            <div className="image w-2/4">
              <img src={ceo} alt="" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
