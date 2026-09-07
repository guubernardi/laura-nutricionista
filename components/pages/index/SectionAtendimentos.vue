<template>
  <section class="atendimentos" id="atendimentos">
    <div class="conteudo">
      <div class="cabecalho revela" v-revelar>
        <div class="etiqueta">Atendimentos</div>
        <h2>
          Escolha o formato que
          <span>cabe na sua rotina</span>
        </h2>
        <p>O método é o mesmo nos três. O que muda é como a gente se encontra.</p>
      </div>

      <div class="cards">
        <div class="card revela" v-for="(tipo, i) in TIPOS" :key="tipo.titulo" v-revelar="i * 90">
          <div class="topo">
            <div class="icone icone-revela" v-revelar="i * 90 + 280">
              <SvgIcone :nome="tipo.icone" />
            </div>
            <div class="marcador" v-if="tipo.marcador">{{ tipo.marcador }}</div>
          </div>

          <h3>{{ tipo.titulo }}</h3>
          <p>{{ tipo.texto }}</p>

          <ul>
            <li v-for="item in tipo.itens" :key="item">
              <div class="check">
                <SvgIcone nome="check-limpo" />
              </div>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="incluso revela" v-revelar="120">
        <div class="titulo">
          <SvgIcone nome="check-onda" />
          <p>Todo atendimento inclui</p>
        </div>

        <div class="itens">
          <span v-for="item in INCLUSO" :key="item">{{ item }}</span>
        </div>
      </div>
    </div>

    <ElementosOnda direcao="subindo" cor-frente="var(--cor-branco)" cor-atras="var(--cor-verde-claro)" />
  </section>
</template>

<script setup>
// provisorio: confirmar a cidade do consultorio com a Laura
const CIDADE = 'São Paulo'

const TIPOS = [
  {
    icone: 'videochamada',
    marcador: 'Mais procurado',
    titulo: 'Consulta online',
    texto: 'Uma hora por chamada de vídeo, de onde você estiver. Mesma avaliação e mesmo plano do presencial.',
    itens: ['Agenda com horários à noite', 'Gravação da consulta pra rever', 'Atende o Brasil inteiro']
  },
  {
    icone: 'localizacao',
    marcador: '',
    titulo: 'Consulta presencial',
    texto: `No consultório em ${CIDADE}, com avaliação corporal completa feita na hora.`,
    itens: ['Bioimpedância e dobras cutâneas', 'Avaliação de circunferências', 'Plano impresso pra levar']
  },
  {
    icone: 'grafico-linha',
    marcador: '',
    titulo: 'Acompanhamento',
    texto: 'Retornos a cada 30 dias pra ajustar o plano conforme a sua vida muda, e não o contrário.',
    itens: ['Ajuste do plano a cada retorno', 'Suporte por WhatsApp entre consultas', 'Acompanhamento de exames']
  }
]

const INCLUSO = ['Plano alimentar montado do zero', 'Lista de compras', 'Receitas práticas', 'Orientação para comer fora', 'Sem alimento proibido']
</script>

<style lang="sass" scoped>
section.atendimentos
  position: relative
  display: flex
  justify-content: center
  width: 100%
  padding: 140px 40px 200px 40px
  background-color: var(--cor-fundo)

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

.cards
  display: grid
  grid-template-columns: repeat(3, 1fr)
  gap: 26px
  width: 100%
  margin: 70px 0 0 0

.card
  display: flex
  flex-direction: column
  align-items: flex-start
  padding: 36px 34px 36px 34px
  border: 1px solid var(--cor-cinza-claro)
  border-radius: 40px
  background-color: var(--cor-branco)
  box-shadow: var(--sombra)

  .topo
    display: flex
    align-items: center
    justify-content: space-between
    gap: 14px
    width: 100%

  .icone
    display: flex
    align-items: center
    justify-content: center
    width: 60px
    min-width: 60px
    height: 60px
    border-radius: 50%
    background-color: var(--cor-verde-claro)
    font-size: 27px
    color: var(--cor-verde)

  .marcador
    padding: 7px 16px 7px 16px
    border-radius: 100px
    background-color: var(--cor-verde-escuro)
    font-family: var(--light)
    font-size: var(--f0)
    letter-spacing: 1.2px
    text-transform: uppercase
    white-space: nowrap
    color: var(--cor-verde-suave)

  h3
    margin: 26px 0 0 0
    font-family: var(--bold)
    font-size: var(--f5)
    line-height: 1.3
    text-wrap: balance
    color: var(--cor-verde-escuro)

  > p
    margin: 12px 0 0 0
    font-family: var(--light)
    font-size: var(--f2)
    line-height: 1.7
    text-wrap: pretty
    color: var(--cor-cinza)

  ul
    display: flex
    flex-direction: column
    gap: 12px
    width: 100%
    margin: 26px 0 0 0
    margin-top: auto
    padding: 26px 0 0 0
    border-top: 1px solid var(--cor-cinza-claro)
    list-style: none

  li
    display: flex
    align-items: flex-start
    gap: 12px

    .check
      display: flex
      align-items: center
      justify-content: center
      width: 24px
      min-width: 24px
      height: 24px
      margin: 2px 0 0 0
      border-radius: 50%
      background-color: var(--cor-verde-claro)
      font-size: 12px
      color: var(--cor-verde)

    span
      font-family: var(--light)
      font-size: var(--f2)
      line-height: 1.6
      color: var(--cor-verde-escuro)

.incluso
  display: flex
  align-items: center
  justify-content: center
  flex-wrap: wrap
  gap: 16px 30px
  margin: 50px 0 0 0
  padding: 26px 40px 26px 40px
  border: 1px solid var(--cor-verde-suave)
  border-radius: 40px
  background-color: var(--cor-verde-claro)

  .titulo
    display: flex
    align-items: center
    gap: 10px
    font-size: 22px
    color: var(--cor-verde)

    p
      font-family: var(--bold)
      font-size: var(--f2)
      white-space: nowrap
      color: var(--cor-verde-escuro)

  .itens
    display: flex
    align-items: center
    flex-wrap: wrap
    gap: 10px 12px

  .itens span
    padding: 8px 18px 8px 18px
    border-radius: 100px
    background-color: var(--cor-branco)
    font-family: var(--light)
    font-size: var(--f1)
    color: var(--cor-cinza)

@media screen and (max-width: 1000px)
  section.atendimentos
    padding: 90px 20px 140px 20px

  .cards
    grid-template-columns: 1fr
    gap: 18px
    margin: 44px 0 0 0

  .card
    padding: 30px 26px 30px 26px

  .incluso
    flex-direction: column
    gap: 18px
    margin: 30px 0 0 0
    padding: 26px 22px 26px 22px

  .incluso .itens
    justify-content: center
</style>
