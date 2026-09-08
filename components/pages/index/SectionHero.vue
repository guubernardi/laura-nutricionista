<template>
  <section class="hero" id="hero">
    <div class="conteudo">
      <div class="texto">
        <h1>
          Transforme sua relação com a comida
          <span>sem dietas restritivas, culpa ou sofrimento</span>
        </h1>

        <p class="chamada">
          Com uma <b>orientação leve e personalizada</b>, você aprende a se alimentar com consciência, prazer e equilíbrio, alcançando
          <b>resultados reais e sustentáveis</b>.
        </p>

        <a class="botao" :href="LINK_AGENDAMENTO" target="_blank" rel="noopener" aria-label="Agendar consulta com a nutricionista Laura Barbosa pelo WhatsApp">
          <span>Quero agendar minha consulta</span>
          <div class="seta">
            <SvgIcone nome="seta-direita-fina" />
          </div>
        </a>
      </div>

      <div class="foto">
        <svg class="formas" viewBox="0 0 620 820" preserveAspectRatio="xMidYMax meet" aria-hidden="true" focusable="false">
          <circle class="brilho" cx="340" cy="330" r="300" />
          <path class="fita grossa" d="M40 820C40 430 150 170 470 40" />
          <path class="fita media" d="M170 820C160 480 260 250 610 150" />
          <path class="fita fina" d="M280 820C260 540 350 340 620 270" />
        </svg>

        <div class="moldura">
          <NuxtImg
            src="/imagens/laura.png"
            alt="Laura Barbosa, nutricionista, de jaleco branco segurando um caderno"
            width="732"
            height="1471"
            preload
            draggable="false"
          />

          <div class="selo">
            <div class="avatar">
              <NuxtImg src="/imagens/laura-hero.png" alt="" width="150" height="180" aria-hidden="true" draggable="false" />
            </div>
            <div class="usuario">
              <p>Laura Barbosa</p>
              <SvgIcone nome="check-onda" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <ElementosOnda direcao="descendo" cor-frente="var(--cor-verde-escuro)" cor-atras="var(--cor-verde-suave)" />
  </section>
</template>

<script setup>
import { LINK_AGENDAMENTO } from '~/helpers/contato'
</script>

<style lang="sass" scoped>
section.hero
  position: relative
  display: flex
  align-items: flex-end
  justify-content: center
  width: 100%
  min-height: 100vh
  padding: 120px 40px 0 40px
  background: radial-gradient(120% 90% at 78% 40%, var(--cor-verde-claro) 0%, var(--cor-fundo) 62%)
  overflow: hidden

.conteudo
  display: grid
  grid-template-columns: 1fr 1fr
  align-items: end
  gap: 60px
  width: 100%
  max-width: var(--largura)

// ---------- coluna do texto ----------

.texto
  display: flex
  flex-direction: column
  align-items: flex-start
  padding: 0 0 190px 0

h1
  max-width: 620px
  font-family: var(--light)
  font-size: var(--f11)
  line-height: 1.16
  letter-spacing: -0.5px
  // equilibra as linhas do titulo, senao sobra uma palavra sozinha no fim
  text-wrap: balance
  color: var(--cor-verde-escuro)
  opacity: 0
  animation: subindo 0.8s ease forwards

  span
    font-style: italic
    color: var(--cor-verde-medio)

.chamada
  max-width: 480px
  margin: 26px 0 0 0
  font-family: var(--light)
  font-size: var(--f3)
  line-height: 1.7
  // impede que a ultima linha do paragrafo termine com uma palavra sozinha
  text-wrap: pretty
  color: var(--cor-cinza)
  opacity: 0
  animation: subindo 0.8s ease 0.12s forwards

  b
    font-family: var(--bold)
    color: var(--cor-verde-escuro)

