import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-foreground/20 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Logo />
            <p className="text-[14px] text-foreground/70 leading-relaxed">
              As the hidden engine of the entertainment industry, we deliver strategic business solutions that enable our labels and partners to achieve their brightest success.
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground font-rift">Contact</h3>
            <div className="space-y-2 text-[14px] text-foreground/70">
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
            <h3 className="text-lg font-bold text-foreground font-rift">Family Site</h3>
            <div className="space-y-2 text-[14px] text-foreground/70">
              <p className="hover:text-foreground cursor-pointer transition-colors">Urbanlink 360</p>
              <p className="hover:text-foreground cursor-pointer transition-colors">Urbanlink xyz(400)</p>
              <p className="hover:text-foreground cursor-pointer transition-colors">Panorama</p>
              <p className="hover:text-foreground cursor-pointer transition-colors">Aradnas</p>
              <p className="hover:text-foreground cursor-pointer transition-colors">Mar/s</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-foreground/10">
          <p className="text-center text-[14px] text-foreground/60">
            © {new Date().getFullYear()} Undertheline Holdings. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
