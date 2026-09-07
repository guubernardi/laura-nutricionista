// Um unico IntersectionObserver para a pagina inteira, em vez de um por elemento
const atrasos = new WeakMap()
const revelados = new WeakSet()
let observador = null

// folga sobre a mais longa das transicoes de revelacao (0.85s no revela-esq/dir)
const DURACAO_REVELACAO = 900

function obterObservador() {
  if (observador) return observador

  observador = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        if (!entrada.isIntersecting) return

        const el = entrada.target
        el.classList.add('revelado')
        revelados.add(el)
        observador.unobserve(el)

        // o transition-delay e inline, entao vale tambem para o hover do
        // elemento. sai assim que a revelacao termina, senao um botao com
        // v-revelar so troca de cor depois desse atraso
        const atraso = atrasos.get(el)
        if (atraso) {
          setTimeout(() => {
            el.style.transitionDelay = ''
            atrasos.delete(el)
          }, atraso + DURACAO_REVELACAO)
        }
      })
    },
    { threshold: 0.12, rootMargin: '0px 0px -70px 0px' }
  )

  return observador
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('revelar', {
    mounted(el, binding) {
      if (typeof IntersectionObserver === 'undefined') {
        el.classList.add('revelado')
        return
      }

      const atraso = Number(binding.value) || 0
      if (atraso) {
        el.style.transitionDelay = `${atraso}ms`
        atrasos.set(el, atraso)
      }

      obterObservador().observe(el)
    },

    // o Vue reescreve o atributo class inteiro quando um :class do mesmo elemento
    // muda, e leva junto o revelado, que foi posto por classList.add. sem isso o
    // elemento volta a opacity 0 e some no primeiro clique
    updated(el) {
      if (revelados.has(el)) el.classList.add('revelado')
    },

    unmounted(el) {
      observador?.unobserve(el)
      atrasos.delete(el)
      revelados.delete(el)
    }
  })
})
