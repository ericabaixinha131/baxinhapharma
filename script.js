// Dados dos produtos. Cada item inclui nome, concentração e preço final já reajustado.
const products = [
  {
    id: 1,
    name: 'Ozempic',
    concentration: '4 ML (15MG)',
    price: 1100,
    description:
      'Auxilia no controle da glicemia, promovendo mais equilíbrio no organismo. Também contribui para redução do apetite e apoio no emagrecimento.'
  },
  {
    id: 2,
    name: 'Monjauro',
    concentration: '3 ML (10MG)',
    price: 1400,
    description:
      'Produto moderno que auxilia no controle do açúcar no sangue e favorece a perda de peso de forma consistente, ajudando na saciedade.'
  },
  {
    id: 3,
    name: 'Monjauro',
    concentration: '3 ML (30MG)',
    price: 2000,
    description:
      'Produto moderno que auxilia no controle do açúcar no sangue e favorece a perda de peso de forma consistente, ajudando na saciedade.'
  },
  {
    id: 4,
    name: 'Retatrutida',
    concentration: '3 ML (15MG)',
    price: 2400,
    description:
      'Tecnologia avançada voltada para controle metabólico, auxiliando na redução de peso e melhora do funcionamento do organismo.'
  },
  {
    id: 5,
    name: 'Lipo HD',
    concentration: '2X (15 ML)',
    price: 270,
    description:
      'Fórmula lipotrópica que auxilia no metabolismo de gorduras, contribuindo para mais energia e definição corporal.'
  },
  {
    id: 6,
    name: 'Lipo Reduxx',
    concentration: '2X (15 ML)',
    price: 330,
    description:
      'Fórmula lipotrópica que auxilia no metabolismo de gorduras, contribuindo para mais energia e definição corporal.'
  },
  {
    id: 7,
    name: 'Sibutramina',
    concentration: '30 CAPS (15MG)',
    price: 150,
    description:
      'Auxilia no controle do apetite, ajudando na redução da ingestão alimentar e no processo de emagrecimento.'
  },
  {
    id: 8,
    name: 'Proviron',
    concentration: '30 CAPS (25MG)',
    price: 170,
    description:
      'Contribui para o equilíbrio hormonal masculino, auxiliando no desempenho físico e bem‑estar.'
  },
  {
    id: 9,
    name: 'Anastrozol',
    concentration: '28 CAPS (1MG)',
    price: 200,
    description:
      'Auxilia no controle hormonal, contribuindo para equilíbrio do organismo.'
  },
  {
    id: 10,
    name: 'Tamoxifeno',
    concentration: '30 CAPS (10MG)',
    price: 150,
    description:
      'Atua no equilíbrio hormonal, sendo utilizado em protocolos específicos para controle do estrogênio.'
  },
  {
    id: 11,
    name: 'Enantato',
    concentration: '10ML (300MG)',
    price: 210,
    description:
      'Contribui para aumento de força, disposição e desempenho físico.'
  },
  {
    id: 12,
    name: 'Durateston',
    concentration: '10ML (250MG)',
    price: 210,
    description:
      'Contribui para aumento de força, disposição e desempenho físico.'
  },
  {
    id: 13,
    name: 'Cipionato de Testo',
    concentration: '10ML (200MG)',
    price: 210,
    description:
      'Contribui para aumento de força, disposição e desempenho físico.'
  },
  {
    id: 14,
    name: 'Propionato de Testo',
    concentration: '10ML (200MG)',
    price: 210,
    description:
      'Contribui para aumento de força, disposição e desempenho físico.'
  },
  {
    id: 15,
    name: 'Trembolona Acetato',
    concentration: '10ML (100MG)',
    price: 210,
    description:
      'Produto voltado para ganho de massa muscular e definição, amplamente utilizado em protocolos avançados.'
  },
  {
    id: 16,
    name: 'Decanoato',
    concentration: '10ML (300MG)',
    price: 210,
    description:
      'Ajuda no crescimento muscular e recuperação, proporcionando aumento de força e performance.'
  },
  {
    id: 17,
    name: 'Boldenona',
    concentration: '10ML (300MG)',
    price: 210,
    description:
      'Promove o aumento de massa magra e força, sendo utilizado para definição e performance.'
  },
  {
    id: 18,
    name: 'Masteron',
    concentration: '10ML (100MG)',
    price: 210,
    description:
      'Produto voltado para ganho de massa muscular e definição, amplamente utilizado em protocolos avançados.'
  },
  {
    id: 19,
    name: 'Primobolan',
    concentration: '10ML (100MG)',
    price: 350,
    description:
      'Promove ganhos secos e definição, ideal para fases de cutting e manutenção da massa magra.'
  },
  {
    id: 20,
    name: 'Trembolona Enantato',
    concentration: '10ML (200MG)',
    price: 220,
    description:
      'Produto voltado para ganho de massa muscular e definição, amplamente utilizado em protocolos avançados.'
  },
  {
    id: 21,
    name: 'Stanozolol (Inj)',
    concentration: '30ML (50MG)',
    price: 210,
    description:
      'Auxilia no aumento de força e resistência, contribuindo para uma melhor performance física.'
  },
  {
    id: 22,
    name: 'Somatropina GH',
    concentration: '30ML (50MG)',
    price: 1560,
    description:
      'Auxilia na recuperação muscular, melhora da composição corporal e desempenho físico.'
  },
  {
    id: 23,
    name: 'Dianabol (Inj)',
    concentration: '10ML (100MG)',
    price: 210,
    description:
      'Contribui para aumento de massa muscular e melhora da performance.'
  },
  {
    id: 24,
    name: 'NPP',
    concentration: '10ML (100MG)',
    price: 210,
    description:
      'Contribui para crescimento muscular e recuperação rápida, auxiliando na força e performance.'
  },
  {
    id: 25,
    name: 'Oxandrolona',
    concentration: '10MG (100 CAPS)',
    price: 210,
    description:
      'Contribui para ganho de massa muscular magra e desempenho físico.'
  },
  {
    id: 26,
    name: 'Oxandrolona',
    concentration: '20MG (100 CAPS)',
    price: 220,
    description:
      'Contribui para ganho de massa muscular magra e desempenho físico.'
  },
  {
    id: 27,
    name: 'Hemogenin',
    concentration: '50MG (30 CAPS)',
    price: 210,
    description:
      'Contribui para aumento de massa muscular e força, sendo utilizado para ganhos rápidos.'
  },
  {
    id: 28,
    name: 'Stanozolol (Caps)',
    concentration: '10MG (100 CAPS)',
    price: 210,
    description:
      'Auxilia no aumento de força e resistência, contribuindo para uma melhor performance física.'
  },
  {
    id: 29,
    name: 'Dianabol (Caps)',
    concentration: '10MG (100 CAPS)',
    price: 210,
    description:
      'Contribui para aumento de massa muscular e melhora da performance.'
  },
  {
    id: 30,
    name: 'Turinabol',
    concentration: '10MG (100 CAPS)',
    price: 220,
    description:
      'Contribui para ganhos consistentes de massa muscular e força, com menor retenção hídrica.'
  },
  {
    id: 31,
    name: 'Propionato de Testo (Caps)',
    concentration: '25MG (50 CAPS)',
    price: 220,
    description:
      'Contribui para aumento de força, disposição e desempenho físico.'
  },
  {
    id: 32,
    name: 'Vitafemme',
    concentration: '',
    price: 150,
    description:
      'Suplemento completo com vitaminas e minerais essenciais para saúde, energia e bem‑estar feminino.'
  }
];

