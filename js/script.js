function addLivros(){
    if ($("#tabela tbody").length == 0){
        $("#tabela").append("<tbody></tbody>");
      }
     
      // Adiciona Livro na Tabela
      $("#tabela tbody").append(
        "<tr>" +
            "<td>" + $("#titulo").val() + "</td>" +
            "<td>" + $("#autor").val() + "</td>" +
            "<td>" + $("#paginas").val() + "</td>" +
            "<td>" + $("#status").val() + "</td>" +
            "<td>" +
            "<button type='button' " +
            "onclick='remover(this);' " +
            "class='btn btn-default'>" +
            "<span class='glyphicon glyphicon-remove'></span>" +
            "</button>" +
            "</td>" +
        "</tr>"
      );

      limparValores();
      trocarTela();
}

function limparValores(){
    $("#titulo").val("");
    $("#autor").val("");
    $("#paginas").val("");
    $("#status").val("");
}
function trocarTela(){
    $(".listagem").show();
    $(".cadastro-form").hide();        
}

function remover(botao_remover){
  $(botao_remover).parents("tr").remove();
}

function voltar(){
  $(".cadastro-form").show();
  $(".listagem").hide();
}

$('input#txt_consulta').quicksearch('table#tabela tr');

