let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  localStorage.setItem("carrito", JSON.stringify(carrito));
  alert(nombre + " fue agregado al carrito 💖");
}

