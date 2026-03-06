import { motion } from 'motion/react';
import { Network } from 'lucide-react';

export default function Slide1() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center px-4 md:px-8 pb-16 md:pb-24 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="z-10 flex flex-col items-center text-center max-w-5xl w-full"
      >
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
          className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-gradient-to-br from-blue-500/20 to-emerald-500/20 border border-white/10 rounded-2xl md:rounded-3xl flex items-center justify-center mb-4 sm:mb-8 md:mb-12 shadow-[0_0_40px_rgba(16,185,129,0.2)] backdrop-blur-md shrink-0"
        >
          <Network className="text-emerald-400 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16" strokeWidth={1.5} />
        </motion.div>

        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-3 sm:mb-6 md:mb-8 leading-[1.1] max-w-[95%] md:max-w-[90%]">
          La tecnología sin visión de negocio es solo un <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 glow-text">gasto.</span>
        </h1>
        
        <div className="flex flex-col md:flex-row items-center gap-1 md:gap-4 mb-3 sm:mb-6 md:mb-10 shrink-0">
          <div className="hidden md:block h-px w-12 bg-zinc-700" />
          <h2 className="text-xs sm:text-sm md:text-2xl font-display font-medium text-zinc-300 tracking-wide text-center">
            Anderson Duvan <span className="hidden md:inline text-emerald-500 mx-2">|</span> <span className="block md:inline mt-1 md:mt-0">Data Strategy Leader & AI Tech-Translator</span>
          </h2>
          <div className="hidden md:block h-px w-12 bg-zinc-700" />
        </div>

        <p className="text-xs sm:text-sm md:text-xl text-zinc-400 max-w-3xl leading-relaxed font-light px-2 md:px-4">
          Líder en Estrategia de Datos y Desarrollo de Negocios. Lidero equipos multidisciplinarios, orquestando la arquitectura técnica y transformando la complejidad en soluciones que generan <strong className="text-white font-semibold border-b border-emerald-500/50 pb-0.5">ROI directo</strong>.
        </p>
      </motion.div>
    </div>
  );
}
