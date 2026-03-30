import { Github, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import ircLogo from "../../irc.png";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        <div className="col-span-2">
          <Link to="/" className="flex items-center gap-3 mb-6">
            <img src={ircLogo} alt="IRC Logo" className="w-8 h-8 object-contain" />
            <div className="flex flex-col">
              <span className="text-[10px] font-bold tracking-widest text-text-secondary uppercase">ITER Robotics Club</span>
              <span className="text-2xl font-bold tracking-tighter text-primary leading-none">CHAKRAVYUH</span>
            </div>
          </Link>
          <p className="text-text-secondary max-w-sm mb-8">
            The central technical fest of ITER, Siksha O' Anusandhan. 
            Organized by Iter Robotics Club. The ultimate robotics battleground for engineers and enthusiasts.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:text-primary transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:text-primary transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:text-primary transition-colors">
              <Github size={20} />
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="font-bold mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
          <ul className="space-y-4 text-text-secondary text-sm">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li><Link to="/roborace" className="hover:text-primary transition-colors">Robo Race</Link></li>
            <li><Link to="/robosoccer" className="hover:text-primary transition-colors">Bot FC</Link></li>
            <li><Link to="/register/roborace" className="hover:text-primary transition-colors">Register</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 uppercase tracking-widest text-sm">Contact</h4>
          <ul className="space-y-4 text-text-secondary text-sm">
            <li>
              <a href="mailto:irciternew@gmail.com" className="hover:text-primary transition-colors">
                irciternew@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+917682943276" className="hover:text-primary transition-colors">
                +91 76829 43276
              </a>
            </li>
            <li>E-457, ITER</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-border text-center text-xs text-text-secondary uppercase tracking-widest">
        © 2026 IRCxChakravyuh | ITER Robotics Club | Siksha O' Anusandhan.
      </div>
    </footer>
  );
};

export default Footer;
