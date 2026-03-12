import React from 'react';
import { Zap, Shield, Headset, RefreshCw } from 'lucide-react';
import './Benefits.css';

const benefits = [
  {
    icon: <Zap size={32} />,
    title: 'Entrega Instantânea',
    description: 'Após a confirmação do Pix, o ativo é liberado automaticamente na sua tela.'
  },
  {
    icon: <Shield size={32} />,
    title: 'Qualidade Premium',
    description: 'Contas altamente aquecidas e validadas, reduzindo risco de restrições.'
  }
];

export default function Benefits() {
  return (
    <section className="benefits-section">
      <div className="container">
        <div className="benefits-grid">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="benefit-card">
              <div className="icon-wrapper">
                {benefit.icon}
              </div>
              <h4 className="benefit-title">{benefit.title}</h4>
              <p className="benefit-description">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
