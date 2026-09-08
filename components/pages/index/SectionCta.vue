<template>
  <section class="cta escuro" id="contato">
    <Svgs class="marca-fundo" nome="marca" aria-hidden="true" />

    <div class="conteudo">
      <div class="etiqueta revela" v-revelar>Vamos começar?</div>

      <h2 class="revela" v-revelar="80">
        Sua próxima consulta
        <span>pode ser ainda esta semana</span>
      </h2>

      <p class="revela" v-revelar="160">
        Me manda uma mensagem contando o que está te incomodando. Eu respondo pessoalmente e a gente marca o horário que couber na sua rotina.
      </p>

      <a class="botao revela" :href="LINK_AGENDAMENTO" target="_blank" rel="noopener" v-revelar="240">
        <span>Agendar minha consulta</span>
        <div class="seta">
          <SvgIcone nome="whatsapp" />
        </div>
      </a>

      <div class="garantias">
        <div class="garantia revela" v-for="(item, i) in GARANTIAS" :key="item" v-revelar="320 + i * 80">
          <SvgIcone nome="check-onda" />
          <p>{{ item }}</p>
        </div>
      </div>
    </div>

    <ElementosOnda direcao="descendo" cor-frente="var(--cor-branco)" cor-atras="var(--cor-verde-suave)" />
  </section>
</template>

<script setup>
import { LINK_AGENDAMENTO } from '~/helpers/contato'

const GARANTIAS = ['Resposta no mesmo dia', 'Online ou presencial', 'Sem pacote fechado']
</script>

<style lang="sass" scoped>
section.cta
  position: relative
  display: flex
  justify-content: center
  width: 100%
  padding: 150px 40px 200px 40px
  background-color: var(--cor-verde-escuro)
  overflow: hidden

// a folha da marca vira textura de fundo, ancorada no canto
.marca-fundo
  position: absolute
  right: -70px
  bottom: -120px
  z-index: 0
  width: 460px
  fill: var(--cor-branco)
  opacity: 0.04
  pointer-events: none

.conteudo
  position: relative
  z-index: 1
  display: flex
  flex-direction: column
  align-items: center
  width: 100%
  max-width: 900px
  text-align: center

.etiqueta
  display: inline-flex
  align-items: center
  padding: 8px 20px 8px 20px
  border: 1px solid rgba(255, 255, 255, 0.16)
  border-radius: 100px
  background-color: rgba(255, 255, 255, 0.06)
  font-family: var(--light)
  font-size: var(--f0)
  letter-spacing: 1.4px
  text-transform: uppercase
  color: var(--cor-verde-suave)

h2
  margin: 28px 0 0 0
  font-family: var(--light)
  font-size: var(--f10)
  line-height: 1.2
  letter-spacing: -0.5px
  text-wrap: balance
  color: var(--cor-branco)

  span
    display: block
    font-family: var(--bold)
    color: var(--cor-verde-suave)

.conteudo > p
  max-width: 620px
  margin: 24px 0 0 0
  font-family: var(--light)
  font-size: var(--f3)
  line-height: 1.75
  text-wrap: pretty
  color: var(--cor-verde-suave)

.botao
  display: flex
  align-items: center
  gap: 20px
  margin: 40px 0 0 0
  padding: 12px 12px 12px 36px
  border-radius: 100px
  background-color: var(--cor-verde-suave)
  transition: background-color 0.18s

  > span
    font-family: var(--bold)
    font-size: var(--f3)
    color: var(--cor-verde-escuro)

  .seta
    display: flex
    align-items: center
    justify-content: center
    width: 50px
    min-width: 50px
    height: 50px
    border-radius: 50%
    background-color: var(--cor-verde-escuro)
    font-size: 23px
    color: var(--cor-verde-suave)
    transition: transform 0.25s

  &:hover
    background-color: var(--cor-branco)

    .seta
      transform: translateX(4px)

.garantias
  display: flex
  align-items: center
  justify-content: center
  flex-wrap: wrap
  gap: 16px 34px
  margin: 44px 0 0 0

.garantia
  display: flex
  align-items: center
  gap: 9px
  font-size: 17px
  color: var(--cor-verde-medio)

  p
    font-family: var(--light)
    font-size: var(--f2)
    white-space: nowrap
    color: var(--cor-verde-suave)

@media screen and (max-width: 1000px)
  section.cta
    padding: 90px 20px 140px 20px

  .marca-fundo
    right: -90px
    bottom: -80px
    width: 280px

  .botao
    justify-content: center
    width: 100%
    padding: 10px 10px 10px 28px

    > span
      font-size: var(--f2)

  .garantias
    flex-direction: column
    gap: 14px
    margin: 34px 0 0 0
</style>
