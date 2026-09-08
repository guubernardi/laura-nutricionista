<template>
  <section class="situacoes escuro" id="situacoes">
    <div class="conteudo">
      <div class="cabecalho revela" v-revelar>
        <div class="etiqueta">Você se identifica?</div>
        <h2>
          Se alguma dessas frases é sua,
          <span>o problema nunca foi força de vontade</span>
        </h2>
      </div>

      <div class="cards">
        <div class="card revela" v-for="(situacao, i) in SITUACOES" :key="situacao.titulo" v-revelar="i * 80">
          <div class="icone icone-revela" v-revelar="i * 80 + 260">
            <SvgIcone :nome="situacao.icone" />
          </div>
          <h3>{{ situacao.titulo }}</h3>
          <p>{{ situacao.texto }}</p>
        </div>
      </div>

      <div class="fecho revela" v-revelar="140">
        <p>Nada disso se resolve com mais restrição. Se resolve com um plano que cabe na sua rotina e respeita o que você gosta de comer.</p>

        <a class="botao" :href="LINK_AGENDAMENTO" target="_blank" rel="noopener">
          <span>Quero mudar isso</span>
          <div class="seta">
            <SvgIcone nome="seta-direita-fina" />
          </div>
        </a>
      </div>
    </div>

    <ElementosOnda direcao="subindo" cor-frente="var(--cor-branco)" cor-atras="var(--cor-verde)" />
  </section>
</template>

<script setup>
import { LINK_AGENDAMENTO } from '~/helpers/contato'

const SITUACOES = [
  {
    icone: 'repetir',
    titulo: 'Você emagrece e engorda de novo',
    texto: 'Toda dieta funciona por um tempo. Depois o peso volta, e junto com ele a sensação de ter falhado mais uma vez.'
  },
  {
    icone: 'refeicao',
    titulo: 'O fim de semana sempre desanda',
    texto: 'Você se controla de segunda a sexta e sente que joga tudo fora em dois dias.'
  },
  {
    icone: 'emoji-triste',
    titulo: 'Comer virou motivo de culpa',
    texto: 'Um pedaço de bolo estraga o seu dia e vira uma conta mental que não para de rodar.'
  },
  {
    icone: 'raio',
    titulo: 'Vive cansada e sem disposição',
    texto: 'Acorda pesada, atravessa o dia no automático e já achou que isso fosse normal.'
  },
  {
    icone: 'calendario-x',
    titulo: 'Nenhuma dieta durou até o fim',
    texto: 'Você já tentou low carb, jejum e contagem de calorias. Nada resistiu à sua rotina real.'
  },
  {
    icone: 'duvida',
    titulo: 'Não sabe mais em quem acreditar',
    texto: 'Cada perfil fala uma coisa diferente e você fica sem saber o que de fato serve pra você.'
  }
]
</script>

<style lang="sass" scoped>
section.situacoes
  position: relative
  display: flex
  justify-content: center
  width: 100%
  padding: 150px 40px 200px 40px
  background-color: var(--cor-verde-escuro)

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
  max-width: 900px
  text-align: center

  .etiqueta
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
    margin: 26px 0 0 0
    font-family: var(--light)
    font-size: var(--f9)
    line-height: 1.24
    letter-spacing: -0.4px
    text-wrap: balance
    color: var(--cor-branco)

    span
      display: block
      font-family: var(--bold)
      color: var(--cor-verde-suave)

.cards
  display: grid
  grid-template-columns: repeat(3, 1fr)
  gap: 24px
  width: 100%
  margin: 70px 0 0 0

.card
  display: flex
  flex-direction: column
  align-items: flex-start
  padding: 34px 32px 34px 32px
  border: 1px solid rgba(255, 255, 255, 0.1)
  border-radius: 26px
  background-color: rgba(255, 255, 255, 0.05)

  .icone
    display: flex
    align-items: center
    justify-content: center
    width: 52px
    min-width: 52px
    height: 52px
    border-radius: 50%
    background-color: var(--cor-verde-suave)
    font-size: 24px
    color: var(--cor-verde-escuro)

  h3
    margin: 24px 0 0 0
    font-family: var(--bold)
    font-size: var(--f4)
    line-height: 1.32
    text-wrap: balance
    color: var(--cor-branco)

  p
    margin: 12px 0 0 0
    font-family: var(--light)
    font-size: var(--f2)
    line-height: 1.7
    text-wrap: pretty
    color: var(--cor-verde-suave)

.fecho
  display: flex
  flex-direction: column
  align-items: center
  max-width: 720px
  margin: 70px 0 0 0
  text-align: center

  p
    font-family: var(--light)
    font-size: var(--f4)
    line-height: 1.7
    text-wrap: pretty
    color: var(--cor-branco)

.botao
  display: flex
  align-items: center
  gap: 20px
  margin: 34px 0 0 0
  padding: 10px 10px 10px 32px
  border-radius: 100px
  background-color: var(--cor-verde-suave)
  transition: background-color 0.18s

  > span
    font-family: var(--light)
    font-size: var(--f2)
    color: var(--cor-verde-escuro)

  .seta
    display: flex
    align-items: center
    justify-content: center
    width: 46px
    min-width: 46px
    height: 46px
    border-radius: 50%
    background-color: var(--cor-verde-escuro)
    font-size: 20px
    color: var(--cor-verde-suave)
    transition: transform 0.25s

  &:hover
    background-color: var(--cor-branco)

    .seta
      transform: translateX(4px)

@media screen and (max-width: 1000px)
  section.situacoes
    padding: 90px 20px 140px 20px

  .cards
    grid-template-columns: 1fr
    gap: 16px
    margin: 44px 0 0 0

  .card
    padding: 28px 24px 28px 24px

  .fecho
    margin: 44px 0 0 0

  .botao
    justify-content: center
    width: 100%
</style>
