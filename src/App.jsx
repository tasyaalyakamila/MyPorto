import React, { useState } from 'react';
import { 
  Sparkles, 
  MapPin, 
  Mail, 
  Phone, 
  ExternalLink, 
  Music, 
  Palette, 
  FlaskConical, 
  Cat, 
  Search, 
  Send, 
  CheckCircle2,
  ChevronDown
} from 'lucide-react';

export default function App() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('about');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('tasyaalyakamila@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToContent = () => {
    const el = document.getElementById('main-content');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f5eee6] text-[#1a1a1a] selection:bg-[#f2a922] selection:text-[#263d2e]">
      
      {/* =========================================================================
          SECTION 1: HERO & HEADER (DEEP VINTAGE FOREST GREEN)
          ========================================================================= */}
      <section className="relative bg-[#263d2e] text-[#f5eee6] pt-6 pb-28 md:pb-36 px-4 sm:px-8 lg:px-16 overflow-hidden">
        
        {/* Top Navigation */}
        <header className="max-w-7xl mx-auto flex items-center justify-between py-4 border-b border-[#3b5744]/40">
          <a href="#" className="flex items-center gap-2 group">
            <span className="text-[#f2a922] text-xl group-hover:rotate-45 transition-transform">✦</span>
            <span className="font-serif font-bold text-xl sm:text-2xl tracking-wide text-[#f5eee6]">
              Tasya Alya Kamila
            </span>
          </a>

          <nav className="flex items-center gap-6 sm:gap-10 text-xs sm:text-sm font-medium">
            <a href="#about" className="hover:text-[#f2a922] transition-colors hidden sm:inline-block">About me</a>
            <a href="#resume" className="hover:text-[#f2a922] transition-colors hidden sm:inline-block">Resume</a>
            <a href="#experience" className="hover:text-[#f2a922] transition-colors hidden sm:inline-block">Work</a>
            <a 
              href="#contact" 
              className="bg-[#f2a922] hover:bg-[#d98f12] text-[#263d2e] font-bold px-5 py-2 rounded-full text-xs transition-all shadow-md hover:scale-105"
            >
              Get in touch!
            </a>
          </nav>
        </header>

        {/* Hero Body */}
        <div className="max-w-7xl mx-auto mt-12 sm:mt-16 relative">
          
          {/* Main Giant PORTFOLIO Title */}
          <div className="relative text-center sm:text-left">
            <h1 className="font-serif font-black text-6xl sm:text-8xl md:text-9xl tracking-tight text-[#f5eee6] uppercase select-none leading-none">
              PORTFOLIO
            </h1>

            {/* Outlined Repeated PORTFOLIO Lines & Social Handles */}
            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-2">
              
              {/* Repeated Outlined Text (Left/Background) */}
              <div className="lg:col-span-8 flex flex-col space-y-1 select-none pointer-events-none opacity-85">
                <span className="font-serif font-black text-5xl sm:text-7xl md:text-8xl tracking-tight text-stroke-gold uppercase leading-none">
                  PORTFOLIO
                </span>
                <span className="font-serif font-black text-5xl sm:text-7xl md:text-8xl tracking-tight text-stroke-gold uppercase leading-none">
                  PORTFOLIO
                </span>
                <span className="font-serif font-black text-5xl sm:text-7xl md:text-8xl tracking-tight text-stroke-gold uppercase leading-none">
                  PORTFOLIO
                </span>
              </div>

              {/* Social Handles (Right Side in the design) */}
              <div className="lg:col-span-4 lg:text-left pt-4 space-y-2 text-xs sm:text-sm font-mono tracking-wider text-[#f5eee6]/90">
                <p className="hover:text-[#f2a922] transition-colors cursor-pointer">
                  <span className="font-bold text-[#f2a922]">BE:</span> /tasya-k
                </p>
                <p className="hover:text-[#f2a922] transition-colors cursor-pointer">
                  <span className="font-bold text-[#f2a922]">IG:</span> @tasyaalyakamila
                </p>
                <p className="hover:text-[#f2a922] transition-colors cursor-pointer">
                  <span className="font-bold text-[#f2a922]">LI:</span> /in/tasya-alya-kamila
                </p>
              </div>

            </div>
          </div>

          {/* Featured Terracotta Photo Box (Vintage Poster Style) */}
          <div className="relative mt-8 sm:mt-[-120px] lg:mt-[-160px] max-w-md mx-auto sm:mx-0 z-10">
            <div className="relative bg-[#cf633a] p-3 sm:p-4 shadow-2xl">
              
              {/* Cute Sparkles at Corners */}
              <span className="absolute -top-5 -left-4 text-[#f2a922] text-3xl font-bold animate-pulse">✦</span>
              <span className="absolute -bottom-4 -right-4 text-[#f2a922] text-2xl font-bold animate-pulse">✦</span>

              {/* Image Container */}
              <div className="relative aspect-[3/4] bg-[#263d2e] overflow-hidden flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80" 
                  alt="Tasya Alya Kamila Portrait" 
                  className="w-full h-full object-cover grayscale contrast-125 brightness-90 hover:scale-105 transition-transform duration-700"
                />

                {/* Bottom-left Quote Badge */}
                <div className="absolute bottom-0 left-0 max-w-[85%] bg-[#b8522b]/95 p-3 sm:p-4 text-[11px] sm:text-xs leading-relaxed text-[#f5eee6] font-sans">
                  <p>
                    I love science, education, and anything related to chemistry. I approach problems in a rational and pragmatic way and seek the simplest and most functional solutions possible.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* OVERLAPPING "SCROLL DOWN" CIRCLE BADGE */}
        <button 
          onClick={scrollToContent}
          className="absolute -bottom-10 sm:-bottom-12 left-1/2 -translate-x-1/2 z-30 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#f2a922] hover:bg-[#d98f12] text-[#263d2e] font-serif font-black text-[11px] sm:text-xs uppercase tracking-wider flex flex-col items-center justify-center shadow-xl hover:scale-110 transition-transform active:scale-95 group cursor-pointer"
          aria-label="Scroll to main content"
        >
          <span>Scroll</span>
          <span>down</span>
          <ChevronDown className="w-3.5 h-3.5 mt-0.5 group-hover:translate-y-1 transition-transform" />
        </button>

      </section>

      {/* =========================================================================
          SECTION 2: EDITORIAL MAIN CONTENT (WARM VINTAGE CREAM BG)
          ========================================================================= */}
      <section id="main-content" className="pt-20 pb-28 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
        
        {/* Second Sub-Nav Bar (repeating the aesthetic from the mockup) */}
        <div className="flex items-center justify-between pb-10 border-b border-[#e5dcd1]">
          <div className="flex items-center gap-2">
            <span className="text-[#cf633a] text-xl">✦</span>
            <span className="font-serif font-bold text-xl sm:text-2xl tracking-wide text-[#1a1a1a]">
              Tasya Alya Kamila
            </span>
          </div>

          <div className="flex items-center gap-6 sm:gap-10 text-xs sm:text-sm font-medium text-[#1a1a1a]">
            <a href="#about" className="hover:text-[#cf633a] transition-colors hidden sm:inline-block">About me</a>
            <a href="#experience" className="hover:text-[#cf633a] transition-colors hidden sm:inline-block">Work</a>
            <a 
              href="#contact" 
              className="bg-[#f2a922] hover:bg-[#d98f12] text-[#263d2e] font-bold px-5 py-2 rounded-full text-xs transition-all shadow-md hover:scale-105"
            >
              Get in touch!
            </a>
          </div>
        </div>

        {/* TWO-COLUMN EDITORIAL GRID */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 pt-12 items-start">
          
          {/* ==========================================
              LEFT COLUMN (Hello, Education, Experience, Activities)
              ========================================== */}
          <div className="lg:col-span-6 space-y-12">
            
            {/* Intro: Hello, I'm Tasya ! */}
            <div id="about" className="space-y-6">
              <h2 className="font-serif font-black text-5xl sm:text-6xl text-[#1a1a1a] leading-[1.1]">
                Hello,<br />
                I'm Tasya !
              </h2>
              
              <p className="text-sm sm:text-base text-[#404040] leading-relaxed max-w-xl">
                I am a passionate <span className="font-bold text-[#1a1a1a]">Chemistry & Education student</span> based in Indonesia with an extensive interest in laboratory research, PKM innovation, and digital educational media. Currently in Semester 3 and actively exploring <span className="font-bold text-[#263d2e]">Green Chemistry & Nanotechnology</span>.
              </p>

              {/* Orange Pill Link Button */}
              <div>
                <a 
                  href="https://linkedin.com/in/tasya-alya-kamila" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-[#e85d38] hover:bg-[#d44c27] text-white text-xs sm:text-sm font-semibold shadow-md hover:shadow-lg transition-all hover:scale-102"
                >
                  <Search className="w-4 h-4" />
                  <span>linkedin.com/in/tasya-alya-kamila</span>
                </a>
              </div>
            </div>

            {/* Education Section */}
            <div id="education" className="space-y-6 pt-4">
              <h3 className="font-serif italic font-bold text-3xl text-[#f2a922] flex items-center gap-2">
                <span>Education</span>
              </h3>

              <div className="relative pl-6 space-y-8 border-l-2 border-[#f2a922]/60 ml-2">
                
                {/* Edu Item 1 */}
                <div className="relative">
                  <span className="absolute -left-[31px] top-1 text-[#f2a922] text-sm">✦</span>
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
                    <span className="font-serif font-bold text-base sm:text-lg text-[#1a1a1a] min-w-[120px]">
                      2024 - Sekarang
                    </span>
                    <div>
                      <h4 className="font-sans font-bold text-sm sm:text-base text-[#1a1a1a]">
                        Universitas - Pendidikan Kimia
                      </h4>
                      <p className="text-xs text-[#666] mt-0.5">
                        Mahasiswa Aktif Semester 3 • Riset Kimia Analitik & Nanoteknologi
                      </p>
                    </div>
                  </div>
                </div>

                {/* Edu Item 2 */}
                <div className="relative">
                  <span className="absolute -left-[31px] top-1 text-[#f2a922] text-sm">✦</span>
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
                    <span className="font-serif font-bold text-base sm:text-lg text-[#1a1a1a] min-w-[120px]">
                      2021 - 2024
                    </span>
                    <div>
                      <h4 className="font-sans font-bold text-sm sm:text-base text-[#1a1a1a]">
                        SMA Negeri - Peminatan MIPA
                      </h4>
                      <p className="text-xs text-[#666] mt-0.5">
                        Fokus pada Sains Eksakta, Matematika, dan Kimia Terapan
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Experience Section (THE MUSTARD SOLID CARD) */}
            <div id="experience" className="bg-[#f2a922] p-8 sm:p-10 shadow-lg text-[#1a1a1a] space-y-8">
              
              <h3 className="font-serif font-black text-3xl sm:text-4xl">
                Experience
              </h3>

              <div className="space-y-6">
                
                {/* Exp 1 */}
                <div className="flex items-start gap-4">
                  <span className="text-[#1a1a1a] text-sm mt-1">✦</span>
                  <div className="space-y-1">
                    <div className="flex items-baseline gap-3">
                      <span className="font-serif font-bold text-lg">2026</span>
                      <h4 className="font-sans font-bold text-sm sm:text-base">
                        PKM-VGK Lead Innovator
                      </h4>
                    </div>
                    <p className="text-xs text-[#333] leading-relaxed">
                      Program Kreativitas Mahasiswa: Merancang storyboard, riset ilmiah, dan memproduksi video gagasan konstruktif berbasis isu sains nasional.
                    </p>
                  </div>
                </div>

                {/* Exp 2 */}
                <div className="flex items-start gap-4">
                  <span className="text-[#1a1a1a] text-sm mt-1">✦</span>
                  <div className="space-y-1">
                    <div className="flex items-baseline gap-3">
                      <span className="font-serif font-bold text-lg">2025</span>
                      <h4 className="font-sans font-bold text-sm sm:text-base">
                        Laboratory Practicum Analyst
                      </h4>
                    </div>
                    <p className="text-xs text-[#333] leading-relaxed">
                      Analytical Chemistry II & Physical Chemistry II: Menguji sampel dengan spektrofotometri dan titrasi kuantitatif dengan akurasi data teruji.
                    </p>
                  </div>
                </div>

                {/* Exp 3 */}
                <div className="flex items-start gap-4">
                  <span className="text-[#1a1a1a] text-sm mt-1">✦</span>
                  <div className="space-y-1">
                    <div className="flex items-baseline gap-3">
                      <span className="font-serif font-bold text-lg">2024</span>
                      <h4 className="font-sans font-bold text-sm sm:text-base">
                        Educational Media & Organization
                      </h4>
                    </div>
                    <p className="text-xs text-[#333] leading-relaxed">
                      Membuat infografis dan modul visual untuk mempermudah pemahaman konsep kimia sekolah bagi siswa SMA.
                    </p>
                  </div>
                </div>

              </div>

              {/* 4 Black Pills at Bottom */}
              <div className="flex flex-wrap gap-2.5 pt-4 border-t border-[#1a1a1a]/15">
                <span className="bg-[#1a1a1a] text-white px-4 py-1.5 rounded-full text-xs font-semibold">
                  #Creativity
                </span>
                <span className="bg-[#1a1a1a] text-white px-4 py-1.5 rounded-full text-xs font-semibold">
                  #Communication
                </span>
                <span className="bg-[#1a1a1a] text-white px-4 py-1.5 rounded-full text-xs font-semibold">
                  #Detail-oriented
                </span>
                <span className="bg-[#1a1a1a] text-white px-4 py-1.5 rounded-full text-xs font-semibold">
                  #Adaptability
                </span>
              </div>

            </div>

            {/* Activities Section */}
            <div id="activities" className="space-y-6 pt-2">
              <h3 className="font-serif font-bold text-3xl text-[#1a1a1a] flex items-center gap-2">
                <span>Activities</span>
              </h3>

              <div className="space-y-6 pl-2">
                
                <div className="flex items-start gap-4">
                  <span className="text-[#cf633a] text-sm mt-1">✦</span>
                  <div>
                    <div className="flex items-baseline gap-3">
                      <span className="font-serif font-bold text-lg text-[#1a1a1a]">2026</span>
                      <h4 className="font-sans font-bold text-sm sm:text-base text-[#1a1a1a]">
                        PKM-VGK Video Showcase
                      </h4>
                    </div>
                    <p className="text-xs text-[#666] mt-0.5">
                      Penyusunan naskah ilmiah dan konten digital audio-visual untuk kompetisi inovasi nasional.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-[#cf633a] text-sm mt-1">✦</span>
                  <div>
                    <div className="flex items-baseline gap-3">
                      <span className="font-serif font-bold text-lg text-[#1a1a1a]">2025</span>
                      <h4 className="font-sans font-bold text-sm sm:text-base text-[#1a1a1a]">
                        Seminar & Workshop Kimia Berkelanjutan
                      </h4>
                    </div>
                    <p className="text-xs text-[#666] mt-0.5">
                      Peserta aktif dalam studi kasus Green Chemistry dan aplikasi nanomaterial di kehidupan nyata.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* ==========================================
              RIGHT COLUMN (Photo, Contact, Skills, Lang, Hobbies)
              ========================================== */}
          <div className="lg:col-span-6 space-y-12">
            
            {/* Visual Portrait & Contact Stack */}
            <div className="relative">
              
              {/* Green Container with Circular Backdrop */}
              <div className="bg-[#263d2e] p-8 sm:p-12 relative overflow-hidden flex flex-col items-center shadow-xl">
                
                {/* Large Cream Circle Backdrop */}
                <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-full bg-[#f5eee6] absolute top-8 -z-0"></div>

                {/* Floating Badge 1 (Left) */}
                <div className="absolute top-1/3 left-4 sm:left-6 z-20 bg-[#f2a922] text-[#263d2e] px-4 py-1.5 rounded-full text-xs font-bold shadow-md">
                  2nd August 2005
                </div>

                {/* Floating Badge 2 (Right) */}
                <div className="absolute top-1/2 right-4 sm:right-6 z-20 bg-[#f2a922] text-[#263d2e] px-4 py-1.5 rounded-full text-xs font-bold shadow-md">
                  Indonesian
                </div>

                {/* Portrait Cutout / Image */}
                <div className="relative z-10 w-48 sm:w-56 aspect-[3/4] overflow-hidden mt-4">
                  <img 
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=700&q=80" 
                    alt="Tasya Profile" 
                    className="w-full h-full object-cover grayscale contrast-110"
                  />
                </div>

              </div>

              {/* OVERLAPPING BLACK CONTACT BOX */}
              <div id="contact" className="bg-[#111613] text-white p-6 sm:p-8 shadow-2xl relative z-20 mt-[-40px] max-w-[90%] mx-auto">
                <h4 className="font-script text-3xl sm:text-4xl text-center text-[#f5eee6] mb-4">
                  Contact
                </h4>

                <div className="space-y-3 text-xs sm:text-sm font-sans text-[#ddd]">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-[#f2a922] shrink-0" />
                    <span>Indonesia</span>
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-[#f2a922] shrink-0" />
                      <a href="mailto:tasyaalyakamila@gmail.com" className="hover:text-[#f2a922] transition-colors">
                        tasyaalyakamila@gmail.com
                      </a>
                    </div>
                    <button 
                      onClick={handleCopyEmail}
                      className="text-[10px] text-[#f2a922] hover:underline"
                    >
                      {copied ? 'Copied!' : 'Copy'}
                    </button>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#f2a922] shrink-0" />
                    <span>+62 812-3456-7890</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Giant Outlined "RESUME" Watermark & Technical Skills */}
            <div id="resume" className="relative pt-6">
              
              {/* Outlined Watermark Text */}
              <div className="select-none pointer-events-none opacity-80 space-y-1 mb-4">
                <div className="font-serif font-black text-6xl sm:text-7xl tracking-widest text-stroke-gold uppercase leading-none">
                  RESUME
                </div>
                <div className="font-serif font-black text-6xl sm:text-7xl tracking-widest text-stroke-gold uppercase leading-none">
                  RESUME
                </div>
              </div>

              {/* Technical skills Heading */}
              <h3 className="font-serif font-bold text-3xl text-[#f2a922] mb-6">
                Technical skills
              </h3>

              {/* Skills Split: Software & Coding/Lab */}
              <div className="grid sm:grid-cols-2 gap-8 mb-6">
                
                {/* Software Skills */}
                <div className="space-y-3">
                  <h4 className="font-serif font-bold text-base text-[#1a1a1a]">Software Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="w-9 h-9 rounded-lg bg-white border border-[#ccc] font-bold text-xs flex items-center justify-center shadow-sm">
                      Ps
                    </span>
                    <span className="w-9 h-9 rounded-lg bg-white border border-[#ccc] font-bold text-xs flex items-center justify-center shadow-sm">
                      Ai
                    </span>
                    <span className="w-9 h-9 rounded-lg bg-white border border-[#ccc] font-bold text-xs flex items-center justify-center shadow-sm">
                      Id
                    </span>
                    <span className="w-9 h-9 rounded-lg bg-white border border-[#ccc] font-bold text-xs flex items-center justify-center shadow-sm">
                      Pr
                    </span>
                    <span className="w-9 h-9 rounded-lg bg-white border border-[#ccc] font-bold text-xs flex items-center justify-center shadow-sm">
                      Cv
                    </span>
                  </div>
                </div>

                {/* Lab & Coding skills */}
                <div className="space-y-2">
                  <h4 className="font-serif font-bold text-base text-[#1a1a1a]">Lab & Web Skills</h4>
                  <p className="text-[11px] text-[#666] uppercase tracking-wider font-semibold">
                    Basic knowledge of:
                  </p>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-[#333]">
                    <span>• Spektrofotometri</span>
                    <span>• React JS</span>
                    <span>• Titrasi Analitik</span>
                    <span>• HTML & CSS</span>
                    <span>• Green Chemistry</span>
                    <span>• MS Excel Data</span>
                  </div>
                </div>

              </div>

              {/* Black Pill Badges */}
              <div className="flex flex-wrap gap-2.5">
                <span className="bg-[#1a1a1a] text-white px-4 py-1.5 rounded-full text-xs font-semibold">
                  Lab Analysis
                </span>
                <span className="bg-[#1a1a1a] text-white px-4 py-1.5 rounded-full text-xs font-semibold">
                  Visual Design
                </span>
                <span className="bg-[#1a1a1a] text-white px-4 py-1.5 rounded-full text-xs font-semibold">
                  Media Edukasi
                </span>
                <span className="bg-[#1a1a1a] text-white px-4 py-1.5 rounded-full text-xs font-semibold">
                  Scientific Writing
                </span>
              </div>

            </div>

            {/* Language Section */}
            <div className="space-y-4 pt-4 border-t border-[#e5dcd1]">
              <h3 className="font-serif font-bold text-3xl text-[#1a1a1a]">
                Language
              </h3>

              <div className="grid grid-cols-3 gap-4 text-left">
                <div>
                  <h4 className="font-serif font-bold text-base text-[#1a1a1a]">Indonesian</h4>
                  <p className="text-xs text-[#777] mt-0.5">Native</p>
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base text-[#1a1a1a]">English</h4>
                  <p className="text-xs text-[#777] mt-0.5">Fluent / Academic</p>
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base text-[#1a1a1a]">Arabic</h4>
                  <p className="text-xs text-[#777] mt-0.5">Intermediate</p>
                </div>
              </div>
            </div>

            {/* Hobbies & Interests Section */}
            <div className="space-y-6 pt-4 border-t border-[#e5dcd1]">
              <h3 className="font-serif font-bold text-3xl text-[#1a1a1a]">
                Hobbies & Interests
              </h3>

              <div className="grid grid-cols-4 gap-4 text-center">
                
                {/* Hobby 1 */}
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-[#f2a922]/20 text-[#f2a922] flex items-center justify-center">
                    <Music className="w-6 h-6 fill-[#f2a922]" />
                  </div>
                  <p className="text-[11px] font-medium text-[#444] leading-tight">
                    Classical & Jazz Music
                  </p>
                </div>

                {/* Hobby 2 */}
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-[#f2a922]/20 text-[#f2a922] flex items-center justify-center">
                    <Palette className="w-6 h-6 fill-[#f2a922]" />
                  </div>
                  <p className="text-[11px] font-medium text-[#444] leading-tight">
                    Digital Art & Infografis
                  </p>
                </div>

                {/* Hobby 3 */}
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-[#f2a922]/20 text-[#f2a922] flex items-center justify-center">
                    <FlaskConical className="w-6 h-6 text-[#f2a922]" />
                  </div>
                  <p className="text-[11px] font-medium text-[#444] leading-tight">
                    Chemistry Research
                  </p>
                </div>

                {/* Hobby 4 */}
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-[#f2a922]/20 text-[#f2a922] flex items-center justify-center">
                    <Cat className="w-6 h-6 text-[#f2a922]" />
                  </div>
                  <p className="text-[11px] font-medium text-[#444] leading-tight">
                    Cat & Reading
                  </p>
                </div>

              </div>
            </div>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-[#263d2e] text-[#f5eee6] py-10 px-4 text-center text-xs border-t border-[#3b5744]/40">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 Tasya Alya Kamila. Crafted with React JS & Vintage Aesthetic.</p>
          <div className="flex items-center gap-6 text-[#f2a922]">
            <a href="https://github.com/tasyaalyakamila/MyPorto" target="_blank" rel="noreferrer" className="hover:underline">
              GitHub Repository
            </a>
            <a href="https://linkedin.com/in/tasya-alya-kamila" target="_blank" rel="noreferrer" className="hover:underline">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
