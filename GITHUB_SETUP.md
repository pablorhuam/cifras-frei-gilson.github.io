# Configuração do Repositório GitHub e GitHub Pages

Siga estas instruções para configurar o repositório GitHub e habilitar o GitHub Pages para o projeto de Cifras Musicais do Frei Gilson.

## 1. Criar um Repositório no GitHub

1. Acesse [GitHub](https://github.com/) e faça login na sua conta
2. Clique no botão "+" no canto superior direito e selecione "New repository"
3. Preencha os seguintes campos:
   - Repository name: `cifras-frei-gilson` (ou outro nome de sua preferência)
   - Description: `Site para distribuição de cifras musicais do Frei Gilson via pagamento Pix`
   - Visibilidade: Public (para usar GitHub Pages gratuitamente)
   - Inicialize com: README (já criamos um README.md)
4. Clique em "Create repository"

## 2. Conectar o Repositório Local ao GitHub

Execute os seguintes comandos no terminal, na pasta raiz do projeto:

```bash
git init
git add .
git commit -m "Configuração inicial do projeto"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/cifras-frei-gilson.git
git push -u origin main
```

Substitua `SEU-USUARIO` pelo seu nome de usuário do GitHub e `cifras-frei-gilson` pelo nome que você escolheu para o repositório.

## 3. Configurar GitHub Pages

1. Acesse seu repositório no GitHub
2. Clique na aba "Settings"
3. No menu lateral esquerdo, clique em "Pages"
4. Na seção "Source", selecione a branch "main" e a pasta raiz "/ (root)"
5. Clique em "Save"
6. Aguarde alguns minutos para que o GitHub Pages seja ativado
7. Seu site estará disponível em `https://SEU-USUARIO.github.io/cifras-frei-gilson/`

## 4. Verificar a Publicação

1. Acesse a URL do seu site (`https://SEU-USUARIO.github.io/cifras-frei-gilson/`)
2. Verifique se a página inicial está sendo exibida corretamente
3. Teste a responsividade em diferentes dispositivos

## 5. Atualizações Futuras

Para atualizar o site após fazer alterações locais:

```bash
git add .
git commit -m "Descrição das alterações"
git push origin main
```

O GitHub Pages atualizará automaticamente o site após alguns minutos.