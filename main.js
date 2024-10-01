
  function mostrarFormulario(id, event) {
    // Prevenir o comportamento padrão do evento
    event.preventDefault();

    // Ocultar todos os formulários
    var formularios = document.querySelectorAll('.formulario');
    formularios.forEach(formulario => {
        formulario.style.display = 'none';
    });
    
    // Mostrar apenas o formulário com o ID correspondente ao botão clicado
    document.getElementById(id).style.display = 'block';
}

function voltarParaFormulario(formularioId) {
    // Oculta todos os formulários
    const todosFormularios = document.querySelectorAll('.formulario');
    todosFormularios.forEach((formulario) => {
        formulario.style.display = 'none';
    });

    // Exibe o formulário desejado
    const formularioDesejado = document.getElementById(formularioId);
    formularioDesejado.style.display = 'block';
}

function addCurrentDate(id) {
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    document.getElementById(id).value = date;
}