# Configuração do Formspree

## Passos para configurar o formulário de notificação:

### 1. Criar conta no Formspree
1. Acesse [https://formspree.io](https://formspree.io)
2. Crie uma conta gratuita
3. Faça login na sua conta

### 2. Criar um novo formulário
1. Clique em "New Form"
2. Dê um nome ao formulário: "Notificação de Pagamento - Cifras Frei Gilson"
3. Copie o ID do formulário (formato: xpwzgqpv)

### 3. Configurar o formulário no site
1. Abra o arquivo `index.html`
2. Encontre a linha:
   ```html
   <form id="paymentNotificationForm" class="payment-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
3. Substitua `YOUR_FORM_ID` pelo ID real do seu formulário

### 4. Configurar notificações por email
1. No painel do Formspree, vá para as configurações do formulário
2. Configure o email de destino para onde as notificações serão enviadas
3. Personalize o assunto do email se desejar

### 5. Testar o formulário
1. Acesse o site e preencha o formulário de notificação
2. Verifique se o email chegou na caixa de entrada configurada
3. Confirme se todos os dados estão sendo enviados corretamente

### 6. Configurações opcionais
- **Página de redirecionamento**: Já configurada para `obrigado.html`
- **Assunto do email**: Já configurado como "Nova notificação de pagamento - Cifras Frei Gilson"
- **Proteção contra spam**: O Formspree já inclui proteção básica

## Campos enviados pelo formulário:
- Nome completo
- E-mail
- Telefone (WhatsApp)
- Data e hora do pagamento
- Valor pago (R$ 7,90)
- Método de pagamento
- Informações adicionais
- Confirmação dos termos

## Plano gratuito do Formspree:
- Até 50 submissões por mês
- Proteção contra spam
- Notificações por email
- Suficiente para começar o projeto

## Alternativas gratuitas:
Se preferir, pode usar:
- **Netlify Forms** (se hospedar no Netlify)
- **EmailJS** (envio direto via JavaScript)
- **Google Forms** (mais simples, mas menos personalizado)