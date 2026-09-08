<template>
  <footer>
    <Svgs class="marca-fundo" nome="marca" aria-hidden="true" />

    <div class="conteudo">
      <div class="marca">
        <a class="logo" href="/#hero" aria-label="Laura Barbosa, nutricionista, voltar ao início">
          <Svgs nome="marca" />
          <div class="nome">
            <p class="titulo">Laura Barbosa</p>
            <p class="cargo">Nutricionista</p>
          </div>
        </a>

        <p class="frase">Nutrição sem dietas restritivas, culpa ou sofrimento. Um acompanhamento leve, que cabe na sua rotina e respeita a sua história.</p>

        <div class="redes">
          <a
            v-for="rede in REDES"
            :key="rede.nome"
            :href="rede.link"
            :aria-label="rede.nome"
            :target="rede.externo ? '_blank' : null"
            :rel="rede.externo ? 'noopener' : null"
          >
            <SvgIcone :nome="rede.icone" />
          </a>
        </div>
      </div>

      <nav class="coluna">
        <p class="titulo-coluna">Navegue</p>
        <a v-for="link in LINKS" :key="link.id" :href="`/#${link.id}`">{{ link.nome }}</a>
      </nav>

      <nav class="coluna">
        <p class="titulo-coluna">Atendimento</p>
        <a :href="LINK_AGENDAMENTO" target="_blank" rel="noopener">Agendar consulta</a>
        <a :href="LINK_INSTAGRAM" target="_blank" rel="noopener">@{{ INSTAGRAM }}</a>
        <a :href="LINK_EMAIL">{{ EMAIL }}</a>
      </nav>
    </div>

    <div class="assinatura escuro">
      <div class="interno">
        <p class="direitos">© {{ ANO }} Laura Barbosa · {{ REGISTRO }} · Todos os direitos reservados</p>

        <a class="desenvolvedor" href="https://www.gustavobernardi.com" target="_blank" rel="noopener" aria-label="Desenvolvido por Gustavo Bernardi, abrir gustavobernardi.com">
          <span>Desenvolvido por</span>
          <Svgs nome="gustavo-bernardi" aria-hidden="true" />
          <p>Gustavo Bernardi</p>
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { EMAIL, INSTAGRAM, LINK_AGENDAMENTO, LINK_EMAIL, LINK_INSTAGRAM, REGISTRO } from '~/helpers/contato'

// mesmas ancoras do Nav, mas com a barra na frente: nas paginas de documentos
// um href so com hash nao sai do lugar, o link precisa voltar pra home antes.
// aqui vai <a> em vez de NuxtLink porque o router chega na home com o hash na
// url e nao rola ate a secao; o link comum resolve o fragmento no navegador
const LINKS = [
  { nome: 'Início', id: 'hero' },
  { nome: 'Sobre', id: 'sobre' },
  { nome: 'Atendimentos', id: 'atendimentos' },
  { nome: 'Como funciona', id: 'como-funciona' },
  { nome: 'Depoimentos', id: 'depoimentos' },
  { nome: 'Dúvidas', id: 'duvidas' }
]

// o mailto abre o cliente de e-mail, entao nao leva target _blank: no
// navegador isso deixa uma aba vazia para tras
const REDES = [
  { nome: 'WhatsApp', icone: 'whatsapp', link: LINK_AGENDAMENTO, externo: true },
  { nome: 'Instagram', icone: 'instagram', link: LINK_INSTAGRAM, externo: true },
  { nome: 'E-mail', icone: 'envelope-1', link: LINK_EMAIL, externo: false }
]

const ANO = new Date().getFullYear()
</script>

<style scoped lang="sass">
footer
  position: relative
  display: flex
  flex-direction: column
  align-items: center
  width: 100%
  background-color: var(--cor-branco)
  overflow: hidden

// mesma folha do CTA virando textura, agora ancorada na esquerda pra nao repetir o enquadramento
.marca-fundo
  position: absolute
  left: -90px
  top: -80px
  z-index: 0
  width: 380px
  fill: var(--cor-verde-medio)
  opacity: 0.06
  pointer-events: none

.conteudo
  position: relative
  z-index: 1
  display: grid
  grid-template-columns: minmax(0, 1fr) auto auto
  align-items: start
  gap: 70px
  width: 100%
  max-width: var(--largura)
  padding: 90px 40px 70px 40px

