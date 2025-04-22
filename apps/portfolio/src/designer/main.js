const gridColumns = 12;

const designerInner = document.querySelector('.designer > .designer__grid-col');

for (let i = 1; i < gridColumns; i++) {
  const copy = designerInner.cloneNode(true);
  designerInner.parentElement.appendChild(copy);
}
