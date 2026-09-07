<template>
  <svg v-if="props.nome === 'marca'" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M47 96V68C47 65.2386 48.3431 63 50 63C51.6569 63 53 65.2386 53 68V96H47Z" />
    <path d="M50 76C54 58 64 46 82 42C81 61 70 73 50 76Z" />
    <path d="M50 76C46 58 36 46 18 42C19 61 30 73 50 76Z" />
    <path d="M50 58C54 42 62 30 78 22C79 42 68 54 50 58Z" />
    <path d="M50 58C46 42 38 30 22 22C21 42 32 54 50 58Z" />
    <path d="M50 46C42 34 42 20 50 8C58 20 58 34 50 46Z" />
  </svg>
</template>

<script setup>
const props = defineProps({
  nome: String
})
</script>
