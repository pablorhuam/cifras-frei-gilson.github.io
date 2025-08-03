# 🔐 Sistema de Liberação de Acesso - GitHub Pages

## 📧 Quando Receber o Email de Notificação

### Informações que você receberá:
- Nome do usuário
- Email para envio do acesso
- Telefone/WhatsApp
- Data e hora do pagamento
- Valor pago (R$ 7,90)
- Método de pagamento (PIX)

## 🎯 Opções para Liberar Acesso

### **Opção 1: Links Únicos com Senha (Recomendada)**

#### Como funcionar:
1. **Criar páginas protegidas por senha**
2. **Gerar link único** para cada cliente
3. **Enviar por email** após verificar pagamento

#### Implementação:

**1. Criar página protegida (`acesso-protegido.html`):**
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Acesso às Cifras - Frei Gilson</title>
    <script>
        function verificarSenha() {
            const senha = prompt("Digite a senha de acesso:");
            const senhasValidas = [
                "CIFRAS2024-001", "CIFRAS2024-002", "CIFRAS2024-003"
                // Adicionar mais conforme necessário
            ];
            
            if (senhasValidas.includes(senha)) {
                document.getElementById('conteudo-protegido').style.display = 'block';
                document.getElementById('senha-form').style.display = 'none';
            } else {
                alert("Senha incorreta!");
            }
        }
    </script>
</head>
<body>
    <div id="senha-form">
        <h2>Acesso Restrito</h2>
        <p>Digite a senha fornecida por email:</p>
        <button onclick="verificarSenha()">Inserir Senha</button>
    </div>
    
    <div id="conteudo-protegido" style="display: none;">
        <!-- Conteúdo das cifras aqui -->
    </div>
</body>
</html>
```

### **Opção 2: Sistema de Tokens via URL (Mais Segura)**

#### Como funcionar:
1. **Gerar token único** para cada cliente
2. **URL personalizada**: `cifras.html?token=ABC123XYZ`
3. **Validação via JavaScript**

#### Implementação:

**1. Atualizar `cifras.html`:**
```javascript
// Adicionar no início do cifras.html
<script>
const tokensValidos = [
    "TOKEN-001-MARIA", "TOKEN-002-JOAO", "TOKEN-003-ANA"
    // Adicionar conforme libera acesso
];

function verificarToken() {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    
    if (!token || !tokensValidos.includes(token)) {
        document.body.innerHTML = `
            <div style="text-align: center; padding: 50px;">
                <h2>Acesso Negado</h2>
                <p>Token inválido ou expirado.</p>
                <a href="index.html">Voltar ao site</a>
            </div>
        `;
        return false;
    }
    return true;
}

// Executar verificação
if (!verificarToken()) {
    // Bloquear acesso
}
</script>
```

### **Opção 3: Sistema Manual Simples (Mais Fácil)**

#### Como funcionar:
1. **Manter cifras.html público** mas "escondido"
2. **Enviar link direto** apenas para quem pagou
3. **Confiar na obscuridade** do link

#### Vantagens:
- ✅ Muito simples de implementar
- ✅ Funciona 100% no GitHub Pages
- ✅ Sem código adicional necessário

#### Desvantagens:
- ❌ Link pode ser compartilhado
- ❌ Menos seguro

## 🚀 Implementação Recomendada: Sistema de Tokens

Vou criar um sistema híbrido que é seguro mas simples:

### **1. Gerar Tokens Únicos**
```javascript
// Função para gerar token único
function gerarToken(nomeCliente, email) {
    const data = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    const hash = btoa(nomeCliente + email + data).slice(0, 8);
    return `CIFRAS-${data}-${hash}`;
}

// Exemplo: CIFRAS-20241202-TUFSSUEy
```

### **2. Processo de Liberação**

**Quando receber email de notificação:**

1. **Verificar pagamento** no seu banco
2. **Gerar token único** para o cliente
3. **Adicionar token** à lista de válidos
4. **Enviar email** com link personalizado

**Email de resposta:**
```
Assunto: ✅ Acesso Liberado - Cifras do Frei Gilson

Olá [NOME],

Seu pagamento foi confirmado! 

Acesse suas cifras através do link:
https://[seu-usuario].github.io/[repositorio]/cifras.html?token=CIFRAS-20241202-TUFSSUEy

Este link é pessoal e intransferível.

Bom estudo musical!
Frei Gilson
```

### **3. Atualização do Sistema**

**Para cada novo cliente:**
1. Adicionar token em `cifras.html`
2. Fazer commit no GitHub
3. Enviar email com link

## 🔧 Ferramentas para Facilitar

### **Gerador de Token Online:**
```html
<!-- Criar arquivo: gerar-token.html -->
<input type="text" id="nome" placeholder="Nome do cliente">
<input type="email" id="email" placeholder="Email do cliente">
<button onclick="gerarToken()">Gerar Token</button>
<div id="resultado"></div>

<script>
function gerarToken() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const data = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    const hash = btoa(nome + email + data).slice(0, 8);
    const token = `CIFRAS-${data}-${hash}`;
    
    document.getElementById('resultado').innerHTML = `
        <p><strong>Token:</strong> ${token}</p>
        <p><strong>Link:</strong> cifras.html?token=${token}</p>
        <p><strong>Adicionar ao array:</strong> "${token}",</p>
    `;
}
</script>
```

## 📊 Vantagens do Sistema Proposto

- ✅ **Seguro**: Tokens únicos e não previsíveis
- ✅ **Simples**: Funciona 100% no GitHub Pages
- ✅ **Rastreável**: Cada cliente tem token único
- ✅ **Flexível**: Pode revogar acesso removendo token
- ✅ **Escalável**: Fácil adicionar novos clientes

## 🎯 Próximos Passos

1. **Escolher qual opção** você prefere
2. **Implementar o sistema** escolhido
3. **Testar** com um token de exemplo
4. **Criar processo** de liberação de acesso
5. **Preparar template** de email de resposta

Qual opção você prefere? Posso implementar qualquer uma delas! 🚀