
//atividade 01//
function validaeDados() {
    let data = frmRegistro.inData.value;
    let nomeCliente = frmRegistro.inCli.value;
    let telefone = frmRegistro.inFone.value;
    let email = frmRegistro.inMail.value;
    let nomeProduto = frmRegistro.inProd.value;
    let quantidade = frmRegistro.inQtd.value;
    let valorUnitario = frmRegistro.inVal.value;
    let erro = document.getElementById('mensagem-erro');
    erro.innerHTML = '';
    erro.style.display = 'none';

    if (data.trim() == '') {
        erro.innerHTML = 'O campo DATA não é válido'
        erro.style.display = 'block';
        frmRegistro.inData.focus();
        return false;
    }

    if (nomeCliente.trim().length < 5 ) {
        erro.innerHTML = 'O campo NOME DO CLIENTE não é válido'
        erro.style.display = 'block';
        frmRegistro.inCli.focus();
        return false;
    }

    if (telefone.trim().length < 5 ) {
        erro.innerHTML = 'O campo TELEFONE não é válido'
        erro.style.display = 'block';
        frmRegistro.inFone.focus();
        return false;
    }
    if (email.trim().length < 5 ) {
        erro.innerHTML = 'O campo EMAIL não é válido'
        erro.style.display = 'block';
        frmRegistro.inMail.focus();
        return false;
    }
    if (nomeProduto.trim().length < 5 ) {
        erro.innerHTML = 'O campo NOME DO PRODUTO não é válido'
        erro.style.display = 'block';
        frmRegistro.inProd.focus();
        return false;
    }

    if (quantidade.length <= 0) {
        erro.innerHTML = 'O campo QUANTIDADE não é válido'
        erro.style.display = 'block';
        frmRegistro.inQtd.focus();
        return false;
    }

    if (valorUnitario.length <= 0) {
        erro.innerHTML = 'O campo VALOR UNITÁRIO não é válido'
        erro.style.display = 'block';
        frmRegistro.inVal.focus();
        return false;
    }
}

/*-----ATIVIDADE 2-----*/

function gerarImg() {

    let qntdImg = document.getElementById('inQtdImg');
    let imgs = '<img src= "img/emoji.jpg" class="imagens"/>';
    let canvas = document.getElementById('canvas');

    canvas.innerHTML = '';

    for (let i=0; i < qntdImg.value; i++) {
        canvas.innerHTML = canvas.innerHTML + imgs;
    }
}

//atividade 03// 


function alterarApagada() {
    let imagem = document.getElementById('lampada');
    let caminho = imagem.src;
    let arquivo = caminho.substring(caminho.lastIndexOf('/')+1);
    let botao = document.getElementById('btnAcender');

    if (arquivo == 'apagada.jpg' || arquivo == '') {
        imagem.src = 'img/acesa.jpg';
        botao.textContent = 'Apagar';
    }
    else {
        imagem.src='img/apagada.jpg';
        botao.textContent = 'Acender';
    }
}

//atividade 04//


function calcularDados() {
    let ValorPedido = document.getElementById ('inValorPedido').value;
    let desconto = 0;
    let PercDesconto = 0;
    let ValorLiq = 0;
 
    if (ValorPedido <500 ) {
     PercDesconto = 0;
     desconto = ValorPedido*(PercDesconto/100);
     ValorLiq = ValorPedido-desconto;
    }
 
    if (ValorPedido >500 ) {
     PercDesconto = 0.5;
     desconto = ValorPedido*(PercDesconto/100);
     ValorLiq = ValorPedido-desconto;
    }
 
    if (ValorPedido >1000 ) {
     PercDesconto = 0.8;
     desconto = ValorPedido*(PercDesconto/100);
     ValorLiq = ValorPedido-desconto;
    }
 
    if (ValorPedido >1500 ) {
     PercDesconto = 0.8;
     desconto = ValorPedido*(PercDesconto/100);
     ValorLiq = ValorPedido-desconto;
    }
 
    if (ValorPedido >2000 ) {
     PercDesconto = 1.5;
     desconto = ValorPedido*(PercDesconto/100);
     ValorLiq = ValorPedido-desconto;
    }
 
    if (ValorPedido <500 ) {
     PercDesconto = 0;
     desconto = ValorPedido*(PercDesconto/100);
     ValorLiq = ValorPedido-desconto;
    }
 
    document.getElementById ('inPercDesc').value = PercDesconto;
    document.getElementById ('inValDesc').value = desconto;
    document.getElementById ('inValFinal').value = ValorLiq;
 
 }
