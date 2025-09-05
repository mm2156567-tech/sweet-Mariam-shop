let cart = [];
let total = 0;

// إضافة منتج للسلة
function addToCart(name, price, image) {
  cart.push({ name, price, image });
  total += price;
  renderCart();
}

// تحديث السلة
function renderCart() {
  const list = document.getElementById('cart-list');
  list.innerHTML = '';

  cart.forEach((item, index) => {
    const li = document.createElement('li');

    li.innerHTML = `
      <div class="cart-item-info">
        <img src="${item.image}" alt="${item.name}">
        <span>${item.name} - ${item.price} جنيه</span>
      </div>
      <button onclick="removeFromCart(${index})">❌</button>
    `;
    list.appendChild(li);
  });

  document.getElementById('total').textContent = `الإجمالي: ${total} جنيه`;
}

// إزالة منتج من السلة
function removeFromCart(index) {
  total -= cart[index].price;
  cart.splice(index, 1);
  renderCart();
}

// إتمام الطلب
document.getElementById('checkout').addEventListener('click', () => {
  if (cart.length === 0) {
    alert('السلة فارغة!');
    return;
  }

  let orderDetails = "تفاصيل الطلب:\n";
  cart.forEach(item => {
    orderDetails += `- ${item.name} (${item.price} جنيه)\n`;
  });
  orderDetails += `الإجمالي: ${total} جنيه`;

  alert(orderDetails + "\n\nتم استلام طلبك! شكراً لتسوقك معنا 🎉");

  cart = [];
  total = 0;
  renderCart();
});
