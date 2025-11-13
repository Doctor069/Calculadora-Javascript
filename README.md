#  calculadora Web - Desafio de JavaScript

Este é um projeto de uma calculadora web simples, desenvolvido como um desafio de programação focado na manipulação do DOM e gerenciamento de eventos com JavaScript.

## 🎯 O Desafio

O objetivo deste projeto era receber uma interface de calculadora estática (criada com HTML e CSS) e, a partir dela, implementar toda a lógica funcional utilizando JavaScript "puro" (Vanilla JS).

O desafio principal consistia em:
1.  Fazer com que os botões da interface (números, operadores, 'C', '<') funcionassem corretamente.
2.  Implementar a lógica de cálculo para exibir os resultados.
3.  Adicionar uma funcionalidade extra: **mapeamento completo do teclado**, permitindo que o usuário utilizasse a calculadora tanto pelo mouse quanto pelo teclado físico.

---

## 🚨 Atribuição e Contexto

> **Importante:** Este projeto foi desenvolvido como parte de uma atividade. A estrutura `index.html` e toda a estilização `style.css` (incluindo o layout, design responsivo com Bootstrap e o uso da fonte digital "DS-DIGI") foram fornecidas pelo **Professor Josimar Santos**, conforme referenciado no rodapé da página.

Meu foco e contribuição neste desafio foram a criação de toda a interatividade e lógica de front-end contida no arquivo `script.js`.

---

## ✨ Funcionalidades Implementadas (script.js)

Todo o código de minha autoria está no arquivo `script.js`. As seguintes funcionalidades foram implementadas:

### 1. Operações Básicas
* **Adicionar ao Visor:** Função `pressed()` que concatena o número ou operador no visor.
* **Limpar Visor:** Função `clearAll()` (tecla 'C') que apaga todo o conteúdo do visor.
* **Apagar Último Dígito:** Função `backspace()` (tecla '<') que remove o último caractere.
* **Calcular Resultado:** Função `calculate()` que utiliza o `eval()` para processar a string no visor e exibir o resultado, formatado com duas casas decimais (`toFixed(2)`).

### 2. Mapeamento de Teclado (keydown)
Um dos requisitos centrais era permitir o uso completo via teclado. Isso foi feito capturando o evento `keydown` e filtrando as teclas:

* **Números e Operadores:** Uma string `teclasPermitidas` (`"0123456789+-*/."`) foi usada para criar uma "lista de permissão". Se a `event.key` estiver nessa lista, ela é enviada ao visor.
* **Tecla "Enter":** Aciona a função `calculate()` para calcular o resultado.
* **Tecla "Backspace":** Aciona a função `backspace()` para apagar o último dígito.
* **Prevenção de Padrão:** `event.preventDefault()` é usado para evitar que a tecla (ex: '/') abra a busca rápida do navegador, garantindo que ela apenas interaja com a calculadora.

### 3. Efeito Visual (Bônus)
* Foi adicionado um pequeno efeito visual (no `script.js`) que altera o fundo do botão para branco por 200ms quando clicado, dando um feedback tátil ao usuário.

---

## 🛠️ Tecnologias Utilizadas

* **HTML5** (Fornecido)
* **CSS3** (Fornecido)
* **Bootstrap 5** (Para layout, fornecido)
* **JavaScript (ES6+)** (Implementado por mim)

## 🚀 Como Executar

1.  Baixe ou clone este repositório.
2.  Abra o arquivo `index.html` em qualquer navegador web moderno.
