/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { MovingBorderContainer } from "@/components/ui/moving-border";
import { cn } from "@/lib/utils";
import { 
  Mic, 
  Cpu, 
  Calendar, 
  Layers, 
  CheckCircle2, 
  Star, 
  ArrowRight,
  MessageSquare,
  Zap,
  Menu,
  X,
  Sparkles,
  MousePointer2,
  Filter,
  LayoutGrid
} from "lucide-react";
import { useState, ReactNode, useEffect } from "react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Shimmer Loader Line */}
      <div className="fixed top-0 left-0 w-full h-1 z-50 shimmer"></div>

      {/* Navigation */}
      <div className="fixed top-4 left-0 w-full z-40 px-6 flex justify-center">
        <nav className={`transition-all duration-500 flex items-center justify-between w-full max-w-lg ${
          scrolled 
            ? "bg-white rounded-full px-6 py-2 shadow-xl border border-white/20" 
            : "bg-transparent px-6 py-2"
        }`}>
          <div className="flex items-center gap-3 transition-all duration-500">
            <Zap className={`w-6 h-6 transition-colors duration-500 ${
              scrolled ? "text-primary fill-primary/20" : "text-white fill-white/20"
            }`} />
            <span className={`text-xl font-bold tracking-tight transition-colors duration-500 ${
              scrolled ? "text-zinc-900" : "text-white"
            }`}>
              Zap Premium
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              className={`p-2 rounded-full transition-all duration-500 ${
                scrolled 
                  ? "text-zinc-900 hover:bg-zinc-100" 
                  : "text-white hover:bg-white/10"
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-white/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-8"
        >
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-10 right-10 text-zinc-900">
            <X className="w-10 h-10" />
          </button>
          <a className="text-4xl font-bold text-zinc-900 hover:text-primary transition-colors" href="#features" onClick={() => setIsMenuOpen(false)}>Funcionalidades</a>
          <a className="text-4xl font-bold text-zinc-900 hover:text-primary transition-colors" href="#pricing" onClick={() => setIsMenuOpen(false)}>Preços</a>
          <a className="text-4xl font-bold text-zinc-900 hover:text-primary transition-colors" href="#testimonials" onClick={() => setIsMenuOpen(false)}>Depoimentos</a>
          <button className="bg-primary text-black px-12 py-5 rounded-2xl font-bold text-2xl shadow-xl shadow-primary/20">
            Começar Agora
          </button>
        </motion.div>
      )}

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary">
        {/* Mirror/Glass Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 via-transparent to-black/5"></div>
          <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-white/10 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-white/30 to-transparent"></div>
        </div>
        
        {/* Text Content - Centered on screen */}
        <div className="min-h-screen flex flex-col items-center justify-center max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-black text-zinc-950 tracking-tighter leading-[0.9] mb-8"
          >
            Responda <span className="font-serif italic text-white underline underline-offset-4 decoration-white/60">rápido</span> <br /> e venda <span className="text-white underline underline-offset-4 decoration-white/60">mais</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg md:text-xl text-zinc-900/70 max-w-xl font-medium leading-relaxed mb-12"
          >
            Economize horas todos os dias no WhatsApp Web com automação inteligente e IA generativa. O futuro do atendimento ao cliente já chegou.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="bg-zinc-950 hover:scale-105 transition-all text-white px-8 py-3 rounded-full text-base font-bold shadow-2xl">
                Começar Grátis Agora
              </button>
            </div>
          </motion.div>
        </div>

      </section>

      {/* Social Proof */}
      <section className="py-12 border-y border-zinc-100 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-zinc-400 text-[10px] font-black uppercase tracking-[0.2em] mb-10">Utilizado pelas empresas mais inovadoras</p>
          
          <div className="relative">
            {/* Gradient masks for smooth fade */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
            
            <motion.div 
              animate={{ x: [0, -1000] }}
              transition={{ 
                duration: 40, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="flex items-center gap-20 whitespace-nowrap opacity-30"
            >
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex items-center gap-20">
                  {['TechFlow', 'Infinity', 'Summit', 'GlobalNet', 'Spark', 'LaunchPad'].map((brand) => (
                    <span key={`${brand}-${i}`} className="font-bold text-3xl text-zinc-400 hover:text-zinc-900 transition-colors cursor-default tracking-tighter">
                      {brand}
                    </span>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 bg-white" id="features">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-zinc-900">🚀 Funcionalidades da <span className="font-serif italic text-primary">Extensão</span></h2>
            <p className="text-zinc-500 max-w-xl mx-auto">Ferramentas nativas integradas diretamente ao seu WhatsApp Web para máxima produtividade.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Zap className="w-6 h-6" />}
              title="Respostas Rápidas & Mídias"
              description="Painel lateral inteligente para envio em um clique de textos, áudios, imagens e PDFs."
            />
            <FeatureCard 
              icon={<MousePointer2 className="w-6 h-6" />}
              title="Chips de Envio"
              description="Atalhos visuais acima da barra de mensagem para acelerar drasticamente seus envios."
            />
            <FeatureCard 
              icon={<Filter className="w-6 h-6" />}
              title="Fluxo de Vendas"
              description="Crie sequências automáticas e temporizadas para automatizar seu processo de vendas."
            />
            <MovingBorderContainer borderRadius="1rem" duration={3500} containerClassName="h-full">
              <FeatureCard 
                icon={<Sparkles className="w-6 h-6" />}
                title="Assistente de IA"
                description="Copiloto integrado para aprimorar, traduzir e criar mensagens profissionais impecáveis."
                badge="PREMIUM"
                className="bg-white border-zinc-100 shadow-sm backdrop-blur-none"
                noGlass
              />
            </MovingBorderContainer>
            <FeatureCard 
              icon={<LayoutGrid className="w-6 h-6" />}
              title="Controle CRM"
              description="Organize atendimentos com filtros avançados e sistema prático de arrastar e soltar."
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32 bg-zinc-50" id="pricing">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-zinc-900">Planos que cabem no seu <span className="font-serif italic text-primary">sucesso</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Plan */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="glass-panel p-10 rounded-2xl flex flex-col border-zinc-200 bg-white"
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2 text-zinc-900">Plano Grátis</h3>
                <p className="text-zinc-500 text-sm">Feito para quem está começando no atendimento no WhatsApp</p>
              </div>
              <div className="mb-10">
                <span className="text-5xl font-bold text-zinc-900">Grátis</span>
                <p className="text-zinc-400 mt-2 text-xs">Ideal para experimentação</p>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                <PricingFeature text="Armazenamento Ilimitado (Mídias/Textos)" active />
                <PricingFeature text="10 envios/dia (300/mês)" active />
                <PricingFeature text="Inteligência Artificial Bloqueada" active={false} />
                <PricingFeature text="Acompanhamento Visual de Créditos" active />
                <PricingFeature text="Ícones Padrão Acinzentados" active />
              </ul>
              <button className="w-full py-4 border border-zinc-200 hover:bg-zinc-50 rounded-xl font-bold transition-colors text-zinc-900">
                Começar Grátis
              </button>
            </motion.div>

            {/* Premium Plan */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="relative glass-panel p-10 rounded-2xl flex flex-col bg-zinc-900 border-primary/40 shadow-[0_0_40px_-10px_rgba(163,230,55,0.3)] text-white"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-black text-[10px] font-black tracking-widest uppercase px-4 py-1 rounded-full">RECOMENDADO</div>
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Plano Premium</h3>
                <p className="text-zinc-400 text-sm">Libere todo o potencial de CRM para uso comercial.</p>
              </div>
              <div className="mb-10">
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-bold text-zinc-400 italic">R$</span>
                  <span className="text-5xl font-bold text-white">29,90</span>
                  <span className="text-zinc-500">/mês</span>
                </div>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                <PricingFeature text="Envios Ilimitados (Sem bloqueios)" active />
                <PricingFeature text="IA Totalmente Liberada" active />
                <PricingFeature text="Assistente Virtual Completo" active />
              </ul>
              <button className="w-full py-4 bg-primary hover:brightness-110 transition-all text-black rounded-xl font-bold">
                Assinar Premium
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-white" id="testimonials">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-16 text-center text-zinc-900">O que os <span className="font-serif italic text-primary">especialistas</span> dizem</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              stars={5}
              text="Minha taxa de conversão aumentou em 40% depois que comecei a usar os áudios gravados. Surreal."
              author="Laert Vitor"
              role="Ecommerce Owner"
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuBZv4Y3cymWbE3cjeWYPFOzV_Od021nIt7eL4hs2ts9VZLGfBdgQX5TVjBWIC4c-z_ViY0618XYb6lvexzCrucxzyGfFv5tNtBo1P1uj0QnHPZJDHELd2V_BV1pJM72Ku9qFDdQ66qEcKg5Hz4V4wS9E22YNeB0LVhQtLLSpvRkC6OWTV2obNec089lmclR7zoWm6vkJvm5bQToPDoHaq7C2xcSRvjwOTx_bpNJWcFqO7OEx7OampdgdRgfva34D7VOCLv3PDVS2Q"
            />
            <TestimonialCard 
              stars={5}
              text="O Assistente IA é assustadoramente bom. Responde meus clientes melhor do que eu mesma."
              author="Lunna Beatriz"
              role="Mentora de Vendas"
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuAnPNi0cGHhD2sc3eTxqdBXexu1f0bnYYR7gJq5MgIm_3B4E1n0Dj8s0RrQkYGXwYHQDuK30ex1UqxissMCuJHeT5a--I895NcJJG6fPjqC-WKlbfQIRYCa8zmZC-vt-5ozzz4wAYTQXrFkeipFQesH3ejlTzd2Nd_Da2MWetsvYzJJNxRvLO5rbju-3YDCBA_RkrpMRF8jWbBX8nUfsSoSxwZE604rqpgkopjkz1IUUT4TbTk2uDSosWwdCCy9MGMXVmnu7XdqKA"
              highlight
            />
            <TestimonialCard 
              stars={5}
              text="Finalmente uma ferramenta que não trava e entrega o que promete. O suporte é incrível."
              author="Lucas Vinicius"
              role="Agência de Growth"
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuBvGff9JiQkxoyMg6P4GN2hyMq0EWtF_4OEVYQNrWf51SwVe8jW-Fn5CULmZj553VahPj72kg31qpfQyfZv15tJyO4yetQ_9yWd2UJSlv4vCUg5lR_nTZ-BmAOw6T1Q4_C-tFiM6h6mNdkaH1I5-OdTf1OvgDYybUiHYdsSk1cNRFpbj41De0v_g0MgGsVTmJAhuVo9uKuLblOf4MKciZ6BAz_Yw5_jhu1E3WxrALk8sHeItb7BaNtIZS2ML6gOw1nsmNFf5X4SfQ"
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden bg-zinc-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">
            Pronto para <span className="font-serif italic text-primary underline underline-offset-8">vender mais?</span>
          </h2>
          <p className="text-zinc-400 text-xl mb-12 max-w-2xl mx-auto">
            Leve seu atendimento para outro nível. Entre para o grupo de elite que domina o WhatsApp Web.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-primary hover:scale-105 transition-all text-black px-12 py-5 rounded-2xl text-xl font-bold shadow-2xl shadow-primary/20">
              Começar Agora Grátis
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-zinc-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-primary rounded flex items-center justify-center text-black font-bold text-xs">Z</div>
            <span className="text-lg font-bold tracking-tighter text-zinc-900">ZAP<span className="font-serif italic text-primary">PREMIUM</span></span>
          </div>
          <p className="text-zinc-500 text-sm">© 2024 Zap Premium. Todos os direitos reservados.</p>
          <div className="flex gap-6 text-zinc-400 text-sm font-medium">
            <a className="hover:text-primary transition-colors" href="#">Termos</a>
            <a className="hover:text-primary transition-colors" href="#">Privacidade</a>
            <a className="hover:text-primary transition-colors" href="#">Contato</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description, badge, className, noGlass }: { icon: ReactNode, title: string, description: string, badge?: string, className?: string, noGlass?: boolean }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className={cn(
        !noGlass && "glass-panel",
        "p-8 rounded-2xl hover:border-primary/50 transition-all group h-full border", 
        className
      )}
    >
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-zinc-900 flex items-center gap-2">
        {title}
        {badge && <span className="text-[10px] bg-primary text-black px-2 py-0.5 rounded-full">{badge}</span>}
      </h3>
      <p className="text-zinc-500 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}

function PricingFeature({ text, active }: { text: string, active?: boolean }) {
  return (
    <li className={`flex items-center gap-3 ${active !== false ? 'text-inherit' : 'text-zinc-500 line-through opacity-50'}`}>
      <CheckCircle2 className={`w-5 h-5 ${active !== false ? 'text-primary' : 'text-zinc-700'}`} />
      <span>{text}</span>
    </li>
  );
}

function TestimonialCard({ stars, text, author, role, image, highlight }: { stars: number, text: string, author: string, role: string, image: string, highlight?: boolean }) {
  return (
    <div className={`glass-panel p-8 rounded-2xl ${highlight ? 'border-primary/30' : ''}`}>
      <div className="flex gap-1 text-primary mb-4">
        {Array.from({ length: stars }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-primary" />
        ))}
      </div>
      <p className="text-zinc-600 italic mb-8">"{text}"</p>
      <div className="flex items-center gap-4">
        <img 
          src={image} 
          alt={author} 
          className="w-12 h-12 rounded-full object-cover grayscale hover:grayscale-0 transition-all"
          referrerPolicy="no-referrer"
        />
        <div>
          <p className="font-bold text-zinc-900">{author}</p>
          <p className="text-xs text-zinc-500">{role}</p>
        </div>
      </div>
    </div>
  );
}
