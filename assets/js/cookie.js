
restaurarConteudoLocalStorage();

// function getCookie(name) {
//   var cookies = document.cookie.split("; ");
//   for (var i = 0; i < cookies.length; i++) {
//     var cookie = cookies[i].split("=");
//     if (cookie[0] === name) {
//       return cookie[1];
//     }
//   }
//   return null;
// }

function salvarInputs() {
  var inputFooter1 = document.getElementById("footer1").value;
  var inputFooter2 = document.getElementById("footer2").value;
  var inputFooterBG1 = document.getElementById("corBgFooter1").value;
  var inputFooterBG2 = document.getElementById("corBgFooter2").value;
  var inputFooterleet1 = document.getElementById("corLetFooter1").value;
  var inputFooterleet2 = document.getElementById("corLetFooter2").value;
  var inputFont1 = document.getElementById('font1').value;
  var inputFont2 = document.getElementById('font2').value;

  var layCabecalho = document.getElementById('layout-cabecalho').value;
  var layAltura = document.getElementById('layout-altura').value;
  var layLargura = document.getElementById('layout-largura').value;
  var layCor = document.querySelector('#box-corEncarte>div>div>input').value;

  localStorage.setItem('layCor',layCor);
  localStorage.setItem("layCabecalho", layCabecalho);
  localStorage.setItem("layAltura", layAltura);
  localStorage.setItem("layLargura", layLargura);
  localStorage.setItem("inputFooter1", inputFooter1);
  localStorage.setItem("inputFooter2", inputFooter2);
  localStorage.setItem("inputFooterBG1", inputFooterBG1);
  localStorage.setItem("inputFooterBG2", inputFooterBG2);
  localStorage.setItem("inputFooterleet1", inputFooterleet1);
  localStorage.setItem("inputFooterleet2", inputFooterleet2);
  localStorage.setItem("inputFont1", inputFont1);
  localStorage.setItem("inputFont2", inputFont2);
}

function salvarConteudoLocalStorage() {
  salvarInputs();
  var conteudoAjusteCor = document.getElementById("ajusteCor").innerHTML;
  var conteudoAjusteLayout = document.getElementById("ajusteLayout").innerHTML;
  var conteudoFooterMain = document.getElementById("footer-main").innerHTML;
  var conteudoBodyEncarte = document.querySelector('.body-encarte').innerHTML;
  localStorage.setItem("conteudoAjusteCor", conteudoAjusteCor);
  localStorage.setItem("conteudoFooterMain", conteudoFooterMain);
  localStorage.setItem("conteudoAjusteLayout", conteudoAjusteLayout);
  localStorage.setItem("conteudoBodyEncarte", conteudoBodyEncarte);
}

function restaurarConteudoLocalStorage() {
  var conteudoAjusteCor = localStorage.getItem("conteudoAjusteCor");
  var conteudoFooterMain = localStorage.getItem("conteudoFooterMain");
  var conteudoAjusteLayout = localStorage.getItem("conteudoAjusteLayout");
  var conteudoBodyEncarte = localStorage.getItem("conteudoBodyEncarte");

  var inputFooter1 = localStorage.getItem("inputFooter1");
  var inputFooter2 = localStorage.getItem("inputFooter2");
  var inputFooterBG1 = localStorage.getItem("inputFooterBG1");
  var inputFooterBG2 = localStorage.getItem("inputFooterBG2");
  var inputFooterleet1 = localStorage.getItem("inputFooterleet1");
  var inputFooterleet2 = localStorage.getItem("inputFooterleet2");
  var inputFont1 = localStorage.getItem("inputFont1", inputFont1);
  var inputFont2 = localStorage.getItem("inputFont2", inputFont2);
  
  var layCabecalho = localStorage.getItem("layCabecalho");
  var layAltura = localStorage.getItem("layAltura");
  var layLargura = localStorage.getItem("layLargura");
  var layCor = localStorage.getItem("layCor");

  if(conteudoAjusteLayout){
    document.getElementById("ajusteLayout").innerHTML = conteudoAjusteLayout;
  }
  if (conteudoAjusteCor) {
    document.getElementById("ajusteCor").innerHTML = conteudoAjusteCor;
  }
  if (conteudoFooterMain) {
    document.getElementById("footer-main").innerHTML = conteudoFooterMain;
  }
  if (inputFooter1) {
    document.getElementById("footer1").value = inputFooter1;
  }
  if (inputFooter2) {
    document.getElementById("footer2").value = inputFooter2;
  }
  if (inputFooterBG1) {
    document.getElementById("corBgFooter1").value = inputFooterBG1;
  }
  if (inputFooterBG2) {
    document.getElementById("corBgFooter2").value = inputFooterBG2;
  }
  if (inputFooterleet1) {
    document.getElementById("corLetFooter1").value = inputFooterleet1;
  }
  if (inputFooterleet2) {
    document.getElementById("corLetFooter2").value = inputFooterleet2;
  }
  if (inputFont1) {
    document.getElementById("font1").value = inputFont1;
  }
  if (inputFont2) {
    document.getElementById("font2").value = inputFont2;
  }
  if (layCabecalho) {
    document.getElementById("layout-cabecalho").value = layCabecalho;
  }
  if (layAltura) {
    document.getElementById("layout-altura").value = layAltura;
  }
  if (layLargura) {
    document.getElementById("layout-largura").value = layLargura;
  }
  if(conteudoBodyEncarte){
    document.querySelector(".body-encarte").value = conteudoBodyEncarte;
  }
  if(layCor){
    document.querySelector('#box-corEncarte>div>div>input').value = layCor;
  }
}

function delCookie() {
  $('.alert').alert();
  // alert('As alterações foram limpas');
  localStorage.clear();
  location.reload();
}




