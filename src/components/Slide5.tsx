import { motion } from 'motion/react';
import { Users, Crosshair, BarChart, ArrowDown } from 'lucide-react';

export default function Slide5() {
  return (
    <div className="w-full h-full flex flex-col md:flex-row items-center justify-start md:justify-center px-6 md:px-16 lg:px-24 gap-8 md:gap-16 pt-20 md:pt-32 pb-24 overflow-y-auto md:overflow-hidden">
      <div className="flex-1 max-w-2xl z-10 shrink-0">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 md:mb-8 text-white leading-tight"
        >
          Construyendo y Liderando Equipos de <span className="text-purple-400 border-b-2 border-purple-500/30">Alto Rendimiento</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-zinc-400 text-base md:text-xl leading-relaxed font-light mb-8"
        >
          Mi objetivo es liderar áreas de Data & Analytics. Tengo experiencia comprobada presentando insights estratégicos a C-Level, alineando los objetivos de producción técnica con las metas comerciales y financieras.
        </motion.p>
      </div>

      <div className="flex-1 w-full max-w-md">
        <div className="flex flex-col gap-4 md:gap-6 relative">
          {/* Connecting line */}
          <div className="absolute left-8 md:left-10 top-8 bottom-8 w-0.5 bg-gradient-to-b from-purple-500/50 via-blue-500/50 to-emerald-500/50" />
          
          <Node icon={Crosshair} title="Estrategia C-Level" color="purple" delay={0.5} desc="Visión Macro" />
          <Node icon={BarChart} title="Metas Financieras" color="blue" delay={0.7} desc="KPIs & ROI" />
          <Node icon={Users} title="Producción Técnica" color="emerald" delay={0.9} desc="Ejecución & Delivery" />
        </div>
      </div>
    </div>
  );
}

function Node({ icon: Icon, title, color, delay, desc }: any) {
  const colorStyles: any = {
    purple: "bg-purple-500/10 text-purple-400 border-purple-500/30 shadow-[0_0_20px_rgba(168,85,247,0.15)]",
    blue: "bg-blue-500/10 text-blue-400 border-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.15)]",
    emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.15)]",
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay, type: "spring" }}
      className="flex items-center gap-4 md:gap-6 relative z-10 group"
    >
      <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl border flex items-center justify-center shrink-0 backdrop-blur-md transition-transform group-hover:scale-110 ${colorStyles[color]}`}>
        <Icon size={28} className="md:w-8 md:h-8" strokeWidth={1.5} />
      </div>
      <div className="glass-panel px-4 py-4 md:px-6 md:py-5 rounded-xl flex-1 border border-white/5 group-hover:border-white/20 transition-colors">
        <h3 className="text-white font-semibold tracking-wide text-base md:text-lg">{title}</h3>
        <span className="text-[10px] md:text-xs font-mono text-zinc-500 uppercase tracking-wider">{desc}</span>
      </div>
    </motion.div>
  );
}
