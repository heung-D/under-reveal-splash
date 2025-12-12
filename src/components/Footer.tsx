const Footer = () => {
  return (
    <footer className="h-full bg-black border-t border-white/20 flex items-center">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_auto_auto] gap-8 md:gap-12 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white font-rift">
              UNDERTHELINE HOLDINGS
            </h2>
            <p className="text-[14px] text-white/70 leading-relaxed">
              Beyond the Line, Behind the Shine
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white font-rift">Contact</h3>
            <div className="space-y-2 text-[14px] text-white/70">
              <p>Email: info@undertheline.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p className="leading-relaxed">
                Address: 123 Entertainment Blvd
                <br />
                Los Angeles, CA 90001
                <br />
                United States
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white font-rift">
              Family Site
            </h3>
            <div className="space-y-2 text-[14px] text-white/70">
              <p className="hover:text-white cursor-pointer transition-colors">
                Urbanlink 360
              </p>
              <p className="hover:text-white cursor-pointer transition-colors">
                Urbanlink xyz(400)
              </p>
              <p className="hover:text-white cursor-pointer transition-colors">
                Panorama
              </p>
              <p className="hover:text-white cursor-pointer transition-colors">
                Aradnas
              </p>
              <p className="hover:text-white cursor-pointer transition-colors">
                Mar/s
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10">
          <p className="text-center text-[14px] text-white/60">
            © {new Date().getFullYear()} Undertheline Holdings. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
