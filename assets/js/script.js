function print() {
    html2canvas(document.querySelector(".painel-encarte")).then(canvas => {
        const link = document.createElement("a");
        link.download = "encarte.jpeg";
        const image = canvas.toDataURL("image/jpeg");
        link.href = image;
        link.click();
    });
}

// function reset() {
//     let decisao = confirm("Tem certeza que deseja limpar todas as alterações?");
//     if (decisao) {
//         delCookie();
//     }
// }

function limpar(){
    delCookie();
}
$('#menu-sidebar').on('click', function(){
    $('.meu-sidebar').toggle();
});
$(document).on('change', function(){
    let altura = $('#layout-altura').val();
    let largura = $('#layout-largura').val();
    let cabecalho = $('#layout-cabecalho').val();
    $('.body-encarte').css({
        'width':largura,
        'height': altura
    });
    $('#header-main').css({
        'height': cabecalho
    });
});
$(document).on('change', function(){
    let altura = $('.body-encarte').css();
    console.log('o css do body = ' + altura);
})