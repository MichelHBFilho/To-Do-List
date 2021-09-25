(() => {
    const botaoDeletar = document.querySelector("[data-deleta-todo]");
    const divLista = document.querySelector("[data-div-lista]");
    
    botaoDeletar.addEventListener('click', () => {
        botaoDeletar.textContent = 'Aguardando...';
        divLista.addEventListener('click', deletarTarefa)
    })

    const deletarTarefa = function(event) {
        event.target.remove();
        botaoDeletar.textContent = 'Deletar alguma tarefa';
        divLista.removeEventListener('click', deletarTarefa);
    }
})()