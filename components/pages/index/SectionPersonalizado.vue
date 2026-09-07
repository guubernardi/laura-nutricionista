<template>
  <section class="personalizado escuro" id="personalizado">
    <div class="conteudo">
      <div class="planilha revela-esq" v-revelar>
        <div class="quadro">
          <div class="folha">
            <div class="barra">
              <div class="pontos"><i></i><i></i><i></i></div>
              <p>dieta_padrao_1200kcal.xlsx</p>
            </div>

            <div class="grade">
              <div class="linha titulos">
                <span>Horário</span>
                <span>Refeição</span>
                <span>Qtd</span>
              </div>

              <div class="linha" v-for="item in PLANILHA" :key="item.hora + item.refeicao">
                <span>{{ item.hora }}</span>
                <span>{{ item.refeicao }}</span>
                <span>{{ item.qtd }}</span>
              </div>
            </div>
          </div>

          <svg class="risco" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true" focusable="false">
            <line x1="4" y1="4" x2="96" y2="96" />
            <line x1="96" y1="4" x2="4" y2="96" />
          </svg>

          <div class="carimbo icone-revela" v-revelar="520">
            <SvgIcone nome="x" />
            <p>Aqui não é assim</p>
          </div>
        </div>
      </div>

      <div class="texto">
        <div class="cabecalho revela-dir" v-revelar="120">
          <div class="etiqueta">Nada de dieta pronta</div>
          <h2>
            Você não recebe uma planilha,
            <span>recebe um plano que é seu</span>
          </h2>
        </div>

        <p class="chamada revela-dir" v-revelar="200">
          Aquela folha com horário fixo e comida pesada na balança funciona por duas semanas. Depois a vida acontece, o plano não cabe mais e a culpa
          sobra pra você.
        </p>

        <div class="pontos-lista">
          <div class="ponto revela" v-for="(ponto, i) in PONTOS" :key="ponto.titulo" v-revelar="280 + i * 90">
            <div class="icone icone-revela" v-revelar="280 + i * 90 + 240">
              <SvgIcone nome="check-limpo" />
            </div>
            <div class="dados">
              <p>{{ ponto.titulo }}</p>
              <span>{{ ponto.texto }}</span>
            </div>
          </div>
        </div>

        <a class="botao revela" :href="LINK_AGENDAMENTO" target="_blank" rel="noopener" v-revelar="560">
          <span>Quero um plano assim</span>
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

// dieta generica de exemplo, so pra ilustrar o que a secao esta negando
const PLANILHA = [
  { hora: '07:00', refeicao: '2 claras de ovo', qtd: '60 g' },
  { hora: '09:30', refeicao: '1 maçã', qtd: '100 g' },
  { hora: '12:00', refeicao: 'Frango grelhado', qtd: '120 g' },
  { hora: '12:00', refeicao: 'Brócolis no vapor', qtd: '80 g' },
  { hora: '15:00', refeicao: 'Whey com água', qtd: '1 dose' },
  { hora: '19:00', refeicao: 'Tilápia cozida', qtd: '130 g' },
  { hora: '21:00', refeicao: 'Chá sem açúcar', qtd: '200 ml' }
]

const PONTOS = [
  {
    titulo: 'Parte do que você já come',
    texto: 'Eu monto em cima da sua rotina de verdade, não de um cardápio que serve pra qualquer pessoa.'
  },
  {
    titulo: 'Cabe no seu tempo e no seu bolso',
    texto: 'Se você almoça fora todo dia ou cozinha no domingo pra semana inteira, o plano nasce sabendo disso.'
  },
  {
    titulo: 'Muda quando a sua vida muda',
    texto: 'Viagem, mudança de horário, fase mais corrida. A gente ajusta em vez de você abandonar tudo.'
  }
]
</script>

<style lang="sass" scoped>
section.personalizado
  position: relative
  display: flex
  justify-content: center
  width: 100%
  padding: 140px 40px 200px 40px
  background-color: var(--cor-verde-escuro)

.conteudo
  display: grid
  grid-template-columns: 1fr 1fr
  align-items: center
  gap: 90px
  width: 100%
  max-width: var(--largura)

// ---------- planilha riscada ----------

.planilha
  display: flex
  justify-content: flex-start
  width: 100%

.quadro
  position: relative
  width: 100%
  max-width: 540px

