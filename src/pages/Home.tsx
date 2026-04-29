import PageTransition from '@/src/components/layout/PageTransition';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <PageTransition className="min-h-screen flex flex-col justify-center px-6 md:px-24">
      {/* Hero Section */}
      <div id="hero" className="max-w-5xl mt-20">
        <h1 className="text-5xl md:text-8xl tracking-tight leading-[0.9] font-serif mb-8">
          Bridging the gap between <span className="italic">Marketing</span>, <span className="italic">Data</span> & <span className="italic">Web Technology</span>.
        </h1>
        <p className="text-lg md:text-2xl text-muted-ink max-w-2xl font-light leading-relaxed mb-10">
          A curious, data-driven graduate specializing in digital content acceleration and data systems architecture.
        </p>
        <Link 
          to="/projects" 
          className="group flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.2em] border border-ink/20 rounded-full py-4 px-8 w-fit hover:bg-ink hover:text-paper transition-all"
        >
          View My Work
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>

        {/* IMAGE PLACEMENT: A professional photo would anchor the minimal design. */}
        <div className="mt-20 w-full aspect-video md:aspect-[21/9] bg-ink/5 rounded-3xl overflow-hidden relative group">
          <div className="absolute inset-0 flex flex-col items-center justify-center text-[10px] uppercase tracking-widest text-muted-ink/40">
            <span>Primary Visual Asset Placement</span>
            <span className="mt-2 font-sans italic opacity-50 underline underline-offset-4">Minimalist Workspace or Data Visualization</span>
          </div>
        </div>
      </div>

      {/* About Section - Elevator Pitch */}
      <div id="about" className="mt-32 md:mt-48 max-w-xl">
        <div className="flex flex-col gap-6">
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted-ink">Elevator Pitch</span>
          <p className="text-xl md:text-2xl font-serif italic leading-snug">
            Marketing Management graduate (GPA 3.7) on a mission to build resilient digital products. 
            I prioritize data integrity and technical excellence to drive long-term business impact.
          </p>
        </div>
      </div>
    </PageTransition>
  );
}
