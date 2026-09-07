<template>
  <section class="sobre" id="sobre">
    <div class="conteudo">
      <div class="foto revela-esq" v-revelar>
        <div class="quadro">
          <div class="fundo"></div>

          <div class="moldura">
            <NuxtImg src="/imagens/laura-hero.png" alt="Laura Barbosa, nutricionista clínica" width="720" height="864" loading="lazy" draggable="false" />
          </div>

          <div class="registro sobe-revela" v-revelar="360">
            <SvgIcone nome="check-onda" />
            <div class="dados">
              <p>{{ REGISTRO }}</p>
              <span>Nutricionista clínica</span>
            </div>
          </div>
        </div>
      </div>

      <div class="texto">
        <div class="cabecalho revela-dir" v-revelar="120">
          <div class="etiqueta">Quem vai te acompanhar</div>
          <h2>
            Nutrição feita pra sua vida real,
            <span>não pra uma planilha</span>
          </h2>
        </div>

        <div class="paragrafos revela-dir" v-revelar="200">
          <p>
            Sou nutricionista clínica e passei os últimos anos atendendo mulheres que chegavam no consultório repetindo a mesma frase: já tentei de
            tudo.
          </p>
          <p>
            O que eu faço é diferente do que você já tentou. Em vez de entregar uma folha com o que pode e o que não pode, eu monto o plano a partir da
            sua rotina, do seu orçamento e do que você realmente gosta de comer.
          </p>
          <p>Não é a abordagem mais fácil. É a que dura, porque não depende de você viver no limite da força de vontade.</p>
        </div>

        <div class="numeros">
          <div class="numero revela" v-for="(item, i) in NUMEROS" :key="item.rotulo" v-revelar="280 + i * 80">
            <p v-contar="item">{{ item.prefixo }}{{ item.valor }}{{ item.sufixo }}</p>
            <span>{{ item.rotulo }}</span>
          </div>
        </div>

        <a class="botao revela" :href="LINK_AGENDAMENTO" target="_blank" rel="noopener" v-revelar="520">
          <span>Marcar minha primeira consulta</span>
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

// provisorios: confirmar registro e numeros com a Laura antes de publicar
const REGISTRO = 'CRN-3 12345'

const NUMEROS = [
  { prefixo: '+', valor: 500, sufixo: '', rotulo: 'pacientes acompanhadas' },
  { prefixo: '', valor: 7, sufixo: ' anos', rotulo: 'de consultório' },
  { prefixo: '', valor: 100, sufixo: '%', rotulo: 'dos planos feitos do zero' }
]
</script>

<style lang="sass" scoped>
section.sobre
  position: relative
  display: flex
  justify-content: center
  width: 100%
  padding: 130px 40px 200px 40px
  background-color: var(--cor-branco)

.conteudo
  display: grid
  grid-template-columns: 1fr 1fr
  align-items: center
  gap: 80px
  width: 100%
  max-width: var(--largura)

// ---------- coluna da foto ----------

.foto
  display: flex
  align-items: center
  justify-content: center
  width: 100%

// o quadro encolhe ate a largura da foto, entao a forma de tras e o selo
// se posicionam pela imagem e nao pela coluna do grid
.quadro
  position: relative
  width: 100%
  max-width: 520px

  .fundo
    position: absolute
    top: -26px
    left: -26px
    z-index: 0
    width: 100%
    height: 100%
    border-radius: 260px 260px 40px 40px
    background-color: var(--cor-verde-claro)

  .moldura
    position: relative
    z-index: 1
    overflow: hidden
    width: 100%
    border-radius: 260px 260px 40px 40px

    img
      display: block
      width: 100%
      height: auto

.registro
  position: absolute
  right: -30px
  bottom: 40px
  z-index: 2
  display: flex
  align-items: center
  gap: 12px
  padding: 14px 24px 14px 18px
  border-radius: 100px
  background-color: var(--cor-branco)
  box-shadow: 0 10px 30px rgba(46, 107, 62, 0.14)
  font-size: 26px
  color: var(--cor-verde)

  .dados p
    font-family: var(--bold)
    font-size: var(--f2)
    color: var(--cor-verde-escuro)

  .dados span
    display: block
    margin: 2px 0 0 0
    font-family: var(--light)
    font-size: var(--f1)
    color: var(--cor-cinza)

// ---------- coluna do texto ----------

.texto
  display: flex
  flex-direction: column
  align-items: flex-start

.etiqueta
  // inline-flex encolhe ate o texto: como div block ela esticava na largura do h2
  display: inline-flex
  align-items: center
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
  margin: 24px 0 0 0
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

.paragrafos
  margin: 28px 0 0 0

  p
    font-family: var(--light)
    font-size: var(--f3)
    line-height: 1.75
    text-wrap: pretty
    color: var(--cor-cinza)

    & + p
      margin: 18px 0 0 0

.numeros
  display: grid
  grid-template-columns: repeat(3, 1fr)
  gap: 20px
  width: 100%
  margin: 40px 0 0 0
  padding: 30px 0 0 0
  border-top: 1px solid var(--cor-cinza-claro)

.numero
  p
    font-family: var(--bold)
    font-size: var(--f7)
    line-height: 1.1
    font-variant-numeric: tabular-nums
    color: var(--cor-verde)

  span
    display: block
    margin: 8px 0 0 0
    font-family: var(--light)
    font-size: var(--f1)
    line-height: 1.5
    text-wrap: pretty
    color: var(--cor-cinza)

.botao
  display: flex
  align-items: center
  gap: 20px
  margin: 44px 0 0 0
  padding: 10px 10px 10px 32px
  border-radius: 100px
  background-color: var(--cor-verde-escuro)
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

@media screen and (max-width: 1000px)
  section.sobre
    padding: 80px 20px 140px 20px

  .conteudo
    grid-template-columns: 1fr
    gap: 44px

  .foto
    order: 1

  .quadro
    max-width: 340px

    .fundo
      top: -16px
      left: -16px

  .texto
    order: 2
    align-items: center
    text-align: center

  .registro
    right: 50%
    bottom: -22px
    padding: 10px 18px 10px 12px
    font-size: 22px
    transform: translateX(50%)

    .dados p
      font-size: var(--f1)

    .dados span
      white-space: nowrap

  // tres paragrafos centralizados numa coluna estreita cansam a leitura.
  // o cabecalho segue centralizado, so o corpo alinha a esquerda
  .paragrafos
    text-align: left

  .numeros
    grid-template-columns: 1fr
    gap: 24px
    margin: 34px 0 0 0
    text-align: center

  .botao
    justify-content: center
    width: 100%
    margin: 34px 0 0 0
</style>
