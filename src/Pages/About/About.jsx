import React from "react";
import Header from "../../Components/Header/Header";
import { Container } from "reactstrap";

import Footer from "../../Components/Footer/Footer";
const About = () => {
  return (
    <div className="aboutPage mt-28">
      <Header />

      <Container
        className=" w-[90%] min-[490px]:p-5 mobile:p-3 my-4 text-slate-200 
      bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-lg aboutBox"
      >
        <h2 className=" min-[490px]:text-3xl mobile:text-xl py-3 text-center  text-blue-800 font-semibold shadow-sm rounded-xl ">
          About DreamStay
        </h2>
        <div>
          <h4>Welcome to DreamStay</h4>
          <p>
            DreamStay is a luxury boutique hotel located in the heart of Delhi. With 24 years of hospitality excellence,
            we pride ourselves on providing exceptional service and creating memorable experiences for our guests.
          </p>
        </div>
        <div>
          <h4>Our stay</h4>
          <p>
            Established in 2000, DreamStay has been a beloved landmark in Delhi for generations. Originally built as a
            Delhi Gate , our hotel has a rich history steeped in tradition and charm.
          </p>
        </div>
        <div>
          <h4>Our Mission</h4>
          <p>
            At DreamStay , our mission is to exceed guest expectations by delivering personalized service, luxurious
            accommodations, and unforgettable experiences. We are committed to sustainability and community engagement,
            ensuring that every guest feels valued and appreciated.
          </p>
        </div>
        <div>
          <h4>Unique Feature</h4>
          <p>
            Discover the essence of luxury at DreamStay, where every detail is designed to delight the senses. From our
            elegant rooms and suites to our award-winning dining options and exclusive amenities, we offer a
            one-of-a-kind experience that's second to none.
          </p>
        </div>
        <div>
          <h4>Accommodation</h4>
          <p>
            Choose from a range of elegant rooms and suites at DreamStay, each meticulously designed to offer comfort
            and style. Whether you're traveling for business or leisure, our accommodations provide the perfect retreat
            in the heart of DreamStay.
          </p>
        </div>
        <div>
          <h4>Dining Options</h4>
          <p>
            Indulge in culinary delights at DreamStay's renowned restaurants and bars, where expert chefs create
            exquisite dishes inspired by local flavors and international cuisine. From casual dining to fine dining
            experiences, we offer something to suit every palate.
          </p>
        </div>
        <div>
          <h4>Facilities and Services</h4>
          <p>
            Relax and rejuvenate with our array of luxurious facilities and services, including a state-of-the-art
            fitness center, rejuvenating spa treatments, and personalized concierge assistance. At DreamStay, your
            comfort and satisfaction are our top priorities.
          </p>
        </div>
        <div>
          <h4>Events and Meetings</h4>
          <p>
            Host your next event or meeting at DreamStay, where elegant venues and impeccable service combine to create
            unforgettable experiences. Whether you're planning a wedding, conference, or special celebration, our
            dedicated team will ensure every detail is perfect.
          </p>
        </div>

        <div>
          <h4>Local Area</h4>
          <p>
            Explore the vibrant culture and attractions of Delhi from the doorstep of DreamStay. Located in the heart of
            New Delhi, our hotel offers easy access to India Gate, Bars, Restaurants, etc., making it the perfect base
            for your urban adventure.
          </p>
        </div>

        <div>
          <h4>Local Area</h4>
          <p>
            Explore the vibrant culture and attractions of Lajpat Nagar from the doorstep of DreamStay. Located in the
            heart of Cannaught Place, our hotel offers easy access to GuruDwara, India Gate, Barbeque Nation, etc.,
            making it the perfect base for your urban adventure.
          </p>
        </div>

        <div>
          <h4>Contact Us</h4>
          <span className=" text-sm ">For inquiries, reservations, or assistance, please contact us at :-</span>

          <ul>
            <li>
              Phone:{" "}
              <a href="" className=" underline">
                9999999999
              </a>{" "}
            </li>
            <li>
              Email:{" "}
              <a href=" " className=" underline ">
                {" "}
                DreamStay2000@gmail.com
              </a>{" "}
            </li>
            <li>
              Address:{" "}
              <a href="" className=" underline">
                Sector-34 ,Cannaught Place, New Delhi, 110044
              </a>{" "}
            </li>
          </ul>
        </div>

        <p className=" text-center ">
          We look forward to welcoming you to DreamStay and creating unforgettable memories together.
        </p>
      </Container>
      <Footer />
    </div>
  );
};

export default About;
