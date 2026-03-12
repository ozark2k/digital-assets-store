import React, { useState } from 'react';
import { CheckCircle2, ShoppingCart, Plus, Minus } from 'lucide-react';
import './Products.css';

const products = [
  {
    id: 1,
    name: 'Conta TikTok Ads',
    description: 'Conta pronta para rodar suas campanhas sem bloqueios iniciais.',
    price: 'R$ 149,90',
    priceNum: 149.90,
    features: ['Agência / Sem limites', 'Aprovada e Pronta', 'Suporte à suspensão', 'Acesso via Login'],
    popular: true
  },
  {
    id: 2,
    name: 'BC França (Business Center)',
    description: 'Business Center do TikTok estabilizado na França.',
    price: 'R$ 299,00',
    priceNum: 299.00,
    features: ['Maior trust score', 'Ideal para conversão', 'Limite alto de gastos', 'Entrega Imediata']
  },
  {
    id: 3,
    name: 'BC Brasil (Business Center)',
    description: 'Business Center nacional ativo e com suporte local.',
    price: 'R$ 199,00',
    priceNum: 199.00,
    features: ['Cobrança em BRL', 'Cartões Nacionais', 'Sem IOF', 'Aquecida']
  },
  {
    id: 4,
    name: 'Perfil Facebook Restabelecido',
    description: 'Perfil farming antigo com identidade confirmada.',
    price: 'R$ 89,90',
    priceNum: 89.90,
    features: ['Identidade Confirmada', '+2 Anos de criação', 'Amigos reais', 'Cookies inclusos']
  }
];

export default function Products() {
  const [cart, setCart] = useState({});

  const updateQuantity = (id, delta) => {
    setCart((prev) => {
      const current = prev[id] || 0;
      const next = Math.max(0, current + delta);
      if (next === 0) {
        const { [id]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [id]: next };
    });
  };

  const calculateTotal = () => {
    let total = 0;
    let itemCount = 0;
    Object.entries(cart).forEach(([id, qty]) => {
      const product = products.find(p => p.id === parseInt(id));
      if (product) {
        total += product.priceNum * qty;
        itemCount += qty;
      }
    });
    return { total, itemCount };
  };

  const { total, itemCount } = calculateTotal();

  const handleCheckout = () => {
    alert('Abrindo modal do Mercado Pago via API...');
  };

  return (
    <section id="produtos" className="products-section">
      <div className="container">
        <h2 className="section-title">Escolha seu Ativo</h2>
        <p className="section-subtitle">Garantia de reposição e entrega 100% automática após o Pix.</p>

        <div className="products-list">
          {products.map((product) => {
            const qty = cart[product.id] || 0;
            return (
            <div key={product.id} className={`product-list-item glass ${qty > 0 ? 'selected' : ''}`}>
              <div className="product-info">
                <h3>{product.name} {product.popular && <span className="badge-inline">Mais Vendido</span>}</h3>
                <p className="description">{product.description}</p>
                <span className="price">{product.price}</span>
              </div>

              <div className="product-actions-list">
                {qty > 0 ? (
                  <div className="quantity-selector-inline">
                    <button className="qty-btn" onClick={() => updateQuantity(product.id, -1)}>
                      <Minus size={16} />
                    </button>
                    <span className="qty-value">{qty}</span>
                    <button className="qty-btn" onClick={() => updateQuantity(product.id, 1)}>
                      <Plus size={16} />
                    </button>
                  </div>
                ) : (
                  <button className="btn-add-inline" onClick={() => updateQuantity(product.id, 1)}>
                    + ADICIONAR
                  </button>
                )}
              </div>
            </div>
            );
          })}
        </div>
      </div>

      {itemCount > 0 && (
        <div className="checkout-bar-wrapper">
          <div className="checkout-bar container">
            <div className="checkout-info">
              <span className="checkout-items">
                <ShoppingCart size={20} />
                {itemCount} {itemCount === 1 ? 'ativo' : 'ativos'}
              </span>
              <span className="checkout-total">
                {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total)}
              </span>
            </div>
            <button className="btn-checkout" onClick={handleCheckout}>
              Ir para o Pagamento
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
