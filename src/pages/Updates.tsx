import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import Footer from "@/components/Footer";
import { Rocket, Sparkles, Clock, ExternalLink, Wrench, Bug, Shield, Zap, Plus } from "lucide-react";
import { cheats } from "@/data/cheats";

const DISCORD = "https://discord.gg/kbx46Cyc";

const DiscordIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 127.14 96.36" fill="currentColor" aria-hidden="true">
    <path d="M107.7 8.07A105.15 105.15 0 0 0 81.47 0a72.06 72.06 0 0 0-3.36 6.83 97.68 97.68 0 0 0-29.11 0A72.37 72.37 0 0 0 45.64 0 105.89 105.89 0 0 0 19.39 8.09C2.79 32.65-1.72 56.6.54 80.21h.02a105.73 105.73 0 0 0 32.17 16.15 77.7 77.7 0 0 0 6.89-11.31 68.42 68.42 0 0 1-10.85-5.18c.91-.66 1.8-1.34 2.66-2.04 20.87 9.53 43.46 9.53 64.08 0 .87.71 1.76 1.39 2.66 2.04a68.68 68.68 0 0 1-10.87 5.19 77 77 0 0 0 6.89 11.3A105.25 105.25 0 0 0 126.6 80.2c2.65-27.33-4.53-51.06-18.9-72.13ZM42.45 65.69c-6.27 0-11.41-5.73-11.41-12.77s5.02-12.78 11.41-12.78c6.45 0 11.5 5.78 11.41 12.78 0 7.04-5.02 12.77-11.41 12.77Zm42.24 0c-6.27 0-11.41-5.73-11.41-12.77s5.02-12.78 11.41-12.78c6.45 0 11.5 5.78 11.41 12.78 0 7.04-5.02 12.77-11.41 12.77Z"/>
  </svg>
);

type UpdateType = "release" | "update" | "fix" | "security" | "maintenance";

interface ChangelogEntry {
  date: string;
  tool: string;
  version?: string;
  type: UpdateType;
  title: string;
  changes: string[];
}

const changelog: ChangelogEntry[] = [
  {
    date: "Apr 2, 2026", tool: "X-GUI", version: "7.0", type: "release",
    title: "Major UI Overhaul + New Token Generator",
    changes: ["Completely redesigned interface with cleaner layout", "New high-speed token generator — up to 3x faster", "Added batch unlock mode for all blooks at once", "Improved stealth detection bypass"],
  },
  {
    date: "Apr 2, 2026", tool: "K-Bot", version: "1.0", type: "release",
    title: "K-Bot Official Launch",
    changes: ["Bot flooding: spawn up to 200 bots in any game", "Auto-answer mode with AI-powered accuracy", "Custom bot names and avatar spoofing", "One-click game takeover"],
  },
  {
    date: "Apr 2, 2026", tool: "Underground", version: "2.3", type: "maintenance",
    title: "Wayground Endpoint Patch — Temporary Downtime",
    changes: ["Wayground pushed a backend update breaking host injection", "Investigation underway, expected fix within 48h", "Other features remain unaffected"],
  },
  {
    date: "Mar 18, 2026", tool: "QuizWare", version: "4.1", type: "update",
    title: "Stealth Mode Toggle + Accuracy Improvements",
    changes: ["New stealth mode hides script activity from proctors", "Answer accuracy increased to 98.7% across all question types", "Faster response time on timed quizzes", "Fixed edge case with image-based questions"],
  },
  {
    date: "Mar 18, 2026", tool: "IXploit", version: "3.2", type: "fix",
    title: "Script Injection Bug Fix",
    changes: ["Fixed script injection failure on certain math problem types", "Resolved crash when switching subjects mid-session", "Improved compatibility with IXL's latest update"],
  },
  {
    date: "Mar 5, 2026", tool: "X-Bot", version: "5.4", type: "update",
    title: "Silent Mode for Background Token Farming",
    changes: ["New silent mode runs entirely in the background", "No browser tab required — farm tokens while you sleep", "Added session scheduler for automated farming windows", "Reduced CPU usage by 40%"],
  },
  {
    date: "Feb 22, 2026", tool: "QuizWare", version: "4.0", type: "security",
    title: "Anti-Detection Hardening",
    changes: ["Rewrote core injection layer to evade new Quizizz fingerprinting", "Added randomized timing delays to mimic human behavior", "Encrypted script payload to bypass CSP rules"],
  },
  {
    date: "Feb 14, 2026", tool: "X-GUI", version: "6.5", type: "update",
    title: "Blooket Gold Box & Aquatic Pack Support",
    changes: ["Added unlock support for Gold Box and Aquatic Pack blooks", "Token multiplier updated for Season 6 event", "Fixed streak counter not resetting correctly"],
  },
  {
    date: "Feb 3, 2026", tool: "Underground", version: "2.2", type: "fix",
    title: "Host Kick & Game Control Fixes",
    changes: ["Fixed host kick not working in rooms with 50+ players", "Resolved race condition on rapid question skipping", "Improved stability on slow connections"],
  },
  {
    date: "Jan 28, 2026", tool: "IXploit", version: "3.1", type: "update",
    title: "Multi-Subject Auto-Detection (Beta)",
    changes: ["Beta support for auto-detecting active subject and routing correct solver", "Added Science and Social Studies modules", "Speed improvement on ELA text-passage questions"],
  },
];

