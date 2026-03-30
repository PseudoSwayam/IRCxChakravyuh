import { motion, AnimatePresence } from "motion/react";
import { useParams, Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { ArrowLeft, Send, User, Mail, Phone, Users, Shield, CheckCircle2, AlertCircle, Hash } from "lucide-react";

type Participant = {
  name: string;
  email: string;
  phone: string;
  registrationNumber: string;
};

type RegistrationForm = {
  teamName: string;
  teamSize: number;
  robotType: "Manual" | "Auto";
  participationType: "Duo";
  participants: Participant[];
};

const createEmptyParticipant = (): Participant => ({
  name: "",
  email: "",
  phone: "",
  registrationNumber: "",
});

const createParticipants = (size: number): Participant[] =>
  Array.from({ length: size }, () => createEmptyParticipant());

const normalizeParticipants = (participants: Participant[], size: number): Participant[] => {
  const resized = participants.slice(0, size);
  while (resized.length < size) {
    resized.push(createEmptyParticipant());
  }
  return resized;
};

const getDefaultForm = (eventType?: string): RegistrationForm => {
  const teamSize = eventType === "robosoccer" ? 2 : 2;

  if (eventType === "robosoccer") {
    return {
      teamName: "",
      teamSize,
      robotType: "Manual",
      participationType: "Duo",
      participants: createParticipants(teamSize),
    };
  }

  return {
    teamName: "",
    teamSize,
    robotType: "Manual",
    participationType: "Duo",
    participants: createParticipants(teamSize),
  };
};

const Register = () => {
  const { eventType } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<RegistrationForm>(getDefaultForm(eventType));
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const googleScriptUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL as string | undefined;
  const backupGoogleScriptUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL_BACKUP as string | undefined;

  useEffect(() => {
    setFormData(getDefaultForm(eventType));
    setIsSuccess(false);
    setErrorMessage("");
  }, [eventType]);

  useEffect(() => {
    if (isSuccess) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [isSuccess]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(false);
    setErrorMessage("");
    setIsSubmitting(true);

    const eventName = eventType === "roborace" ? "Robo Race" : "Bot FC";
    const participants = formData.participants.slice(0, formData.teamSize);

    const payload = {
      name: participants[0]?.name || "",
      email: participants[0]?.email || "",
      phone: participants[0]?.phone || "",
      registrationNumber: participants[0]?.registrationNumber || "",
      teamName: formData.teamName,
      teamSize: formData.teamSize,
      eventType: eventName,
      extraField: eventType === "roborace" ? formData.robotType : formData.participationType,
      participants,
    };

    try {
      if (!googleScriptUrl) {
        throw new Error("Missing Google Script URL");
      }

      const submitToScript = async (url: string) => {
        const controller = new AbortController();
        const timeoutId = window.setTimeout(() => controller.abort(), 15000);

        try {
          await fetch(url, {
            method: "POST",
            mode: "no-cors",
            headers: {
              "Content-Type": "text/plain;charset=utf-8",
            },
            body: JSON.stringify(payload),
            signal: controller.signal,
          });
        } finally {
          window.clearTimeout(timeoutId);
        }
      };

      try {
        await submitToScript(googleScriptUrl);
      } catch {
        if (!backupGoogleScriptUrl) {
          throw new Error("Primary submission failed and no backup URL configured");
        }
        await submitToScript(backupGoogleScriptUrl);
      }

      // In no-cors mode, browser returns an opaque response which cannot be inspected.
      // If fetch resolves without throwing, treat it as submitted.

      setIsSuccess(true);
      setFormData(getDefaultForm(eventType));
    } catch {
      setErrorMessage("Something went wrong. Try again.");
      setIsSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  const eventName = eventType === "roborace" ? "Robo Race" : "Bot FC";
  const accentColor = eventType === "roborace" ? "text-primary" : "text-secondary";
  const bgColor = eventType === "roborace" ? "bg-primary" : "bg-secondary";
  const whatsappGroupLink =
    eventType === "roborace"
      ? "https://chat.whatsapp.com/Cveh24T2E9bAOFejdLndCa?mode=gi_t"
      : "https://chat.whatsapp.com/FOfqF1S7PjfGP1PCevfqSL?mode=gi_t";

  const updateParticipant = <K extends keyof Participant>(index: number, key: K, value: Participant[K]) => {
    setFormData((prev) => {
      const participants = [...prev.participants];
      participants[index] = {
        ...participants[index],
        [key]: value,
      };

      return {
        ...prev,
        participants,
      };
    });
  };

  return (
    <div className="relative min-h-screen pt-32 pb-20 px-6">
      {/* Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className={`absolute top-0 right-0 w-[40%] h-[40%] ${eventType === 'roborace' ? 'bg-primary/5' : 'bg-secondary/5'} rounded-full blur-[120px]`} />
        <div className="absolute inset-0 tech-grid opacity-[0.1]" />
      </div>

      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors mb-12 group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> 
          <span className="text-xs font-black uppercase tracking-widest">Back to Event</span>
        </button>

        <div className="mb-16">
          <span className={`font-black tracking-[0.4em] text-xs uppercase mb-4 block ${accentColor}`}>Registration</span>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
            Join the <span className="text-gradient">{eventName}</span>
          </h1>
        </div>

        <AnimatePresence mode="wait">
          {isSuccess && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="mb-8 p-5 rounded-2xl border border-green-500/30 bg-green-500/10"
            >
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="text-green-400 w-5 h-5" />
                <p className="text-sm font-black uppercase tracking-wider text-green-300">Registration Successful 🚀</p>
              </div>
              <a
                href={whatsappGroupLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center px-5 py-3 rounded-xl bg-green-500/20 border border-green-500/30 text-green-300 text-xs font-black uppercase tracking-wider hover:bg-green-500/30 transition-colors"
              >
                Join WhatsApp Group
              </a>
            </motion.div>
          )}

          {!isSuccess && errorMessage && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="mb-8 p-5 rounded-2xl border border-red-500/30 bg-red-500/10 flex items-center gap-3"
            >
              <AlertCircle className="text-red-400 w-5 h-5" />
              <p className="text-sm font-black uppercase tracking-wider text-red-300">{errorMessage}</p>
            </motion.div>
          )}
        </AnimatePresence>

        <form onSubmit={handleSubmit} className="space-y-12">
          {/* Team Info Section */}
          <section className="glass p-8 md:p-12 rounded-[40px] border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Shield size={120} className={accentColor} />
            </div>
            
            <h3 className="text-xl font-black mb-10 flex items-center gap-3 uppercase tracking-tight">
              <Shield className={accentColor} /> Team Configuration
            </h3>

            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-3 md:col-span-2">
                <label className="text-[10px] font-black text-text-secondary uppercase tracking-widest ml-1">Team Name</label>
                <div className="relative">
                  <div className="absolute left-5 top-1/2 -translate-y-1/2 text-text-secondary/50">
                    <Users size={20} />
                  </div>
                  <input
                    type="text"
                    placeholder="ENTER TEAM NAME"
                    value={formData.teamName}
                    onChange={(e) => setFormData((prev) => ({ ...prev, teamName: e.target.value }))}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-14 pr-6 text-text-primary placeholder:text-text-secondary/30 focus:outline-none focus:border-primary/50 transition-all font-black uppercase tracking-widest text-sm"
                  />
                </div>
              </div>

              {eventType === "roborace" ? (
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-text-secondary uppercase tracking-widest ml-1">Robot Type</label>
                  <div className="grid grid-cols-2 gap-4">
                    <label className="flex items-center justify-center gap-3 p-5 rounded-2xl bg-white/5 border border-white/10 cursor-pointer hover:border-primary/50 transition-all group">
                      <input
                        type="radio"
                        name="robotType"
                        className="hidden peer"
                        value="Manual"
                        checked={formData.robotType === "Manual"}
                        onChange={() => setFormData((prev) => ({ ...prev, robotType: "Manual" }))}
                        required
                      />
                      <div className="w-4 h-4 rounded-full border-2 border-white/20 peer-checked:border-primary peer-checked:bg-primary transition-all" />
                      <span className="text-xs font-black uppercase tracking-widest">Manual</span>
                    </label>
                    <label className="flex items-center justify-center gap-3 p-5 rounded-2xl bg-white/5 border border-white/10 cursor-pointer hover:border-primary/50 transition-all group">
                      <input
                        type="radio"
                        name="robotType"
                        className="hidden peer"
                        value="Auto"
                        checked={formData.robotType === "Auto"}
                        onChange={() => setFormData((prev) => ({ ...prev, robotType: "Auto" }))}
                        required
                      />
                      <div className="w-4 h-4 rounded-full border-2 border-white/20 peer-checked:border-primary peer-checked:bg-primary transition-all" />
                      <span className="text-xs font-black uppercase tracking-widest">Auto</span>
                    </label>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-text-secondary uppercase tracking-widest ml-1">Participation Type</label>
                  <div className="p-5 rounded-2xl bg-white/5 border border-secondary/30 flex items-center justify-center gap-3">
                    <Users size={18} className="text-secondary" />
                    <span className="text-xs font-black uppercase tracking-widest">Duo (2 Members Fixed)</span>
                  </div>
                </div>
              )}
            </div>

            {eventType === "roborace" && (
              <div className="mt-10 space-y-3">
                <label className="text-[10px] font-black text-text-secondary uppercase tracking-widest ml-1">Team Size (2-4 Members)</label>
                <div className="flex items-center gap-4">
                  {[2, 3, 4].map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          teamSize: size,
                          participants: normalizeParticipants(prev.participants, size),
                        }))
                      }
                      className={`w-14 h-14 rounded-xl border font-black transition-all ${
                        formData.teamSize === size 
                          ? "bg-primary border-primary text-background shadow-[0_0_20px_rgba(230,211,163,0.3)]" 
                          : "bg-white/5 border-white/10 text-text-secondary hover:border-primary/50"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </section>

          <div className="space-y-10">
            <AnimatePresence mode="popLayout">
              {Array.from({ length: formData.teamSize }).map((_, index) => (
                <motion.section
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: index * 0.08 }}
                  className="glass p-8 md:p-12 rounded-[40px] border-white/5 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-8 opacity-5">
                    <User size={120} className={accentColor} />
                  </div>

                  <h3 className="text-xl font-black mb-10 flex items-center gap-3 uppercase tracking-tight">
                    <User className={accentColor} /> {index === 0 ? "Participant 1 (Driver)" : `Participant ${index + 1}`}
                  </h3>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-text-secondary uppercase tracking-widest ml-1">Participant Name</label>
                      <div className="relative">
                        <div className="absolute left-5 top-1/2 -translate-y-1/2 text-text-secondary/50">
                          <User size={18} />
                        </div>
                        <input
                          type="text"
                          placeholder="ENTER NAME"
                          value={formData.participants[index]?.name || ""}
                          onChange={(e) => updateParticipant(index, "name", e.target.value)}
                          required
                          className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-14 pr-6 text-text-primary placeholder:text-text-secondary/30 focus:outline-none focus:border-primary/50 transition-all font-black uppercase tracking-widest text-xs"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-text-secondary uppercase tracking-widest ml-1">Registration Number</label>
                      <div className="relative">
                        <div className="absolute left-5 top-1/2 -translate-y-1/2 text-text-secondary/50">
                          <Hash size={18} />
                        </div>
                        <input
                          type="text"
                          placeholder="ENTER REGISTRATION NUMBER"
                          value={formData.participants[index]?.registrationNumber || ""}
                          onChange={(e) => updateParticipant(index, "registrationNumber", e.target.value)}
                          required
                          className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-14 pr-6 text-text-primary placeholder:text-text-secondary/30 focus:outline-none focus:border-primary/50 transition-all font-black uppercase tracking-widest text-xs"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-text-secondary uppercase tracking-widest ml-1">Email Address</label>
                      <div className="relative">
                        <div className="absolute left-5 top-1/2 -translate-y-1/2 text-text-secondary/50">
                          <Mail size={18} />
                        </div>
                        <input
                          type="email"
                          placeholder="ENTER EMAIL"
                          value={formData.participants[index]?.email || ""}
                          onChange={(e) => updateParticipant(index, "email", e.target.value)}
                          required
                          className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-14 pr-6 text-text-primary placeholder:text-text-secondary/30 focus:outline-none focus:border-primary/50 transition-all font-black tracking-widest text-xs"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-text-secondary uppercase tracking-widest ml-1">Phone Number</label>
                      <div className="relative">
                        <div className="absolute left-5 top-1/2 -translate-y-1/2 text-text-secondary/50">
                          <Phone size={18} />
                        </div>
                        <input
                          type="tel"
                          placeholder="ENTER PHONE"
                          value={formData.participants[index]?.phone || ""}
                          onChange={(e) => updateParticipant(index, "phone", e.target.value)}
                          required
                          className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-14 pr-6 text-text-primary placeholder:text-text-secondary/30 focus:outline-none focus:border-primary/50 transition-all font-black tracking-widest text-xs"
                        />
                      </div>
                    </div>
                  </div>
                </motion.section>
              ))}
            </AnimatePresence>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-6 ${bgColor} text-background font-black rounded-[24px] text-xl glow-button flex items-center justify-center gap-3 uppercase tracking-tighter disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            {isSubmitting ? (
              <>
                <div className="w-6 h-6 border-4 border-background/30 border-t-background rounded-full animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                Confirm Registration <Send size={20} />
              </>
            )}
          </button>

          <p className="text-[11px] text-text-secondary/70 uppercase tracking-widest text-center">
            Powered by Google Sheets backend integration
          </p>

          <AnimatePresence>
            {isSuccess && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="text-center"
              >
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-wider text-primary hover:text-secondary transition-colors"
                >
                  <CheckCircle2 size={16} /> Return to Home
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </div>
    </div>
  );
};

export default Register;
