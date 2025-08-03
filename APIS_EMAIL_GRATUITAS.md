# APIs Gratuitas para Envio de Email

## Opções Recomendadas para o Site de Cifras

### 1. **Formspree** (Já configurado no projeto)
- **Plano gratuito**: 50 submissões/mês
- **Vantagens**: 
  - Muito fácil de configurar
  - Não requer backend
  - Proteção contra spam
  - Notificações por email automáticas
- **Como usar**: Já está configurado no `index.html` (precisa apenas substituir `YOUR_FORM_ID`)
- **URL**: https://formspree.io

### 2. **EmailJS**
- **Plano gratuito**: 200 emails/mês
- **Vantagens**:
  - Funciona 100% no frontend
  - Suporte a templates personalizados
  - Múltiplos provedores de email
- **Implementação**:
```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
<script>
emailjs.init("YOUR_PUBLIC_KEY");
emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', '#paymentNotificationForm');
</script>
```
- **URL**: https://www.emailjs.com

### 3. **Netlify Forms** (se hospedar no Netlify)
- **Plano gratuito**: 100 submissões/mês
- **Vantagens**:
  - Integração automática
  - Sem JavaScript necessário
  - Dashboard para gerenciar submissões
- **Como usar**: Adicionar `netlify` ao atributo `name` do form
- **URL**: https://www.netlify.com/products/forms/

### 4. **Web3Forms**
- **Plano gratuito**: 250 submissões/mês
- **Vantagens**:
  - Sem registro necessário
  - Funciona apenas com HTML
  - Proteção contra spam
- **Implementação**:
```html
<form action="https://api.web3forms.com/submit" method="POST">
    <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY">
    <!-- seus campos aqui -->
</form>
```
- **URL**: https://web3forms.com

### 5. **Getform**
- **Plano gratuito**: 50 submissões/mês
- **Vantagens**:
  - Dashboard para visualizar submissões
  - Integração com Zapier
  - Webhooks disponíveis
- **URL**: https://getform.io

## Comparação Rápida

| Serviço | Submissões Gratuitas | Facilidade | Recursos Extras |
|---------|---------------------|------------|-----------------|
| **Formspree** | 50/mês | ⭐⭐⭐⭐⭐ | Spam protection, redirects |
| **EmailJS** | 200/mês | ⭐⭐⭐⭐ | Templates, múltiplos emails |
| **Netlify Forms** | 100/mês | ⭐⭐⭐⭐⭐ | Dashboard, file uploads |
| **Web3Forms** | 250/mês | ⭐⭐⭐⭐⭐ | Sem registro, muito simples |
| **Getform** | 50/mês | ⭐⭐⭐⭐ | Dashboard, integrações |

## ✅ CONFIGURADO: Web3Forms

### **Configuração Atual (Ativa)**
O projeto está configurado com **Web3Forms** usando a chave: `e30d5570-f67e-4599-a1de-2ac51e2e611a`

**Benefícios da configuração atual:**
- ✅ **250 emails/mês gratuitos** (5x mais que Formspree)
- ✅ **Já está funcionando** - não precisa de configuração adicional
- ✅ **Sem registro necessário** - mais simples
- ✅ **Proteção contra spam** incluída
- ✅ **Redirecionamento automático** para página de obrigado

### **Opção 2: Web3Forms (Mais Simples)**
Se quiser algo ainda mais simples:

```html
<!-- Substituir o form atual por: -->
<form action="https://api.web3forms.com/submit" method="POST" id="paymentNotificationForm">
    <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY">
    <input type="hidden" name="subject" value="Nova notificação de pagamento - Cifras Frei Gilson">
    <input type="hidden" name="from_name" value="Site Cifras Frei Gilson">
    
    <!-- Seus campos existentes aqui -->
    <input type="text" name="name" placeholder="Nome completo" required>
    <input type="email" name="email" placeholder="Seu e-mail" required>
    <!-- etc... -->
</form>
```

### **Opção 3: EmailJS (Mais Controle)**
Para máximo controle sobre templates e múltiplos destinatários:

```javascript
// Adicionar ao main.js
emailjs.init("YOUR_PUBLIC_KEY");

function sendEmail(formData) {
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        from_name: formData.get('name'),
        from_email: formData.get('email'),
        message: `Pagamento de R$ ${formData.get('paymentValue')} realizado em ${formData.get('paymentDate')}`
    }).then(() => {
        showMessage('Email enviado com sucesso!', 'success');
    });
}
```

## Configuração Recomendada

Para o seu caso específico, recomendo **manter o Formspree** pois:
- ✅ Já está configurado
- ✅ 50 emails/mês é suficiente para começar
- ✅ Proteção contra spam incluída
- ✅ Muito confiável e estável
- ✅ Fácil de configurar

### Passos para ativar:
1. Acesse https://formspree.io e crie uma conta
2. Crie um novo form chamado "Notificação Pagamento Cifras"
3. Copie o Form ID (ex: `xpwzgqpv`)
4. No `index.html`, substitua:
   ```html
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```
   por:
   ```html
   action="https://formspree.io/f/xpwzgqpv"
   ```

Pronto! Os emails chegarão automaticamente na sua caixa de entrada quando alguém preencher o formulário.

## Backup: Se o Formspree não funcionar

Se por algum motivo o Formspree apresentar problemas, você pode rapidamente trocar para Web3Forms:

1. Registre-se em https://web3forms.com (gratuito)
2. Pegue sua Access Key
3. Substitua o action do form:
   ```html
   <form action="https://api.web3forms.com/submit" method="POST">
       <input type="hidden" name="access_key" value="SUA_ACCESS_KEY">
   ```

Ambas as opções são 100% gratuitas e confiáveis para o volume esperado do site.