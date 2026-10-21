# By Carlos Henrique — Site/portfólio

Site estático (HTML, CSS e JavaScript puros), sem build e sem dependências. A Vercel publica direto.

## Como publicar (GitHub + Vercel)

1. Extraia o ZIP. Dentro da pasta `by-carlos-henrique-site` estão `index.html`, `css`, `js`, `assets` e outros arquivos.
2. Crie um repositório no GitHub e envie **o conteúdo da pasta** (o `index.html` precisa ficar na raiz do repositório).
   - Pelo site do GitHub: "Add file" > "Upload files", arraste tudo e faça o commit.
   - Os vídeos somam cerca de 25 MB. Se o upload pelo navegador falhar, use o GitHub Desktop ou o git no terminal.
3. Na Vercel: "Add New" > "Project" > importe o repositório.
4. Configurações: **Framework Preset: Other**. Deixe Build Command e Output Directory em branco. Clique em Deploy.

## Estrutura

```
index.html        estrutura da página
css/style.css     visual (cores, fontes, animações)
js/main.js        hora ao vivo, trabalhos, carrossel, menu e player
assets/img/       hero, sobre, logo, favicon, prints e capas dos trabalhos
assets/video/     vídeos de trabalho (com som) e de infância (sem som)
vercel.json       cache dos arquivos de /assets
```

## Como editar

- **Trabalhos** (título, categoria, ordem, vídeo e capa): lista `WORKS` no começo de `js/main.js`. A ordem da lista é a ordem na página.
- **Trocar um vídeo ou imagem**: substitua o arquivo em `assets/` mantendo o mesmo nome, ou mude o caminho no `js/main.js` ou no `index.html`.
- **Cores**: variáveis no começo do `css/style.css` (`--blue`, `--blue2`, `--pink`, `--gray`).
- **Textos, WhatsApp e links**: `index.html`.

## Observações

- Fontes: Anton e Poppins carregam pelo Google Fonts. A Neue Montreal ainda não está no projeto, e o corpo do texto usa a Inter como substituta. Para usar a Neue Montreal, coloque os arquivos em `assets/fonts/` e declare com `@font-face` no `css/style.css`.
- Vídeos grandes pesam no carregamento. Mantenha os novos em torno de 720p e até uns 10 MB cada.
