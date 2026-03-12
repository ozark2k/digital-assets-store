import React from 'react';
import { ShoppingCart } from 'lucide-react';
import './Products.css';

const products = [
  {
    id: 1,
    name: 'Conta TikTok Ads (Agência)',
    description: 'Aprovada e Pronta, sem limites. Suporte à suspensão.',
    price: 'R$ 149,90',
    popular: true
  },
  {
    id: 2,
    name: 'BC França (Business Center)',
    description: 'Maior trust score. Ideal para conversão.',
    price: 'R$ 299,00'
  },
  {
    id: 3,
    name: 'BC Brasil (Business Center)',
    description: 'Cartões Nacionais e sem IOF.',
    price: 'R$ 199,00'
  },
  {
    id: 4,
    name: 'Perfil Facebook Restabelecido',
    description: 'Identidade confirmada, +2 anos de criação.',
    price: 'R$ 89,90'
  }
];

export default function Products() {
  const handleBuy = (productName) => {
    alert(`Iniciando transação Pix para: ${productName}`);
  };

  return (
    <section id="produtos" className="products-section">
      <div className="container">
        <h2 className="section-title">Escolha seu Ativo</h2>
        <p className="section-subtitle">Garantia de reposição e entrega 100% automática após o Pix.</p>

        <div className="products-list">
          {products.map((product) => (
            <div key={product.id} className="product-list-item glass">
              <div className="product-info">
                <h3>{product.name} {product.popular && <span className="badge-inline">Mais Vendido</span>}</h3>
                <p className="description">{product.description}</p>
                <span className="price">{product.price}</span>
              </div>

              <div className="product-actions-list">
                <button className="btn-buy-simple" onClick={() => handleBuy(product.name)}>
                  Comprar Agora
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
