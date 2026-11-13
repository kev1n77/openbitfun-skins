document.documentElement.classList.add('js');

const dialog = document.querySelector('.lightbox');
const dialogImage = dialog.querySelector('.lightbox-image');
const dialogTitle = dialog.querySelector('h2');
const modes = { light: '浅色', dark: '深色' };

for (const card of document.querySelectorAll('[data-skin]')) {
  const title = card.querySelector('h2').textContent;
  const preview = card.querySelector('[data-preview]');
  const image = preview.querySelector('img');
  const buttons = card.querySelectorAll('[data-mode]');
  let mode = 'light';

  for (const button of buttons) {
    button.addEventListener('click', () => {
      mode = button.dataset.mode;
      const source = `assets/${card.dataset.skin}-${mode}.webp`;
      for (const sibling of buttons) sibling.setAttribute('aria-pressed', String(sibling === button));
      image.src = source;
      image.alt = `${title}在 OpenBitFun 首页的${modes[mode]}预览`;
      preview.href = source;
      preview.setAttribute('aria-label', `放大查看${title}的${modes[mode]}预览`);
    });
  }

  preview.addEventListener('click', event => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || typeof dialog.showModal !== 'function') return;
    event.preventDefault();
    dialogTitle.textContent = `${title} · ${modes[mode]}预览`;
    dialogImage.src = image.src;
    dialogImage.alt = image.alt;
    dialog.showModal();
  });
}

dialog.querySelector('.close-preview').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
