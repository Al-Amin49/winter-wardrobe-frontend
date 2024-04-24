import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="pt-20">
            <footer className="footer bg-gradient-to-l from-green-500 to-black text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 place-items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Winter Wardrobe</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, repellendus?</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Services</h3>
                        <nav>
                            <a href="#" className="link link-hover block mb-2">Branding</a>
                            <a href="#" className="link link-hover block mb-2">Design</a>
                            <a href="#" className="link link-hover block mb-2">Marketing</a>
                            <a href="#" className="link link-hover block mb-2">Advertisement</a>
                        </nav>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Company</h3>
                        <nav>
                            <a href="#" className="link link-hover block mb-2">About us</a>
                            <a href="#" className="link link-hover block mb-2">Contact</a>
                            <a href="#" className="link link-hover block mb-2">Jobs</a>
                            <a href="#" className="link link-hover block mb-2">Press kit</a>
                        </nav>
                    </div>
                    <div className="">
                        <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-white hover:text-gray-200"><FaFacebook /></a>
                            <a href="#" className="text-white hover:text-gray-200"><FaTwitter /></a>
                            <a href="#" className="text-white hover:text-gray-200"><FaInstagram /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </div>
    );
};

export default Footer;