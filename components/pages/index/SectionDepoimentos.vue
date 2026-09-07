<template>
  <section class="depoimentos" id="depoimentos">
    <div class="conteudo">
      <div class="cabecalho revela" v-revelar>
        <div class="etiqueta">Depoimentos</div>
        <h2>
          Quem já passou por aqui
          <span>e não voltou pra dieta de antes</span>
        </h2>
      </div>

      <div class="cards">
        <div class="card revela" v-for="(depoimento, i) in DEPOIMENTOS" :key="depoimento.nome" v-revelar="i * 90">
          <div class="citacao icone-revela" v-revelar="i * 90 + 260">
            <SvgIcone nome="citacao" />
          </div>

          <div class="estrelas" :aria-label="`Avaliação ${depoimento.nota} de 5`">
            <SvgIcone v-for="n in depoimento.nota" :key="n" nome="estrela" aria-hidden="true" />
          </div>

          <p class="texto">{{ depoimento.texto }}</p>

          <div class="autora">
            <div class="inicial" aria-hidden="true">{{ depoimento.nome.charAt(0) }}</div>
            <div class="dados">
              <p>{{ depoimento.nome }}</p>
              <span>{{ depoimento.contexto }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="fecho revela" v-revelar="120">
        <p>Cada história é diferente, e a sua também vai ser.</p>

        <a class="botao" :href="LINK_AGENDAMENTO" target="_blank" rel="noopener">
          <span>Quero começar a minha</span>
          <div class="seta">
            <SvgIcone nome="seta-direita-fina" />
          </div>
        </a>
      </div>
    </div>

    <ElementosOnda direcao="descendo" cor-frente="var(--cor-fundo)" cor-atras="var(--cor-verde-claro)" />
  </section>
</template>

<script setup>
import { LINK_AGENDAMENTO } from '~/helpers/contato'

// PROVISORIO. Esses depoimentos foram escritos por mim so para dar forma a secao.
// Trocar pelos relatos reais das pacientes, com autorizacao por escrito, antes de
// publicar. Depoimento inventado de paciente e problema serio para profissional
// de saude, tanto no conselho quanto no CDC.
const DEPOIMENTOS = [
  {
    nome: 'Marina',
    contexto: 'Acompanhamento há 7 meses',
    nota: 5,
    texto:
      'Cheguei achando que ia receber mais uma folha proibindo tudo. Saí com um plano que tem pão, tem arroz e tem o doce de domingo. Perdi peso sem passar fome uma única vez.'
  },
  {
    nome: 'Camila',
    contexto: 'Acompanhamento há 1 ano',
    nota: 5,
    texto:
      'O que mudou pra mim foi parar de me sentir culpada depois de comer. A Laura tirou o peso moral da comida e o resto foi acontecendo sozinho.'
  },
  {
    nome: 'Juliana',
    contexto: 'Acompanhamento há 4 meses',
    nota: 5,
    texto:
      'Trabalho em escala e como fora quase todo dia. É o primeiro plano que alguém montou olhando pra isso, em vez de fingir que eu cozinho todas as refeições.'
  }
]
</script>

<style lang="sass" scoped>
section.depoimentos
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

.cards
  display: grid
  grid-template-columns: repeat(3, 1fr)
  gap: 26px
  width: 100%
  margin: 70px 0 0 0

.card
  position: relative
  display: flex
  flex-direction: column
  align-items: flex-start
  padding: 40px 34px 34px 34px
  border: 1px solid var(--cor-cinza-claro)
  border-radius: 40px
  background-color: var(--cor-fundo)

.citacao
  position: absolute
  top: -22px
  left: 34px
  display: flex
  align-items: center
  justify-content: center
  width: 48px
  min-width: 48px
  height: 48px
  border-radius: 50%
  background-color: var(--cor-verde-escuro)
  font-size: 20px
  color: var(--cor-verde-suave)

.estrelas
  display: flex
  align-items: center
  gap: 4px
  margin: 8px 0 0 0
  font-size: 16px
  color: var(--cor-verde-medio)

.texto
  margin: 20px 0 0 0
  font-family: var(--light)
  font-size: var(--f3)
  line-height: 1.75
  text-wrap: pretty
  color: var(--cor-verde-escuro)

.autora
  display: flex
  align-items: center
  gap: 14px
  width: 100%
  margin: 30px 0 0 0
  margin-top: auto
  padding: 26px 0 0 0
  border-top: 1px solid var(--cor-cinza-claro)

  // inicial em vez de foto: retrato de paciente so entra com autorizacao
  .inicial
    display: flex
    align-items: center
    justify-content: center
    width: 46px
    min-width: 46px
    height: 46px
    border-radius: 50%
    background-color: var(--cor-verde-claro)
    font-family: var(--bold)
    font-size: var(--f4)
    color: var(--cor-verde)

  .dados p
    font-family: var(--bold)
    font-size: var(--f2)
    color: var(--cor-verde-escuro)

  .dados span
    display: block
    margin: 3px 0 0 0
    font-family: var(--light)
    font-size: var(--f1)
    color: var(--cor-cinza)

.fecho
  display: flex
  align-items: center
  justify-content: center
  flex-wrap: wrap
  gap: 24px 40px
  margin: 60px 0 0 0

  p
    font-family: var(--light)
    font-size: var(--f4)
    text-wrap: pretty
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

@media screen and (max-width: 1000px)
  section.depoimentos
    padding: 90px 20px 140px 20px

  .cards
    grid-template-columns: 1fr
    gap: 40px
    margin: 60px 0 0 0

  .card
    padding: 36px 26px 30px 26px

  .fecho
    flex-direction: column
    gap: 22px
    margin: 44px 0 0 0
    text-align: center

  .botao
    justify-content: center
    width: 100%
</style>
