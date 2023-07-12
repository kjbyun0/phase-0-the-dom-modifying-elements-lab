// Write your code here!
const mainElems = document.querySelectorAll('main#main');
for (let i = 0; i < mainElems.length; i++) {
    mainElems[i].remove();
}

const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = 'Ken is the champion';
