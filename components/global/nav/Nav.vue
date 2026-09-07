<template>
  <nav :class="{ rolado }">
    <Transition name="fundo">
      <div class="fundo" v-show="aberto" @click="fechar"></div>
    </Transition>

    <div class="conteudo">
      <a class="marca" href="#hero" aria-label="Laura Barbosa, nutricionista, voltar ao início">
        <Svgs nome="marca" />
        <div class="nome">
          <p class="titulo">Laura Barbosa</p>
          <p class="cargo">Nutricionista</p>
        </div>
      </a>

      <div class="links">
        <a v-for="link in LINKS" :key="link.id" :href="`#${link.id}`">{{ link.nome }}</a>
      </div>

      <a class="botao" :href="LINK_AGENDAMENTO" target="_blank" rel="noopener">
        <span>Agendar consulta</span>
        <div class="seta">
          <SvgIcone nome="seta-direita-fina" />
        </div>
      </a>

      <button class="menu" @click="alternar" :aria-expanded="aberto" aria-controls="menu-mobile" :aria-label="aberto ? 'Fechar menu' : 'Abrir menu'">
        <Transition name="icone" mode="out-in">
          <SvgIcone :key="aberto" :nome="aberto ? 'fechar' : 'menu'" />
        </Transition>
      </button>
    </div>

    <Transition name="gaveta">
      <div class="gaveta" id="menu-mobile" v-show="aberto">
        <a
          v-for="(link, i) in LINKS"
          :key="link.id"
          :href="`#${link.id}`"
          :style="{ animationDelay: `${60 + i * 45}ms` }"
          @click="fechar"
        >
          {{ link.nome }}
        </a>

        <a
          class="botao"
          :href="LINK_AGENDAMENTO"
          :style="{ animationDelay: `${60 + LINKS.length * 45}ms` }"
          target="_blank"
          rel="noopener"
          @click="fechar"
        >
          <span>Agendar consulta</span>
          <div class="seta">
            <SvgIcone nome="seta-direita-fina" />
          </div>
        </a>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { LINK_AGENDAMENTO } from '~/helpers/contato'

// as ancoras seguem os ids das sections, na ordem da pagina
const LINKS = [
  { nome: 'Início', id: 'hero' },
  { nome: 'Sobre', id: 'sobre' },
  { nome: 'Atendimentos', id: 'atendimentos' },
  { nome: 'Como funciona', id: 'como-funciona' },
  { nome: 'Depoimentos', id: 'depoimentos' },
  { nome: 'Dúvidas', id: 'duvidas' }
]

const rolado = ref(false)
const aberto = ref(false)

function aoRolar() {
  rolado.value = window.scrollY > 20
}

function alternar() {
  aberto.value = !aberto.value
  document.body.classList.toggle('bloqueado', aberto.value)
}

function fechar() {
  aberto.value = false
  document.body.classList.remove('bloqueado')
}

