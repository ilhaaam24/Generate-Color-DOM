const btn = document.getElementById('btn');
const h2 = document.getElementById('rgb');


btn.addEventListener('click', () => {
    const newColor = generateColor();
    h2.innerText = newColor;

    document.body.style.backgroundColor = newColor;
});


const generateColor = () => {
    
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b})`;
}