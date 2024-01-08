//ADICIONAR O HEADER
document.body.addEventListener('change', function (event) {
    if (event.target && event.target.id === 'file-header') {
        addHeader();
    }
});
function addHeader() {
    let fileInput = document.getElementById('file-header');
    let file = fileInput.files[0];
    let view = document.getElementById('header-main');
    var img = URL.createObjectURL(file);
    view.innerHTML = `
    <label for="file-header" id="display-header">
        <img class="img-fluid w-100 h-100" src="${img}">
        <input type="file" id="file-header" style="display:none">
    </label>`;
}

//ADICIONAR O FOOTER
// document.getElementById('file-footer').addEventListener('change', function addFooter(){
//     let file = document.getElementById('file-footer').files[0];
//     let view = document.getElementById('footer-main');
//     var img = URL.createObjectURL(file);
//     view.style.backgroundImage = `url(${img})`;
//     document.getElementById('display-footer').style.display='none';
// });

//ADICIONAR BOX DE ENCARTE EM LINHA
let count = { 'linha1': 0, 'linha2': 0, 'linha3': 0 };
// console.log(count);
function addBox(event) {
    let pos = event.target.dataset.id;
    let container_view = document.querySelector('.body-encarte');
    if (pos == 0) {
        console.log(count);
        let container = document.querySelectorAll('#view-encarte')[pos];
        container.innerHTML +=
            `<div id="encarte-main" onclick="abrirEncarte(event)" data-bs-toggle="modal" data-bs-target="#ajusteEncarte" class="view col" data-item1=${count['linha1']} data-id="${pos}">
                <label class="display-encarte" data-id="${pos}" data-item1=${count['linha1']}><img src="assets/image/icons/edit.png" class="img-fluid">
                </label>
            </div>`;
        return count["linha1"] += 1;
    }
    if (pos == 1) {
        let container = document.querySelectorAll('#view-encarte')[pos];
        console.log(container == null);
        if (container == null) {
            container_view.innerHTML += `
            <div id="view-encarte" class="col d-flex flex-row p-0 m-0 count-encarte">
                <div id="encarte-main" onclick="abrirEncarte(event)" data-bs-toggle="modal" data-bs-target="#ajusteEncarte"  class="view col" data-item2=${count['linha2']} data-id="${pos}">
                    <label class="display-encarte"  data-id="${pos}" data-item2=${count['linha2']}>
                        <img src="assets/image/icons/edit.png" class="img-fluid">
                    </label>
                </div>
            </div>`;
            return count["linha2"] += 1;
        } else {
            container.innerHTML +=
                `<div id="encarte-main" onclick="abrirEncarte(event)" data-bs-toggle="modal" data-bs-target="#ajusteEncarte"  class="view col" data-item2=${count['linha2']} data-id="${pos}">
                    <label class="display-encarte"  data-id="${pos}" data-item2=${count['linha2']}>
                        <img src="assets/image/icons/edit.png" class="img-fluid">
                    </label>
                </div>`;
            return count["linha2"] += 1;
        }
    }
    if (pos == 2) {
        let container_pos1 = document.querySelectorAll('#view-encarte')[1];
        let container_pos2 = document.querySelectorAll('#view-encarte')[pos];

        if (container_pos2 == null && container_pos1 == null) {
            container_view.innerHTML += `
            <div id="view-encarte" class="col d-flex flex-row p-0 m-0 count-encarte">
            </div>
            <div id="view-encarte" class="col d-flex flex-row p-0 m-0 count-encarte">
                <div id="encarte-main" onclick="abrirEncarte(event)" data-bs-toggle="modal" data-bs-target="#ajusteEncarte"  class="view col" data-item3=${count['linha3']} data-id="${pos}">
                    <label class="display-encarte"  data-id="${pos}" data-item3=${count['linha3']}>
                        <img src="assets/image/icons/edit.png" class="img-fluid">
                    </label>
                </div>
            </div>`;
            return count["linha3"] += 1;
        } else if (container_pos2 == null || container_pos1 == true) {
            container_view.innerHTML += `
            <div  id="view-encarte" class="col d-flex flex-row p-0 m-0 count-encarte">
                <div id="encarte-main" onclick="abrirEncarte(event)" data-bs-toggle="modal" data-bs-target="#ajusteEncarte"  class="view col" data-item3=${count['linha3']} data-id="${pos}">
                    <label class="display-encarte"  data-id="${pos}" data-item3=${count['linha3']}>
                        <img src="assets/image/icons/edit.png" class="img-fluid">
                    </label>
                </div>
            </div>`;
            return count["linha3"] += 1;
        } else {
            container_pos2.innerHTML +=
                `<div id="encarte-main" onclick="abrirEncarte(event)" data-bs-toggle="modal" data-bs-target="#ajusteEncarte" class="view col" data-item3=${count['linha3']} data-id="${pos}">
                    <label class="display-encarte"  data-id="${pos}" data-item3=${count['linha3']}>
                        <img src="assets/image/icons/edit.png" class="img-fluid">
                    </label>
                </div>`;
            return count["linha3"] += 1;
        }
    }
};