// ---------- bloco da marca ----------

.marca
  display: flex
  flex-direction: column
  align-items: flex-start
  max-width: 420px

.logo
  display: flex
  align-items: center
  gap: 12px

  svg
    width: 34px
    min-width: 34px
    fill: var(--cor-verde-medio)

  .titulo
    font-family: var(--light)
    font-size: var(--f4)
    line-height: 1.1
    color: var(--cor-verde-escuro)

  .cargo
    margin: 4px 0 0 0
    font-family: var(--light)
    font-size: var(--f0)
    letter-spacing: 1.4px
    text-transform: uppercase
    color: var(--cor-verde-medio)

.frase
  margin: 24px 0 0 0
  font-family: var(--light)
  font-size: var(--f2)
  line-height: 1.75
  text-wrap: pretty
  color: var(--cor-cinza)

.redes
  display: flex
  align-items: center
  gap: 12px
  margin: 28px 0 0 0

  a
    display: flex
    align-items: center
    justify-content: center
    width: 44px
    min-width: 44px
    height: 44px
    border: 1px solid var(--cor-cinza-claro)
    border-radius: 50%
    background-color: var(--cor-fundo)
    font-size: 18px
    color: var(--cor-verde)
    transition: background-color 0.3s, border-color 0.3s, color 0.3s

    &:hover
      border-color: var(--cor-verde-escuro)
      background-color: var(--cor-verde-escuro)
      color: var(--cor-verde-suave)

// ---------- colunas de links ----------

.coluna
  display: flex
  flex-direction: column
  align-items: flex-start
  gap: 14px

  .titulo-coluna
    margin: 0 0 4px 0
    font-family: var(--bold)
    font-size: var(--f0)
    letter-spacing: 1.4px
    text-transform: uppercase
    color: var(--cor-verde-medio)

  a
    font-family: var(--light)
    font-size: var(--f2)
    line-height: 1.4
    overflow-wrap: anywhere
    color: var(--cor-cinza)
    transition: color 0.3s

    &:hover
      color: var(--cor-verde)

// ---------- faixa de assinatura ----------

.assinatura
  position: relative
  z-index: 1
  display: flex
  justify-content: center
  width: 100%
  background-color: var(--cor-verde-escuro)

.interno
  display: flex
  align-items: center
  justify-content: space-between
  gap: 24px
  width: 100%
  max-width: var(--largura)
  padding: 22px 40px 22px 40px

.direitos
  font-family: var(--light)
  font-size: var(--f1)
  line-height: 1.6
  color: var(--cor-verde-suave)

.desenvolvedor
  display: flex
  align-items: center
  gap: 10px
  padding: 8px 18px 8px 18px
  border: 1px solid rgba(255, 255, 255, 0.14)
  border-radius: 100px
  background-color: rgba(255, 255, 255, 0.05)
  color: var(--cor-branco)
  transition: background-color 0.3s, border-color 0.3s

  span
    font-family: var(--light)
    font-size: var(--f1)
    white-space: nowrap
    color: var(--cor-verde-suave)

  // a logo herda a cor pelo currentColor, entao acompanha o hover do bloco
  svg
    width: 15px
    min-width: 15px
    color: inherit

  p
    font-family: var(--bold)
    font-size: var(--f1)
    white-space: nowrap
    color: var(--cor-branco)

  &:hover
    border-color: var(--cor-verde-suave)
    background-color: rgba(255, 255, 255, 0.12)

@media screen and (max-width: 1200px)
  .conteudo
    gap: 40px

@media screen and (max-width: 1000px)
  .marca-fundo
    left: -110px
    top: -60px
    width: 260px

  // as duas colunas de links cabem lado a lado embaixo da marca
  .conteudo
    grid-template-columns: repeat(2, minmax(0, 1fr))
    gap: 40px 24px
    padding: 70px 20px 50px 20px

  .marca
    grid-column: 1 / -1
    max-width: 100%

  .interno
    flex-direction: column
    align-items: flex-start
    gap: 18px
    padding: 24px 20px 24px 20px

  .desenvolvedor
    justify-content: center
    width: 100%
</style>
