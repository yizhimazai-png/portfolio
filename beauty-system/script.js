const stage = document.getElementById('productStage');

document.querySelectorAll('.product').forEach((product, index) => {
  product.style.setProperty('--depth', product.dataset.depth || 1);
  product.style.setProperty('--delay', `${index * 90}ms`);
});

document.querySelectorAll('.product-art, .product-shadow img').forEach((image) => {
  image.addEventListener('error', () => { image.hidden = true; });
});

stage.addEventListener('pointermove', (event) => {
  const rect = stage.getBoundingClientRect();
  const x = ((event.clientX - rect.left) / rect.width - .5) * 2;
  const y = ((event.clientY - rect.top) / rect.height - .5) * 2;
  stage.style.setProperty('--mouse-x', x.toFixed(3));
  stage.style.setProperty('--mouse-y', y.toFixed(3));
});

stage.addEventListener('pointerleave', () => {
  stage.style.setProperty('--mouse-x', 0);
  stage.style.setProperty('--mouse-y', 0);
});

requestAnimationFrame(() => document.body.classList.add('is-ready'));
