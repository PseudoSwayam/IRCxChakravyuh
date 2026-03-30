import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Trophy, Zap, Users, ArrowRight, Shield, Cpu, Target, Flag } from "lucide-react";
import ircLogoWebp from "../../irc.webp";
import ircLogo from "../../irc.png";
import genesisLogoWebp from "../../genesislogo.webp";
import genesisLogo from "../../genesislogo.png";

const Home = () => {
  return (
    <div className="relative">
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 tech-grid opacity-[0.15]" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="relative z-10 max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-black tracking-[0.2em] uppercase mb-8"
            >
              <Cpu size={14} className="animate-spin-slow" />
              The Ultimate Robotics Battleground
            </motion.div>

            <div className="flex items-center justify-center gap-6 mb-8">
              <picture>
                <source srcSet={ircLogoWebp} type="image/webp" />
                <img
                  src={ircLogo}
                  alt="IRC Logo"
                  className="w-16 h-16 md:w-20 md:h-20 object-contain opacity-90"
                  decoding="async"
                  fetchPriority="high"
                />
              </picture>
              <picture>
                <source srcSet={genesisLogoWebp} type="image/webp" />
                <img
                  src={genesisLogo}
                  alt="Chakravyuh Genesis Logo"
                  className="w-16 h-16 md:w-20 md:h-20 object-contain opacity-90"
                  decoding="async"
                  fetchPriority="high"
                />
              </picture>
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-black tracking-tighter mb-8 leading-[0.9] uppercase">
              <span className="text-text-secondary/50 block text-3xl sm:text-5xl md:text-6xl mb-2">ITER ROBOTICS CLUB</span>
              <span className="text-gradient">CHAKRAVYUH</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-text-secondary mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              The central technical fest of <span className="text-primary font-semibold">ITER, Siksha O' Anusandhan</span>. 
              Experience the fusion of engineering excellence and competitive adrenaline.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                to="/roborace"
                className="group w-full sm:w-auto px-10 py-5 bg-primary text-background font-black rounded-2xl flex items-center justify-center gap-3 glow-button text-lg"
              >
                ROBO RACE <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/robosoccer"
                className="w-full sm:w-auto px-10 py-5 border border-white/10 bg-white/5 backdrop-blur-md text-text-primary font-black rounded-2xl hover:bg-white/10 transition-all text-lg"
              >
                BOT FC
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-text-secondary">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
        </motion.div>
      </section>

      {/* Event Cards Section */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-primary font-black tracking-[0.3em] text-xs uppercase mb-4 block">The Competition</span>
            <h2 className="text-4xl md:text-6xl font-black leading-none uppercase">Choose Your <span className="text-gradient">Arena</span></h2>
          </div>
          <p className="text-text-secondary md:text-right max-w-xs">Two legendary events designed to test the limits of your engineering prowess.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Robo Race Card */}
          <motion.div
            whileHover={{ y: -15 }}
            className="group relative glass rounded-[40px] p-10 flex flex-col overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
              <Zap size={200} className="text-primary" />
            </div>
            
            <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center mb-10 border border-primary/20 group-hover:scale-110 transition-transform duration-500">
              <Zap className="text-primary w-10 h-10" />
            </div>
            
            <h3 className="text-4xl font-black mb-6 uppercase tracking-tighter">Robo Race</h3>
            <p className="text-text-secondary text-lg mb-10 flex-grow leading-relaxed">
              Design and build a high-speed robot capable of navigating complex tracks with obstacles, ramps, and terrain challenges.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-12">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-text-secondary">
                  <Flag size={18} className="text-primary" />
                  <span>Obstacle Course</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-text-secondary">
                  <Shield size={18} className="text-primary" />
                  <span>Stability Test</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-text-secondary">
                  <Users size={18} className="text-primary" />
                  <span>Team Event</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-text-secondary">
                  <Trophy size={18} className="text-primary" />
                  <span className="font-bold text-text-primary">₹6,000 Pool</span>
                </div>
              </div>
            </div>

            <Link
              to="/roborace"
              className="group/btn w-full py-5 rounded-2xl bg-white/5 border border-primary/20 text-primary font-black text-center hover:bg-primary hover:text-background transition-all duration-500 flex items-center justify-center gap-2"
            >
              ENTER ARENA <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform" />
            </Link>
          </motion.div>

          {/* Bot FC Card */}
          <motion.div
            whileHover={{ y: -15 }}
            className="group relative glass rounded-[40px] p-10 flex flex-col overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
              <Target size={200} className="text-secondary" />
            </div>

            <div className="w-20 h-20 rounded-3xl bg-secondary/10 flex items-center justify-center mb-10 border border-secondary/20 group-hover:scale-110 transition-transform duration-500">
              <Target className="text-secondary w-10 h-10" />
            </div>

            <h3 className="text-4xl font-black mb-6 uppercase tracking-tighter">Bot FC</h3>
            <p className="text-text-secondary text-lg mb-10 flex-grow leading-relaxed">
              Control pre-built soccer robots and compete in fast-paced matches focusing on strategy, coordination, and real-time decision making.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-12">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-text-secondary">
                  <Cpu size={18} className="text-secondary" />
                  <span>Bots Provided</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-text-secondary">
                  <Shield size={18} className="text-secondary" />
                  <span>Fair Play</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-text-secondary">
                  <Users size={18} className="text-secondary" />
                  <span>Duo (2 Members)</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-text-secondary">
                  <Trophy size={18} className="text-secondary" />
                  <span className="font-bold text-text-primary">₹6,000 Pool</span>
                </div>
              </div>
            </div>

            <Link
              to="/robosoccer"
              className="group/btn w-full py-5 rounded-2xl bg-white/5 border border-secondary/20 text-secondary font-black text-center hover:bg-secondary hover:text-background transition-all duration-500 flex items-center justify-center gap-2"
            >
              ENTER ARENA <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto glass rounded-[50px] p-12 md:p-20 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {[
            { label: "Total Prizes", value: "₹12K", sub: "Cash Rewards" },
            { label: "Teams", value: "50+", sub: "Expected" },
            { label: "Events", value: "02", sub: "Major Arenas" },
            { label: "Organized By", value: "IRC", sub: "Iter Robotics Club" },
          ].map((stat, i) => (
            <div key={i} className="space-y-2">
              <div className="text-5xl md:text-7xl font-black text-primary tracking-tighter">{stat.value}</div>
              <div className="text-[10px] font-black text-text-secondary uppercase tracking-[0.4em]">{stat.label}</div>
              <div className="text-[10px] text-text-secondary/50 uppercase tracking-widest">{stat.sub}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

