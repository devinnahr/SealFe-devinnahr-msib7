'use client';
import { useState, useEffect } from 'react';

import Image from 'next/image';

const Footer = () => {
  return (
    <footer aria-labelledby="footer-heading" className="bg-gray-800 text-white py-8">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Company Info */}
          <div className="w-full md:w-1/3 mb-8">
            <Image
              alt="Company name"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
              width={100}
              height={100}
              className="mb-4"
            />
            <p className="text-gray-400">Making the world a better place through constructing elegant hierarchies.</p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="w-6 h-6">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Instagram</span>
                <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="w-6 h-6">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">X</span>
                <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="w-6 h-6">
                  <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">GitHub</span>
                <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="w-6 h-6">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.373-1.344-3.373-1.344-.454-1.171-1.106-1.485-1.106-1.485-.906-.619.069-.606.069-.606 1.002.071 1.528 1.031 1.528 1.031.892 1.527 2.347 1.089 2.92.832.092-.648.349-1.089.636-1.337-2.236-.254-4.588-1.118-4.588-4.972 0-1.099.393-1.995 1.037-2.693-.103-.255-.449-1.286.097-2.678 0 0 .83-.265 2.717 1.015a9.458 9.458 0 012.482-.334 9.444 9.444 0 012.482.334c1.883-1.28 2.715-1.015 2.715-1.015.548 1.392.201 2.423.098 2.678.647.698 1.037 1.594 1.037 2.693 0 3.86-2.358 4.716-4.596 4.964.359.308.679.918.679 1.846 0 1.333-.012 2.409-.012 2.734 0 .267.182.582.689.48A9.979 9.979 0 0022 12.017C22 6.484 17.523 2 12 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="w-full md:w-1/3 mb-8">
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Investors</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Press</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="w-full md:w-1/3 mb-8">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-white">Customer Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Sales</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Media Inquiries</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

