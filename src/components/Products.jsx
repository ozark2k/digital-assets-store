import React from 'react';
import { CheckCircle2, ShoppingCart } from 'lucide-react';
import './Products.css';

const products = [
  {
    id: 1,
    name: 'Conta TikTok Ads',
    description: 'Conta pronta para rodar suas campanhas sem bloqueios iniciais.',
    price: 'R$ 149,90',
    features: ['Agência / Sem limites', 'Aprovada e Pronta', 'Suporte à suspensão', 'Acesso via Login'],
    popular: true
  },
  {
    id: 2,
    name: 'BC França (Business Center)',
    description: 'Business Center do TikTok estabilizado na França.',
    price: 'R$ 299,00',
    features: ['Maior trust score', 'Ideal para conversão', 'Limite alto de gastos', 'Entrega Imediata']
  },
  {
    id: 3,
    name: 'BC Brasil (Business Center)',
    description: 'Business Center nacional ativo e com suporte local.',
    price: 'R$ 199,00',
    features: ['Cobrança em BRL', 'Cartões Nacionais', 'Sem IOF', 'Aquecida']
  },
  {
    id: 4,
    name: 'Perfil Facebook Restabelecido',
    description: 'Perfil farming antigo com identidade confirmada.',
    price: 'R$ 89,90',
    features: ['Identidade Confirmada', '+2 Anos de criação', 'Amigos reais', 'Cookies inclusos']
  }
];

export default function Products() {
  const handleBuy = (productName) => {
    alert(`Iniciando checkout Pix para: ${productName}. Em breve integração com Mercado Pago!`);
  };

  return (
    <section id="produtos" className="products-section">
      <div className="container">
        <h2 className="section-title">Escolha seu Ativo</h2>
        <p className="section-subtitle">Garantia de reposição e entrega 100% automática após o Pix.</p>

        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className={`product-card glass ${product.popular ? 'popular' : ''}`}>
              {product.popular && <div className="popular-badge">Mais Vendido</div>}
              
              <div className="product-header">
                <h3>{product.name}</h3>
                <p className="description">{product.description}</p>
              </div>
              
              <div className="product-price">
                <span className="price">{product.price}</span>
              </div>

              <ul className="features-list">
                {product.features.map((feature, idx) => (
                  <li key={idx}>
                    <CheckCircle2 size={16} className="check-icon" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="btn-buy" onClick={() => handleBuy(product.name)}>
                <ShoppingCart size={18} />
                Comprar Agora
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
