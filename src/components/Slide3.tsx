import { motion } from 'motion/react';
import { TrendingUp, Zap, Target } from 'lucide-react';

export default function Slide3() {
  const items = [
    { icon: Target, title: "Estrategia B2B y ROI", desc: "Dirección de arquitecturas de datos basadas en requerimientos de negocio para detectar brechas de eficiencia y generar leads.", color: "text-purple-400", border: "hover:border-purple-500/50" },
    { icon: TrendingUp, title: "Rentabilidad Operativa", desc: "Optimización del 20% en precisión de previsiones, impactando la rentabilidad de contratos mediante gestión basada en datos.", color: "text-emerald-400", border: "hover:border-emerald-500/50" },
    { icon: Zap, title: "Escalamiento Tech", desc: "Aumento del +60% en capacidad operativa, liderando y supervisando la implementación de automatizaciones integrales.", color: "text-blue-400", border: "hover:border-blue-500/50" }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-start md:justify-center px-6 md:px-12 lg:px-24 pt-20 md:pt-24 pb-24 overflow-y-auto md:overflow-hidden">
      <div className="w-full max-w-7xl mx-auto mb-6 md:mb-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white whitespace-normal md:whitespace-nowrap leading-tight"
        >
          Datos que impactan el <span className="text-emerald-400">P&L</span>
        </motion.h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start w-full max-w-7xl mx-auto">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 w-full max-w-2xl shrink-0"
        >
          <p className="text-zinc-400 text-base md:text-lg font-light mb-6">
            He Liderado estrategias de operaciones y Client Success, gestionando proyectos tecnológicos que impactan directamente el negocio:
          </p>

          <div className="grid gap-3">
            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                className={`p-3 md:p-4 rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur-sm flex items-start gap-3 md:gap-4 transition-all duration-300 hover:bg-white/[0.05] hover:translate-x-2 ${item.border}`}
              >
                <div className={`p-2 rounded-lg bg-white/5 ${item.color} shrink-0`}>
                  <item.icon size={20} />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1 text-sm md:text-base">{item.title}</h3>
                  <p className="text-zinc-500 text-xs md:text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Forecasting Chart */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex-1 w-full max-w-lg glass-panel p-6 md:p-8 rounded-3xl relative overflow-hidden shrink-0 mb-8 md:mb-0 lg:mt-12"
        >
          <div className="flex justify-between items-end mb-6 md:mb-8">
            <div>
              <span className="text-zinc-500 text-xs font-mono uppercase tracking-widest">Crecimiento Proyectado</span>
              <div className="text-3xl md:text-4xl font-bold text-white mt-1">+ RESULTADOS</div>
            </div>
            <div className="flex gap-2">
              <span className="w-3 h-3 rounded-full bg-zinc-600"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></span>
            </div>
          </div>

          <div className="relative h-48 md:h-64 w-full">
            {/* Grid lines */}
            <div className="absolute inset-0 flex flex-col justify-between">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-full h-px bg-white/5" />
              ))}
            </div>

            <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
              <defs>
                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                </linearGradient>
              </defs>
              
              {/* Solid Line (Present) */}
              <motion.path
                d="M0,200 C50,180 100,210 150,150 C200,90 250,120 300,100"
                fill="none"
                stroke="#94a3b8"
                strokeWidth="3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              
              {/* Dotted Line (Future) */}
              <motion.path
                d="M300,100 C350,80 400,40 500,10"
                fill="none"
                stroke="#10b981"
                strokeWidth="3"
                strokeDasharray="8 8"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: 1.5, ease: "easeInOut" }}
                className="drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]"
              />
              
              {/* Area under curve */}
              <motion.path
                d="M0,200 C50,180 100,210 150,150 C200,90 250,120 300,100 C350,80 400,40 500,10 L500,250 L0,250 Z"
                fill="url(#chartGradient)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2 }}
              />

              {/* Current Point Dot */}
              <motion.circle
                cx="300"
                cy="100"
                r="6"
                fill="#fff"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.5 }}
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
