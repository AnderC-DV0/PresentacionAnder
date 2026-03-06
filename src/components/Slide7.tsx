import { motion } from 'motion/react';
import { Linkedin, Mail, ArrowRight } from 'lucide-react';

export default function Slide7() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />

      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-white z-10 leading-tight"
      >
        Lideremos la <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 glow-text">transformación</span> de tu empresa.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-lg md:text-xl text-zinc-400 max-w-3xl mb-16 leading-relaxed z-10 font-light"
      >
        Busco una organización que necesite un líder capaz de unir el poder de la Inteligencia Artificial, la precisión de la Ingeniería de Datos y la agresividad de las Finanzas corporativas.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="flex flex-col md:flex-row gap-6 z-10"
      >
        <a 
          href="https://linkedin.com" 
          target="_blank" 
          rel="noreferrer"
          className="group relative flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-semibold transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(37,99,235,0.4)]"
        >
          <Linkedin size={20} />
          <span>Conectar en LinkedIn</span>
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </a>

        <a 
          href="mailto:dvancortes12julio2001@gmail.com"
          className="group relative flex items-center justify-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-500/50 text-white rounded-full font-semibold transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(16,185,129,0.2)]"
        >
          <Mail size={20} className="text-emerald-400" />
          <span>Agendar Reunión B2B</span>
        </a>
      </motion.div>
    </div>
  );
}
