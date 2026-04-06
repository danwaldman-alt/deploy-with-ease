import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import Footer from "@/components/Footer";
import { CheckCircle, AlertTriangle, Activity, Clock, Wifi, Server, ChevronRight, Shield, Zap, XCircle, Info } from "lucide-react";
import { useState, useEffect } from "react";
import { cheats } from "@/data/cheats";

const DISCORD = "https://discord.gg/kbx46Cyc";

const services = cheats.map((c) => ({
  name: c.tool,
  game: c.game,
  status: c.status,
  platform: c.platform,
  version: c.version,
  latency: c.status === "operational" ? `${Math.floor(Math.random() * 15) + 5}ms` : "—",
  lastCheck: c.status === "operational" ? "Just now" : "2h ago",
}));

const operational = services.filter((s) => s.status === "operational").length;
const allGood = operational === services.length;
const uptimePercent = ((operational / services.length) * 100).toFixed(1);

const recentIncidents = [
  {
    date: "Apr 1, 2026",
    title: "K-Bot Maintenance Window",
    status: "resolved",
    description: "Scheduled maintenance to upgrade backend infrastructure. All services restored.",
    duration: "45 min",
  },
  {
    date: "Mar 28, 2026",
    title: "X-Bot Connectivity Issues",
    status: "resolved",
    description: "Intermittent connection drops affecting X-Bot users. Root cause identified and patched.",
    duration: "2h 10min",
  },
  {
    date: "Mar 20, 2026",
    title: "Quizware Rate Limiting",
    status: "resolved",
    description: "Temporary rate limiting triggered due to high traffic. Capacity scaled up.",
    duration: "30 min",
  },
];

