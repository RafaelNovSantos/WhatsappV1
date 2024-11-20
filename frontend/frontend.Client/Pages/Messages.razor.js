function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        // Rola até o final do elemento
        element.scrollTop = element.scrollHeight;
        console.log(`Rolagem até o final do elemento com ID: ${elementId} realizada com sucesso.`);



    } else {
        console.log(`Elemento com ID: ${elementId} não encontrado.`);
    }
}

window.blockEnterKey = function (elementId) {
    const element = document.querySelector(elementId);
    if (element) {
        element.addEventListener('keydown', function (e) {
            // Se for Enter e não Shift, impede a inserção de uma nova linha
            if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault(); // Bloqueia o comportamento de criar nova linha
                console.log("Enter impedido")
            }
        });
    }
};