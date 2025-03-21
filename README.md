# Aplicativo de Clima

Este é um aplicativo web simples que permite aos usuários verificar o clima de qualquer cidade do mundo. Ele utiliza a API OpenWeatherMap para buscar dados climáticos em tempo real.

## Funcionalidades

-   **Busca por Cidade:** Os usuários podem inserir o nome de uma cidade em um campo de entrada e clicar no botão de pesquisa para obter informações climáticas.
-   **Exibição de Informações Climáticas:** O aplicativo exibe o nome da cidade, a temperatura atual e um ícone representando as condições climáticas.

## Tecnologias Utilizadas

-   **HTML:** Estrutura da página web.
-   **CSS:** Estilização da página web.
-   **JavaScript:** Lógica da aplicação, incluindo busca de dados da API e atualização da interface do usuário.
-   **API OpenWeatherMap:** Fornecimento de dados climáticos.

## Funcionalidades JavaScript

-   Função `cliqueBotao()` para obter o valor do campo de entrada e chamar a função `buscarCidade()`.
-   Função `buscarCidade()` para fazer uma chamada à API OpenWeatherMap usando `fetch()`.
-   Uso de `async/await` para lidar com a chamada assíncrona da API.
-   Conversão da resposta da API para JSON usando `resposta.json()`.
-   Função `colocarNaTela()` para atualizar a interface do usuário com os dados da API.
-   Atualização do conteúdo dos elementos HTML usando `document.querySelector().innerHTML` e `document.querySelector().src`.
-   Conversão da temperatura para Celsius e exibição com o símbolo "°C".
-   Uso de `Math.floor()` para arredondar a temperatura.
-   Construção da URL do ícone climático com base no código do ícone retornado pela API.
-   Exibição do console.log para debugging e visualização dos dados retornados da API.

### API OpenWeatherMap

-   A API OpenWeatherMap é utilizada para obter dados climáticos.
-   A chave de API é utilizada para autenticar as requisições.
-   A unidade de medida da temperatura é definida como métrica (`units=metric`).
