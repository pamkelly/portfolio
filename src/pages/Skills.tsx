import PageTransition from '@/src/components/layout/PageTransition';

const SkillCategory = ({ title, skills }: { title: string; skills: string[] }) => (
  <div className="flex flex-col gap-6 py-12 border-b border-ink/10">
    <h2 className="text-[10px] uppercase tracking-[0.3em] text-muted-ink">{title}</h2>
    <div className="flex flex-wrap gap-x-4 gap-y-2">
      {skills.map((skill, i) => (
        <span key={i} className="text-2xl md:text-4xl font-serif">
          {skill}{i !== skills.length - 1 && <span className="text-ink/20 ml-4 font-sans font-light">,</span>}
        </span>
      ))}
    </div>
  </div>
);

export default function Skills() {
  return (
    <PageTransition className="px-6 md:px-24 pt-32 pb-24">
      <div className="max-w-4xl">
        <div className="mb-20">
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted-ink mb-4 block">Technical Snapshot</span>
          <h1 className="text-5xl md:text-7xl tracking-tighter font-serif">Capabilities.</h1>
        </div>

        <div className="flex flex-col border-t border-ink/10">
          <SkillCategory 
            title="Web & Digital Management" 
            skills={["LMS Management", "Cloud Computing Fundamentals", "Web Architecture", "CMS Admin"]} 
          />
          <SkillCategory 
            title="Data & Analytics" 
            skills={["SQL", "Power BI", "Advanced Excel", "ML Data Pipelines"]} 
          />
          <SkillCategory 
            title="Content Creation" 
            skills={["Video Production", "Visual Storytelling", "Copywriting", "Media Ops"]} 
          />
        </div>
      </div>
    </PageTransition>
  );
}
