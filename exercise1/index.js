let nome = prompt("Olá, quem é você?", "nome")

if (nome != null) {
    document.getElementById("demo").innerHTML = "Hello " + nome + "! How are you today?";
}