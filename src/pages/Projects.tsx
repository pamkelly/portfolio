import PageTransition from '@/src/components/layout/PageTransition';

interface ProjectProps {
  title: string;
  role: string;
  description: string;
  metrics: { label: string; value: string }[];
  tags: string[];
}

const Project = ({ title, role, description, metrics, tags }: ProjectProps) => (
  <div className="group border-b border-ink/10 py-16 md:py-24 grid md:grid-cols-12 gap-8 items-start hover:bg-ink/[0.02] transition-colors -mx-6 px-6">
    {/* IMAGE PLACEMENT: A mock-up of a dashboard or a still frame from a training video would be placed here. Shift layout to 3-cols if needed. */}
    <div className="md:col-span-4 flex flex-col gap-4">
      <h2 className="text-3xl md:text-5xl tracking-tighter leading-none group-hover:italic transition-all">
        {title}
      </h2>
      <span className="text-[10px] uppercase tracking-widest text-muted-ink">Role: {role}</span>
      <div className="flex flex-wrap gap-2 mt-2">
        {tags.map(tag => (
          <span key={tag} className="text-[9px] border border-ink/20 px-2 py-1 rounded text-muted-ink uppercase">
            {tag}
          </span>
        ))}
      </div>
    </div>
    <div className="md:col-span-5 flex flex-col gap-6">
      <p className="text-lg text-ink font-light leading-relaxed">
        {description}
      </p>
    </div>
    <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-1 gap-6">
      {metrics.map((metric, i) => (
        <div key={i} className="flex flex-col border-l border-ink/40 pl-4 py-1">
          <span className="text-2xl font-serif italic mb-1">{metric.value}</span>
          <span className="text-[10px] uppercase tracking-wider text-muted-ink">{metric.label}</span>
        </div>
      ))}
    </div>
  </div>
);

const projects: ProjectProps[] = [
  {
    title: "Digital Transformation",
    role: "Digital Acceleration Intern (Nestlé)",
    description: "Spearheaded digital shift as the sole non-technical member in a tech-driven team. Directed production of training curricula and led the class booking feature development.",
    metrics: [
      { value: "35", label: "Training Videos Produced" },
      { value: "50%", label: "Offline-to-Digital Conversion" },
      { value: "50%", label: "Cycle Time Reduction" }
    ],
    tags: ["LMS Management", "Stakeholder Management", "Video Ops"]
  },
  {
    title: "Data Architecture",
    role: "National Reporting Lead (Nestlé)",
    description: "Developed and optimized data pipelines to transform massive datasets into actionable insights. Standardized reporting frameworks across national divisions.",
    metrics: [
      { value: "6", label: "Power BI Dashboards" },
      { value: "500k+", label: "Rows of Data Managed" },
      { value: "Standard", label: "National Reporting Unit" }
    ],
    tags: ["Power BI", "SQL", "Advanced Excel"]
  },
  {
    title: "AI & Tech Foundation",
    role: "Data Annotation (VNDirect)",
    description: "Established the ground truth for machine learning pipelines. Performed high-volume, precise data labeling to train ML models for financial analysis.",
    metrics: [
      { value: "400+", label: "Daily Data Points" },
      { value: "ML Ready", label: "Model Optimization" }
    ],
    tags: ["Machine Learning", "Data Integrity", "Quality Assurance"]
  },
  {
    title: "Creative Initiatives",
    role: "Head of Video (Ngo Quyen Media)",
    description: "Innovative 360° Virtual School Map featured in national news (Dän Trí). Directed high-impact visual storytelling for the Media Club.",
    metrics: [
      { value: "National", label: "News Coverage" },
      { value: "360°", label: "Virtual Project" }
    ],
    tags: ["Video Production", "Innovation", "Journalism"]
  }
];

export default function Projects() {
  return (
    <PageTransition className="px-6 md:px-24 pt-32 pb-24">
      <div className="mb-20">
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-ink mb-4 block">Selected Experiments</span>
        <h1 className="text-5xl md:text-7xl tracking-tighter font-serif">Impact & <br/>Metrics.</h1>
      </div>
      
      <div className="flex flex-col border-t border-ink/10">
        {projects.map((p, i) => (
          <Project key={i} {...p} />
        ))}
      </div>
    </PageTransition>
  );
}
