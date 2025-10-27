import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Heart,
  ExternalLink,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/Keerthiks16",
      color: "hover:bg-gray-800",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/keerthik-shetty-167658262",
      color: "hover:bg-blue-600",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://x.com/Keerthiks1604",
      color: "hover:bg-sky-500",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    // { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    // { name: "Contact", href: "#contact" },
  ];

  const contactInfo = [
    {
      icon: Mail,
      text: "keerthikshetty3@gmail.com",
      href: "mailto:keerthikshetty3@gmail.com",
    },
    {
      icon: Phone,
      text: "+91 9867486906",
      href: "tel:+919867486906",
    },
    {
      icon: MapPin,
      text: "Mumbai, Maharashtra, India",
      href: null,
    },
  ];

  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-semibold mb-4">Keerthik Shetty</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Full-stack developer passionate about creating beautiful,
              functional web experiences.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-white text-black rounded-xl transition-all duration-300 ${social.color} hover:text-white hover:scale-110`}
                    aria-label={social.name}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-4"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              Contact
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <li key={index}>
                    {contact.href ? (
                      <a
                        href={contact.href}
                        className="text-gray-400 hover:text-white transition-colors duration-300 flex items-start gap-3 group"
                      >
                        <Icon
                          size={20}
                          className="flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform"
                        />
                        <span className="break-all">{contact.text}</span>
                      </a>
                    ) : (
                      <div className="text-gray-400 flex items-start gap-3">
                        <Icon size={20} className="flex-shrink-0 mt-0.5" />
                        <span>{contact.text}</span>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Newsletter/CTA */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              Let's Connect
            </h3>
            <p className="text-gray-400 mb-4">
              Interested in working together? Feel free to reach out!
            </p>
            <a
              href="mailto:keerthikshetty3@gmail.com"
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300 group"
            >
              Get In Touch
              <ExternalLink
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mb-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* <p className="text-gray-400 text-sm text-center md:text-left">
            © {currentYear} Keerthi K S. All rights reserved.
          </p> */}

          <p className="text-gray-400 text-sm flex items-center gap-2">
            Built with using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
