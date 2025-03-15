function Footer() {
      return (
        <footer className="bg-gray-800 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <h4 className="text-lg font-bold mb-4">About Us</h4>
                <ul>
                  <li><a href="#" className="hover:text-blue-400">Our Story</a></li>
                  <li><a href="#" className="hover:text-blue-400">Careers</a></li>
                  <li><a href="#" className="hover:text-blue-400">Press</a></li>
                  <li><a href="#" className="hover:text-blue-400">Contact Us</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-4">Discover</h4>
                <ul>
                  <li><a href="#" className="hover:text-blue-400">Categories</a></li>
                  <li><a href="#" className="hover:text-blue-400">Cost Guides</a></li>
                  <li><a href="#" className="hover:text-blue-400">Projects</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-4">For Pros</h4>
                <ul>
                  <li><a href="#" className="hover:text-blue-400">Join as a Pro</a></li>
                  <li><a href="#" className="hover:text-blue-400">Pro Resources</a></li>
                  <li><a href="#" className="hover:text-blue-400">Help Center</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {/* Replace with relevant Lucide icons for social media */}
                  <a href="#" className="hover:text-blue-400">
                    {/* Facebook icon */}
                  </a>
                  <a href="#" className="hover:text-blue-400">
                    {/* Twitter icon */}
                  </a>
                  <a href="#" className="hover:text-blue-400">
                    {/* Instagram icon */}
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center text-gray-400">
              &copy; {new Date().getFullYear()} Home Helper, Inc. All rights reserved.
            </div>
          </div>
        </footer>
      );
    }

    export default Footer;
