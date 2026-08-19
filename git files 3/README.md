# Meu Portfólio — Space Garden Edition

Tema espaço + plantas: fundo estrelado animado (mesma técnica do CSS do seu
itch.io) combinado com flores/vinhas pixel art bioluminescentes. Já vem com
seus projetos reais da itch.io como cards, e dois pontos de acesso rápido aos
seus links (barra no topo do hero + dock flutuante no canto da tela).

## Estrutura (precisa ficar exatamente assim no GitHub)

```
nome-do-repositorio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── img/
    ├── sprite-flower.png
    ├── sprite-vine.png
    └── sprite-star.png
```

## Como subir

1. Junte tudo (arquivos + pastas `css`, `js`, `img`) dentro de uma única pasta no seu PC
2. No repositório do GitHub: **Add file → Upload files**
3. Arraste o conteúdo inteiro da pasta de uma vez (não arquivo por arquivo)
4. Confirme que `css/style.css`, `js/script.js` e as imagens aparecem na lista antes de confirmar
5. **Commit changes** → espere 1–2 min → `Ctrl+Shift+R` no navegador pra ver sem cache

## O que personalizar

- **`seuemail@gmail.com`** aparece em 3 lugares — troque pelo seu e-mail real
  (busca por "seuemail" no `index.html` pra achar todos)
- **Links do GitHub** — troque `github.com/seu-usuario` pelo seu perfil real
- **Cards de projeto** — já estão com dados reais do seu itch.io (Flowers n' Plants,
  Luminescência, Nano Aware, Water Flow, Jogo dos Pássaros, CrownFall).
  Ajuste descrições, adicione mais jogos ou troque os sprites de capa
  (`img/sprite-*.png`) por screenshots reais de cada jogo
- **Seção Sobre** — escreva sua bio real no lugar do texto de exemplo
- **`css/style.css`** → cores no topo do arquivo, dentro de `:root`

## Sobre as imagens dos projetos

Os cards usam 3 sprites pixel art originais (flor, vinha, estrela) como capas
temporárias — não são screenshots reais dos jogos. Recomendo trocar pelos
prints reais de cada jogo (pode baixar direto da página deles na itch.io)
pra ficar mais profissional.
