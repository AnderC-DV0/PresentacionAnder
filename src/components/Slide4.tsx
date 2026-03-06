import { useState } from 'react';
import { motion } from 'motion/react';
import { Database, LayoutDashboard, Cpu, FlaskConical, Code, Server, Workflow, Brain, Crosshair, RotateCw } from 'lucide-react';

const tools = [
  { icon: Code, name: "Python", desc: "Arquitectura ETL • Modelos Predictivos • Code Review" },
  { icon: Database, name: "SQL", desc: "Diseño Data Warehouse • Performance Tuning" },
  { icon: LayoutDashboard, name: "Power BI", desc: "Dashboards Ejecutivos • Gobierno de Datos" },
  { icon: Workflow, name: "Automate", desc: "Estrategia RPA • Optimización de Procesos" },
  { icon: Server, name: "AWS/GCP", desc: "Gestión Cloud • Infraestructura Escalable" },
  { icon: FlaskConical, name: "A/B Test", desc: "Toma de Decisiones • Análisis de ROI" },
];

function SkillCard({ tool, isFlipped, onClick }: { tool: typeof tools[0], isFlipped: boolean, onClick: () => void }) {
  return (
    <div className="relative h-32 md:h-36 w-full group/card perspective-1000" onClick={onClick}>
      <motion.div
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 200, damping: 25 }}
        className="w-full h-full relative cursor-pointer"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div 
          className="absolute inset-0 bg-black/40 p-3 md:p-4 rounded-xl border border-white/5 flex flex-col items-center justify-center gap-2 md:gap-3 hover:bg-white/5 hover:border-blue-500/30 transition-all"
          style={{ backfaceVisibility: "hidden" }}
        >
          <tool.icon size={32} className="md:w-9 md:h-9 text-zinc-400 group-hover/card:text-white transition-colors" />
          <span className="text-[10px] md:text-xs font-mono text-zinc-500 group-hover/card:text-blue-400 uppercase tracking-wider font-semibold text-center">{tool.name}</span>
          
          {/* Interaction hint */}
          <div className="absolute top-2 right-2 md:top-3 md:right-3 opacity-70 animate-pulse">
            <RotateCw size={14} className="md:w-4 md:h-4 text-blue-400/80" />
          </div>
        </div>

        {/* Back */}
        <div 
          className="absolute inset-0 bg-blue-950/90 backdrop-blur-md p-3 md:p-4 rounded-xl border border-blue-500/40 flex items-center justify-center text-center shadow-[0_0_15px_rgba(59,130,246,0.2)]"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <p className="text-xs md:text-sm font-semibold text-white leading-relaxed">
            {tool.desc}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default function Slide4() {
  const [flippedIndices, setFlippedIndices] = useState<number[]>([]);

  const handleCardClick = (index: number) => {
    if (flippedIndices.includes(index)) {
      // If already flipped, unflip it
      setFlippedIndices(flippedIndices.filter(i => i !== index));
    } else {
      // If not flipped, add it. If we have 2, remove the first one (oldest)
      const newFlipped = [...flippedIndices, index];
      if (newFlipped.length > 2) {
        newFlipped.shift(); // Remove the first element (FIFO)
      }
      setFlippedIndices(newFlipped);
    }
  };

  return (
    <div className="w-full h-full flex flex-col justify-start md:justify-center px-6 md:px-16 lg:px-24 pt-20 md:pt-32 pb-24 overflow-y-auto md:overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-8 md:gap-16 items-center">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 max-w-xl shrink-0 w-full"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white">
            Un Ecosistema Tecnológico de <span className="text-blue-500">Vanguardia</span>
          </h2>
          <p className="text-zinc-400 text-base md:text-lg font-light mb-6 md:mb-8">
            Me mantengo a la vanguardia de las herramientas analíticas y de Inteligencia Artificial para diseñar soluciones escalables:
          </p>
          
          <div className="space-y-3 md:space-y-4">
            <div className="flex items-center gap-3 md:gap-4 text-xs md:text-sm text-zinc-300">
              <span className="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
              Arquitectura & IA: Python, SQL, Queryx
            </div>
            <div className="flex items-center gap-3 md:gap-4 text-xs md:text-sm text-zinc-300">
              <span className="w-2 h-2 bg-purple-500 rounded-full shadow-[0_0_8px_rgba(168,85,247,0.8)]"></span>
              Visualización: Power BI, Tableau
            </div>
            <div className="flex items-center gap-3 md:gap-4 text-xs md:text-sm text-zinc-300">
              <span className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
              Automatización: Power Automate, VBA
            </div>
          </div>
        </motion.div>

        {/* Visuals: Control Panel + Precision Target */}
        <div className="flex-1 w-full flex flex-col gap-6 md:gap-8">
          
          {/* Control Panel Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="glass-panel p-4 md:p-6 rounded-2xl border border-white/10"
          >
            <div className="flex justify-between items-center mb-4 border-b border-white/5 pb-2">
              <span className="text-[10px] md:text-xs font-mono text-zinc-500 uppercase">System Status: Conocimientos Online </span>
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-600"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-600"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {tools.map((tool, i) => (
                <SkillCard 
                  key={i} 
                  tool={tool} 
                  isFlipped={flippedIndices.includes(i)}
                  onClick={() => handleCardClick(i)}
                />
              ))}
            </div>
          </motion.div>

          {/* AI Precision Target */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center gap-4 md:gap-6 p-4 md:p-6 rounded-2xl bg-gradient-to-r from-blue-900/20 to-transparent border border-blue-500/20 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-blue-500/5 animate-pulse"></div>
            <div className="relative z-10 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center shrink-0">
               <Brain size={32} className="md:w-10 md:h-10 text-blue-400 absolute" />
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                 className="absolute inset-0 border border-dashed border-blue-400/50 rounded-full"
               />
               <Crosshair size={48} className="md:w-16 md:h-16 text-white/20 absolute" />
            </div>
            <div className="relative z-10">
              <h3 className="text-white font-semibold mb-1 text-sm md:text-base">Precisión Quirúrgica</h3>
              <p className="text-[10px] md:text-xs text-blue-200/70 font-mono">AI-DRIVEN OPTIMIZATION</p>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
