import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, MessageSquareText, X } from 'lucide-react';
import Slide1 from './components/Slide1';
import Slide2 from './components/Slide2';
import Slide3 from './components/Slide3';
import Slide4 from './components/Slide4';
import Slide5 from './components/Slide5';
import Slide6 from './components/Slide6';
import Slide7 from './components/Slide7';

const slides = [
  { id: 1, Component: Slide1, script: "La tecnología sin visión de negocio es solo un gasto. Soy Anderson Duvan, Especialista en Desarrollo de Negocios y Arquitectura de Datos. Dirijo equipos y transformo necesidades técnicas complejas en soluciones estratégicas que generan ROI directo." },
  { id: 2, Component: Slide2, script: "Soy el eslabón perdido entre la Ingeniería y la Sala de Juntas. Mientras la mayoría se queda en el código, mi terreno natural es la intersección entre tecnología, ventas B2B y finanzas. Actúo como un consultor técnico-comercial: no solo construyo la arquitectura de datos, sino que diseño la visión financiera que asegura el cierre de ventas complejas y renovaciones de contratos." },
  { id: 3, Component: Slide3, script: "Datos que impactan el Estado de Resultados. He liderado la estrategia de capacidad operativa y éxito del cliente con resultados tangibles: Mejora del 20% en precisión de previsiones, +60% de capacidad operativa mediante automatización, y traducción de requerimientos B2B en arquitecturas de datos para generar leads." },
  { id: 4, Component: Slide4, script: "Cuento con un Ecosistema Tecnológico de Vanguardia. Me mantengo a la vanguardia de las herramientas analíticas y de IA para diseñar soluciones escalables: Python, SQL, Power BI, Power Automate, y metodologías como Modelado Predictivo y Análisis de ROI." },
  { id: 5, Component: Slide5, script: "Mi visión de liderazgo es construir y dirigir equipos de alto rendimiento. Mi objetivo es liderar áreas de Data & Analytics. Tengo experiencia comprobada presentando insights estratégicos a C-Level, alineando los objetivos de producción técnica con las metas comerciales y financieras." },
  { id: 6, Component: Slide6, script: "La tecnología evoluciona, pero las reglas del dinero mandan. Complemento mi formación como Ingeniero de Software con estudios en Finanzas y Comercio Internacional. Esta combinación me permite entender tanto la estructura de una base de datos compleja como el impacto de una divisa en el margen operativo." },
  { id: 7, Component: Slide7, script: "Lideremos la transformación de tu empresa. Busco una organización que necesite un líder capaz de unir el poder de la Inteligencia Artificial, la precisión de la Ingeniería de Datos y la agresividad de las Finanzas corporativas. Conectemos." }
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showNotes, setShowNotes] = useState(false);

  const nextSlide = () => {
    if (showNotes) setShowNotes(false);
    setTimeout(() => {
      setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
    }, showNotes ? 300 : 0);
  };

  const prevSlide = () => {
    if (showNotes) setShowNotes(false);
    setTimeout(() => {
      setCurrentSlide((prev) => Math.max(prev - 1, 0));
    }, showNotes ? 300 : 0);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'Escape') setShowNotes(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showNotes]); // Add showNotes dependency to ensure state is fresh

  const CurrentSlideComponent = slides[currentSlide].Component;

  return (
    <div className="h-[100dvh] w-screen bg-[#020617] text-white overflow-hidden relative font-sans selection:bg-emerald-500/30 selection:text-emerald-200 tech-grid-bg">
      
      {/* Main Content Container */}
      <motion.div 
        className="w-full h-full flex items-center justify-center relative z-10"
        animate={{ 
          y: showNotes ? '-25%' : '0%',
          scale: showNotes ? 0.9 : 1,
          opacity: showNotes ? 0.6 : 1
        }}
        transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
        onClick={() => showNotes && setShowNotes(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full h-full"
          >
            <CurrentSlideComponent />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Navigation Controls */}
      <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-6 z-50">
        <button onClick={prevSlide} disabled={currentSlide === 0} className="p-3 md:p-4 rounded-full bg-white/5 hover:bg-white/10 disabled:opacity-30 transition-all cursor-pointer border border-white/10 hover:border-emerald-500/50 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] group rotate-90 md:rotate-0">
          <ChevronLeft size={24} className="text-zinc-400 group-hover:text-white" />
        </button>
        
        <div className="flex flex-col gap-3 px-3 py-6 rounded-full bg-black/40 backdrop-blur-md border border-white/10 hidden md:flex">
          {slides.map((_, idx) => (
            <div key={idx} className={`w-1.5 rounded-full transition-all duration-500 ${idx === currentSlide ? 'bg-emerald-500 h-8 shadow-[0_0_10px_rgba(16,185,129,0.8)]' : 'bg-zinc-700 h-1.5'}`} />
          ))}
        </div>

        <button onClick={nextSlide} disabled={currentSlide === slides.length - 1} className="p-3 md:p-4 rounded-full bg-white/5 hover:bg-white/10 disabled:opacity-30 transition-all cursor-pointer border border-white/10 hover:border-emerald-500/50 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] group rotate-90 md:rotate-0">
          <ChevronRight size={24} className="text-zinc-400 group-hover:text-white" />
        </button>
      </div>

      {/* Speaker Notes Toggle */}
      <motion.button 
        onClick={() => setShowNotes(!showNotes)}
        className={`absolute top-8 right-8 p-3 rounded-full transition-all z-50 cursor-pointer border ${showNotes ? 'bg-emerald-500 text-black border-emerald-500' : 'bg-white/5 border-white/10 hover:bg-white/10 text-zinc-400 hover:text-white'}`}
        title="Toggle Speaker Notes"
        animate={!showNotes ? {
          scale: [1, 1.1, 1],
          boxShadow: ["0 0 0px rgba(16,185,129,0)", "0 0 15px rgba(16,185,129,0.5)", "0 0 0px rgba(16,185,129,0)"]
        } : {}}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {showNotes ? <X size={24} /> : <MessageSquareText size={24} />}
      </motion.button>

      {/* Speaker Notes Panel (Slide Up) */}
      <AnimatePresence>
        {showNotes && (
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            exit={{ y: '100%' }}
            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
            className="absolute bottom-0 left-0 w-full h-[40vh] bg-[#0f172a] border-t border-emerald-500/30 z-40 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] flex flex-col items-center justify-start p-8 pl-20 md:p-12 md:pl-32 overflow-y-auto"
          >
            <div className="max-w-7xl w-full">
              <div className="flex items-center gap-3 mb-4 sticky top-0 bg-[#0f172a] py-2 z-10">
                <div className="w-1 h-6 bg-emerald-500 rounded-full" />
                <h3 className="text-emerald-400 text-sm uppercase tracking-[0.2em] font-bold">Speaker Script</h3>
              </div>
              <p className="text-base md:text-xl leading-relaxed text-zinc-200 font-light">
                "{slides[currentSlide].script}"
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
