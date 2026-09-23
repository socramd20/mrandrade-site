# Portfólio — mrandrade.net.br

## Estrutura
```
index.html                     página única (todo o conteúdo)
css/style.css                  cores, fontes e layout
js/main.js                     menu mobile, animações, visualizador das pranchas
img/                           foto, logo, favicon e pranchas do projeto elétrico
curriculo-marcos-andrade.pdf   botão "Baixar currículo"
CNAME                          domínio para o GitHub Pages
```

## Testar no VS Code
Instale a extensão **Live Server** → clique com o botão direito em `index.html` → *Open with Live Server*.

## Publicar no GitHub Pages
1. No GitHub, crie um repositório público (ex.: `mrandrade-site`).
2. No terminal do VS Code, dentro desta pasta:
   ```
   git init
   git add .
   git commit -m "Portfólio inicial"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/mrandrade-site.git
   git push -u origin main
   ```
3. No repositório: **Settings → Pages** → Source: *Deploy from a branch* → Branch `main` / `(root)` → Save.
4. Em **Custom domain** coloque `mrandrade.net.br` (o arquivo CNAME já faz isso). Depois que o DNS propagar, marque **Enforce HTTPS**.

## Apontar o domínio (Registro.br)
Em registro.br → seu domínio → **DNS** → *Editar zona* e crie:

| Tipo  | Nome | Valor                 |
|-------|------|-----------------------|
| A     | (vazio) | 185.199.108.153    |
| A     | (vazio) | 185.199.109.153    |
| A     | (vazio) | 185.199.110.153    |
| A     | (vazio) | 185.199.111.153    |
| CNAME | www  | SEU-USUARIO.github.io |

A propagação pode levar de minutos até 24 h.

## Atualizar o site
Edite os arquivos → `git add .` → `git commit -m "descrição"` → `git push`. O GitHub publica sozinho em ~1 minuto.
Para trocar o currículo, substitua `curriculo-marcos-andrade.pdf` mantendo o mesmo nome.