.botao
  display: flex
  align-items: center
  gap: 20px
  margin: 40px 0 0 0
  padding: 10px 10px 10px 32px
  border-radius: 100px
  background-color: var(--cor-verde-escuro)
  opacity: 0
  animation: subindo 0.8s ease 0.24s forwards
  transition: background-color 0.18s

  > span
    font-family: var(--light)
    font-size: var(--f2)
    color: var(--cor-branco)

  .seta
    display: flex
    align-items: center
    justify-content: center
    width: 46px
    min-width: 46px
    height: 46px
    border-radius: 50%
    background-color: var(--cor-verde-suave)
    font-size: 20px
    color: var(--cor-verde-escuro)
    transition: transform 0.25s

  &:hover
    background-color: var(--cor-verde)

    .seta
      transform: translateX(4px)

// ---------- coluna da foto ----------

.foto
  position: relative
  display: flex
  align-items: flex-end
  justify-content: center
  width: 100%

.moldura
  position: relative
  z-index: 1
  display: flex
  align-items: flex-end
  max-width: 100%

  // o recorte e alto e estreito: quem manda e a altura, senao a cabeca sai da tela
  img
    width: auto
    max-width: 100%
    height: auto
    max-height: calc(100vh - 120px)
    object-fit: contain
    object-position: bottom center
    opacity: 0
    animation: subindo 1s ease 0.16s forwards

.formas
  position: absolute
  bottom: 0
  left: 50%
  z-index: 0
  width: 122%
  height: 100%
  transform: translateX(-50%)
  pointer-events: none

  .brilho
    fill: var(--cor-verde-claro)
    opacity: 0.9

  .fita
    fill: none
    stroke: var(--cor-verde-suave)
    stroke-linecap: round

  .grossa
    stroke-width: 74
    opacity: 0.55

  .media
    stroke-width: 22

  .fina
    stroke-width: 9
    opacity: 0.7

.selo
  position: absolute
  bottom: 130px
  left: -70px
  z-index: 4
  display: flex
  align-items: center
  gap: 12px
  padding: 10px 22px 10px 10px
  border-radius: 100px
  background-color: var(--cor-verde-suave)
  box-shadow: 0 8px 26px rgba(46, 107, 62, 0.14)
  opacity: 0
  animation: subindo 0.8s ease 0.5s forwards

  .avatar
    position: relative
    overflow: hidden
    width: 52px
    min-width: 52px
    height: 52px
    border-radius: 50%
    background-color: var(--cor-verde-claro)

    // contain em vez de recorte no rosto: a foto inteira cabe no circulo
    img
      width: 100%
      max-width: none
      height: 100%
      max-height: none
      object-fit: contain
      animation: none
      opacity: 1

  .usuario
    display: flex
    align-items: center
    gap: 6px
    font-size: 14px
    color: var(--cor-verde)

    p
      font-family: var(--bold)
      font-size: var(--f2)
      color: var(--cor-verde-escuro)

// o hero anima no carregamento, entao fica de fora do bloco global do animations.sass
@media (prefers-reduced-motion: reduce)
  h1,
  .chamada,
  .botao,
  .moldura img,
  .selo
    opacity: 1
    animation: none

  .botao .seta
    transition: none

@media screen and (max-width: 1000px)
  section.hero
    align-items: flex-start
    min-height: auto
    padding: 110px 20px 0 20px

  .conteudo
    grid-template-columns: 1fr
    gap: 30px

  .texto
    align-items: center
    padding: 0
    text-align: center

  h1
    font-size: var(--f9)
    line-height: 1.18

  .chamada
    margin: 22px 0 0 0
    font-size: var(--f2)
    line-height: 1.65

  .botao
    justify-content: center
    gap: 14px
    width: 100%
    margin: 28px 0 0 0
    padding: 8px 8px 8px 26px

    .seta
      width: 42px
      min-width: 42px
      height: 42px

  .foto
    padding: 0 0 60px 0

  .moldura img
    max-height: 62vh

  .selo
    bottom: 40px
    left: -20px
</style>
