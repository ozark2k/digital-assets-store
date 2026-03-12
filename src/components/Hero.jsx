import React from 'react';
import { ChevronRight, ShieldCheck } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        
        <div className="badge animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <ShieldCheck size={14} style={{ marginRight: 6, display: 'inline' }} />
          Qualidade Garantida e Suporte Especializado
        </div>

        <h1 className="hero-title animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Escale sua Operação com <br />
          <span className="text-gradient">Ativos Premium</span>
        </h1>
        
        <p className="hero-subtitle animate-slide-up" style={{ animationDelay: '0.3s' }}>
          As melhores Contas TikTok Ads, BMs do Brasil e França, e Perfis de Facebook do mercado. 
          Entrega automática e imediata após o pagamento via Pix.
        </p>

        <div className="hero-actions animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <button className="btn-primary" onClick={() => document.getElementById('produtos').scrollIntoView({ behavior: 'smooth' })}>
            Ver Produtos
            <ChevronRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
}
