const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-rose-100 to-teal-100 text-black py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4 animate-pulse">Company</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/about"
                className="hover:text-green-400 transition duration-300 hover:animate-bounce"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/sell"
                className="hover:text-green-400 transition duration-300 hover:animate-bounce"
              >
                Sell on Ecoyaan
              </a>
            </li>
            <li>
              <a
                href="/careers"
                className="hover:text-green-400 transition duration-300 hover:animate-bounce"
              >
                Careers
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4 animate-pulse">Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/privacy"
                className="hover:text-green-400 transition duration-300 hover:animate-bounce"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/terms"
                className="hover:text-green-400 transition duration-300 hover:animate-bounce"
              >
                Terms of use
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4 animate-pulse">
            Follow Us
          </h3>
          <p className="mb-4 animate-bounce">
            Subscribe to receive updates on blogs, future launches and more!
          </p>
          <form className="flex flex-col sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-400 mb-2 sm:mb-0 sm:mr-2 flex-grow animate-pulse"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-r-md transition duration-300 animate-bounce"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-4 text-sm">
            By subscribing, you agree to receive notifications{" "}
            <a
              href="/privacy"
              className="hover:text-green-400 underline animate-ping"
            >
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <p className="text-gray-700 text-sm animate-pulse">
          <span className="block">Registered Address:</span>
          1-N-12T-781/1 Sri Krishna Vilasa, Urvastores, Ashoknagar(MR),
          Mangalore, Dakshina Kannada- 575006, Karnataka, India
        </p>
        <p className="text-gray-700 text-sm mt-2 animate-pulse">
          <span className="block">Legal Business Name:</span>
          Kindkarma E-Retail Private Limited CIN: U47912KA2023PTC182592
          Telephone: +91 9980490777
        </p>
        <p className="text-gray-700 text-sm mt-4 animate-bounce">
          © 2023 - 2024, Ecoyaan™
        </p>
      </div>
    </footer>
  );
};

export default Footer;
