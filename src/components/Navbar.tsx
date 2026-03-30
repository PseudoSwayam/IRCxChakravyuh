import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import ircLogo from "../../irc.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Robo Race", path: "/roborace" },
    { name: "Bot FC", path: "/robosoccer" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/60 backdrop-blur-2xl border-b border-white/5 py-4" : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-4 group">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:border-primary/50 transition-all duration-500 group-hover:scale-105 overflow-hidden">
            <img src={ircLogo} alt="IRC Logo" className="w-9 h-9 object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-black tracking-[0.3em] text-text-secondary uppercase leading-none mb-1">ITER Robotics Club</span>
            <span className="text-2xl font-black tracking-tighter text-primary leading-none">CHAKRAVYUH</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 hover:text-primary relative group ${
                location.pathname === link.path ? "text-primary" : "text-text-secondary"
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-2 left-0 w-full h-[2px] bg-primary transition-transform duration-500 origin-left ${
                location.pathname === link.path ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
              }`} />
            </Link>
          ))}
          <Link
            to="/roborace"
            className="px-8 py-3 bg-primary text-background font-black rounded-xl text-xs tracking-widest glow-button uppercase"
          >
            Enter Arena
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-text-primary active:scale-90 transition-transform" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-3xl border-b border-white/5 overflow-hidden md:hidden"
          >
            <div className="p-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-2xl font-black tracking-tighter uppercase ${
                    location.pathname === link.path ? "text-primary" : "text-text-secondary"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/roborace"
                onClick={() => setIsOpen(false)}
                className="w-full py-5 bg-primary text-background font-black rounded-2xl text-center text-lg uppercase tracking-widest mt-4"
              >
                Enter Arena
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

