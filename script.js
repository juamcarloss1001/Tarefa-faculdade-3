function inscrever() {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let whatsapp = document.getElementById("whatsapp").value;

    if (nome === "" || email === "" || whatsapp === "") {
        alert("Preencha todos os campos!");
        return;
    }

    let tabela = document.getElementById("tabela");

    let novaLinha = tabela.insertRow();

    novaLinha.insertCell(0).innerText = nome;
    novaLinha.insertCell(1).innerText = email;
    novaLinha.insertCell(2).innerText = whatsapp;

    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("whatsapp").value = "";
}