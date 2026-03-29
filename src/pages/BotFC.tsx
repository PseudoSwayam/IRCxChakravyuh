import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Trophy, Users, Shield, Target, Cpu, ArrowRight, Zap } from "lucide-react";

const BotFC = () => {
  const features = [
    { icon: Target, title: "Precision", desc: "Master the art of robot handling for maximum accuracy." },
    { icon: Cpu, title: "Control", desc: "Operate OC-provided bots with finesse and speed." },
    { icon: Shield, title: "Strategy", desc: "Maximize scoring efficiency within the strict time limit." },
  ];

  const gameRules = [
    "3-minute single round match",
    "5 balls placed inside the arena",
    "Score in any available goalpost",
    "Out-of-arena balls are NOT returned",
    "No modifications to provided bots",
    "Highest scoring participant/team wins"
  ];

  return (
    <div className="relative">
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[50%] h-[50%] bg-secondary/5 rounded-full blur-[120px]" />
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-secondary/20 bg-secondary/5 text-secondary text-[10px] font-black tracking-[0.3em] uppercase mb-8">
            <Target size={14} /> The Digital Pitch
          </div>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-8 uppercase leading-none">
            BOT <span className="text-gradient">FC</span>
          </h1>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto font-light leading-relaxed mb-12">
            Experience the thrill of robotic soccer. Strategy, coordination, and precision engineering on the pitch.
          </p>

          {/* Highlight Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="inline-block"
          >
            <div className="glass px-8 py-6 rounded-2xl border-secondary/50 shadow-[0_0_30px_rgba(230,211,163,0.15)] relative group">
              <div className="absolute inset-0 bg-secondary/5 rounded-2xl animate-pulse" />
              <h3 className="relative text-secondary font-black text-xl md:text-2xl tracking-[0.1em] uppercase flex items-center gap-3">
                <Zap className="fill-secondary" /> 3 MINUTES. 5 BALLS. NO SECOND CHANCES.
              </h3>
            </div>
          </motion.div>
          
          <p className="mt-8 text-xs font-black uppercase tracking-[0.2em] text-secondary/60">
            Robots will be provided. No hardware required.
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
          <span className="text-secondary font-black tracking-[0.3em] text-xs uppercase mb-4 block">The Mission</span>
          <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tighter">About <span className="text-gradient">Bot FC</span></h2>
          <p className="text-text-secondary text-lg leading-relaxed mb-10">
            Bot FC is a fast-paced robotics control event where participants operate robots provided by the organizing team to score goals in a competitive arena.
            <br /><br />
            The focus is on precision, control, quick decision-making, and strategy under time pressure. Unlike traditional robot-building competitions, this event emphasizes gameplay skills and efficient robot handling.
          </p>
          <div className="mb-10 p-5 rounded-2xl border border-secondary/30 bg-secondary/5">
            <p className="text-sm md:text-base text-text-secondary leading-relaxed">
              <span className="text-secondary font-bold">Driver Registration Rule:</span> A particular bot can be driven multiple times by different drivers, but each driver entry must be registered as a separate team.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {features.map((f, i) => (
              <div key={i} className="flex gap-5 group">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center group-hover:bg-secondary group-hover:text-background transition-all duration-500">
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
          <div className="absolute -inset-4 bg-secondary/10 blur-3xl rounded-full" />
          <div className="relative glass rounded-[40px] p-10 border-secondary/20">
            <h3 className="text-2xl font-black mb-8 flex items-center gap-3 uppercase tracking-tight">
              <Shield className="text-secondary" /> Event Format
            </h3>
            <div className="space-y-4">
              {gameRules.map((rule, i) => (
                <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-secondary/30 transition-all duration-500 group">
                  <div className="w-8 h-8 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary font-black text-xs">
                    {i + 1}
                  </div>
                  <span className="font-black text-sm uppercase tracking-widest">{rule}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Strategy Section */}
      <section className="py-32 bg-secondary/5 border-y border-secondary/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-secondary font-black tracking-[0.4em] text-xs uppercase mb-4 block">Pro Level</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Game <span className="text-gradient">Strategy</span></h2>
            <p className="text-text-secondary mt-4 max-w-2xl mx-auto">This event is not just about speed — it's about smart gameplay.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "Control", desc: "Prioritize ball control over pure aggression." },
              { title: "Accuracy", desc: "Avoid losing balls outside the arena boundaries." },
              { title: "Targeting", desc: "Strategically choose which goalpost to target." },
              { title: "Efficiency", desc: "Maximize scoring efficiency within limited time." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-3xl border-white/5 hover:border-secondary/30 transition-all duration-500"
              >
                <h4 className="text-secondary font-black text-xl mb-4 uppercase tracking-tight">{item.title}</h4>
                <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Prizes */}
      <section className="py-32 px-6 text-center">
        <span className="text-secondary font-black tracking-[0.4em] text-xs uppercase mb-6 block">The Rewards</span>
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
            className="glass p-12 rounded-[40px] border-secondary/30 flex flex-col items-center order-1 md:order-2 md:scale-110 bg-secondary/5"
          >
            <div className="w-20 h-20 rounded-3xl bg-secondary/10 flex items-center justify-center mb-8">
              <Trophy className="text-secondary w-10 h-10" />
            </div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-secondary mb-2 font-black">Champion</span>
            <span className="text-6xl font-black text-secondary tracking-tighter">₹3,000</span>
          </motion.div>

          {/* 3rd */}
          <motion.div
            whileHover={{ y: -10 }}
            className="glass p-10 rounded-[40px] border-white/5 flex flex-col items-center order-3"
          >
            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
              <Trophy className="text-primary w-8 h-8" />
            </div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-text-secondary mb-2 font-black">2nd Runner Up</span>
            <span className="text-4xl font-black text-text-primary">₹1,000</span>
          </motion.div>
        </div>

        <div className="mt-24">
          <Link
            to="/register/robosoccer"
            className="group inline-flex items-center gap-4 px-12 py-6 bg-secondary text-background font-black rounded-2xl text-xl glow-button uppercase tracking-tighter"
          >
            REGISTER FOR BOT FC <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};


export default BotFC;

