import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-foreground/20 pt-[100px] pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-foreground/70 leading-relaxed">
              As the hidden engine of the entertainment industry, we deliver strategic business solutions that enable our labels and partners to achieve their brightest success.
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground">Contact</h3>
            <div className="space-y-2 text-sm text-foreground/70">
              <p>Email: info@undertheline.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p className="leading-relaxed">
                Address: 123 Entertainment Blvd<br />
                Los Angeles, CA 90001<br />
                United States
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground">Quick Links</h3>
            <div className="space-y-2 text-sm text-foreground/70">
              <p className="hover:text-foreground cursor-pointer transition-colors">About Us</p>
              <p className="hover:text-foreground cursor-pointer transition-colors">Our Subsidiaries</p>
              <p className="hover:text-foreground cursor-pointer transition-colors">Careers</p>
              <p className="hover:text-foreground cursor-pointer transition-colors">Privacy Policy</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-foreground/10">
          <p className="text-center text-sm text-foreground/60">
            © {new Date().getFullYear()} Undertheline Holdings. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
