// Função para copiar a chave Pix
function copyPixKey() {
    const pixKey = document.getElementById('pix-key').textContent;
    navigator.clipboard.writeText(pixKey)
        .then(() => {
            alert('Chave Pix copiada para a área de transferência!');
        })
        .catch(err => {
            alert('Erro ao copiar a chave Pix. Tente novamente.');
        });
}