// Número de telefone para receber pedidos. Substitua pelo seu número de WhatsApp no formato internacional sem espaços ou sinais (ex: 5521999999999).
const whatsappPhone = '5521999999999';

// Elementos da página
const productListEl = document.getElementById('product-list');
const modalEl = document.getElementById('order-modal');
const closeModalEl = document.getElementById('close-modal');
const modalProductNameEl = document.getElementById('modal-product-name');
const modalProductInfoEl = document.getElementById('modal-product-info');
const modalProductDescriptionEl = document.getElementById('modal-product-description');
const quantityInput = document.getElementById('quantity');
const paymentSelect = document.getElementById('payment-method');
const orderForm = document.getElementById('order-form');

let selectedProduct = null;

// Função para formatar valor em reais
function formatPrice(value) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// Função para renderizar produtos
function renderProducts() {
  products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'card';

    const title = document.createElement('h3');
    title.textContent = product.name;
    card.appendChild(title);

    if (product.concentration) {
      const conc = document.createElement('p');
      conc.textContent = product.concentration;
      card.appendChild(conc);
    }

    const price = document.createElement('p');
    price.className = 'price';
    price.textContent = formatPrice(product.price);
    card.appendChild(price);

    // Description truncated for card view
    if (product.description) {
      const desc = document.createElement('p');
      desc.className = 'desc';
      const maxLength = 120;
      const text = product.description;
      desc.textContent = text.length > maxLength ? text.substring(0, maxLength) + '…' : text;
      card.appendChild(desc);
    }

    const btn = document.createElement('button');
    btn.className = 'buy-button';
    btn.textContent = 'Comprar';
    btn.addEventListener('click', () => openModal(product));
    card.appendChild(btn);

    productListEl.appendChild(card);
  });
}

// Abrir modal com informações do produto selecionado
function openModal(product) {
  selectedProduct = product;
  modalProductNameEl.textContent = product.name;
  modalProductInfoEl.textContent = product.concentration ? product.concentration : '';
  modalProductDescriptionEl.textContent = product.description ? product.description : '';
  quantityInput.value = 1;
  paymentSelect.selectedIndex = 0;
  modalEl.classList.remove('hidden');
}

// Fechar modal
function closeModal() {
  modalEl.classList.add('hidden');
  selectedProduct = null;
}

// Construir mensagem para WhatsApp
function buildWhatsAppMessage(product, quantity, paymentMethod) {
  const unitPrice = product.price;
  const total = unitPrice * quantity;
  const lines = [];
  lines.push(`Pedido: ${product.name}`);
  if (product.concentration) {
    lines.push(`Concentração: ${product.concentration}`);
  }
  lines.push(`Quantidade: ${quantity}`);
  lines.push(`Valor unitário: ${formatPrice(unitPrice)}`);
  lines.push(`Valor total: ${formatPrice(total)}`);
  lines.push(`Forma de pagamento: ${paymentMethod}`);
  lines.push('Obrigado por comprar com a Baixinha Pharma!');
  return lines.join('\n');
}

// Enviar pedido via WhatsApp
function sendOrder(event) {
  event.preventDefault();
  if (!selectedProduct) return;
  const quantity = parseInt(quantityInput.value, 10);
  const paymentMethod = paymentSelect.value;
  const message = buildWhatsAppMessage(selectedProduct, quantity, paymentMethod);
  const url = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`;
  // Abrir nova janela/aba para enviar mensagem
  window.open(url, '_blank');
  closeModal();
}

// Eventos
closeModalEl.addEventListener('click', closeModal);
orderForm.addEventListener('submit', sendOrder);

// Renderizar produtos ao carregar
renderProducts();