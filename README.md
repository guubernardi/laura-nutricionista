# Laura Barbosa Nutricionista

Landing page da nutricionista Laura Barbosa, apresentando um atendimento nutricional personalizado, sem dietas restritivas, e convertendo visitantes em agendamento de consulta pelo WhatsApp.

**Site no ar:** https://laura-nutricionista.vercel.app

## Destaques

- Nove seções na home (Hero, Situações, Sobre, Atendimentos, Como Funciona, Personalizado, Depoimentos, Dúvidas, CTA), com animação de entrada no hero e revelação no scroll pela diretiva customizada `v-revelar` — um único `IntersectionObserver` reaproveitado para a página inteira.
- Contador numérico animado (diretiva `v-contar`) com easing próprio, disparado quando o número entra na viewport.
- Divisor de seção em onda SVG reutilizável (componente `Onda`), com variações de cor e direção por seção.
- Acessibilidade: fallback via `<noscript>` que exibe o conteúdo revelado quando JavaScript está desabilitado, e respeito a `prefers-reduced-motion` nas animações do hero.
- SEO on-page: Open Graph, Twitter Card, favicons em múltiplos tamanhos, `sitemap.xml` e `robots.txt`.
- Design tokens em CSS vars, com escala tipográfica fluida (`clamp()`) e fontes Figtree self-hosted.

## Stack

- [Nuxt 3](https://nuxt.com/) (Vue 3, SSR)
- [Pinia](https://pinia.vuejs.org/)
- SASS indentado (`sass-embedded`)
- [@nuxt/image](https://image.nuxt.com/)
- [@edusites/icons](https://www.npmjs.com/package/@edusites/icons)
- Axios, mitt (event bus)

## Estrutura

```
components/
  global/     # elementos de UI (botão, campo, onda), footer, nav, svgs
  pages/      # seções da home e páginas de documentos (políticas, termos)
helpers/      # contato.js (links de WhatsApp/e-mail), formatacao.js
plugins/      # revelar.js (scroll reveal), contador.js, ícones
pages/        # index, documentos/politicas, documentos/termos
public/       # imagens, fontes, favicons, sitemap, robots
```

## Rodando localmente

```bash
pnpm install
pnpm dev      # ambiente de desenvolvimento
pnpm build    # build de produção
pnpm preview  # servir o build gerado
```

---

Desenvolvido por [Gustavo Bernardi](https://github.com/guubernardi)
