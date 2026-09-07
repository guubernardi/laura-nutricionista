<template>
  <section class="como-funciona" id="como-funciona">
    <div class="conteudo">
      <div class="cabecalho revela" v-revelar>
        <div class="etiqueta">Como funciona</div>
        <h2>
          Do primeiro oi
          <span>ao plano na sua mão</span>
        </h2>
        <p>Quatro passos, sem burocracia e sem surpresa no meio do caminho.</p>
      </div>

      <div class="etapas">
        <div class="etapa revela" v-for="(etapa, i) in ETAPAS" :key="etapa.titulo" v-revelar="i * 90">
          <div class="marcador">
            <div class="numero sobe-revela" v-revelar="i * 90 + 280">{{ String(i + 1).padStart(2, '0') }}</div>
          </div>

          <h3>{{ etapa.titulo }}</h3>
          <p>{{ etapa.texto }}</p>
          <span class="prazo">{{ etapa.prazo }}</span>
        </div>
      </div>

      <div class="fecho revela" v-revelar="140">
        <div class="texto">
          <p>Da primeira mensagem até o plano na sua mão, costuma levar menos de uma semana.</p>
          <span>Sem fila de espera e sem pacote fechado de vários meses.</span>
        </div>

        <a class="botao" :href="LINK_AGENDAMENTO" target="_blank" rel="noopener">
          <span>Começar pelo passo 1</span>
          <div class="seta">
            <SvgIcone nome="seta-direita-fina" />
          </div>
        </a>
      </div>
    </div>

    <ElementosOnda direcao="descendo" cor-frente="var(--cor-verde-escuro)" cor-atras="var(--cor-verde-suave)" />
  </section>
</template>

<script setup>
import { LINK_AGENDAMENTO } from '~/helpers/contato'

const ETAPAS = [
  {
    titulo: 'Você me chama no WhatsApp',
    texto: 'Me conta rapidamente o que está te incomodando e a gente marca a consulta no horário que funciona pra você.',
    prazo: 'Resposta no mesmo dia'
  },
  {
    titulo: 'A gente conversa por uma hora',
    texto: 'Eu escuto sua rotina, seu histórico, seus exames e tudo o que você já tentou antes. Sem julgamento nenhum.',
    prazo: 'Online ou presencial'
  },
  {
    titulo: 'Seu plano é montado do zero',
    texto: 'A partir do que você gosta de comer, do seu orçamento e dos horários que você realmente tem livres.',
    prazo: 'Pronto em até 3 dias'
  },
  {
    titulo: 'A gente ajusta pelo caminho',
    texto: 'Nos retornos a gente revisa o que funcionou e corrige o que não coube na prática. O plano acompanha a sua vida.',
    prazo: 'A cada 30 dias'
  }
]
</script>

<style lang="sass" scoped>
section.como-funciona
  position: relative
  display: flex
  justify-content: center
  width: 100%
  padding: 140px 40px 200px 40px
  background-color: var(--cor-branco)

.conteudo
  display: flex
  flex-direction: column
  align-items: center
  width: 100%
  max-width: var(--largura)

.cabecalho
  display: flex
  flex-direction: column
  align-items: center
  max-width: 820px
  text-align: center

  .etiqueta
    padding: 8px 20px 8px 20px
    border: 1px solid var(--cor-cinza-claro)
    border-radius: 100px
    background-color: var(--cor-branco)
    font-family: var(--light)
    font-size: var(--f0)
    letter-spacing: 1.4px
    text-transform: uppercase
    color: var(--cor-verde-medio)

  h2
    margin: 26px 0 0 0
    font-family: var(--light)
    font-size: var(--f9)
    line-height: 1.24
    letter-spacing: -0.4px
    text-wrap: balance
    color: var(--cor-verde-escuro)

    span
      display: block
      font-family: var(--bold)
      color: var(--cor-verde)

  > p
    margin: 20px 0 0 0
    font-family: var(--light)
    font-size: var(--f3)
    line-height: 1.7
    text-wrap: pretty
    color: var(--cor-cinza)

