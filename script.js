const menuItems = [
  { id: 'ragi-idly', name: { en: 'Ragi Idly', te: 'రాగి ఇడ్లీ' }, price: 45, image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=900&q=80' },
  { id: 'ragi-upma', name: { en: 'Ragi Upma', te: 'రాగి ఉప్మా' }, price: 45, image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=80' },
  { id: 'chaddannam', name: { en: 'Chaddannam', te: 'చత్తడ్నం' }, price: 45, image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=80' },
  { id: 'korra-pongal', name: { en: 'Korra Pongal', te: 'కొర్రా పంగాళ్' }, price: 45, image: 'https://images.unsplash.com/photo-1617093727343-374698b1b08d?auto=format&fit=crop&w=900&q=80' },
  { id: 'ragi-sankati', name: { en: 'Ragi Sankati', te: 'రాగి సంకటి' }, price: 45, image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=900&q=80' },
  { id: 'ragi-sankati-chicken', name: { en: 'Ragi Sankati Chicken', te: 'రాగి సంకటి చికెన్' }, price: 80, image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=80' },
  { id: 'millet-mix', name: { en: 'Millet Mix', te: 'మిలెట్ మిక్స్' }, price: 50, image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=900&q=80' },
  { id: 'ragi-java-salt', name: { en: 'Ragi Java Salt', te: 'రాగి జావా ఉప్పు' }, price: 20, image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80' },
  { id: 'ragi-java-sweet', name: { en: 'Ragi Java Sweet', te: 'రాగి జావా మిఠాయి' }, price: 20, image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=900&q=80' }
];

const translations = {
  en: {
    brand: 'Ragi Ruchulu',
    brandTe: 'రాగి రుచులు',
    homeNav: 'Home',
    menuNav: 'Our Menu',
    aboutNav: 'About Us',
    milletsNav: 'Why Millets?',
    galleryNav: 'Gallery',
    contactNav: 'Contact & Location',
    freshBreakfast: 'Traditional breakfast made fresh',
    heroTitle: 'Authentic millet breakfast in Jadcherla',
    heroLead: 'Ragi Ruchulu brings warm, comforting morning meals inspired by Telangana traditions. Freshly prepared every day with simple ingredients and a homestyle touch.',
    viewMenu: 'View Menu',
    orderWhatsApp: 'Order on WhatsApp',
    hoursLabel: 'Opening hours',
    hoursValue: 'Mon–Sat: 6:30 AM–11:30 AM',
    closedLabel: 'Sunday',
    closedValue: 'Closed',
    popularMenu: 'Popular menu',
    popularTitle: 'Breakfast favourites',
    menuIdlyName: 'Ragi Idly',
    menuIdlyPrice: '₹45',
    menuUpmaName: 'Ragi Upma',
    menuUpmaPrice: '₹45',
    menuChaddannamName: 'Chaddannam',
    menuChaddannamPrice: '₹45',
    menuKorraName: 'Korra Pongal',
    menuKorraPrice: '₹45',
    exploreMenu: 'Explore full menu',
    whyUsLabel: 'Why locals love us',
    whyUsTitle: 'A simple breakfast stop with a local feel',
    whyList1: 'Fresh, home-style breakfast prepared daily.',
    whyList2: 'Traditional millet dishes served at affordable prices.',
    whyList3: 'Easy WhatsApp and phone ordering for busy mornings.',
    whyList4: 'Convenient pickup and nearby local delivery options.',
    visitUs: 'Visit us',
    locationTitle: 'In front of Govt. ZPHS Boys High School, Erra Satyam Bus Stop, Jadcherla',
    viewLocation: 'See location',
    callNow: 'Call now',
    footerText: 'Traditional breakfast for busy mornings in Jadcherla.',
    contactFooter: 'Contact',
    hoursFooter: 'Opening hours',
    hoursFooterValue: 'Mon–Sat: 6:30 AM–11:30 AM',
    sundayFooterValue: 'Sunday: Closed',
    copyright: '© 2026 Ragi Ruchulu. All rights reserved.',
    feature1Title: 'Traditional taste',
    feature1Text: 'Comforting breakfast favourites inspired by everyday Telangana kitchen traditions.',
    feature2Title: 'Fresh each morning',
    feature2Text: 'Prepared in small batches, served fresh from morning till 11:30 AM.',
    feature3Title: 'Local and convenient',
    feature3Text: 'Easy ordering by phone or WhatsApp, with convenient pickup and delivery options.',
    menuPageLabel: 'Fresh breakfast menu',
    menuPageTitle: 'Our Menu',
    cartTitle: 'Your order',
    subtotalLabel: 'Subtotal',
    parcelLabel: 'Parcel (+₹5)',
    grandTotalLabel: 'Estimated total',
    nameLabel: 'Name',
    phoneLabel: 'Phone number',
    orderTypeLabel: 'Order type',
    pickupOption: 'Stall pickup',
    deliveryOption: 'Local delivery',
    addressLabel: 'Delivery address',
    deliveryNote: 'Delivery charges are confirmed manually by the business.',
    checkoutBtn: 'Send order on WhatsApp',
    aboutPageLabel: 'Our story',
    aboutPageTitle: 'About Us',
    aboutParagraph1: 'Ragi Ruchulu is a local breakfast brand serving warm, familiar millet dishes in Jadcherla, Telangana. We focus on simple preparation, honest ingredients, and a welcoming morning experience.',
    aboutParagraph2: 'Our breakfast stall is built around traditional taste, regular service, and timely preparation. We serve customers during the busy early morning hours and make it easy to order by phone or WhatsApp.',
    aboutParagraph3: 'Whether you are stopping for a quick breakfast or ordering for your family, our goal is to make healthy, filling millet meals accessible and easy to enjoy.',
    aboutValue1Title: 'Local roots',
    aboutValue1Text: 'A neighbourhood breakfast spot that reflects Telangana flavours and daily routines.',
    aboutValue2Title: 'Fresh service',
    aboutValue2Text: 'Prepared fresh in the morning and served promptly during opening hours.',
    aboutValue3Title: 'Simple ordering',
    aboutValue3Text: 'Quick WhatsApp and phone ordering for pickup and local delivery.',
    milletsPageLabel: 'A traditional staple',
    milletsPageTitle: 'Why Millets?',
    milletIntro: 'Millets have long been part of household cooking traditions across India, including regions where breakfast dishes are built around local grains and staples.',
    milletText1: 'They are a familiar choice for simple, filling meals that suit busy mornings and everyday routines. Many people enjoy millet-based breakfast dishes for their comforting texture and traditional taste.',
    milletText2: 'At Ragi Ruchulu, we celebrate that tradition by offering ragi-based breakfast favourites in forms that feel fresh, familiar, and convenient to order.',
    milletFeature1Title: 'Traditional',
    milletFeature1Text: 'A familiar grain used in everyday regional breakfast traditions.',
    milletFeature2Title: 'Comforting',
    milletFeature2Text: 'Warm, satisfying dishes that are easy to enjoy at the start of the day.',
    milletFeature3Title: 'Practical',
    milletFeature3Text: 'A reliable breakfast option for local families, students, and workers.',
    galleryPageLabel: 'Moments from our kitchen',
    galleryPageTitle: 'Gallery',
    contactPageLabel: 'Visit or order',
    contactPageTitle: 'Contact & Location',
    contactBusinessTitle: 'Ragi Ruchulu',
    locationLabel: 'Location:',
    locationValue: 'In front of Govt. ZPHS Boys High School, Erra Satyam Bus Stop, Jadcherla, Telangana, India',
    phoneLabel: 'Phone:',
    whatsappLabel: 'WhatsApp:',
    sundayLabel: 'Sunday:',
    sundayValue: 'Closed',
    emptyCart: 'Your cart is empty. Add a breakfast item to begin your order.'
  },
  te: {
    brand: 'రాగి రుచులు',
    brandTe: 'రాగి రుచులు',
    homeNav: 'హోమ్',
    menuNav: 'మెనూ',
    aboutNav: 'మా గురించి',
    milletsNav: 'మిల్లెట్లు ఎందుకు?',
    galleryNav: 'గ్యాలరీ',
    contactNav: 'సంప్రదించండి',
    freshBreakfast: 'తాజాగా చేసిన సాంప్రిక అల్పాహారం',
    heroTitle: 'జద్చెర్లలో సంప్రదాయ రాగి అల్పాహారం',
    heroLead: 'రాగి రుచులు తెలంగాణ సాంప్రాయిక రుచులతో పాటు గేమ్ చేసుకునే పొద్దుపొడవున సౌకర్యవంతమైన అల్పాహారాన్ని అందిస్తుంది.',
    viewMenu: 'మెనూ చూడండి',
    orderWhatsApp: 'వాట్స్అప్లో ఆర్డర్ చేయండి',
    hoursLabel: 'తెరువు సమయం',
    hoursValue: 'మో–శని: 6:30 AM–11:30 AM',
    closedLabel: 'ఆదివారం',
    closedValue: 'మూసివేయబడింది',
    popularMenu: 'పాపులర్ మెను',
    popularTitle: 'జనాదరణ పొందిన అల్పాహారాలు',
    menuIdlyName: 'రాగి ఇడ్లీ',
    menuIdlyPrice: '₹45',
    menuUpmaName: 'రాగి ఉప్మా',
    menuUpmaPrice: '₹45',
    menuChaddannamName: 'చత్తడ్నం',
    menuChaddannamPrice: '₹45',
    menuKorraName: 'కొర్రా పంగాళ్',
    menuKorraPrice: '₹45',
    exploreMenu: 'పూర్తి మెనూ చూడండి',
    whyUsLabel: 'ప్రజలు ఎందుకు ఇష్���పడతారు',
    whyUsTitle: 'స్థానిక వాసులకు సరైన అల్పాహారం',
    whyList1: 'రోజూ తాజాగా తయారు చేసిన ఇంటివంటి అల్పాహారం.',
    whyList2: 'సరసమైన ధరలలో సంప్రదాయ మిల్లెట్ ఆహారాలు.',
    whyList3: 'వాట్స్అప్ మరియు ఫోన్ ఆర్డర్ సౌలభ్యం.',
    whyList4: 'పికప్ మరియు స్థానిక డెలివరీ ఎంపికలు.',
    visitUs: 'మా వద్దికి రండి',
    locationTitle: 'గవర్నమెంట్ జె.పి.హెచ్.ఎస్ బాయ్స్ హై స్కూల్ ముందు, ఎర్ర సత్యం బస్ స్టాప్, జడ్చెర్ల',
    viewLocation: 'స్థానాన్ని చూడండి',
    callNow: 'ఇప్పుడే కాల్ చేయండి',
    footerText: 'జడ్చెర్లలో త్వరిత అల్పాహారం.',
    contactFooter: 'సంప్రదించండి',
    hoursFooter: 'తెరువు సమయం',
    hoursFooterValue: 'మో–శని: 6:30 AM–11:30 AM',
    sundayFooterValue: 'ఆదివారం: మూసివేసారు',
    copyright: '© 2026 రాగి రుచులు. అన్ని హక్కులు ప్రత్యేకమైనవి.',
    feature1Title: 'సాంప్రదాయక రుచి',
    feature1Text: 'ప్రతివారూ తెలంగాణ ఇంటి వంటల నుండి వచ్చిన అల్పాహారాలు.',
    feature2Title: 'రోజూ ప్రశాంతంగా',
    feature2Text: 'రోజంతా తాజాగా తయారు చేసిన అల్పాహారం.',
    feature3Title: 'స్థానికత మరియు సౌలభ్యం',
    feature3Text: 'ఫోన్ లేదా వాల్‌స్అప్తో ఆర్డరింగ్, పికప్ మరియు డెలివరీ చేయడం.',
    menuPageLabel: 'తాజా అల్పాహారం మెను',
    menuPageTitle: 'మా మెనూ',
    cartTitle: 'మీ ఆర్డర్',
    subtotalLabel: 'సబ్టోటల్',
    parcelLabel: 'పార్సెల్ (+₹5)',
    grandTotalLabel: 'అంచనా మొత్తం',
    nameLabel: 'పేరు',
    phoneLabel: 'ఫోన్ నంబర్',
    orderTypeLabel: 'ఆర్డర్ రకం',
    pickupOption: 'స్టాల్ పికప్',
    deliveryOption: 'స్థానిక డెలివరీ',
    addressLabel: 'డెలివరీ చిరునామా',
    deliveryNote: 'డెలివరీ ఛార్జీలు వాణిజ్య సంస్థ ద్వారా మాన్యువల్గా నిర్ధారించబడతాయి.',
    checkoutBtn: 'వాట్స్అప్లో ఆర్డర్ పంపండి',
    aboutPageLabel: 'మా కథ',
    aboutPageTitle: 'మా గురించి',
    aboutParagraph1: 'రాగి రుచులు జడ్చెర్లలో స్థానిక అల్పాహారాన్ని అందిస్తుంది. సరళమైన వంట, నమ్మకమైన పదార్థాలు మరియు ఆహ్లాదకరమైన ఉదయం అనుభవం మన లక్ష్యం.',
    aboutParagraph2: 'మా అల్పాహార స్టాల్ సంప్రదాయ రుచులు, నియమిత సేవ మరియు సమయానుకూల తయారీపై ఆధారపడింది. ఉదయం వేళల్లో ఫోన్ లేదా వాట్స్అప్ ద్వారా ఆర్డర్ చేయవచ్చు.',
    aboutParagraph3: 'త్వరిత అల్పాహారం కోసం లేదా కుటుంబం కోసం ఆర్డర్ చేయాలనుకున్నా, మిల్లెట్ ఆహారాన్ని చేరువచేయడం మా లక్ష్యం.',
    aboutValue1Title: 'స్థానిక ఔచిత్యం',
    aboutValue1Text: 'తెలంగాణ రుచి మరియు రోజువారీ వాతావరణం ప్రతిఫలించే స్థానిక స్టాప్.',
    aboutValue2Title: 'తాజా సేవ',
    aboutValue2Text: 'ఉదయం సమయంలో తాజాగా తయారు చేసి, సమయానుకూలంగా అందిస్తాము.',
    aboutValue3Title: 'సులభ ఆర్డర్',
    aboutValue3Text: 'వాట్స్అప్ మరియు ఫోన్ ద్వారా పికప్ లేదా డెలివరీ ఆర్డర్ చేయవచ్చు.',
    milletsPageLabel: 'సంప్రదాయమైన ప్రధాన ఆహారం',
    milletsPageTitle: 'మిల్లెట్లు ఎందుకు?',
    milletIntro: 'మిల్లెట్లు భారతదేశంలో బంధుమిత్రమైన ఇంటి వంటలలోనికి చెందినవి. అల్పాహారానికి మంచి పోషక ఆహారం.',
    milletText1: 'చాలా మంది బిజీ ఉదయాల్లో సులభంగా, నిండుగా మరియు సాధారణంగా ఇష్టపడతారు. మిల్లెట్ ఆధారిత అల్పాహారాలు ఆహ్లాదకరంగా ఉంటాయి.',
    milletText2: 'రాగి రుచులులో మేము రాగి ఆధారిత అల్పాహారాలు మృదువుగా మరియు సౌకర్యంగా అందిస్తాము.',
    milletFeature1Title: 'సాంప్రదాయ',
    milletFeature1Text: 'రోజువారీ అల్పాహారాల కోసం వాడే familiar grain.',
    milletFeature2Title: 'ఆహ్లాదకరం',
    milletFeature2Text: 'ఉదయం ప్రారంభంలో తీపి, తేమతో కూడిన వంటలు.',
    milletFeature3Title: 'సౌలభ్యం',
    milletFeature3Text: 'స్థానిక కుటుంబాలు, విద్యార్థులు, ఉద్యోగులకు సులభమైన ఎంపిక.',
    galleryPageLabel: 'మా వంట గది నుండి',
    galleryPageTitle: 'గ్యాలరీ',
    contactPageLabel: 'వచ్చి ఆర్డర్ చేయండి',
    contactPageTitle: 'సంప్రదించండి & స్థానము',
    contactBusinessTitle: 'రాగి రుచులు',
    locationLabel: 'స్థానము:',
    locationValue: 'గవర్నమెంట్ జె.పి.హెచ్.ఎస్ బాయ్స్ హై స్కూల్ ముందు, ఎర్ర సత్యం బస్ స్టాప్, జడ్చెర్ల, తెలంగాణ, భారత్',
    phoneLabel: 'ఫోన్:',
    whatsappLabel: 'వాట్స్అప్:',
    sundayLabel: 'ఆదివారం:',
    sundayValue: 'మూసివేయబడింది',
    emptyCart: 'మీ కార్ట్ ఖాళీగా ఉంది. ఆహారాన్ని జోడించి ఆర్డర్ ప్రారంభించండి.'
  }
};

const cart = {};
let activeLanguage = 'en';

function initLanguage() {
  const saved = localStorage.getItem('ragiRuchuluLang');
  if (saved === 'te' || saved === 'en') activeLanguage = saved;
  setLanguage(activeLanguage);

  document.querySelectorAll('.lang-btn').forEach((button) => {
    button.addEventListener('click', () => {
      const nextLang = button.dataset.lang;
      setLanguage(nextLang);
    });
  });
}

function setLanguage(lang) {
  activeLanguage = lang;
  localStorage.setItem('ragiRuchuluLang', lang);
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll('.lang-btn').forEach((button) => {
    const isActive = button.dataset.lang === lang;
    button.classList.toggle('active', isActive);
  });

  if (document.body.dataset.page === 'menu') {
    renderMenu();
    renderCart();
  }
}

function renderMenu() {
  const menuGrid = document.getElementById('menuGrid');
  if (!menuGrid) return;

  menuGrid.innerHTML = menuItems.map((item) => {
    const label = item.name[activeLanguage] || item.name.en;
    const qty = cart[item.id] || 0;
    return `
      <article class="menu-item-card">
        <img src="${item.image}" alt="${label}" />
        <div class="menu-item-meta">
          <h3>${label}</h3>
          <span>₹${item.price}</span>
        </div>
        <div class="menu-item-meta">
          <button class="qty-btn" data-action="decrease" data-id="${item.id}" aria-label="Decrease quantity">−</button>
          <strong>${qty}</strong>
          <button class="qty-btn" data-action="increase" data-id="${item.id}" aria-label="Increase quantity">＋</button>
        </div>
      </article>
    `;
  }).join('');

  menuGrid.querySelectorAll('.qty-btn').forEach((button) => {
    button.addEventListener('click', () => {
      const { action, id } = button.dataset;
      if (action === 'increase') updateCartItem(id, 1);
      if (action === 'decrease') updateCartItem(id, -1);
    });
  });
}

function updateCartItem(id, delta) {
  const nextQty = (cart[id] || 0) + delta;
  if (nextQty <= 0) {
    delete cart[id];
  } else {
    cart[id] = nextQty;
  }
  renderMenu();
  renderCart();
}

function renderCart() {
  const cartItems = document.getElementById('cartItems');
  if (!cartItems) return;

  const entries = menuItems.filter((item) => cart[item.id]);

  if (!entries.length) {
    cartItems.innerHTML = `<div class="empty-cart">${translations[activeLanguage].emptyCart}</div>`;
  } else {
    const html = entries.map((item) => {
      const total = item.price * (cart[item.id] || 0);
      const label = item.name[activeLanguage] || item.name.en;
      return `
        <div class="cart-item">
          <div>
            <div class="cart-item-name">${label}</div>
            <small>₹${item.price} each</small>
          </div>
          <div class="cart-item-controls">
            <button class="qty-btn" data-action="decrease" data-id="${item.id}">−</button>
            <span>${cart[item.id]}</span>
            <button class="qty-btn" data-action="increase" data-id="${item.id}">＋</button>
          </div>
          <strong>₹${total}</strong>
        </div>
      `;
    }).join('');
    cartItems.innerHTML = html;
  }

  document.querySelectorAll('#cartItems .qty-btn').forEach((button) => {
    button.addEventListener('click', () => {
      const { action, id } = button.dataset;
      if (action === 'increase') updateCartItem(id, 1);
      if (action === 'decrease') updateCartItem(id, -1);
    });
  });

  const subtotalValue = document.getElementById('subtotalValue');
  const grandTotalValue = document.getElementById('grandTotalValue');
  const parcelToggle = document.getElementById('parcelToggle');

  let subtotal = entries.reduce((sum, item) => sum + item.price * (cart[item.id] || 0), 0);
  const parcelFee = parcelToggle && parcelToggle.checked && subtotal > 0 ? 5 : 0;
  const total = subtotal + parcelFee;

  if (subtotalValue) subtotalValue.textContent = `₹${subtotal}`;
  if (grandTotalValue) grandTotalValue.textContent = `₹${total}`;

  if (parcelToggle) {
    parcelToggle.onchange = () => {
      renderCart();
    };
  }
}

function attachMenuPageHandlers() {
  const parcelToggle = document.getElementById('parcelToggle');
  const checkoutBtn = document.getElementById('checkoutBtn');

  if (parcelToggle) {
    parcelToggle.addEventListener('change', renderCart);
  }

  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      const customerName = document.getElementById('customerName')?.value?.trim() || 'Customer';
      const customerPhone = document.getElementById('customerPhone')?.value?.trim() || 'Not provided';
      const orderType = document.querySelector('input[name="orderType"]:checked')?.value || 'pickup';
      const deliveryAddress = document.getElementById('deliveryAddress')?.value?.trim() || 'Not provided';

      const entries = menuItems.filter((item) => cart[item.id]);
      if (!entries.length) {
        alert(translations[activeLanguage].emptyCart);
        return;
      }

      let subtotal = entries.reduce((sum, item) => sum + item.price * (cart[item.id] || 0), 0);
      const parcelFee = parcelToggle && parcelToggle.checked && subtotal > 0 ? 5 : 0;
      const total = subtotal + parcelFee;

      const itemLines = entries.map((item) => {
        const qty = cart[item.id] || 0;
        const label = item.name[activeLanguage] || item.name.en;
        return `- ${label} x${qty} = ₹${item.price * qty}`;
      }).join('\n');

      const message = [
        'Hello Ragi Ruchulu,',
        'I would like to place an order.',
        '',
        `Name: ${customerName}`,
        `Phone: ${customerPhone}`,
        `Order type: ${orderType === 'delivery' ? 'Local delivery' : 'Stall pickup'}`,
        orderType === 'delivery' ? `Delivery address: ${deliveryAddress}` : '',
        '',
        'Items:',
        itemLines,
        '',
        `Subtotal: ₹${subtotal}`,
        parcelFee > 0 ? `Parcel charge: ₹${parcelFee}` : 'Parcel charge: ₹0',
        `Estimated total: ₹${total}`,
        orderType === 'delivery' ? 'Delivery charges: to be confirmed by the business.' : 'Pickup: no delivery charge.',
        '',
        'Please confirm availability and the final total before preparing the order. Thank you.'
      ].filter(Boolean).join('\n');

      const whatsappUrl = `https://wa.me/919441301166?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    });
  }
}

function setupMobileNav() {
  const toggleButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (!toggleButton || !nav) return;

  toggleButton.addEventListener('click', () => {
    const expanded = toggleButton.getAttribute('aria-expanded') === 'true';
    toggleButton.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open');
  });
}

function initPage() {
  setupMobileNav();
  initLanguage();
  if (document.body.dataset.page === 'menu') {
    renderMenu();
    renderCart();
    attachMenuPageHandlers();
  }
}

document.addEventListener('DOMContentLoaded', initPage);














