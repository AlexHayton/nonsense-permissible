export default function Footer() {
  const footerLinks = {
    Company: ["About", "Work", "Careers", "Blog"],
    Legal: ["Privacy", "Terms", "Cookies"],
    Social: ["Twitter", "Dribbble", "Github", "LinkedIn"],
  };

  return (
    <footer className="border-t-2 border-black bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2 space-y-6">
            <img
              src="/nonsense.png"
              alt="Nonsense Permissible"
              className="h-16 w-auto"
            />
            <p className="text-black/70 max-w-md">
              Crafting delightful 3D toys and games for mobile platforms. Making
              the impossible, permissible.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-black/70 hover:text-black transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-black/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-black/60 text-sm">
            © 2025 Nonsense Permissible. All rights reserved.
          </p>
          <p className="text-black/60 text-sm">
            Made with ❤️ for the curious minds
          </p>
        </div>
      </div>
    </footer>
  );
}