const upcomingChanges = [
  { tool: "X-GUI", text: "Auto-update system — scripts patch themselves", eta: "Q2 2026" },
  { tool: "QuizWare", text: "Homework mode support for Quizizz", eta: "Q2 2026" },
  { tool: "Underground", text: "Full rewrite post-Wayground patches", eta: "Q2 2026" },
  { tool: "K-Bot", text: "Multi-game session support", eta: "Q3 2026" },
  { tool: "IXploit", text: "Full multi-subject auto-detection (stable)", eta: "Q3 2026" },
  { tool: "X-Bot", text: "Dashboard UI for session monitoring", eta: "Q3 2026" },
  { tool: "X-GUI", text: "Mobile bookmarklet support", eta: "Q3 2026" },
  { tool: "QuizWare", text: "Live game answer reveal mode", eta: "Q4 2026" },
];

const typeConfig: Record<UpdateType, { label: string; icon: typeof Plus; dotColor: string; ringColor: string; badgeClasses: string }> = {
  release: { label: "New Release", icon: Plus, dotColor: "bg-success", ringColor: "border-success", badgeClasses: "bg-success/10 text-success border-success/20" },
  update: { label: "Update", icon: Zap, dotColor: "bg-primary", ringColor: "border-primary", badgeClasses: "bg-primary/10 text-primary border-primary/20" },
  fix: { label: "Bug Fix", icon: Bug, dotColor: "bg-warning", ringColor: "border-warning", badgeClasses: "bg-warning/10 text-warning border-warning/20" },
  security: { label: "Security", icon: Shield, dotColor: "bg-red-400", ringColor: "border-red-500", badgeClasses: "bg-red-500/10 text-red-400 border-red-500/20" },
  maintenance: { label: "Maintenance", icon: Wrench, dotColor: "bg-muted-foreground", ringColor: "border-muted-foreground", badgeClasses: "bg-muted text-muted-foreground border-border" },
};

// Map tool names to cheat data for logos
const toolToCheat: Record<string, typeof cheats[number] | undefined> = {};
cheats.forEach((c) => {
  toolToCheat[c.tool] = c;
});

function groupByMonth(entries: ChangelogEntry[]) {
  const groups: Record<string, ChangelogEntry[]> = {};
  entries.forEach((entry) => {
    const d = new Date(entry.date);
    const key = d.toLocaleString("default", { month: "long", year: "numeric" });
    if (!groups[key]) groups[key] = [];
    groups[key].push(entry);
  });
  return Object.entries(groups);
}

