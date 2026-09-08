// Conta de zero ate o valor final quando o numero entra na tela.
// Um unico IntersectionObserver para a pagina inteira, igual ao v-revelar.
const dados = new WeakMap()
let observador = null

const DURACAO = 1600

function animar(el) {
  const item = dados.get(el)
  if (!item) return

  const inicio = performance.now()

  function passo(agora) {
    const t = Math.min((agora - inicio) / DURACAO, 1)
    // easeOutExpo: dispara rapido e assenta devagar no numero final
    const suave = t === 1 ? 1 : 1 - Math.pow(2, -10 * t)

    el.textContent = item.prefixo + Math.round(item.valor * suave) + item.sufixo

    if (t < 1) requestAnimationFrame(passo)
  }

  requestAnimationFrame(passo)
}

function obterObservador() {
  if (observador) return observador

  observador = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        if (!entrada.isIntersecting) return
        observador.unobserve(entrada.target)
        animar(entrada.target)
      })
    },
    { threshold: 0.4 }
  )

  return observador
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('contar', {
    mounted(el, binding) {
      const valor = Number(binding.value?.valor ?? binding.value) || 0

      // sem observer ou com movimento reduzido o numero final ja veio no HTML
      if (typeof IntersectionObserver === 'undefined') return
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      dados.set(el, {
        valor,
        prefixo: binding.value?.prefixo || '',
        sufixo: binding.value?.sufixo || ''
      })

      el.textContent = `${binding.value?.prefixo || ''}0${binding.value?.sufixo || ''}`
      obterObservador().observe(el)
    },

    unmounted(el) {
      observador?.unobserve(el)
      dados.delete(el)
    }
  })
})
