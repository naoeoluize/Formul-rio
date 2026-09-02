# Direção visual — Formulário do Pequeno Príncipe

## Três caminhos possíveis

### Abordagem 1 — Céu de Papel
Uma composição editorial inspirada em livro ilustrado: azul noite, creme de papel e amarelo-estrela, com bordas delicadas, texturas de papel e elementos desenhados à mão.

**Probability:** 0.07

### Abordagem 2 — Órbita de Aquarela
Uma interface leve e contemplativa, com manchas de aquarela, planetas flutuantes e formulário integrado a um painel translúcido, transmitindo curiosidade e ternura.

**Probability:** 0.03

### Abordagem 3 — Observatório Vermelho
Uma direção mais teatral e contrastada, inspirada em um pequeno observatório noturno, com vermelho-solar, azul profundo, tipografia de cartaz e detalhes de constelação.

**Probability:** 0.08

## Abordagem escolhida — Céu de Papel

### Design Movement
Editorial de livro ilustrado contemporâneo, combinando a delicadeza de uma página de literatura infantil com composição assimétrica de pôster cultural.

### Core Principles
1. O formulário é o centro da narrativa, não um bloco genérico de inputs.
2. Textura e desenho substituem ornamentos digitais óbvios.
3. A assimetria deve sugerir uma pequena viagem entre planetas.
4. Cada interação precisa parecer cuidadosa, clara e acolhedora.

### Color Philosophy
O azul-marinho cria o silêncio do espaço; o creme lembra papel e leitura; o amarelo-mel funciona como a assinatura emocional das estrelas; o coral terroso introduz calor humano sem competir com o foco do formulário.

### Layout Paradigm
Uma composição em duas zonas: à esquerda, uma “margem cósmica” com planeta, estrela e uma frase curta; à direita, o cartão-formulário como página destacada de um livro. Em telas menores, os elementos orbitais viram uma moldura vertical e o formulário ocupa o primeiro plano.

### Signature Elements
- Planetas em órbitas finas, desenhados em CSS e SVG inline, sem depender de imagens pesadas.
- Pequenas estrelas de quatro pontas e pontos de constelação com movimento quase imperceptível.
- Cartão de papel com borda irregular sutil, sombra quente e marca gráfica inspirada em uma rosa.

### Interaction Philosophy
O foco deve ser visível e gentil. Inputs ganham uma linha dourada e uma pequena estrela ao receber foco; o envio confirma a jornada com uma mensagem breve, sem interromper o fluxo.

### Animation
Entradas em cascata com opacidade e deslocamento curto; planetas usando uma deriva lenta e individual; botão com resposta tátil em escala; nenhum movimento essencial para entender ou concluir o formulário. Tudo deve respeitar `prefers-reduced-motion`.

### Typography System
`DM Serif Display` para títulos e frases de impacto; `Manrope` para labels, campos e textos utilitários. Títulos usam contraste alto e poucas palavras; labels são compactos, claros e levemente espaçados.

### Brand Essence
Um formulário que transforma o preenchimento em uma pequena travessia poética para pessoas que valorizam cuidado, imaginação e presença.

**Personalidade:** terno, curioso, artesanal.

### Brand Voice
Headlines e CTAs soam íntimos, diretos e literários, sem exagerar na fantasia. O texto evita frases genéricas e prefere convites específicos.

> “Toda viagem começa com uma pergunta.”

> “Deixe aqui uma parte da sua história.”

### Wordmark & Logo
Um pequeno planeta com anel incompleto envolvendo uma estrela de quatro pontas, acompanhado de uma marca tipográfica serifada desenhada com espaçamento editorial. O símbolo deve funcionar sozinho como favicon e selo do formulário.

### Signature Brand Color
**Amarelo-estrela `#F6C85F`**, usado pontualmente em estrelas, foco, ícones e ações principais para ser reconhecível sem transformar a tela em amarelo.

## Decisão de implementação
A página será construída sem imagens externas obrigatórias: planetas, estrelas, órbitas, selo e textura serão desenhados com CSS e SVG inline para manter o formulário leve, editável e fácil de adaptar. O fluxo incluirá validação nativa, estado de sucesso e suporte responsivo.