onMounted(() => {
  aoRolar()
  window.addEventListener('scroll', aoRolar, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', aoRolar)
  document.body.classList.remove('bloqueado')
})
</script>

<style scoped lang="sass">
nav
  position: fixed
  top: 0
  left: 0
  z-index: 10
  display: flex
  flex-direction: column
  align-items: center
  width: 100%
  padding: 22px 40px 0 40px

.fundo
  display: none

.conteudo
  position: relative
  z-index: 1
  display: flex
  align-items: center
  justify-content: space-between
  gap: 30px
  width: 100%
  max-width: var(--largura)
  padding: 11px 11px 11px 26px
  border: 1px solid var(--cor-cinza-claro)
  border-radius: 100px
  background-color: rgba(255, 255, 255, 0.82)
  backdrop-filter: blur(14px)
  box-shadow: 0 4px 20px rgba(46, 107, 62, 0.05)
  transition: background-color 0.3s, box-shadow 0.3s

// depois do topo a pilula fica opaca, senao o texto da secao passa por tras
nav.rolado .conteudo
  background-color: rgba(255, 255, 255, 0.95)
  box-shadow: 0 10px 30px rgba(46, 107, 62, 0.1)

.marca
  display: flex
  align-items: center
  gap: 12px

  svg
    width: 30px
    min-width: 30px
    fill: var(--cor-verde-medio)

  .titulo
    font-family: var(--light)
    font-size: var(--f3)
    line-height: 1.1
    color: var(--cor-verde-escuro)

  .cargo
    margin: 3px 0 0 0
    font-family: var(--light)
    font-size: var(--f0)
    letter-spacing: 1.4px
    text-transform: uppercase
    color: var(--cor-verde-medio)

.links
  display: flex
  align-items: center
  gap: 32px

  a
    position: relative
    font-family: var(--light)
    font-size: var(--f2)
    white-space: nowrap
    color: var(--cor-cinza)
    transition: color 0.3s

    &:hover
      color: var(--cor-verde)

.botao
  display: flex
  align-items: center
  gap: 12px
  padding: 7px 7px 7px 24px
  border-radius: 100px
  background-color: var(--cor-verde-escuro)
  transition: background-color 0.18s

  > span
    font-family: var(--light)
    font-size: var(--f2)
    white-space: nowrap
    color: var(--cor-branco)

  .seta
    display: flex
    align-items: center
    justify-content: center
    width: 34px
    min-width: 34px
    height: 34px
    border-radius: 50%
    background-color: var(--cor-verde-suave)
    font-size: 16px
    color: var(--cor-verde-escuro)
    transition: transform 0.25s

  &:hover
    background-color: var(--cor-verde)

    .seta
      transform: translateX(3px)

.menu
  display: none
  align-items: center
  justify-content: center
  width: 44px
  min-width: 44px
  height: 44px
  border-radius: 50%
  background-color: var(--cor-verde-claro)
  font-size: 20px
  color: var(--cor-verde-escuro)

.gaveta
  display: none

// ---------- entrada e saida do menu ----------

.fundo-enter-active,
.fundo-leave-active
  transition: opacity 0.3s ease

.fundo-enter-from,
.fundo-leave-to
  opacity: 0

// sai mais rapido do que entra: fechar precisa parecer imediato
.gaveta-enter-active
  transition: opacity 0.28s ease, transform 0.38s cubic-bezier(0.22, 1, 0.36, 1)

.gaveta-leave-active
  transition: opacity 0.16s ease, transform 0.16s ease

.gaveta-enter-from,
.gaveta-leave-to
  opacity: 0
  transform: translateY(-16px)

.icone-enter-active,
.icone-leave-active
  transition: opacity 0.16s ease, transform 0.2s ease

.icone-enter-from
  opacity: 0
  transform: rotate(-80deg) scale(0.6)

.icone-leave-to
  opacity: 0
  transform: rotate(80deg) scale(0.6)

@media screen and (max-width: 1200px)
  .links
    gap: 22px

    a
      font-size: var(--f1)

@media screen and (max-width: 1000px)
  nav
    padding: 14px 20px 0 20px

  .conteudo
    gap: 14px
    padding: 10px 10px 10px 18px

  // area de toque: sem isso a marca fica com 33px de altura, abaixo do minimo
  .marca
    min-height: 44px

  .marca svg
    width: 26px
    min-width: 26px

  .links,
  .conteudo .botao
    display: none

  .menu
    display: flex

  // sem esse fundo o conteudo do hero aparece por tras da gaveta
  .fundo
    position: fixed
    top: 0
    left: 0
    z-index: 0
    display: block
    width: 100%
    height: 100dvh
    background-color: rgba(27, 67, 38, 0.55)
    backdrop-filter: blur(6px)

  .gaveta
    position: relative
    z-index: 1
    display: flex
    flex-direction: column
    align-items: stretch
    gap: 4px
    width: 100%
    margin: 10px 0 0 0
    padding: 16px
    border: 1px solid var(--cor-cinza-claro)
    border-radius: 26px
    background-color: var(--cor-branco)
    box-shadow: 0 14px 34px rgba(46, 107, 62, 0.12)

    a
      padding: 13px 16px 13px 16px
      border-radius: 14px
      font-family: var(--light)
      font-size: var(--f3)
      color: var(--cor-verde-escuro)
      opacity: 0
      animation: subindo 0.42s ease forwards
      transition: background-color 0.18s

      &:hover
        background-color: var(--cor-verde-claro)

    .botao
      justify-content: center
      margin: 10px 0 0 0
      padding: 7px 7px 7px 24px
      border-radius: 100px
      opacity: 0
      animation: subindo 0.42s ease forwards

      &:hover
        background-color: var(--cor-verde-escuro)

@media (prefers-reduced-motion: reduce)
  .fundo-enter-active,
  .fundo-leave-active,
  .gaveta-enter-active,
  .gaveta-leave-active,
  .icone-enter-active,
  .icone-leave-active
    transition: none

  .gaveta a,
  .gaveta .botao
    opacity: 1
    animation: none
</style>