//ABRINDO MODAL
function abrirEncarte(event) {
    let pos = event.target.dataset.id;
    let item1 = event.target.dataset.item1;
    let item2 = event.target.dataset.item2;
    let item3 = event.target.dataset.item3;
    if (pos == 0) {
        let botao = document.querySelector('.botao-salvar');
        botao.setAttribute('data-id', pos);
        botao.setAttribute('data-item1', item1);
        console.log('OK!');
    }
    if (pos == 1) {
        let botao = document.querySelector('.botao-salvar');
        botao.setAttribute('data-id', pos);
        botao.setAttribute('data-item2', item2);
        console.log('OK!');
    }
    if (pos == 2) {
        let botao = document.querySelector('.botao-salvar');
        botao.setAttribute('data-id', pos);
        botao.setAttribute('data-item3', item3);
        console.log('OK!');
    }
}

//ADICIONAR IMAGEM DO ENCARTE
function addEncarte(event) {
    console.log(event.target);
    console.log('Valor acima é do event');

    let pos = event.target.dataset.id;
    let item1 = event.target.dataset.item1;
    let item2 = event.target.dataset.item2;
    let item3 = event.target.dataset.item3;
    let formP = document.getElementById('formProd').value;
    console.log('linha 1: ' + item1);
    console.log('linha 2: ' + item2);
    console.log('linha 3: ' + item3);
    console.log('posição: ' + pos);
    //VALOR
    let valor = document.createElement('div');
    valor.id = "valorEnc";
    let preco = document.getElementById('valorPreco').value;
    let precoConvert = parseFloat(preco);
    valor.innerHTML += `<div> ${(precoConvert.toFixed(2)).replace('.', ',')} <h6>${formP}</h6> </div>`;
    //adicionando bg do valor
    let bgValor = document.createElement('img');
    bgValor.src = 'assets/image/bgPrecoOk.png';
    valor.appendChild(bgValor);
    bgValor.setAttribute('class', 'img-fluid');
    //Descrição do nome do produto
    let nomeProduto = document.getElementById('descProduto').value;
    let addNome = document.createElement('div');
    addNome.id = 'nomeProduto';

    let file = document.getElementById('file-encarte').files[0];
    let img = URL.createObjectURL(file);
    // <img src="${img}" class="img-fluid h-100 w-100">
    let html = `
    <div class="display-encarte shadow-none display-encarte-new d-flex flex-column bg-white" style="background-image:url('${img}')">
        <div id="nomeProduto" class="col-7">${nomeProduto}</div>
        <div id="valorEnc" class="col">
            <div class="logo-preco text-center" style="background-image:url('assets/image/bgPrecoOk.png');">
                <div class="d-flex flex-row texto-preco">
                    <strong>R$ </strong> ${(precoConvert.toFixed(2)).replace('.', ',')}<br>${formP}
                </div>
            </div>
        </div>
    </div>`;

    if (pos == 0) {
        let view = document.querySelectorAll('div[data-id="0"]')[item1];
        view.innerHTML = '';
        view.innerHTML += html;
        return;
    }
    if (pos == 1) {
        let view = document.querySelectorAll('div[data-id="1"]')[item2];
        view.innerHTML = '';
        view.innerHTML += html;
        return;
    }
    if (pos == 2) {
        let view = document.querySelectorAll('div[data-id="2"]')[item3];
        view.innerHTML = '';
        view.innerHTML += html;
        return;
    }
};

//REMOVER BOX DE ENCARTE EM LINHA
function removeBox(event) {
    let a = event.target;
    let pos = event.target.dataset.id;
    console.log('MOSTRA POSIÇÃO: ' + pos);
    let linha = document.querySelectorAll('.count-encarte')[pos];
    let del = linha.querySelectorAll('.view');
    if (pos == 0) {
        if (count["linha1"] > 0) {
            count["linha1"] -= 1;
            del[count["linha1"]].remove();
            return
        }
    }
    if (pos == 1) {
        if (count["linha2"] > 0) {
            count["linha2"] -= 1;
            del[count["linha2"]].remove();
            return
        }
    }
    if (pos == 2) {
        if (count["linha3"] > 0) {
            count["linha3"] -= 1;
            del[count["linha3"]].remove();
            return
        }
    }
};
