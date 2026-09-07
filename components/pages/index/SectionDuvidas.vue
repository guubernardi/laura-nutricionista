<template>
  <section class="duvidas" id="duvidas">
    <div class="conteudo">
      <div class="lado revela-esq" v-revelar>
        <div class="etiqueta">Dúvidas</div>
        <h2>
          O que as pacientes
          <span>mais perguntam antes</span>
        </h2>
        <p>Se a sua dúvida não estiver aqui, é só me chamar. Eu respondo pessoalmente.</p>

        <a class="botao" :href="LINK_AGENDAMENTO" target="_blank" rel="noopener">
          <span>Tirar minha dúvida</span>
          <div class="seta">
            <SvgIcone nome="whatsapp" />
          </div>
        </a>
      </div>

      <div class="lista">
        <div class="pergunta revela" :class="{ ativa: abertas.includes(i) }" v-for="(item, i) in PERGUNTAS" :key="item.pergunta" v-revelar="i * 70">
          <button :aria-expanded="abertas.includes(i)" :aria-controls="`resposta-${i}`" @click="alternar(i)">
            <span>{{ item.pergunta }}</span>
            <div class="sinal">
              <SvgIcone nome="chevron-baixo" />
            </div>
          </button>

          <div class="resposta" :id="`resposta-${i}`">
            <div class="interno">
              <p>{{ item.resposta }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <ElementosOnda direcao="subindo" cor-frente="var(--cor-verde-escuro)" cor-atras="var(--cor-verde-suave)" />
  </section>
</template>

<script setup>
import { LINK_AGENDAMENTO } from '~/helpers/contato'

const PERGUNTAS = [
  {
    pergunta: 'Vou ter que cortar pão, arroz e doce?',
    resposta:
      'Não. O plano é montado em cima do que você já come, e nenhum alimento entra na lista de proibidos. O que muda é a quantidade, a combinação e o momento, para você ter saciedade sem abrir mão do que gosta.'
  },
  {
    pergunta: 'Em quanto tempo eu vejo resultado?',
    resposta:
      'A disposição e o intestino costumam responder nas primeiras semanas. Mudança de composição corporal aparece de forma consistente a partir do segundo mês. Fujo de prometer prazo fechado porque isso depende do seu histórico, do seu sono e da sua rotina.'
  },
  {
    pergunta: 'A consulta online funciona tão bem quanto a presencial?',
    resposta:
      'Funciona. A avaliação, o plano e o acompanhamento são os mesmos. A única diferença é a medição corporal feita no consultório, que no online a gente substitui por medidas que você mesma tira em casa, com orientação minha.'
  },
  {
    pergunta: 'Vou precisar comprar suplemento?',
    resposta:
      'Só se fizer diferença real no seu caso, e a decisão é sempre sua. Suplemento entra para cobrir uma falta específica, geralmente confirmada em exame. Não trabalho com venda de produto nem indico marca por comissão.'
  },
  {
    pergunta: 'Atende quem tem alguma condição de saúde?',
    resposta:
      'Sim. Diabetes, resistência à insulina, tireoide, síndrome dos ovários policísticos e questões intestinais são acompanhadas de perto, junto com seus exames. Se o caso pedir, converso com o seu médico.'
  },
  {
    pergunta: 'Preciso fechar pacote de vários meses?',
    resposta:
      'Não. Você marca a primeira consulta e decide depois se quer seguir com o acompanhamento. Sem fidelidade e sem cobrança recorrente presa a contrato.'
  }
]

// varias podem ficar abertas ao mesmo tempo. fechando a anterior a cada clique,
// o bloco de cima encolhia junto e puxava a pergunta clicada pra fora do cursor
const abertas = ref([0])

function alternar(i) {
  const posicao = abertas.value.indexOf(i)

  if (posicao === -1) abertas.value.push(i)
  else abertas.value.splice(posicao, 1)
}

// o mesmo array alimenta o acordeao e o rich result, entao os dois nunca divergem
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: PERGUNTAS.map((item) => ({
          '@type': 'Question',
          name: item.pergunta,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.resposta
          }
        }))
      })
    }
  ]
})
</script>

