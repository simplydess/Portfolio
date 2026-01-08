
import React, { useState, useEffect } from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Mail, 
  Phone, 
  MapPin, 
  Award, 
  CheckCircle2, 
  ChevronRight, 
  Menu, 
  X,
  Linkedin,
  Github,
  Search,
  Zap
} from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, SKILLS, CERTIFICATIONS } from './constants';

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'SERVICES', href: '#about' },
    { name: 'WORKS', href: '#experience' },
    { name: 'NOTES', href: '#certs' },
    { name: 'EXPERIENCE', href: '#experience' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md py-3 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <span className="text-3xl font-script text-[#1A2B3C]">Odessa</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-10">
            <div className="flex items-center space-x-8">
              {navLinks.map((link, idx) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-xs font-bold tracking-widest text-[#1A2B3C] hover:opacity-70 transition-opacity ${idx === 0 ? 'border border-[#1A2B3C] rounded-full px-4 py-1.5' : ''}`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <span className="text-xs font-bold tracking-widest text-[#1A2B3C]">{PERSONAL_INFO.phone}</span>
            <div className="p-2.5 rounded-full border border-[#1A2B3C]/10 bg-white shadow-sm hover:scale-105 transition-transform cursor-pointer">
              <Phone className="h-4 w-4 text-[#1A2B3C]" strokeWidth={2.5} />
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[#1A2B3C]"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-64 bg-white border-b' : 'max-h-0'}`}>
        <div className="px-6 pt-4 pb-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-[#1A2B3C] block text-sm font-bold tracking-widest"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 w-full relative">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Headline Section */}
          <div className="lg:col-span-6 z-20">
            <h1 className="text-6xl md:text-8xl font-black text-[#1A2B3C] leading-[0.9] tracking-tighter mb-12">
              Hey There,<br />I'm Odessa
            </h1>
            
            <div className="mt-8">
              <a 
                href={`mailto:${PERSONAL_INFO.email}`} 
                className="text-[#EAB308] font-bold border-b-2 border-[#EAB308]/20 hover:border-[#EAB308] pb-1 transition-all"
              >
                {PERSONAL_INFO.email}
              </a>
            </div>

            <div className="mt-24 flex items-baseline space-x-4">
               <span className="text-7xl font-black text-[#1A2B3C]">16</span>
               <div className="leading-tight">
                 <p className="text-xs font-black tracking-widest text-[#1A2B3C]/40">YEARS</p>
                 <p className="text-xs font-black tracking-widest text-[#1A2B3C]">EXPERIENCE</p>
               </div>
            </div>
          </div>

          {/* Image & Decorative Section */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-[4/5]">
               {/* Brush Stroke Background */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-[#2D6A4F] rotate-[-5deg] rounded-[30% 70% 70% 30% / 30% 30% 70% 70%] opacity-90 blur-sm"></div>
               
               {/* Main Profile Image Container */}
               <div className="relative h-full w-full bg-[#EAB308] rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform rotate-3 hover:rotate-0 transition-transform duration-700">
                 <img 
                   src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80" 
                   alt="Odessa Amparado" 
                   className="w-full h-full object-cover mix-blend-multiply opacity-90"
                 />
               </div>

               {/* Right side floating text */}
               <div className="absolute top-10 -right-12 hidden xl:block w-48">
                 <p className="text-sm font-medium leading-relaxed text-[#1A2B3C]">
                   I manage technical complexity with simplicity, and I love what I do.
                 </p>
               </div>

               {/* Certification Badge style */}
               <div className="absolute -bottom-8 -right-8 bg-[#FAF9F6] p-6 rounded-2xl shadow-xl border border-slate-100 flex flex-col items-center">
                 <div className="w-12 h-12 mb-4">
                    <Zap className="h-full w-full text-[#1A2B3C]" strokeWidth={1.5} />
                 </div>
                 <p className="text-[10px] font-black tracking-[0.2em] text-[#1A2B3C] text-center leading-tight">
                   ITIL CERTIFIED<br />PROFESSIONAL<br />INCIDENT MANAGER
                 </p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SectionHeading: React.FC<{ title: string; center?: boolean }> = ({ title, center }) => (
  <div className={`mb-16 ${center ? 'text-center' : ''}`}>
    <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-[#1A2B3C]">
      {title}
    </h2>
    <div className={`w-12 h-1 bg-[#EAB308] mt-4 rounded-full ${center ? 'mx-auto' : ''}`}></div>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAF9F6] selection:bg-[#EAB308] selection:text-white">
      <Nav />
      <Hero />

      {/* Services Section */}
      <section id="about" className="py-32 px-6 sm:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="What I Do" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="group">
              <div className="w-14 h-14 bg-[#FAF9F6] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#EAB308] transition-colors">
                <Zap className="h-7 w-7 text-[#1A2B3C] group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Outage Management</h3>
              <p className="text-[#1A2B3C]/60 leading-relaxed text-sm">
                Strategic oversight of system availability, critical incidents, and rapid-response communication for global operations.
              </p>
            </div>
            <div className="group">
              <div className="w-14 h-14 bg-[#FAF9F6] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#2D6A4F] transition-colors">
                <Search className="h-7 w-7 text-[#1A2B3C] group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Bug & Issue Tracking</h3>
              <p className="text-[#1A2B3C]/60 leading-relaxed text-sm">
                End-to-end lifecycle management of technical bugs, prioritizing based on SLA and customer impact across ecosystems.
              </p>
            </div>
            <div className="group">
              <div className="w-14 h-14 bg-[#FAF9F6] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#1A2B3C] transition-colors">
                <CheckCircle2 className="h-7 w-7 text-[#1A2B3C] group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Change Lifecycle</h3>
              <p className="text-[#1A2B3C]/60 leading-relaxed text-sm">
                Managing IT Ops tickets and complex changes to ensure zero-downtime deployment and high-quality customer experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Experience" />
          <div className="space-y-1 bg-white border border-[#1A2B3C]/5 rounded-3xl overflow-hidden shadow-sm">
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className={`p-8 md:p-12 hover:bg-[#FAF9F6] transition-colors border-b border-[#1A2B3C]/5 last:border-0`}>
                <div className="grid md:grid-cols-12 gap-6 items-start">
                  <div className="md:col-span-3">
                    <span className="text-xs font-black tracking-widest text-[#1A2B3C]/30">{exp.period}</span>
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="text-xl font-black text-[#1A2B3C]">{exp.role}</h3>
                    <p className="text-[#2D6A4F] font-bold text-sm mt-1">{exp.company}</p>
                  </div>
                  <div className="md:col-span-5">
                    <p className="text-sm text-[#1A2B3C]/60 leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.highlights.slice(0, 2).map((h, i) => (
                        <span key={i} className="px-3 py-1 bg-white border border-[#1A2B3C]/10 rounded-full text-[10px] font-bold text-[#1A2B3C]/40">
                          {h.split(' ').slice(0, 3).join(' ')}...
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certs" className="py-32 px-6 sm:px-12 bg-[#1A2B3C]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-[#FAF9F6]">
              Certifications
            </h2>
            <div className="w-12 h-1 bg-[#EAB308] mt-4 md:hidden"></div>
            <p className="text-[#FAF9F6]/40 text-sm max-w-sm mt-6 md:mt-0">
              Validated expertise in Service Management, Data Analytics, and User Experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CERTIFICATIONS.map((cert, index) => (
              <div key={index} className="bg-[#FAF9F6]/5 p-8 rounded-3xl border border-[#FAF9F6]/10 hover:bg-[#FAF9F6]/10 transition-all group">
                <div className="flex justify-between items-start mb-6">
                  <Award className="h-8 w-8 text-[#EAB308]" />
                  <span className="text-[10px] font-black tracking-[0.2em] text-[#FAF9F6]/20 uppercase">{cert.date}</span>
                </div>
                <h3 className="text-lg font-bold text-[#FAF9F6] mb-2 leading-snug group-hover:text-[#EAB308] transition-colors">{cert.title}</h3>
                <p className="text-[#FAF9F6]/40 text-xs font-bold mb-4">{cert.issuer}</p>
                <p className="text-[#FAF9F6]/60 text-xs leading-relaxed">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-32 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Skills" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {SKILLS.map((skill, index) => (
              <div key={index} className="p-6 bg-white border border-[#1A2B3C]/5 rounded-2xl flex flex-col items-center text-center hover:shadow-lg hover:translate-y-[-4px] transition-all">
                <CheckCircle2 className="h-5 w-5 text-[#2D6A4F] mb-4" />
                <span className="text-[11px] font-black tracking-wider text-[#1A2B3C] uppercase">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="pt-32 pb-16 px-6 sm:px-12 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto border-t border-[#1A2B3C]/5 pt-24">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <h2 className="text-5xl font-black tracking-tighter mb-8 leading-tight">
                Let's make something <span className="text-[#2D6A4F]">great</span> together.
              </h2>
              <div className="flex space-x-4">
                <a href="#" className="p-3 bg-white rounded-full border border-[#1A2B3C]/10 hover:bg-[#1A2B3C] hover:text-white transition-all">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="p-3 bg-white rounded-full border border-[#1A2B3C]/10 hover:bg-[#1A2B3C] hover:text-white transition-all">
                  <Github className="h-5 w-5" />
                </a>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="p-3 bg-white rounded-full border border-[#1A2B3C]/10 hover:bg-[#EAB308] hover:text-white transition-all">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
              <div>
                <h4 className="text-[10px] font-black tracking-[0.3em] text-[#1A2B3C]/30 uppercase mb-6">Contact</h4>
                <p className="text-sm font-bold mb-2">{PERSONAL_INFO.phone}</p>
                <p className="text-sm text-[#1A2B3C]/60">{PERSONAL_INFO.email}</p>
              </div>
              <div>
                <h4 className="text-[10px] font-black tracking-[0.3em] text-[#1A2B3C]/30 uppercase mb-6">Location</h4>
                <p className="text-sm font-bold">{PERSONAL_INFO.location}</p>
                <p className="text-sm text-[#1A2B3C]/60 mt-2">Philippines</p>
              </div>
              <div className="col-span-2 md:col-span-1">
                <h4 className="text-[10px] font-black tracking-[0.3em] text-[#1A2B3C]/30 uppercase mb-6">Education</h4>
                <p className="text-sm font-bold">{PERSONAL_INFO.education.degree}</p>
                <p className="text-xs text-[#1A2B3C]/60 mt-2">{PERSONAL_INFO.education.school}</p>
              </div>
            </div>
          </div>
          <div className="mt-32 pt-12 border-t border-[#1A2B3C]/5 flex flex-col md:flex-row justify-between items-center text-[#1A2B3C]/30 text-[10px] font-black tracking-widest uppercase">
            <p>© {new Date().getFullYear()} ODESSA AMPARADO</p>
            <p className="mt-4 md:mt-0">MADE WITH PASSION & PRECISION</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
