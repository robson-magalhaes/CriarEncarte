document.body.addEventListener('change', ajusteCor);
document.body.addEventListener('change', corFundoView);
window.addEventListener('load', ajusteCor);
window.addEventListener('load', corFundoView);

function ajusteCor(){
    let area1 = document.getElementById('footer-area-1');
    let corBg1 = document.getElementById('corBgFooter1').value;
    let corLet1 = document.getElementById('corLetFooter1').value;
    area1.style.backgroundColor = `${corBg1}`;
    area1.style.color = corLet1;
    area1.style.border = 'none';
    
    let area2 = document.getElementById('footer-area-2');
    let corBg2 = document.getElementById('corBgFooter2').value;
    let corLet2 = document.getElementById('corLetFooter2').value;
    area2.style.backgroundColor = `${corBg2}`;
    area2.style.color = corLet2;
    area2.style.border = 'none';

    let font1 = document.querySelector('#font1').value;
    let font2 = document.querySelector('#font2').value;
    area1.style.fontSize = font1+'px';
    area2.style.fontSize = font2+'px';
    
    let input1 = document.getElementById('footer1');
    let input2 = document.getElementById('footer2');
    area1.innerHTML = input1.value;
    area2.innerHTML = input2.value;

    input1.style.backgroundColor = `${corBg1}`;
    input2.style.backgroundColor = `${corBg2}`;
    input1.style.color = corLet1;
    input2.style.color = corLet2;
    input1.style.fontSize = font1+'px';
    input2.style.fontSize = font2+'px';
    
    input1.style.border = 'none';
    input2.style.border = 'none';
    corFundoView();

    //SALVAMENTO DE COOKIE TIPO LOCALSTORAGE
    salvarConteudoLocalStorage();
    salvarInputs();
}

function corFundoView(){
    let cor = document.querySelector('#box-corEncarte>div>div>input').value;
    let view = document.querySelectorAll('#view-encarte');
    view.forEach((item)=>{
        item.style.backgroundColor= `${cor}`;
    })
}
