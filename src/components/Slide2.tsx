import { motion } from 'motion/react';
import { Code2, Briefcase, LineChart } from 'lucide-react';

export default function Slide2() {
  return (
    <div className="w-full h-full flex flex-col md:flex-row items-center justify-start md:justify-center px-6 md:px-16 lg:px-24 gap-8 md:gap-24 pt-20 md:pt-32 pb-24 overflow-y-auto md:overflow-hidden">
      <div className="flex-1 max-w-2xl z-10 shrink-0">
        <motion.h2 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 md:mb-8 text-white leading-tight"
        >
          El eslabón perdido entre la <span className="text-blue-400 border-b-2 border-blue-500/30">Ingeniería</span> y la <span className="text-emerald-400 border-b-2 border-emerald-500/30">Sala de Juntas</span>.
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-zinc-400 text-base md:text-xl leading-relaxed font-light"
        >
          Mientras la mayoría se enfoca en la ejecución, mi terreno es la estrategia en la intersección de tecnología, ventas B2B y finanzas. Lidero la visión técnica y comercial: orquesto arquitecturas de datos escalables y diseño la viabilidad financiera que asegura el cierre de negocios complejos.
        </motion.p>
      </div>

      <div className="flex-1 relative h-[350px] md:h-[450px] w-full max-w-[350px] md:max-w-[450px] flex items-center justify-center shrink-0 scale-90 md:scale-100 origin-center">
        {/* Connecting Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <motion.path 
            d="M50% 50% L25% 30% M50% 50% L75% 30% M50% 50% L50% 75%" 
            stroke="rgba(255,255,255,0.1)" 
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
            className="hidden md:block"
          />
           {/* Mobile Lines (Simplified/Adjusted) */}
           <motion.path 
            d="M175,175 L100,100 M175,175 L250,100 M175,175 L175,260" 
            stroke="rgba(255,255,255,0.1)" 
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
            className="md:hidden"
          />
        </svg>

        <Circle icon={Code2} color="blue" label="Ingeniería" delay={0.5} pos="-translate-y-16 -translate-x-16 md:-translate-y-20 md:-translate-x-20" />
        <Circle icon={Briefcase} color="purple" label="Ventas B2B" delay={0.7} pos="-translate-y-16 translate-x-16 md:-translate-y-20 md:translate-x-20" />
        <Circle icon={LineChart} color="emerald" label="Finanzas" delay={0.9} pos="translate-y-20 md:translate-y-24" />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.5, type: "spring" }}
          className="absolute inset-0 m-auto w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-full border border-white/20 flex items-center justify-center shadow-[0_0_60px_rgba(255,255,255,0.1)] z-20 group hover:scale-110 transition-transform duration-500"
        >
          <div className="text-center">
            <span className="font-bold text-white tracking-[0.2em] text-xs md:text-sm block mb-1">MI ADN</span>
            <div className="w-6 md:w-8 h-0.5 bg-emerald-500 mx-auto rounded-full" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function Circle({ icon: Icon, color, label, delay, pos }: any) {
  const colorMap: any = {
    blue: 'border-blue-500/30 bg-blue-500/5 text-blue-400 shadow-[0_0_40px_rgba(59,130,246,0.1)] hover:border-blue-400 hover:bg-blue-500/10',
    purple: 'border-purple-500/30 bg-purple-500/5 text-purple-400 shadow-[0_0_40px_rgba(168,85,247,0.1)] hover:border-purple-400 hover:bg-purple-500/10',
    emerald: 'border-emerald-500/30 bg-emerald-500/5 text-emerald-400 shadow-[0_0_40px_rgba(16,185,129,0.1)] hover:border-emerald-400 hover:bg-emerald-500/10',
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay, type: "spring" }}
      className={`absolute w-28 h-28 md:w-44 md:h-44 rounded-full border flex flex-col items-center justify-center gap-2 md:gap-3 backdrop-blur-md transition-all duration-500 ${colorMap[color]} ${pos} z-10 cursor-pointer`}
    >
      <Icon size={28} className="md:w-9 md:h-9" strokeWidth={1.2} />
      <span className="text-[10px] md:text-xs font-display uppercase tracking-widest font-semibold opacity-80">{label}</span>
    </motion.div>
  );
}
