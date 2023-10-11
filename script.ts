function Cadastro() {
    let senha1: HTMLInputElement | null = document.querySelector('#senha')!;
    let corfsenha: HTMLInputElement | null = document.querySelector('#confirsenha')!;
    let email: HTMLInputElement | null = document.querySelector('#email')!;

    if (senha1.value !== '' && corfsenha.value !== '' && email.value !== '') {
        if (senha1.value !== corfsenha.value) {
            alert("As senhas não coincidem. Tente novamente.");
        } else {
            // Cadastro bem-sucedido, redirecione para outra página
            window.location.href = "./index.html";
        }
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}