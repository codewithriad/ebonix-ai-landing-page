
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Product',
      links: [
        { name: 'Features', href: '#features' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'Testimonials', href: '#' },
        { name: 'FAQ', href: '#' },
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About', href: '#about' },
        { name: 'Blog', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Contact', href: '#' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '#' },
        { name: 'Guides', href: '#' },
        { name: 'API Reference', href: '#' },
        { name: 'Support', href: '#' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
        { name: 'Cookie Policy', href: '#' },
        { name: 'GDPR', href: '#' },
      ]
    }
  ];

  return (
    <footer className="py-16 bg-ebonix-black border-t border-ebonix-gray-medium">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="text-3xl font-bold gradient-text mb-2">ebonix</div>
              <p className="text-ebonix-gray-light max-w-md">
                Transforming the digital landscape with cutting-edge solutions that empower businesses to achieve their full potential.
              </p>
            </div>
            <div className="flex space-x-4">
              {['twitter', 'facebook', 'instagram', 'linkedin'].map((social) => (
                <a
                  key={social}
                  href={`#${social}`}
                  className="w-10 h-10 rounded-full bg-ebonix-gray-dark flex items-center justify-center hover:bg-ebonix-purple transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((category) => (
            <div key={category.title}>
              <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
              <ul className="space-y-3">
                {category.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-ebonix-gray-light hover:text-ebonix-purple-light transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-ebonix-gray-medium flex flex-col md:flex-row justify-between items-center">
          <p className="text-ebonix-gray-light text-sm mb-4 md:mb-0">
            &copy; {currentYear} ebonix. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-ebonix-gray-light hover:text-ebonix-purple-light transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-ebonix-gray-light hover:text-ebonix-purple-light transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-ebonix-gray-light hover:text-ebonix-purple-light transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
