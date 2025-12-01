// WhatsApp number (country code + number)
// BD Example: 88017XXXXXXXX
const messenger = "https://www.facebook.com/profile.php?id=61584020737742";

// ------ Footer Year ------
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("whatsapp-link").href = `https://www.facebook.com/profile.php?id=61584020737742`;

// ------ Load Products ------
fetch("products.json")
  .then(res => res.json())
  .then(products => {
    const container = document.getElementById("products");

    products.forEach(p => {
      const card = document.createElement("article");
      card.className = "card";

      card.innerHTML = `
        <img src="${p.image}" alt="${p.title}">
        <h3>${p.title}</h3>
        <p class="price">${p.price} ${p.currency}</p>
        <p class="desc">${p.desc}</p>

        <div class="actions">
          <a class="btn" href="https://www.facebook.com/profile.php?id=61584020737742?text=${encodeURIComponent(`Hi! I want to order: ${p.title} | Price: ${p.price} ${p.currency}`)}" target="_blank">WhatsApp Order</a>
          <a class="btn primary" href="#" onclick="alert('Online payment coming soon!')">Buy Now</a>
        </div>
      `;

      container.appendChild(card);
    });
  })
  .catch(err => {
    document.getElementById("products").innerText = "Could not load products.";
    console.error(err);
  });
