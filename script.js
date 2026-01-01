// FOOTER YEAR
document.getElementById("year").textContent = new Date().getFullYear();

// PRODUCT DATA
const productInfo = {
  beet: {
    title: "Beet Bliss Lip Oil",
    price: "₹99",
    img: "https://i.postimg.cc/kgC9TxHG/Whats-App-Image-2025-12-30-at-1-26-30-PM.jpg",
    comp: "Beetroot, Rose, light liquid paraffin, Arnica extract, tea tree extract, vitamin E oil",
    bene: "Gives a pinkish tint along with moisturization",
    inst: "Apply a thin layer on lips"
  },
  tangy: {
    title: "Tangy Vera Lip Oil",
    price: "₹99",
    img: "https://i.postimg.cc/XvR0yd9v/Whats-App-Image-2025-12-30-at-1-26-30-PM-(2).jpg",
    comp: "Aloe vera, orange oil, rosemary oil, Arnica extract, vitamin E oil",
    bene: "Gives a reddish tint along with moisturization",
    inst: "Apply a thin layer on lips"
  },
  honey: {
    title: "Honey Cappuccino Water Tint",
    price: "₹99",
    img: "https://i.postimg.cc/nLsd7W1T/Whats-App-Image-2025-12-30-at-1-26-30-PM-(1).jpg",
    comp: "Aloe vera gel, Rose water, Castor oil, vitamin E, Coffee, Vanilla, Honey",
    bene: "Plumps lips with tint and moisture",
    inst: "Apply a thin layer on lips"
  },
  sparklybeet: {
    title: "Sparkly Beet Bliss Lip Oil",
    price: "₹109",
    img: "https://i.postimg.cc/7YxmXhVb/Whats-App-Image-2025-12-30-at-1-26-12-PM.jpg",
    comp: "Beetroot, Rose, Arnica, Vitamin E",
    bene: "Glittery pink tint with hydration",
    inst: "Apply a thin layer on lips"
  },
  sparklytangy: {
    title: "Sparkly Tangy Vera Lip Oil",
    price: "₹109",
    img: "https://i.postimg.cc/brL040Ts/Whats-App-Image-2025-12-30-at-1-26-13-PM.jpg",
    comp: "Aloe vera, Orange oil, Vitamin E",
    bene: "Glittery red tint with moisture",
    inst: "Apply a thin layer on lips"
  },
  sparklyhoney: {
    title: "Sparkly Honey Cappuccino Water Tint",
    price: "₹109",
    img: "https://i.postimg.cc/Gt3GP8C0/Whats-App-Image-2025-12-30-at-1-26-12-PM-(1).jpg",
    comp: "Coffee, Honey, Aloe vera, Vitamin E",
    bene: "Glittery plumping tint",
    inst: "Apply a thin layer on lips"
  }
};

// MODAL FUNCTIONS
function openModal(key) {
  const p = productInfo[key];
  document.getElementById("modal-title").innerText = p.title;
  document.getElementById("modal-img").src = p.img;
  document.getElementById("modal-price").innerText = p.price;
  document.getElementById("modal-comp").innerText = p.comp;
  document.getElementById("modal-bene").innerText = p.bene;
  document.getElementById("modal-inst").innerText = p.inst;
  document.getElementById("product-modal").style.display = "flex";
}

document.getElementById("modal-close").onclick = () =>
  document.getElementById("product-modal").style.display = "none";

window.onclick = e => {
  if (e.target.id === "product-modal") {
    document.getElementById("product-modal").style.display = "none";
  }
};