.etapas
  display: grid
  grid-template-columns: repeat(4, 1fr)
  gap: 30px
  width: 100%
  margin: 80px 0 0 0

.etapa
  display: flex
  flex-direction: column
  align-items: flex-start

.marcador
  position: relative
  display: flex
  align-items: center
  width: 100%

  .numero
    display: flex
    align-items: center
    justify-content: center
    width: 64px
    min-width: 64px
    height: 64px
    border-radius: 50%
    background-color: var(--cor-verde-claro)
    font-family: var(--bold)
    font-size: var(--f4)
    color: var(--cor-verde)

  // liga um numero ao seguinte, atravessando o gap do grid
  &::after
    content: ''
    position: absolute
    top: 50%
    right: -30px
    left: 80px
    height: 1px
    background-color: var(--cor-cinza-claro)

.etapa:last-child .marcador::after
  display: none

h3
  margin: 26px 0 0 0
  font-family: var(--bold)
  font-size: var(--f4)
  line-height: 1.32
  text-wrap: balance
  color: var(--cor-verde-escuro)

.etapa > p
  margin: 12px 0 0 0
  font-family: var(--light)
  font-size: var(--f2)
  line-height: 1.7
  text-wrap: pretty
  color: var(--cor-cinza)

.prazo
  margin: 18px 0 0 0
  padding: 7px 16px 7px 16px
  border-radius: 100px
  background-color: var(--cor-verde-claro)
  font-family: var(--light)
  font-size: var(--f1)
  color: var(--cor-verde)

.fecho
  display: flex
  align-items: center
  justify-content: space-between
  gap: 40px
  width: 100%
  margin: 70px 0 0 0
  padding: 36px 40px 36px 48px
  border-radius: 40px
  background-color: var(--cor-verde-claro)

  .texto p
    font-family: var(--bold)
    font-size: var(--f4)
    line-height: 1.5
    text-wrap: pretty
    color: var(--cor-verde-escuro)

  .texto span
    display: block
    margin: 8px 0 0 0
    font-family: var(--light)
    font-size: var(--f2)
    line-height: 1.6
    color: var(--cor-cinza)

.botao
  display: flex
  align-items: center
  gap: 20px
  padding: 10px 10px 10px 32px
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

@media (prefers-reduced-motion: reduce)
  .etapa::before,
  .etapa.revelado::before
    transform: scaleY(1)
    transition: none

@media screen and (max-width: 1200px)
  .etapas
    grid-template-columns: repeat(2, 1fr)
    gap: 44px 30px

  // na grade de duas colunas a linha so faria sentido no par da esquerda
  .marcador::after
    display: none

@media screen and (max-width: 1000px)
  section.como-funciona
    padding: 90px 20px 140px 20px

  .etapas
    grid-template-columns: 1fr
    gap: 30px
    margin: 44px 0 0 0

  // vira timeline: numero na coluna da esquerda, conteudo na direita
  .etapa
    position: relative
    display: grid
    grid-template-columns: 64px 1fr
    align-items: start
    gap: 6px 18px
    text-align: left

    // segmento que desce deste numero ate o proximo, atravessando o gap.
    // cresce quando a etapa e revelada, entao a linha se desenha na rolagem
    &::before
      content: ''
      position: absolute
      top: 64px
      left: 31px
      width: 2px
      height: calc(100% - 34px)
      background-color: var(--cor-cinza-claro)
      transform: scaleY(0)
      transform-origin: top center
      transition: transform 0.55s ease 0.15s

  .etapa.revelado::before
    transform: scaleY(1)

  .etapa:last-child::before
    display: none

  .marcador
    grid-column: 1
    grid-row: 1 / 4
    justify-content: center
    width: 64px

  h3
    grid-column: 2
    margin: 0

  .etapa > p
    grid-column: 2

  .prazo
    grid-column: 2
    justify-self: start
    margin: 14px 0 0 0

  .fecho
    flex-direction: column
    margin: 44px 0 0 0
    padding: 30px 24px 30px 24px
    text-align: center

  .botao
    justify-content: center
    width: 100%
</style>
