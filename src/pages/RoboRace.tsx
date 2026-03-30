import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Zap, Trophy, Settings, Flag, MapPin, ArrowRight, Cpu, Wrench, Scale } from "lucide-react";

const RoboRace = () => {
  const features = [
    { icon: Flag, title: "Course", desc: "Complex tracks with obstacles, ramps, and terrain challenges." },
    { icon: Zap, title: "Speed", desc: "Focus on stability and maneuverability at high velocities." },
    { icon: Settings, title: "Control", desc: "Manual or wireless control systems allowed." },
  ];

  const trackFeatures = ["Curves", "Ramps", "Sand pits", "Bridges", "Speed breakers", "Many More..."];

  return (
    <div className="relative">
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute inset-0 tech-grid opacity-[0.1]" />
      </div>

      {/* Hero */}
      <section className="py-32 px-6 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-black tracking-[0.3em] uppercase mb-8">
            <Flag size={14} /> The Ultimate Speed Test
          </div>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-8 uppercase leading-none">
            ROBO <span className="text-gradient">RACE</span>
          </h1>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto font-light leading-relaxed">
            The premier robotics competition at <span className="text-primary font-bold">Chakravyuh</span>. 
            Engineered for speed, built for the win.
          </p>
        </motion.div>
      </section>

      {/* About */}
      <section className="py-24 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-black tracking-[0.3em] text-xs uppercase mb-4 block">The Mission</span>
          <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tighter">About the <span className="text-gradient">Event</span></h2>
          <p className="text-text-secondary text-lg leading-relaxed mb-10">
            Robo Race is a premier robotics competition at <span className="text-primary font-bold">Chakravyuh</span>, the central technical fest of <span className="text-primary font-bold">ITER, SOA</span>. 
            Organized by the <span className="text-primary font-bold">Iter Robotics Club</span>, it challenges teams to design and build a robot to navigate a predefined racing course as quickly as possible.
          </p>
          <div className="mb-10 p-5 rounded-2xl border border-primary/30 bg-primary/5">
            <p className="text-sm md:text-base text-text-secondary leading-relaxed">
              <span className="text-primary font-bold">Driver Registration Rule:</span> A particular bot can be driven multiple times by different drivers, but each driver entry must be registered as a separate team.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {features.map((f, i) => (
              <div key={i} className="flex gap-5 group">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-background transition-all duration-500">
                  <f.icon className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-black text-lg mb-2 uppercase tracking-tight">{f.title}</h4>
                  <p className="text-sm text-text-secondary leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full" />
          <div className="relative glass rounded-[40px] p-10 border-primary/20">
            <h3 className="text-2xl font-black mb-8 flex items-center gap-3 uppercase tracking-tight">
              <MapPin className="text-primary" /> Track Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {trackFeatures.map((feature, i) => (
                <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/30 transition-all duration-500 group">
                  <div className="w-3 h-3 rounded-full bg-primary group-hover:scale-150 transition-transform" />
                  <span className="font-black text-sm uppercase tracking-widest">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Requirements & Flow */}
      <section className="py-32 bg-card/20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-5xl font-black mb-12 uppercase tracking-tighter">Technical <span className="text-gradient">Specs</span></h3>
            <div className="space-y-6">
              {[
                { label: "Build", val: "Custom-built (No kits)" },
                { label: "Power", val: "Battery-powered (≤12V)" },
                { label: "Dimensions", val: "Max 30cm x 30cm x 30cm" },
                { label: "Weight", val: "Max 2.5kg" },
                { label: "Control", val: "Wireless (BT/RX/WiFi) / Manual" }
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/5">
                  <span className="text-text-secondary font-black uppercase tracking-widest text-xs">{item.label}</span>
                  <span className="text-primary font-black uppercase tracking-tighter">{item.val}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-5xl font-black mb-12 uppercase tracking-tighter">Event <span className="text-gradient">Flow</span></h3>
            <div className="space-y-8">
              {[
                { step: "01", title: "Check-in", desc: "Team verification and kit collection." },
                { step: "02", title: "Inspection", desc: "Safety and size compliance check." },
                { step: "03", title: "Race Rounds", desc: "Competitive runs on the obstacle course." },
                { step: "04", title: "The Finals", desc: "Top teams compete for the championship." },
              ].map((item, i) => (
                <div key={i} className="flex gap-8 group">
                  <span className="text-4xl font-black text-primary/20 group-hover:text-primary transition-colors duration-500">{item.step}</span>
                  <div>
                    <h4 className="font-black text-xl mb-2 uppercase tracking-tight group-hover:text-primary transition-colors">{item.title}</h4>
                    <p className="text-text-secondary leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Rule Book & Scoring */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-primary font-black tracking-[0.4em] text-xs uppercase mb-4 block">The Rulebook</span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8">RULE BOOK & <span className="text-gradient">SCORING SYSTEM</span></h2>
          <p className="text-text-secondary text-lg max-w-3xl mx-auto leading-relaxed">
            The Robo Race scoring system is designed to reward both speed and precision. Teams must efficiently navigate obstacles while minimizing penalties. Final rankings are determined based on total points and rule compliance.
          </p>
        </div>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {[
            { icon: Flag, text: "OBSTACLE PERFORMANCE", color: "primary" },
            { icon: Wrench, text: "ROUND-WISE TECHNICAL TIMEOUT", color: "primary" },
            { icon: Scale, text: "POINTS BASED RANKING", color: "primary" }
          ].map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="glass p-6 rounded-2xl border-primary/20 flex items-center gap-4 bg-primary/5 shadow-[0_0_20px_rgba(230,211,163,0.1)]"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <card.icon size={24} />
              </div>
              <span className="font-black uppercase tracking-widest text-sm">{card.text}</span>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Scoring Rules */}
          <div className="space-y-8">
            <h3 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3">
              <div className="w-2 h-8 bg-primary rounded-full" /> Scoring Rules
            </h3>
            <div className="space-y-4">
              <div className="p-6 rounded-3xl bg-white/5 border border-white/5">
                <h4 className="font-black uppercase text-primary mb-2 tracking-widest text-sm">Obstacle Points</h4>
                <p className="text-text-secondary text-sm leading-relaxed">Each obstacle on the track carries specific points. Successfully completing obstacles increases total score.</p>
              </div>
              <div className="p-6 rounded-3xl bg-white/5 border border-white/5">
                <h4 className="font-black uppercase text-primary mb-2 tracking-widest text-sm">Track Rules</h4>
                <p className="text-text-secondary text-sm leading-relaxed">Robots must stay within track boundaries and complete obstacles according to event guidelines.</p>
              </div>
              <div className="p-6 rounded-3xl bg-white/5 border border-white/5">
                <h4 className="font-black uppercase text-primary mb-2 tracking-widest text-sm">Winning Criteria</h4>
                <p className="text-text-secondary text-sm leading-relaxed">Teams are ranked primarily based on total points scored. In case of a tie, judges evaluate obstacle completion quality and rule adherence.</p>
              </div>
            </div>
          </div>

          {/* Penalties & Allowances */}
          <div className="space-y-8">
            <h3 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3">
              <div className="w-2 h-8 bg-red-500/50 rounded-full" /> Penalties & Allowances
            </h3>
            <div className="space-y-4">
              <div className="p-6 rounded-3xl bg-green-500/5 border border-green-500/10">
                <h4 className="font-black uppercase text-green-400 mb-2 tracking-widest text-sm">Technical Timeout</h4>
                <p className="text-text-secondary text-sm leading-relaxed"><span className="text-primary font-bold">First Round:</span> 2 technical timeouts allowed. <span className="text-primary font-bold">Final Round:</span> 1 technical timeout allowed.</p>
              </div>
              <div className="p-6 rounded-3xl bg-red-500/5 border border-red-500/10">
                <h4 className="font-black uppercase text-red-400 mb-2 tracking-widest text-sm">Track Out</h4>
                <p className="text-text-secondary text-sm leading-relaxed">If the robot goes 50% or more outside the track: <span className="text-primary font-bold">Penalty: -2 points</span> per occurrence.</p>
              </div>
              <div className="p-6 rounded-3xl bg-white/5 border border-white/5">
                <h4 className="font-black uppercase tracking-widest text-sm mb-2">Hand Touch</h4>
                <p className="text-text-secondary text-sm leading-relaxed"><span className="text-primary font-bold">First Round:</span> first <span className="text-green-400 font-bold">3 hand touches</span> are free. <span className="text-primary font-bold">Final Round:</span> first <span className="text-green-400 font-bold">1 hand touch</span> is free. After free limit: <span className="text-red-400 font-bold">Penalty: -2 points</span> per touch.</p>
              </div>
              <div className="p-6 rounded-3xl bg-white/5 border border-white/5">
                <h4 className="font-black uppercase tracking-widest text-sm mb-2">Obstacle Skip</h4>
                <p className="text-text-secondary text-sm leading-relaxed">First <span className="text-green-400 font-bold">obstacle skip</span>: No penalty. After that: <span className="text-red-400 font-bold">Penalty: -5 points</span> per skip.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bold Strip */}
        <div className="mt-20 py-8 border-y border-primary/20 text-center">
          <h4 className="text-2xl md:text-4xl font-black uppercase tracking-[0.2em] text-primary animate-pulse">
            PRECISION WINS. NOT JUST SPEED.
          </h4>
        </div>
      </section>

      <section className="py-32 px-6 text-center">
        <span className="text-primary font-black tracking-[0.4em] text-xs uppercase mb-6 block">The Rewards</span>
        <h2 className="text-4xl md:text-7xl font-black mb-20 uppercase tracking-tighter">Victory <span className="text-gradient">Prizes</span></h2>
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-end">
          {/* 2nd */}
          <motion.div
            whileHover={{ y: -10 }}
            className="glass p-10 rounded-[40px] border-white/5 flex flex-col items-center order-2 md:order-1"
          >
            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
              <Trophy className="text-text-secondary w-8 h-8" />
            </div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-text-secondary mb-2 font-black">Runner Up</span>
            <span className="text-4xl font-black text-text-primary">₹2,000</span>
          </motion.div>

          {/* 1st */}
          <motion.div
            whileHover={{ y: -10 }}
            className="glass p-12 rounded-[40px] border-primary/30 flex flex-col items-center order-1 md:order-2 md:scale-110 bg-primary/5"
          >
            <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center mb-8">
              <Trophy className="text-primary w-10 h-10" />
            </div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-primary mb-2 font-black">Champion</span>
            <span className="text-6xl font-black text-primary tracking-tighter">₹3,000</span>
          </motion.div>

          {/* 3rd */}
          <motion.div
            whileHover={{ y: -10 }}
            className="glass p-10 rounded-[40px] border-white/5 flex flex-col items-center order-3"
          >
            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
              <Trophy className="text-secondary w-8 h-8" />
            </div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-text-secondary mb-2 font-black">2nd Runner Up</span>
            <span className="text-4xl font-black text-text-primary">₹1,000</span>
          </motion.div>
        </div>

        <div className="mt-24">
          <Link
            to="/register/roborace"
            className="group inline-flex items-center gap-4 px-12 py-6 bg-primary text-background font-black rounded-2xl text-xl glow-button uppercase tracking-tighter"
          >
            REGISTER FOR ROBO RACE <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default RoboRace;

