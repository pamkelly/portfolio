import PageTransition from '@/src/components/layout/PageTransition';
import { Mail, Linkedin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <PageTransition className="px-6 md:px-24 pt-32 pb-24 min-h-screen flex flex-col justify-center">
      <div className="max-w-4xl">
        <div className="mb-20">
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted-ink mb-4 block">Get In Touch</span>
          <h1 className="text-5xl md:text-8xl tracking-tighter font-serif mb-12">Let's build <br/><span className="italic">something together.</span></h1>
        </div>

        <div className="grid md:grid-cols-3 gap-12 border-t border-ink/10 pt-16">
          <div className="flex flex-col gap-4">
            <span className="text-[10px] uppercase tracking-widest text-muted-ink">Email</span>
            <a href="mailto:placeholder@email.com" className="text-xl font-serif link-underline py-2 w-fit flex items-center gap-3">
              <Mail className="w-4 h-4" />
              placeholder@email.com
            </a>
          </div>
          
          <div className="flex flex-col gap-4">
            <span className="text-[10px] uppercase tracking-widest text-muted-ink">Network</span>
            <a href="https://linkedin.com/in/placeholder" target="_blank" rel="noopener noreferrer" className="text-xl font-serif link-underline py-2 w-fit flex items-center gap-3">
              <Linkedin className="w-4 h-4" />
              LinkedIn Profile
            </a>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-[10px] uppercase tracking-widest text-muted-ink">Call</span>
            <a href="tel:+84000000000" className="text-xl font-serif link-underline py-2 w-fit flex items-center gap-3">
              <Phone className="w-4 h-4" />
              +84 000 000 000
            </a>
          </div>
        </div>

        <div className="mt-32 pt-16 border-t border-ink/5">
          <p className="text-[10px] uppercase tracking-widest text-muted-ink/40">
            © 2026 Crafted with precision and data integrity.
          </p>
        </div>
      </div>
    </PageTransition>
  );
}
