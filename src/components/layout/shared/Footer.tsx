import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import Container from "../../../components/Container";
import logo from '../../../assets/img/logoWinter.png';

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-500 pt-10 px-16 md:px-10 pb-5 mt-20">
        <Container className="mt-5">
          <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 text-[--color4] pb-8">
            <div>
            <Link to="/">
          {" "}
         <img src={logo} alt="" className="w-36 " loading="lazy"/>
        </Link>

              <p className="w-[78%] mb-8">
                We’re dedicated to providing warmth and comfort to those in need through clothing donations. Join us in making a difference!
              </p>
              <button
                className="btn btn-primary text-white"
              >
               Donate Now
              </button>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-8">CONTACTS</h3>
              <div className="space-y-2 mb-8">
                <Link
                  to="/"
                  className="flex items-center gap-2 hover:text-accent transition duration-500"
                >
                  <FaMapMarkerAlt /> New York, USA
                </Link>
                <Link
                  to="/"
                  className="flex items-center gap-2 hover:text-accent transition duration-500"
                >
                  <FaEnvelope /> info@winterwardrobe.org
                </Link>
                <Link
                  to="/"
                  className="flex items-center gap-2 hover:text-accent transition duration-500"
                >
                  <FaPhone /> +1 234 567 890
                </Link>
              </div>
              <div className="flex justify-between max-w-[60%] gap-3">
                <a
                  href="https://twitter.com"
                  className="border rounded-full p-3 hover:bg-[#1999DC] transition duration-500"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://facebook.com"
                  className="border rounded-full p-3 hover:bg-[#39548D] transition duration-500"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://instagram.com"
                  className="border rounded-full p-3 hover:bg-[#B32997] transition duration-500"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-8">PROGRAMS</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="hover:text-accent transition duration-500">
                    Winter Clothing Drives
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-accent transition duration-500">
                    Community Outreach
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-accent transition duration-500">
                    Volunteer Opportunities
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-accent transition duration-500">
                    Corporate Sponsorships
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-accent transition duration-500">
                    Support Resources
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-8">DONATE</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="hover:text-accent transition duration-500">
                    Monetary Donations
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-accent transition duration-500">
                    Clothing Donations
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-accent transition duration-500">
                    Gift Cards
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-accent transition duration-500">
                    Fundraiser Campaigns
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-accent transition duration-500">
                    Sponsor a Family
                  </Link>
                </li>
              </ul>
            </div>
          </section>
          
          {/* Sub footer */}
          <section className="text-[--color4]">
            <hr className="border-b-1 border-[--color5]" />
            <div className="py-3 flex flex-col md:flex-row justify-between">
              <div className="flex gap-3 mb-3 md:mb-0">
                <p>Terms of Use</p>
                <span className="border border-r-[--color5]"></span>
                <p>Privacy Policy</p>
              </div>
              <div>
                <p>
                  Copyright ©{new Date().getFullYear()} by{" "}
                  <span className="text-primary">Winter Wardrobe</span>. All rights reserved.
                </p>
              </div>
            </div>
          </section>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
