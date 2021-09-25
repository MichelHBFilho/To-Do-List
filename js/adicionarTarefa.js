(() => {

    const input = document.querySelector("[data-form-input]");
    const body = document.querySelector("body");
    const btnEnviar = document.querySelector("[data-form-enviar");
    const lista = document.querySelector("[data-div-lista]");

    const adicionarTarefa = (event) => {
        event.preventDefault();

        if (event.target !== btnEnviar && event.keyCode !== 13 || input.value === "") return;

        let label = document.createElement("label")
        label.classList.add("container")
        label.innerHTML = `
            <input type="checkbox" name="" class="concluir">
            <span class="check"></span>
            ${input.value}
        `;
        lista.appendChild(label);
        input.value = '';
    }
    btnEnviar.addEventListener('click', adicionarTarefa)
    body.addEventListener('keyup', adicionarTarefa)
})()