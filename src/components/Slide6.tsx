import { motion } from 'motion/react';
import { GraduationCap, Globe, Binary, Code2, TrendingUp } from 'lucide-react';

export default function Slide6() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-start md:justify-center px-6 md:px-16 lg:px-24 text-center pt-20 md:pt-32 pb-24 overflow-y-auto md:overflow-hidden">
      
      {/* Split Title */}
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between mb-8 md:mb-12 gap-2 md:gap-8">
        <motion.h2 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white flex-1 text-center"
        >
          Ingeniería de Software
        </motion.h2>
        
        <motion.span 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-zinc-600 font-light text-2xl md:text-4xl shrink-0"
        >
          +
        </motion.span>

        <motion.h2 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-emerald-400 flex-1 text-center"
        >
          Finanzas Globales
        </motion.h2>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0 w-full max-w-5xl relative">
        
        {/* Left Side: Code Visual */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-1 h-56 md:h-64 glass-panel rounded-3xl md:rounded-l-3xl md:rounded-r-none border md:border-r-0 p-6 relative overflow-hidden flex flex-col justify-center items-start w-full md:w-auto"
        >
          <div className="absolute inset-0 bg-blue-500/5"></div>
          <div className="font-mono text-[10px] md:text-xs text-blue-300/60 leading-relaxed text-left z-10">
            <p><span className="text-purple-400">class</span> <span className="text-yellow-300">DataStrategy</span>(Strategy):</p>
            <p className="pl-4"><span className="text-purple-400">def</span> <span className="text-blue-400">__init__</span>(self, data):</p>
            <p className="pl-8">self.data = data</p>
            <p className="pl-8">self.optimize()</p>
            <p className="pl-4"><span className="text-purple-400">def</span> <span className="text-blue-400">optimize</span>(self):</p>
            <p className="pl-8"><span className="text-purple-400">return</span> self.maximize_roi()</p>
            <p className="text-zinc-500 mt-2"># Architecture ready</p>
            <p className="text-zinc-500"># Deploying to production...</p>
          </div>
          <div className="absolute bottom-4 right-4 opacity-20">
             <Code2 className="text-blue-500" size={64} />
          </div>
          <div className="relative z-10 mt-4 w-full">
             <div className="h-px w-full bg-gradient-to-r from-blue-500/50 to-transparent mb-3"></div>
             <h3 className="text-lg md:text-xl font-semibold text-white mb-1 text-left">Estructura Tech</h3>
             <p className="text-zinc-400 text-[10px] md:text-xs text-left max-w-[240px]">Arquitecturas de bases de datos complejas y desarrollo de software.</p>
          </div>
        </motion.div>

        {/* Center: Connection Icon */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.5, rotate: 180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-12 h-12 md:w-20 md:h-20 rounded-2xl bg-[#020617] border border-zinc-700 flex items-center justify-center text-white z-20 shadow-[0_0_40px_rgba(255,255,255,0.1)] -my-8 md:-my-0 md:-mx-6 shrink-0"
        >
          <GraduationCap size={24} className="md:w-8 md:h-8" />
        </motion.div>

        {/* Right Side: Finance Visual (Enhanced) */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex-1 h-56 md:h-64 glass-panel rounded-3xl md:rounded-r-3xl md:rounded-l-none border md:border-l-0 p-0 relative overflow-hidden flex flex-col w-full md:w-auto bg-[#020617]/50"
        >
          <div className="absolute inset-0 bg-emerald-500/5"></div>
          
          {/* Tech Grid Background */}
          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(16, 185, 129, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.05) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

          {/* Quant Dashboard UI */}
          <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-start z-10 border-b border-white/5 bg-black/20">
            <div className="flex gap-3">
              <div className="flex flex-col items-start">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Symbol</span>
                <span className="text-xs font-mono text-white font-bold">NVDA</span>
              </div>
              <div className="flex flex-col items-start">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Price</span>
                <span className="text-xs font-mono text-emerald-400 font-bold">892.45</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[10px] font-mono text-emerald-500 uppercase tracking-wider">Live</span>
            </div>
          </div>

          {/* Advanced Chart Visual */}
          <div className="absolute inset-0 top-12 flex items-end pb-0">
             <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
               <defs>
                 <linearGradient id="financeGradient" x1="0" y1="0" x2="0" y2="1">
                   <stop offset="0%" stopColor="#10b981" stopOpacity="0.1" />
                   <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                 </linearGradient>
               </defs>
               
               {/* Moving Averages */}
               <path d="M0,120 C100,115 200,125 300,110 C400,100 500,105 600,95" fill="none" stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 4" />
               <path d="M0,130 C100,120 200,140 300,120 C400,110 500,115 600,105" fill="none" stroke="#a855f7" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 4" />

               {/* Main Price Line */}
               <path d="M0,140 L40,135 L80,145 L120,110 L160,115 L200,90 L240,95 L280,70 L320,75 L360,50 L400,60 L440,30 L480,35 L520,10" fill="none" stroke="#10b981" strokeWidth="2" />
               
               {/* Area under curve */}
               <path d="M0,140 L40,135 L80,145 L120,110 L160,115 L200,90 L240,95 L280,70 L320,75 L360,50 L400,60 L440,30 L480,35 L520,10 L520,200 L0,200 Z" fill="url(#financeGradient)" />

               {/* Tech Markers */}
               <circle cx="200" cy="90" r="3" fill="#10b981" />
               <circle cx="360" cy="50" r="3" fill="#10b981" />
               <circle cx="520" cy="10" r="3" fill="#fff" />
             </svg>
          </div>

          {/* Floating Stats Card */}
          <div className="absolute top-20 right-6 z-10 bg-black/60 backdrop-blur-md border border-white/10 p-2 rounded-lg">
             <div className="flex flex-col gap-1">
                <div className="flex justify-between gap-4">
                   <span className="text-[10px] text-zinc-500 font-mono">ROI</span>
                   <span className="text-[10px] text-emerald-400 font-mono">+128%</span>
                </div>
                <div className="flex justify-between gap-4">
                   <span className="text-[10px] text-zinc-500 font-mono">Vol</span>
                   <span className="text-[10px] text-blue-400 font-mono">2.4M</span>
                </div>
             </div>
          </div>

          <div className="absolute bottom-6 right-6 z-10 text-right">
             <div className="h-px w-32 bg-gradient-to-l from-emerald-500/50 to-transparent mb-3 ml-auto"></div>
             <h3 className="text-lg md:text-xl font-semibold text-white mb-1">Visión Financiera</h3>
             <p className="text-zinc-400 text-[10px] md:text-xs max-w-[200px] ml-auto">Impacto de divisas en margen operativo y comercio internacional.</p>
          </div>
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="mt-12 md:mt-16 text-base md:text-xl text-zinc-300 max-w-3xl font-display font-medium italic px-4"
      >
        "La tecnología es el medio; la rentabilidad, la Meta."
      </motion.p>
    </div>
  );
}
