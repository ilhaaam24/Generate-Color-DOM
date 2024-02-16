const btn = document.getElementById('btn');
const h2 = document.getElementById('rgb');


document.addEventListener('DOMContentLoaded', () => {
    const savedColor = localStorage.getItem('color');
    if(savedColor){
        document.body.style.backgroundColor = savedColor;
        h2.innerText = savedColor;
    }
})

function saveData() {
    localStorage.setItem('color', h2.innerText);
}

btn.addEventListener('click', () => {
    const newColor = generateColor();
    h2.innerText = newColor;

    document.body.style.backgroundColor = newColor;
    saveData()
});


const generateColor = () => {
    
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b})`;
}