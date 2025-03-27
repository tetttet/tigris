import { Link } from 'react-router-dom';
import logo from '../../assets/tigrisgrouplogo-removebg.png';
import { LinksToPages, navItems } from '../../data';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 px-6">
      <div className="lg:mx-36 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 border-b-2 border-gray-400 pb-8">
        <div className="flex flex-col gap-4 text-gray-600">
          <div className="flex flex-col items-start">
            <img src={logo} alt="logo" className="w-44" />
            <p className="text-sm mt-2">
              You can dream, create, design, and build the most wonderful place.
            </p>
          </div>
          <ul className="space-y-2">
            <li className="text-sm">+0213 456 987</li>
            <li className="text-sm">example@gmail.com</li>
            <li className="text-sm">www.youtube.com</li>
          </ul>
        </div>
        <div>
          <h2 className="text-md font-semibold text-black">Quick Links</h2>
          <ul className="mt-4 space-y-2 text-gray-600">
            {LinksToPages.map((link, index) => (
              <li key={index} className="cursor-pointer hover:text-primary">
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-md font-semibold text-black">Support</h2>
          <ul className="mt-4 space-y-2 text-gray-600">
            {navItems.map((link, index) => (
              <li key={index} className="cursor-pointer hover:text-primary">
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-md font-semibold text-black">Newsletter</h2>
          <div className="mt-4 flex flex-col gap-3">
            <input
              type="text"
              placeholder="Your Email"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="primary-bg-blue-header text-white py-2 rounded-md">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-600 py-4 text-sm">
        Copyright &copy;. Designed by <a href="#" className="text-primary">Tigris Group</a>
      </div>
    </footer>
  );
};

export default Footer;