<style lang="sass" scoped>
section.duvidas
  position: relative
  display: flex
  justify-content: center
  width: 100%
  padding: 140px 40px 200px 40px
  background-color: var(--cor-fundo)

.conteudo
  display: grid
  grid-template-columns: 0.85fr 1.15fr
  align-items: start
  gap: 80px
  width: 100%
  max-width: var(--largura)

// ---------- coluna do titulo ----------

.lado
  display: flex
  flex-direction: column
  align-items: flex-start

.etiqueta
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

.lado > p
  margin: 22px 0 0 0
  font-family: var(--light)
  font-size: var(--f3)
  line-height: 1.7
  text-wrap: pretty
  color: var(--cor-cinza)

.botao
  display: flex
  align-items: center
  gap: 20px
  margin: 34px 0 0 0
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
    font-size: 21px
    color: var(--cor-verde-escuro)
    transition: transform 0.25s

  &:hover
    background-color: var(--cor-verde)

    .seta
      transform: translateX(4px)

// ---------- acordeao ----------

.lista
  display: flex
  flex-direction: column
  gap: 14px
  width: 100%

.pergunta
  overflow: hidden
  border: 1px solid var(--cor-cinza-claro)
  border-radius: 26px
  background-color: var(--cor-branco)
  transition: border-color 0.18s

  button
    display: flex
    align-items: center
    justify-content: space-between
    gap: 20px
    width: 100%
    padding: 24px 24px 24px 30px
    background-color: transparent
    text-align: left

    > span
      font-family: var(--bold)
      font-size: var(--f3)
      line-height: 1.45
      text-wrap: pretty
      color: var(--cor-verde-escuro)

  .sinal
    display: flex
    align-items: center
    justify-content: center
    width: 38px
    min-width: 38px
    height: 38px
    border-radius: 50%
    background-color: var(--cor-verde-claro)
    font-size: 15px
    color: var(--cor-verde)
    // apesar do nome, o chevron-baixo da lib desenha o bico pra cima. a base
    // gira pra apontar pra baixo, que e o que convida a abrir
    transform: rotate(180deg)
    transition: transform 0.3s, background-color 0.18s

.pergunta.ativa
  border-color: var(--cor-verde-suave)

  .sinal
    background-color: var(--cor-verde-escuro)
    color: var(--cor-verde-suave)
    transform: rotate(0deg)

// grid-template-rows de 0fr para 1fr anima a altura sem precisar saber o tamanho
// do texto, que e o que max-height fixo obrigaria a chutar
.resposta
  display: grid
  grid-template-rows: 0fr
  transition: grid-template-rows 0.35s cubic-bezier(0.22, 1, 0.36, 1)

  .interno
    overflow: hidden
    // tira a resposta fechada da arvore de acessibilidade, sem matar a transicao
    visibility: hidden
    transition: visibility 0.35s

  p
    padding: 0 30px 26px 30px
    font-family: var(--light)
    font-size: var(--f2)
    line-height: 1.75
    text-wrap: pretty
    color: var(--cor-cinza)

.pergunta.ativa .resposta
  grid-template-rows: 1fr

  .interno
    visibility: visible

@media (prefers-reduced-motion: reduce)
  .resposta,
  .resposta .interno,
  .pergunta .sinal
    transition: none

@media screen and (max-width: 1000px)
  section.duvidas
    padding: 90px 20px 140px 20px

  .conteudo
    grid-template-columns: 1fr
    gap: 44px

  .lado
    align-items: center
    text-align: center

  .botao
    justify-content: center
    width: 100%

  .pergunta button
    padding: 20px 18px 20px 22px

    span
      font-size: var(--f2)

  .resposta p
    padding: 0 22px 22px 22px
</style>
