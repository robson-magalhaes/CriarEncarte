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

function limpar() {
    delCookie();
}

$('#menu-sidebar').on('click', function () {
    $('.meu-sidebar').toggle();e
});

$(document).on('change', function () {
    let altura = $('#layout-altura').val();
    let largura = $('#layout-largura').val();
    let cabecalho = $('#layout-cabecalho').val();
    $('.body-encarte').css({
        'width': largura,
        'height': altura
    });
    $('#header-main').css({
        'height': cabecalho
    });
});





// $(document).ready(function() {
//     var menuButton = $('#menu-sidebar');
//     var sidebar = $('.meu-sidebar');

//     menuButton.click(function() {
//         sidebar.toggleClass('show');
//     });

//     $(document).on('click', function(event) {
//         if (!menuButton.is(event.target) && sidebar.has(event.target).length === 0) {
//             sidebar.removeClass('show');
//         }
//     });

//     sidebar.click(function(event) {
//         event.stopPropagation();
//     });
// });
