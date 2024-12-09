import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Scale className="h-8 w-8 text-indigo-400" />
              <span className="ml-2 text-xl font-bold text-white">Legal Workforce AI</span>
            </div>
            <p className="text-sm">
              Transforming legal client engagement with AI-powered solutions available 24/7.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="hover:text-indigo-400 transition-colors">Features</a>
              </li>
              <li>
                <a href="#team" className="hover:text-indigo-400 transition-colors">Our Team</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-indigo-400 transition-colors">Pricing</a>
              </li>
              <li>
                <a href="#demo" className="hover:text-indigo-400 transition-colors">Request Demo</a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="hover:text-indigo-400 transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-indigo-400 transition-colors">Terms of Service</Link>
              </li>
              <li>
                <a href="https://www.cookiepolicy.org" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">Cookie Policy</a>
              </li>
              <li>
                <a href="https://gdpr.eu" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">GDPR Compliance</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-indigo-400" />
                <a href="mailto:contact@legalworkforce.ai" className="hover:text-indigo-400 transition-colors">
                  contact@legalworkforce.ai
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-indigo-400" />
                <a href="tel:+1234567890" className="hover:text-indigo-400 transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-indigo-400 mt-0.5" />
                <span>
                  123 Legal Tower<br />
                  San Francisco, CA 94105<br />
                  United States
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              © {currentYear} Legal Workforce AI. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6 text-sm">
                <li>
                  <Link to="/support" className="hover:text-indigo-400 transition-colors">Support</Link>
                </li>
                <li>
                  <a href="https://status.legalworkforce.ai" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">Status</a>
                </li>
                <li>
                  <a href="https://security.legalworkforce.ai" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">Security</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;