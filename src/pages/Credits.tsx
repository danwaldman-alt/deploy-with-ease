import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import Footer from "@/components/Footer";
import { Heart, Code, Globe, Users, Crown, Wrench, Star, Github, ExternalLink, Sparkles } from "lucide-react";

const DISCORD = "https://discord.gg/kbx46Cyc";

const team = [
  { name: "landsedge", role: "Owner", badge: "owner", desc: "Project founder and lead developer. Drives the vision and direction of X-NETWORK.", color: "#fee75c" },
  { name: "xullys", role: "Founder", badge: "founder", desc: "Co-founder and strategist. Handles community growth and partnerships.", color: "#a855f7" },
  { name: "lil_skittle", role: "Developer", badge: "dev", desc: "Core cheat development. Builds and maintains key exploit tools.", color: "#5865f2" },
  { name: "redhorse26", role: "Developer", badge: "dev", desc: "Backend and infrastructure. Keeps everything running smoothly.", color: "#ed4245" },
  { name: "cathead132", role: "Developer", badge: "dev", desc: "Feature development. Always shipping new capabilities.", color: "#57f287" },
  { name: "dannydan", role: "Contributor", badge: "contributor", desc: "Community contributions. Bug reports, testing, and improvements.", color: "#eb459e" },
];

const badgeConfig: Record<string, { bg: string; text: string; border: string; icon: typeof Crown }> = {
  owner: { bg: "bg-yellow-500/10", text: "text-yellow-400", border: "border-yellow-500/20", icon: Crown },
  founder: { bg: "bg-purple-500/10", text: "text-purple-400", border: "border-purple-500/20", icon: Star },
  dev: { bg: "bg-primary/10", text: "text-primary", border: "border-primary/20", icon: Wrench },
  contributor: { bg: "bg-secondary/60", text: "text-muted-foreground", border: "border-glass-border", icon: Heart },
};

