<template>
  <IndexSectionHero />
  <IndexSectionSituacoes />
  <IndexSectionSobre />
  <IndexSectionAtendimentos />
  <IndexSectionComoFunciona />
  <IndexSectionPersonalizado />
  <IndexSectionDepoimentos />
  <IndexSectionDuvidas />
  <IndexSectionCta />
</template>

<script setup>
definePageMeta({
  layout: 'web'
})

const TITULO = 'Laura Barbosa | Nutricionista'
const DESCRICAO =
  'Nutrição sem dietas restritivas, culpa ou sofrimento. Orientação leve e personalizada para você comer com consciência, prazer e equilíbrio.'

useHead({
  title: TITULO,
  meta: [
    { name: 'description', content: DESCRICAO },
    { property: 'og:title', content: TITULO },
    { property: 'og:description', content: DESCRICAO }
  ]
})
</script>
