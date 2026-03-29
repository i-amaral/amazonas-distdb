# Arquiteto de Dados - Desafio Final

Projeto de arquitetura de dados distribuído para um e-commerce.

## Enunciado

A loja "Amazonas", conhecida por oferecer uma vasta gama de produtos (de eletrônicos a vestuário, passando por utensílios domésticos e livros), está expandindo sua atuação para o mercado digital. Seu objetivo é o de se tornar a maior loja de comércio eletrônico, de A a Z, do Brasil.

Para isso, necessita criar um e-commerce robusto, capaz de lidar com o crescimento rápido e exponencial de clientes e transações, mantendo alta performance e disponibilidade, garantindo a escalabilidade e, se possível, a elasticidade do uso de hardware.

Para isso, a "Amazonas" decidiu criar uma aplicação pujante, que utiliza uma estrutura de dados não-relacional, com foco em escalabilidade e flexibilidade, essencial para atender às demandas do mercado moderno.

Nessa tarefa, sua missão será ajudar a "Amazonas" a projetar essa estrutura
de dados e propor uma estratégia para torná-la escalável.

### Requisitos

#### Modelagem de Dados Não-Relacional

- Projete coleções (ou tabelas) no estilo de bancos NoSQL, considerando o contexto de um e-commerce.

- Identifique ao menos cinco coleções principais que representem aspectos críticos do sistema (ex.: clientes, produtos pedidos, itens do pedido, carrinho, avaliações, formas de pagamento etc.).

- **Defina a estrutura de cada coleção:**

    - Atributos relevantes.
    - Exemplos de chaves primárias e relacionamentos entre coleções, se aplicável.
    - Justifique o uso de esquemas desnormalizados ou outras práticas de design.
    - Lembre-se: evite joins, faça uso de coleções desnormalizadas.

- Desenho o modelo de dados na ferramenta Hackolade
(https://studio.hackolade.com/) com o template do MongoDB.

- Exporte o modelo ou capture a tela e cole no Documento Arquitetural de Dados (documento Word que você entregará impresso em PDF ao final)

#### Escalabilidade

- **Descreva como a solução será escalada horizontalmente:**

    - Estratégias de sharding (definir quais coleções utilizarão essa técnica).
    - Uso de réplicas para alta disponibilidade.

- **Particionamento e Replicação:**
    - Explique o que você irá “particionar” e o que irá “replicar” e o porquê.

- **Explique como lidar com:**
    - Crescimento de dados.
    - ​Alta concorrência de acessos.

#### Entrega e Avaliação

- **Formato:** Documento técnico em PDF.

- **Critérios de Avaliação:**

    - Clareza na explicação das coleções e decisões arquiteturais.
    - Coerência e viabilidade do plano de escalabilidade
    - Alinhamento com o contexto e objetivos do desafio.
    - Criatividade nas soluções apresentadas.

#### Resumo dos Entregáveis

- **Arquitetura do Dados:** PDF com desenhos feitos em uma das plataformas, conmo Hackolade, Miro, Draw.io, Excalidraw.

- **Explicação:** Estrutura e elementos que comporão a solução.
- **Explicação:** Particionamento e da Replicação.
- **Opcional:** Banco de dados funcionando.
- **Opcional:** Particionamento e réplicas funcionando.
- **Opcional:** Implementação em nuvem [Atlas ou DynamoDB]
