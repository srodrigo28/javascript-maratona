function moeda(valor){
    return valor.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
    });
}
//console.log(moeda(100.99));

// reduzir textos
function stringText(text, size) {
    return text.substring(0, size) + '...';
}

// encontra e substitui
function stringImg(imgFomart){
    return imgFomart.replace(/\w\.jpg/gi, 'W.jpg');
}

// encontra e substitui
function stringImg2(imgFomart){
    return imgFomart.replace(/\w\.jpg/gi, 'W.jpg');
}
// console.log(stringImg("img.jpg"))