const Updates = () => {
  const grouped = groupByMonth(changelog);

  return (
    <PageWrapper>
      <section className="max-w-5xl mx-auto px-6 py-16 relative z-10">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/8 border border-primary/15 mb-5">
            <Rocket className="w-3 h-3 text-primary" />
            <span className="text-[11px] font-semibold text-primary tracking-wide uppercase">Changelog</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-3">
            Recent <span className="gradient-text">Updates</span>
          </h1>
          <p className="text-muted-foreground max-w-md mx-auto text-lg">
            Every patch, release, and fix — all in one place.
          </p>
        </motion.div>

        {/* Legend */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}
          className="flex flex-wrap items-center gap-3 mb-12 justify-center">
          {(Object.entries(typeConfig) as [UpdateType, typeof typeConfig[UpdateType]][]).map(([, cfg]) => {
            const Icon = cfg.icon;
            return (
              <span key={cfg.label} className={`inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg border ${cfg.badgeClasses}`}>
                <Icon className="w-2.5 h-2.5" />
                {cfg.label}
              </span>
            );
          })}
        </motion.div>

        {/* Changelog */}
        <div className="mb-20">
          {grouped.map(([month, entries], gi) => (
            <motion.div key={month} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: gi * 0.07 }} className="mb-14">
              <div className="flex items-center gap-4 mb-7">
                <span className="font-display text-xs font-bold text-muted-foreground uppercase tracking-widest">{month}</span>
                <div className="flex-1 h-px bg-glass-border/50" />
                <span className="text-[10px] text-muted-foreground/50 font-mono">{entries.length} {entries.length === 1 ? "entry" : "entries"}</span>
              </div>

              <div className="space-y-5 relative">
                <div className="absolute left-5 top-2 bottom-2 w-px bg-glass-border/30" />
                {entries.map((entry, i) => {
                  const cfg = typeConfig[entry.type];
                  const TypeIcon = cfg.icon;
                  const cheat = toolToCheat[entry.tool];

                  return (
                    <motion.div key={i} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: gi * 0.07 + i * 0.05 }} className="pl-14 relative">
                      {/* Timeline dot with logo */}
                      <div className={`absolute left-0 top-4 w-[42px] h-[42px] rounded-xl border-2 bg-card flex items-center justify-center overflow-hidden ${cfg.ringColor}`}>
                        {cheat?.logoSrc ? (
                          <img src={cheat.logoSrc} alt={entry.tool} className="w-6 h-6 object-contain" />
                        ) : (
                          <div className={`w-3 h-3 rounded-full ${cfg.dotColor}`} />
                        )}
                      </div>

                      <div className="glass-card p-6 hover:border-primary/15 transition-all duration-300 group">
                        {/* Header row */}
                        <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
                          <div className="flex items-center gap-3 flex-wrap">
                            <span className="font-display text-lg font-bold text-foreground">{entry.tool}</span>
                            {entry.version && (
                              <span className="text-[10px] font-mono text-muted-foreground/60 px-2 py-0.5 rounded-md bg-secondary/60 border border-glass-border/50">v{entry.version}</span>
                            )}
                            <span className={`inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg border ${cfg.badgeClasses}`}>
                              <TypeIcon className="w-2.5 h-2.5" />
                              {cfg.label}
                            </span>
                            {cheat && (
                              <span className="text-[10px] text-muted-foreground/40 font-mono">
                                {cheat.game} · {cheat.platform}
                              </span>
                            )}
                          </div>
                          <span className="text-[10px] text-muted-foreground/50 font-mono flex-shrink-0">{entry.date}</span>
                        </div>

                        {/* Title */}
                        <p className="text-sm font-semibold text-foreground mb-4">{entry.title}</p>

                        {/* Changes */}
                        <ul className="space-y-2">
                          {entry.changes.map((change, ci) => (
                            <li key={ci} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/30 flex-shrink-0" />
                              {change}
                            </li>
                          ))}
                        </ul>

                        {/* Tool link */}
                        {cheat && (
                          <a
                            href={cheat.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 mt-4 text-[11px] font-semibold text-primary hover:text-primary/80 transition-colors"
                          >
                            {cheat.buttonLabel}
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coming Soon */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
          <div className="flex items-center gap-4 mb-7">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="font-display text-xs font-bold text-foreground uppercase tracking-widest">On the Roadmap</span>
            <div className="flex-1 h-px bg-glass-border/50" />
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {upcomingChanges.map((item, i) => {
              const cheat = toolToCheat[item.tool];
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                  className="glass-card p-4 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-card border border-glass-border flex items-center justify-center flex-shrink-0 overflow-hidden">
                    {cheat?.logoSrc ? (
                      <img src={cheat.logoSrc} alt={item.tool} className="w-5 h-5 object-contain" />
                    ) : (
                      <Clock className="w-4 h-4 text-primary" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-sm font-semibold text-foreground">{item.tool}</span>
                      <span className="text-[10px] text-muted-foreground/60 font-mono">{item.eta}</span>
                    </div>
                    <p className="text-xs text-muted-foreground truncate">{item.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Discord CTA */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="relative overflow-hidden glass-card p-8 md:p-10 border-[#5865f2]/20">
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#5865f2]/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 text-[#818cf8]" style={{ background: "rgba(88,101,242,0.15)" }}>
                <DiscordIcon size={24} />
              </div>
              <div className="flex-1">
                <p className="font-display text-lg font-bold text-foreground mb-1">Stay in the loop</p>
                <p className="text-sm text-muted-foreground">Get notified about updates, patches, and new tool releases in our Discord.</p>
              </div>
              <a href={DISCORD} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(88,101,242,0.4)] hover:-translate-y-0.5 flex-shrink-0"
                style={{ background: "#5865f2", color: "white" }}>
                Join Discord
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </section>
      <Footer />
    </PageWrapper>
  );
};

export default Updates;