const Status = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <PageWrapper>
      <section className="w-full max-w-7xl mx-auto px-6 py-24 relative z-10">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/8 border border-primary/15 mb-6">
            <Activity className="w-3 h-3 text-primary" />
            <span className="text-[11px] font-semibold text-primary tracking-wide uppercase">System Status</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-3">
            Service <span className="gradient-text">Status</span>
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Real-time monitoring dashboard for all X-NETWORK services and infrastructure.
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
          {[
            { label: "Services Online", value: `${operational}/${services.length}`, icon: Server, color: allGood ? "text-success" : "text-warning" },
            { label: "Overall Uptime", value: `${uptimePercent}%`, icon: Wifi, color: "text-success" },
            { label: "Avg Response", value: "11ms", icon: Zap, color: "text-primary" },
            { label: "Last Incident", value: "3d ago", icon: Shield, color: "text-muted-foreground" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 + i * 0.05 }}
              className="glass-card p-5 group hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-2">
                <stat.icon className={`w-4 h-4 ${stat.color}`} />
                <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">{stat.label}</span>
              </div>
              <span className="text-2xl font-bold text-foreground font-display">{stat.value}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Overall status banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className={`glass-card p-6 mb-8 relative overflow-hidden ${
            allGood ? "border-success/20" : "border-warning/20"
          }`}
        >
          <div className={`absolute inset-0 ${allGood ? "bg-success/3" : "bg-warning/3"}`} />
          <div className="relative z-10 flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                allGood ? "bg-success/15" : "bg-warning/15"
              }`}>
                {allGood
                  ? <CheckCircle className="w-7 h-7 text-success" />
                  : <AlertTriangle className="w-7 h-7 text-warning" />
                }
              </div>
              <div>
                <div className="font-display text-xl font-bold text-foreground">
                  {allGood ? "All Systems Operational" : `${operational} of ${services.length} Services Online`}
                </div>
                <div className="text-xs text-muted-foreground mt-1 flex items-center gap-2">
                  <Clock className="w-3 h-3" />
                  Last checked: {currentTime.toLocaleTimeString()} · Auto-refreshing every 60s
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-card/60 border border-glass-border">
              <div className={`w-2.5 h-2.5 rounded-full ${allGood ? "bg-success animate-pulse" : "bg-warning animate-pulse"}`} />
              <span className="text-xs font-mono text-foreground">{allGood ? "All Clear" : "Degraded"}</span>
            </div>
          </div>
        </motion.div>

        {/* Service list */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="font-display text-lg font-bold text-foreground mb-4">Service Details</h2>
          
          <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3 text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">
            <span className="col-span-1">Status</span>
            <span className="col-span-3">Service</span>
            <span className="col-span-2">Platform</span>
            <span className="col-span-2">Version</span>
            <span className="col-span-2">Latency</span>
            <span className="col-span-2">Last Check</span>
          </div>

          <motion.div
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.04 } } }}
            className="space-y-2"
          >
            {services.map((s) => (
              <motion.div
                key={s.name}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                }}
                className="glass-card-hover px-6 py-5 group"
              >
                <div className="hidden md:grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-1">
                    <div className={`w-3.5 h-3.5 rounded-full ${
                      s.status === "operational" ? "bg-success shadow-[0_0_8px_hsl(var(--success)/0.5)]" : "bg-warning animate-pulse shadow-[0_0_8px_hsl(var(--warning)/0.5)]"
                    }`} />
                  </div>
                  <div className="col-span-3">
                    <div className="flex items-center gap-3">
                      <span className="font-display text-sm font-bold text-foreground">{s.name}</span>
                      <span className="text-[10px] font-mono text-muted-foreground px-2 py-0.5 rounded-md bg-secondary/60">{s.game}</span>
                    </div>
                  </div>
                  <div className="col-span-2">
                    <span className="text-xs text-muted-foreground">{s.platform}</span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-xs font-mono text-muted-foreground">v{s.version}</span>
                  </div>
                  <div className="col-span-2">
                    <span className={`text-xs font-mono ${s.latency !== "—" ? "text-success" : "text-muted-foreground"}`}>{s.latency}</span>
                  </div>
                  <div className="col-span-2 flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{s.lastCheck}</span>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-xl ${
                      s.status === "operational"
                        ? "bg-success/10 text-success border border-success/20"
                        : "bg-warning/10 text-warning border border-warning/20"
                    }`}>
                      {s.status === "operational" ? "Operational" : "Maintenance"}
                    </span>
                  </div>
                </div>

                <div className="md:hidden flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-3 h-3 rounded-full ${
                      s.status === "operational" ? "bg-success" : "bg-warning animate-pulse"
                    }`} />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-display text-sm font-bold text-foreground">{s.name}</span>
                        <span className="text-[10px] font-mono text-muted-foreground px-2 py-0.5 rounded-md bg-secondary/60">{s.game}</span>
                      </div>
                      <div className="flex items-center gap-3 mt-1 text-[11px] text-muted-foreground">
                        <span>{s.platform}</span>
                        <span className="w-1 h-1 rounded-full bg-glass-border" />
                        <span>v{s.version}</span>
                        <span className="w-1 h-1 rounded-full bg-glass-border" />
                        <span>{s.latency}</span>
                      </div>
                    </div>
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-xl ${
                    s.status === "operational"
                      ? "bg-success/10 text-success border border-success/20"
                      : "bg-warning/10 text-warning border border-warning/20"
                  }`}>
                    {s.status === "operational" ? "Online" : "Down"}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Recent Incidents */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="mb-8"
        >
          <h2 className="font-display text-lg font-bold text-foreground mb-4">Recent Incidents</h2>
          <div className="space-y-3">
            {recentIncidents.map((incident, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.05 }}
                className="glass-card p-5"
              >
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-success/10">
                      <CheckCircle className="w-4 h-4 text-success" />
                    </div>
                    <div>
                      <h3 className="font-display text-sm font-bold text-foreground">{incident.title}</h3>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-[11px] text-muted-foreground">{incident.date}</span>
                        <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
                        <span className="text-[11px] text-muted-foreground">Duration: {incident.duration}</span>
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-xl bg-success/10 text-success border border-success/20 flex-shrink-0">
                    Resolved
                  </span>
                </div>
                <p className="text-xs text-muted-foreground ml-11">{incident.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Discord banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <a
            href={DISCORD}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-5 glass-card p-6 border-[#5865f2]/20 hover:border-[#5865f2]/40 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(88,101,242,0.15)" }}>
              <svg width="22" height="22" viewBox="0 0 127.14 96.36" fill="#818cf8">
                <path d="M107.7 8.07A105.15 105.15 0 0 0 81.47 0a72.06 72.06 0 0 0-3.36 6.83 97.68 97.68 0 0 0-29.11 0A72.37 72.37 0 0 0 45.64 0 105.89 105.89 0 0 0 19.39 8.09C2.79 32.65-1.72 56.6.54 80.21h.02a105.73 105.73 0 0 0 32.17 16.15 77.7 77.7 0 0 0 6.89-11.31 68.42 68.42 0 0 1-10.85-5.18c.91-.66 1.8-1.34 2.66-2.04 20.87 9.53 43.46 9.53 64.08 0 .87.71 1.76 1.39 2.66 2.04a68.68 68.68 0 0 1-10.87 5.19 77 77 0 0 0 6.89 11.3A105.25 105.25 0 0 0 126.6 80.2c2.65-27.33-4.53-51.06-18.9-72.13ZM42.45 65.69c-6.27 0-11.41-5.73-11.41-12.77s5.02-12.78 11.41-12.78c6.45 0 11.5 5.78 11.41 12.78 0 7.04-5.02 12.77-11.41 12.77Zm42.24 0c-6.27 0-11.41-5.73-11.41-12.77s5.02-12.78 11.41-12.78c6.45 0 11.5 5.78 11.41 12.78 0 7.04-5.02 12.77-11.41 12.77Z"/>
              </svg>
            </div>
            <div className="flex-1">
              <p className="font-display font-bold text-foreground mb-0.5">Stay Updated on Incidents</p>
              <p className="text-sm text-muted-foreground">Join our Discord for real-time maintenance alerts, incident reports, and status updates.</p>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-[#818cf8] group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
          </a>
        </motion.div>
      </section>
      <Footer />
    </PageWrapper>
  );
};

export default Status;