const Credits = () => (
  <PageWrapper>
    <section className="max-w-5xl mx-auto px-6 py-24 relative z-10">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/8 border border-primary/15 mb-6">
          <Users className="w-3 h-3 text-primary" />
          <span className="text-[11px] font-semibold text-primary tracking-wide uppercase">Our Team</span>
        </div>
        <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-4">
          The People Behind
          <br />
          <span className="gradient-text">X-NETWORK</span>
        </h1>
        <p className="text-muted-foreground max-w-md mx-auto text-lg">
          Meet the developers and contributors who make it all possible.
        </p>
      </motion.div>

      {/* Leadership row */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.08 } } }}
        className="grid md:grid-cols-2 gap-4 mb-4"
      >
        {team.slice(0, 2).map((member) => {
          const badge = badgeConfig[member.badge];
          const BadgeIcon = badge.icon;
          return (
            <motion.div
              key={member.name}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="glass-card-hover p-8 group relative overflow-hidden"
            >
              {/* Subtle gradient accent */}
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-[60px] pointer-events-none opacity-20" style={{ background: member.color }} />
              
              <div className="relative z-10 flex items-start gap-5">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-lg font-bold flex-shrink-0 transition-transform duration-300 group-hover:scale-110 shadow-lg"
                  style={{ background: member.color, color: member.color === "#fee75c" ? "#000" : "#fff" }}
                >
                  {member.name.slice(0, 2).toUpperCase()}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-display text-lg font-bold text-foreground">{member.name}</span>
                    <span className={`text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg ${badge.bg} ${badge.text} border ${badge.border} flex items-center gap-1`}>
                      <BadgeIcon className="w-2.5 h-2.5" />
                      {member.role}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.desc}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Dev & contributor grid */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.06, delayChildren: 0.2 } } }}
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20"
      >
        {team.slice(2).map((member) => {
          const badge = badgeConfig[member.badge];
          const BadgeIcon = badge.icon;
          return (
            <motion.div
              key={member.name}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="glass-card-hover p-6 group text-center"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-sm font-bold mx-auto mb-4 transition-transform duration-300 group-hover:scale-110 shadow-lg"
                style={{ background: member.color, color: member.color === "#fee75c" ? "#000" : "#fff" }}
              >
                {member.name.slice(0, 2).toUpperCase()}
              </div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="font-display text-sm font-bold text-foreground">{member.name}</span>
              </div>
              <span className={`inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg ${badge.bg} ${badge.text} border ${badge.border} mb-3`}>
                <BadgeIcon className="w-2.5 h-2.5" />
                {member.role}
              </span>
              <p className="text-xs text-muted-foreground leading-relaxed mt-2">{member.desc}</p>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Acknowledgements section */}
      <div className="grid md:grid-cols-2 gap-4 mb-16">
        {/* Website credits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-sm font-bold text-foreground mb-4 flex items-center gap-3 uppercase tracking-wider">
            <Globe className="w-4 h-4 text-primary" />
            Website
          </h2>
          <div className="glass-card p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                <Code className="w-4 h-4 text-primary" />
              </div>
              <div>
                <span className="font-display text-sm font-bold text-foreground">xullys / landsedge</span>
                <p className="text-xs text-muted-foreground">Website design &amp; development</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Built from the ground up for the X-NETWORK community. Designed to be fast, clean, and easy to use.
            </p>
          </div>
        </motion.div>

        {/* Special thanks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <h2 className="font-display text-sm font-bold text-foreground mb-4 flex items-center gap-3 uppercase tracking-wider">
            <Heart className="w-4 h-4 text-primary" />
            Special Thanks
          </h2>
          <div className="glass-card p-6 h-[calc(100%-2rem)]">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Thanks to our entire Discord community for bug reports, feature suggestions, and spreading the word.
              X-NETWORK wouldn't exist without you.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs text-primary font-semibold">1,024+ community members</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Discord CTA */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="relative overflow-hidden glass-card p-8 md:p-10 border-[#5865f2]/20">
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#5865f2]/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-8 text-center sm:text-left">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(88,101,242,0.15)" }}>
              <svg width="28" height="28" viewBox="0 0 127.14 96.36" fill="#818cf8">
                <path d="M107.7 8.07A105.15 105.15 0 0 0 81.47 0a72.06 72.06 0 0 0-3.36 6.83 97.68 97.68 0 0 0-29.11 0A72.37 72.37 0 0 0 45.64 0 105.89 105.89 0 0 0 19.39 8.09C2.79 32.65-1.72 56.6.54 80.21h.02a105.73 105.73 0 0 0 32.17 16.15 77.7 77.7 0 0 0 6.89-11.31 68.42 68.42 0 0 1-10.85-5.18c.91-.66 1.8-1.34 2.66-2.04 20.87 9.53 43.46 9.53 64.08 0 .87.71 1.76 1.39 2.66 2.04a68.68 68.68 0 0 1-10.87 5.19 77 77 0 0 0 6.89 11.3A105.25 105.25 0 0 0 126.6 80.2c2.65-27.33-4.53-51.06-18.9-72.13ZM42.45 65.69c-6.27 0-11.41-5.73-11.41-12.77s5.02-12.78 11.41-12.78c6.45 0 11.5 5.78 11.41 12.78 0 7.04-5.02 12.77-11.41 12.77Zm42.24 0c-6.27 0-11.41-5.73-11.41-12.77s5.02-12.78 11.41-12.78c6.45 0 11.5 5.78 11.41 12.78 0 7.04-5.02 12.77-11.41 12.77Z"/>
              </svg>
            </div>
            <div className="flex-1">
              <p className="font-display text-xl font-bold text-foreground mb-1">Want to contribute?</p>
              <p className="text-sm text-muted-foreground">Join the Discord to get involved with development, report bugs, or suggest new features.</p>
            </div>
            <a
              href={DISCORD}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(88,101,242,0.4)] hover:-translate-y-0.5 flex-shrink-0"
              style={{ background: "#5865f2", color: "white" }}
            >
              Join Discord
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Bottom attribution */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <p className="text-xs text-muted-foreground flex items-center justify-center gap-1.5">
          Made with <Heart className="w-3 h-3 text-primary fill-primary" /> by the X-NETWORK team
        </p>
      </motion.div>
    </section>
    <Footer />
  </PageWrapper>
);

export default Credits;