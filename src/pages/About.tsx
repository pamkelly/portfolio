import PageTransition from '@/src/components/layout/PageTransition';
import { Award, Target } from 'lucide-react';

export default function About() {
  return (
    <PageTransition className="px-6 md:px-24 pt-32 pb-24 min-h-screen">
      <div className="max-w-3xl">
        <div className="mb-20">
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted-ink mb-4 block">Personal Narrative</span>
          <h1 className="text-5xl md:text-7xl tracking-tighter font-serif mb-12">Driven by <span className="italic">curiosity</span>, <br/>powered by <span className="italic">data.</span></h1>
        </div>

        <div className="flex flex-col gap-12 border-t border-ink/10 pt-16">
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-serif">The Elevator Pitch</h2>
            <p className="text-xl md:text-2xl font-serif italic text-muted-ink leading-relaxed">
              "Bachelor of Marketing Management (GPA 3.7). My career goal centers on advancing technical skills to build innovative digital products and fostering a long-term growth in the tech ecosystem."
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mt-12">
            <div className="flex flex-col gap-4 p-8 bg-ink/[0.03] rounded-2xl">
              <Award className="w-6 h-6 mb-2" />
              <h3 className="text-lg font-semibold tracking-tight">Academic Excellence</h3>
              <p className="text-sm text-muted-ink">Bachelor of Marketing Management with a 3.7 GPA, specializing in data-driven strategy and digital infrastructure.</p>
            </div>
            
            <div className="flex flex-col gap-4 p-8 bg-ink/[0.03] rounded-2xl">
              <Target className="w-6 h-6 mb-2" />
              <h3 className="text-lg font-semibold tracking-tight">Technical Ambition</h3>
              <p className="text-sm text-muted-ink">Transitioning from traditional marketing to web technologies, focusing on cloud fundamentals and data systems.</p>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
