// Dados dos produtos. Cada item inclui nome, concentração e preço final já reajustado.
const products = [
  {
    id: 1,
    name: 'Ozempic',
    concentration: '4 ML (15MG)',
    price: 1100,
    description:
      'Semaglutide injection (Ozempic) helps control blood sugar in type 2 diabetes, reduces risks of heart attack and stroke, aids weight loss, and slows stomach emptying to decrease appetite.'
  },
  {
    id: 2,
    name: 'Monjauro',
    concentration: '3 ML (10MG)',
    price: 1400,
    description:
      'Tirzepatide is a dual GLP‑1 and GIP receptor agonist approved for type 2 diabetes; once‑weekly injections improve glycemic control and produce significant weight loss.'
  },
  {
    id: 3,
    name: 'Monjauro',
    concentration: '3 ML (30MG)',
    price: 2000,
    description:
      'Tirzepatide is a dual GLP‑1 and GIP receptor agonist approved for type 2 diabetes; once‑weekly injections improve glycemic control and produce significant weight loss.'
  },
  {
    id: 4,
    name: 'Retatrutida',
    concentration: '3 ML (15MG)',
    price: 2400,
    description:
      'Retatrutide is a triple agonist of GLP‑1, GIP and glucagon receptors; clinical trials show it causes significant weight loss, delays gastric emptying, reduces food intake and improves glycemic control.'
  },
  {
    id: 5,
    name: 'Lipo HD',
    concentration: '2X (15 ML)',
    price: 270,
    description:
      'Lipotropic injections combine nutrients like vitamin B12, choline, inositol, methionine and L‑carnitine; marketed for fat loss but research on effectiveness is limited, so they should complement diet and exercise.'
  },
  {
    id: 6,
    name: 'Lipo Reduxx',
    concentration: '2X (15 ML)',
    price: 330,
    description:
      'Lipotropic injections combine nutrients like vitamin B12, choline, inositol, methionine and L‑carnitine; marketed for fat loss but research on effectiveness is limited, so they should complement diet and exercise.'
  },
  {
    id: 7,
    name: 'Sibutramina',
    concentration: '30 CAPS (15MG)',
    price: 150,
    description:
      'Sibutramine is a serotonin and norepinephrine reuptake inhibitor that suppresses appetite for obesity therapy; it was withdrawn due to increased cardiovascular risk.'
  },
  {
    id: 8,
    name: 'Proviron',
    concentration: '30 CAPS (25MG)',
    price: 170,
    description:
      'Mesterolone supplements natural testosterone and is used to treat male hypogonadism and male infertility; it works like endogenous testosterone to improve symptoms related to low testosterone.'
  },
  {
    id: 9,
    name: 'Anastrozol',
    concentration: '28 CAPS (1MG)',
    price: 200,
    description:
      'Anastrozole is an aromatase inhibitor used as hormone therapy; it reversibly blocks aromatase to lower estrogen levels and slow estrogen‑dependent cancers.'
  },
  {
    id: 10,
    name: 'Tamoxifeno',
    concentration: '30 CAPS (10MG)',
    price: 150,
    description:
      'Tamoxifen citrate is a selective estrogen receptor modulator (SERM); it binds to estrogen receptors, blocking estrogen’s effects in breast tissue while mimicking them in bone.'
  },
  {
    id: 11,
    name: 'Enantato',
    concentration: '10ML (300MG)',
    price: 210,
    description:
      'Testosterone enanthate is a form of injectable testosterone used to treat low testosterone (hypogonadism). Testosterone injections raise testosterone levels but carry risks such as high blood pressure and heart problems.'
  },
  {
    id: 12,
    name: 'Durateston',
    concentration: '10ML (250MG)',
    price: 210,
    description:
      'Durateston is a blend of testosterone esters used in testosterone replacement therapy to treat low testosterone; as with other testosterone injections, it should only be used under medical supervision due to risks like high blood pressure and heart problems.'
  },
  {
    id: 13,
    name: 'Cipionato de Testo',
    concentration: '10ML (200MG)',
    price: 210,
    description:
      'Testosterone cypionate is an injectable solution prescribed to increase testosterone levels in males with hypogonadism; it replaces the testosterone that the body cannot produce and has similar risks to other testosterone injections.'
  },
  {
    id: 14,
    name: 'Propionato de Testo',
    concentration: '10ML (200MG)',
    price: 210,
    description:
      'Testosterone propionate is a short‑acting testosterone ester used to treat low testosterone; like other testosterone injections, it should be administered by healthcare professionals due to potential cardiovascular risks.'
  },
  {
    id: 15,
    name: 'Trembolona Acetato',
    concentration: '10ML (100MG)',
    price: 210,
    description:
      'Trenbolone acetate is an anabolic steroid originally used in veterinary medicine to increase muscle growth and appetite in livestock; it has been illicitly used by athletes to build body mass.'
  },
  {
    id: 16,
    name: 'Decanoato',
    concentration: '10ML (300MG)',
    price: 210,
    description:
      'Nandrolone decanoate is a synthetic anabolic steroid derived from testosterone; medically, it treats anemia and builds tissue but is misused by athletes to increase muscle mass. It should only be used under medical supervision due to serious side effects.'
  },
  {
    id: 17,
    name: 'Boldenona',
    concentration: '10ML (300MG)',
    price: 210,
    description:
      'Boldenone is an anabolic androgenic steroid developed for veterinary use; it stimulates protein synthesis and erythropoietin release and is illegally used to increase muscle mass, with no therapeutic use for humans.'
  },
  {
    id: 18,
    name: 'Masteron',
    concentration: '10ML (100MG)',
    price: 210,
    description:
      'Drostanolone is a potent synthetic androgenic steroid similar to testosterone; it is a schedule III controlled substance indicated for recurrent breast cancer therapy in postmenopausal women but often misused as an anabolic agent.'
  },
  {
    id: 19,
    name: 'Primobolan',
    concentration: '10ML (100MG)',
    price: 350,
    description:
      'Methenolone (Primobolan) is an anabolic steroid derived from dihydrotestosterone; it was prescribed for muscle loss after surgery, osteoporosis and breast cancer, and to promote weight gain in underweight infants. It has moderate anabolic effect and is banned in sports.'
  },
  {
    id: 20,
    name: 'Trembolona Enantato',
    concentration: '10ML (200MG)',
    price: 220,
    description:
      'Trenbolone enanthate is a longer‑acting form of trenbolone; like the acetate, it is used in veterinary medicine to increase muscle growth and appetite but has been misused by athletes.'
  },
  {
    id: 21,
    name: 'Stanozolol (Inj)',
    concentration: '30ML (50MG)',
    price: 210,
    description:
      'Stanozolol (Winstrol) is a synthetic anabolic steroid similar to testosterone. It is used to treat hereditary angioedema to reduce the frequency and severity of swelling attacks.'
  },
  {
    id: 22,
    name: 'Somatropina GH',
    concentration: '30ML (50MG)',
    price: 1560,
    description:
      'Somatropin (synthetic human growth hormone) is used to treat poor growth in children due to conditions such as Turner’s syndrome and chronic renal insufficiency and to treat AIDS‑associated wasting and growth hormone deficiency in adults. hGH regulates body composition and metabolism; misuse for muscle growth and fat loss is common.'
  },
  {
    id: 23,
    name: 'Dianabol (Inj)',
    concentration: '10ML (100MG)',
    price: 210,
    description:
      'Methandrostenolone (Dianabol) is an anabolic steroid developed in 1958; it increases protein synthesis and muscle strength but can cause side effects such as decreased red blood cell production and masculinizing effects. It has been banned but remains illegally produced.'
  },
  {
    id: 24,
    name: 'NPP',
    concentration: '10ML (100MG)',
    price: 210,
    description:
      'Nandrolone phenylpropionate is a shorter‑acting form of nandrolone; like other nandrolone esters, it treats anemia and tissue‑wasting conditions but is misused by athletes for muscle gain.'
  },
  {
    id: 25,
    name: 'Oxandrolona',
    concentration: '10MG (100 CAPS)',
    price: 210,
    description:
      'Oxandrolone is an anabolic steroid used with a diet program to cause weight gain after surgery, injury, or infection; it also treats bone pain in osteoporosis and prevents side effects of long‑term corticosteroids by increasing protein production in the body.'
  },
  {
    id: 26,
    name: 'Oxandrolona',
    concentration: '20MG (100 CAPS)',
    price: 220,
    description:
      'Oxandrolone is an anabolic steroid used with a diet program to cause weight gain after surgery, injury, or infection; it also treats bone pain in osteoporosis and prevents side effects of long‑term corticosteroids by increasing protein production in the body.'
  },
  {
    id: 27,
    name: 'Hemogenin',
    concentration: '50MG (30 CAPS)',
    price: 210,
    description:
      'Oxymetholone (Hemogenin/Anadrol) is a steroid medication used to treat anemia by stimulating red blood cell production. It is banned for use by athletes.'
  },
  {
    id: 28,
    name: 'Stanozolol (Caps)',
    concentration: '10MG (100 CAPS)',
    price: 210,
    description:
      'Stanozolol (Winstrol) is a synthetic anabolic steroid similar to testosterone. It is used to treat hereditary angioedema to reduce the frequency and severity of swelling attacks.'
  },
  {
    id: 29,
    name: 'Dianabol (Caps)',
    concentration: '10MG (100 CAPS)',
    price: 210,
    description:
      'Methandrostenolone (Dianabol) is an anabolic steroid developed in 1958; it increases protein synthesis and muscle strength but can cause side effects such as decreased red blood cell production and masculinizing effects. It has been banned but remains illegally produced.'
  },
  {
    id: 30,
    name: 'Turinabol',
    concentration: '10MG (100 CAPS)',
    price: 220,
    description:
      'Turinabol (chlorodehydromethyltestosterone) is an anabolic steroid developed in the 1960s and used in systematic doping programs to enhance athletic performance; it increases muscle mass and strength but is illegal in competitive sports and carries significant health risks.'
  },
  {
    id: 31,
    name: 'Propionato de Testo (Caps)',
    concentration: '25MG (50 CAPS)',
    price: 220,
    description:
      'Testosterone propionate capsules are oral forms of testosterone; like injectable forms, they are used for testosterone replacement therapy but should be used under medical supervision due to cardiovascular risks.'
  },
  {
    id: 32,
    name: 'Vitafemme',
    concentration: '',
    price: 150,
    description:
      'VitaFemme is a health supplement designed for women; it combines essential vitamins and minerals such as vitamins A and E, zinc, and calcium to support immune function, bone health and protect against oxidative stress. It also includes biotin, iron and folate for healthy hair, skin, nails and normal blood formation.'
  }
];

// Número de telefone para receber pedidos. Substitua pelo seu número de WhatsApp no formato internacional sem espaços ou sinais (ex: 5521999999999).
const whatsappPhone = '5524992153810';

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
  lines.push('Obrigado por comprar com a Baixinha Pharma! Aguarde um momento que já vou atende-lo!');
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