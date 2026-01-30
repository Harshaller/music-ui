// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-[#181818] text-gray-400 text-xs md:text-sm p-4 md:p-6 mt-8 md:mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 text-center md:text-left">
        {/* Company */}
        <div>
          <h4 className="text-white font-semibold mb-2">Company</h4>
          <ul className="space-y-1">
            <li>About</li>
            <li>Jobs</li>
            <li>For the Record</li>
          </ul>
        </div>

        {/* Communities */}
        <div>
          <h4 className="text-white font-semibold mb-2">Communities</h4>
          <ul className="space-y-1">
            <li>For Artists</li>
            <li>Developers</li>
            <li>Advertising</li>
            <li>Investors</li>
            <li>Vendors</li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="text-white font-semibold mb-2">Useful Links</h4>
          <ul className="space-y-1">
            <li>Support</li>
            <li>Free Mobile App</li>
          </ul>
        </div>
      </div>

      {/* Legal */}
      <div className="mt-6 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
        <ul className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-4 text-xs md:text-sm">
          <li>Legal</li>
          <li>Safety & Privacy Center</li>
          <li>Privacy Policy</li>
          <li>Cookies</li>
          <li>About Us</li>
          <li>Accessibility</li>
        </ul>
        {/* Copyright Info */}
        <p className="mt-4 md:mt-0 text-gray-400 text-center md:text-left">
          © {new Date().getFullYear()} HarshalK. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
