<template>
  <svg v-if="props.nome === 'marca'" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M47 96V68C47 65.2386 48.3431 63 50 63C51.6569 63 53 65.2386 53 68V96H47Z" />
    <path d="M50 76C54 58 64 46 82 42C81 61 70 73 50 76Z" />
    <path d="M50 76C46 58 36 46 18 42C19 61 30 73 50 76Z" />
    <path d="M50 58C54 42 62 30 78 22C79 42 68 54 50 58Z" />
    <path d="M50 58C46 42 38 30 22 22C21 42 32 54 50 58Z" />
    <path d="M50 46C42 34 42 20 50 8C58 20 58 34 50 46Z" />
  </svg>

  <svg v-else-if="props.nome === 'gustavo-bernardi'" viewBox="0 0 51 55" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M27 31H28L34 16.5V18.5L29 30.5L34 20.5L33.5 20L30 30.5L34 22.5V21.5L31.5 30.5H30.5L31.5 29.5V29L34 24V23.5L32.5 30.5L33.5 30L34 29.5V30.5V26.5L33 29.5L34 26L29.5 30.5H28.5" stroke="currentColor" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M19 53.5V25.5H26V32.5H39.5H40.5L42.5 30.5V28.5L41 26.5L40 26H37V19H44L49.5 24.5L50 25V33L46.5 36.5L49.5 39.5L50 40V47.5L49.5 48L49 48.5L43.5 54H43H19V53.5ZM43 42.5L40.5 40H40H26V47H40.5L43 44.5V42.5Z" fill="currentColor" />
    <path d="M35 12.5H27.5V11L24.5 8H11L8 11V27L11.5 30.5H16.5V38H8.5L0.5 30V8L8 0.5H27.5L34.5 7L35 7.5V12.5Z" fill="currentColor" />
    <path d="M27.5 31V23.5L25.5 23.4286L13.5 23V16H24H34H34.5V31H28M19 53.5V25.5H26V32.5H39.5H40.5L42.5 30.5V28.5L41 26.5L40 26H37V19H44L49.5 24.5L50 25V33L46.5 36.5L49.5 39.5L50 40V47.5L49.5 48L49 48.5L43.5 54H43H19V53.5ZM40.5 40L43 42.5V44.5L40.5 47H26V40H40H40.5ZM35 12.5H27.5V11L24.5 8H11L8 11V27L11.5 30.5H16.5V38H8.5L0.5 30V8L8 0.5H27.5L34.5 7L35 7.5V12.5Z" stroke="currentColor" />
    <rect x="13.5" y="16.5" width="18" height="7" fill="currentColor" />
    <path d="M28 27L28.5 23.5H29.5L29 25L28 27.5" stroke="currentColor" />
    <path d="M28 29L32 16.5H33H33.5L29.5 25.5L32.5 17L28 30" stroke="currentColor" />
    <rect x="32.5" y="16.5" width="1" height="1" fill="currentColor" />
  </svg>
</template>

<script setup>
// gustavo-bernardi usa currentColor em vez de fill fixo, entao a assinatura
// acompanha o color do elemento que a envolve
const props = defineProps({
  nome: String
})
</script>