.folha
  width: 100%
  overflow: hidden
  border: 1px solid var(--cor-cinza-claro)
  border-radius: 22px
  background-color: var(--cor-branco)
  box-shadow: 0 18px 50px rgba(46, 107, 62, 0.1)
  // a planilha e o que a secao nega: entra dessaturada, sem peso visual
  filter: grayscale(0.55)

  .barra
    display: flex
    align-items: center
    gap: 14px
    padding: 14px 20px 14px 20px
    border-bottom: 1px solid var(--cor-cinza-claro)
    background-color: var(--cor-fundo)

    p
      font-family: var(--light)
      font-size: var(--f1)
      color: var(--cor-cinza)

  .pontos
    display: flex
    align-items: center
    gap: 6px

    i
      width: 9px
      height: 9px
      border-radius: 50%
      background-color: var(--cor-cinza-claro)

.grade
  display: flex
  flex-direction: column

.linha
  display: grid
  grid-template-columns: 84px 1fr 76px
  gap: 10px
  padding: 14px 22px 14px 22px
  border-bottom: 1px solid var(--cor-cinza-claro)

  span
    font-family: var(--light)
    font-size: var(--f1)
    color: var(--cor-cinza)

  span:last-child
    text-align: right

  &:last-child
    border-bottom: 0

.linha.titulos
  background-color: var(--cor-fundo)

  span
    font-family: var(--bold)
    font-size: var(--f0)
    letter-spacing: 1.2px
    text-transform: uppercase
    color: var(--cor-verde-escuro)

// preserveAspectRatio none estica o viewBox ate a folha, entao o X encosta nos
// cantos qualquer que seja a altura da tabela. duas barras rotacionadas por CSS
// nao teriam como saber essa proporcao
.risco
  position: absolute
  top: 0
  left: 0
  z-index: 2
  width: 100%
  height: 100%
  pointer-events: none
  // o X e revelado por uma cortina da esquerda pra direita, como se fosse riscado
  clip-path: inset(0 100% 0 0)
  transition: clip-path 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.2s

  line
    stroke: var(--cor-verde-escuro)
    stroke-width: 7
    stroke-linecap: round
    vector-effect: non-scaling-stroke

// o v-revelar poe .revelado no bloco inteiro, entao o X so se desenha na entrada
.planilha.revelado .risco
  clip-path: inset(0 0 0 0)

.carimbo
  position: absolute
  right: -34px
  bottom: 34px
  z-index: 3
  display: flex
  align-items: center
  gap: 10px
  padding: 12px 22px 12px 16px
  border-radius: 100px
  background-color: var(--cor-branco)
  box-shadow: 0 12px 34px rgba(0, 0, 0, 0.3)
  font-size: 20px
  color: var(--cor-verde)

  p
    font-family: var(--bold)
    font-size: var(--f2)
    white-space: nowrap
    color: var(--cor-verde-escuro)

// ---------- coluna do texto ----------

.texto
  display: flex
  flex-direction: column
  align-items: flex-start

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
  margin: 24px 0 0 0
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

.chamada
  margin: 24px 0 0 0
  font-family: var(--light)
  font-size: var(--f3)
  line-height: 1.75
  text-wrap: pretty
  color: var(--cor-verde-suave)

.pontos-lista
  display: flex
  flex-direction: column
  gap: 22px
  width: 100%
  margin: 36px 0 0 0

.ponto
  display: flex
  align-items: flex-start
  gap: 16px

  .icone
    display: flex
    align-items: center
    justify-content: center
    width: 40px
    min-width: 40px
    height: 40px
    border-radius: 50%
    background-color: var(--cor-verde-suave)
    font-size: 17px
    color: var(--cor-verde-escuro)

  .dados p
    font-family: var(--bold)
    font-size: var(--f3)
    line-height: 1.4
    color: var(--cor-branco)

  .dados span
    display: block
    margin: 6px 0 0 0
    font-family: var(--light)
    font-size: var(--f2)
    line-height: 1.65
    text-wrap: pretty
    color: var(--cor-verde-suave)

.botao
  display: flex
  align-items: center
  gap: 20px
  margin: 44px 0 0 0
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

@media (prefers-reduced-motion: reduce)
  .risco,
  .planilha.revelado .risco
    clip-path: none
    transition: none

@media screen and (max-width: 1000px)
  section.personalizado
    padding: 90px 20px 140px 20px

  .conteudo
    grid-template-columns: 1fr
    gap: 50px

  .planilha
    order: 1
    justify-content: center

  // o non-scaling-stroke mantem os 7px do desktop, que num card estreito viram
  // tarja e engolem a tabela
  .risco line
    stroke-width: 5

  .linha
    grid-template-columns: 62px 1fr 60px
    gap: 8px
    padding: 12px 16px 12px 16px

  .folha .barra
    padding: 12px 16px 12px 16px

  .texto
    order: 2
    align-items: center
    text-align: center

  .ponto
    text-align: left

  .carimbo
    right: 50%
    bottom: -24px
    padding: 10px 18px 10px 14px
    transform: translateX(50%)

  .botao
    justify-content: center
    width: 100%
</style>
