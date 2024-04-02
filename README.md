## Desafio Petrobras

Você foi contratado para desenvolver um sistema para estimar a vazão de um fluido que passa por uma placa de orifício de uma refinaria de petróleo da Petrobras. Para isso, você decidiu por escrever um código em JavaScript para tal processamento.

Para o correto processamento, os dados precisarão passar por três etapas:

1. Remover dados espúrios;
2. Estimar a vazão a partir de outros parâmetros;
3. Realizar a totalização através de um cálculo de integração.

A seguir, serão fornecedos os detalhes para a implementação de cada etapa:

### 1. Remover dados espúrios

A remoção de dados espúrios deve ser implementada no arquivo **[outlier.js](./outlier.js)**, seguindo a seguinte estrutura:

```js
/**
 * Remove registros espúrios
 * @param {Array} data - Um array de pontos flutuantes
 * @returns {Array} contendo apenas os pontos não-espúrios
 */
function removeOutlier(data){
    //TODO criar seu código aqui!
    return []
}
```

Para remover os *outliers* (considerados dados espúrios) a seguinte regra deve ser usada:

1. Calcular a média de todos os pontos;
2. Calcular o desvio padrão amostral;
3. Manter apenas os pontos que estão até no máximo 2 desvios padrão do valor médio. Veja o gráfico abaixo para melhor compreensão:

![Outlier](https://github.com/gustavoleitao/desafio-grad/blob/main/imgs/outlier.png?raw=true)

Após removidos os pontos espúrios, será necessário realizar a inferência da vazão. Para isso, analise a próxima seção.

### 2. Inferência da vazão instantânea

Agora chegou a hora de realizar a inferência da vazão do fluido que passa pela placa de orifício. A placa de orifício é um dispositivo usado para medir, reduzir ou restringir a vazão. Uma placa de orifício é uma placa fina com um orifício, que geralmente é colocado em uma tubulação.

![Placa de orificio](https://github.com/gustavoleitao/desafio-grad/blob/main/imgs/placa-orificio.png?raw=true)

Para a presente questão será considerado que o fluido é incompressível. Assim, para a medição da vazão na placa de orifício, considere a seguinte expressão:

$$q_m = \frac{1}{\sqrt{1-(\frac{D_2}{D_1})^4)}}  \pi \frac{D_2 ^2}{4}  \sqrt{2 *  \rho (P_1 - P_2)}$$

Onde:

$$q_m:\text{Vazão mássica teórica}$$

$$D_1:\text{Diâmetro do condutor na seção 1 (Diâmetro da tubulação)}$$

$$D_2:\text{Diâmetro do condutor na seção 2 (Diâmetro interno da placa)}$$

$$\rho:\text{Densidade do flúido}$$

$$P_1:\text{Pressão à montante (seção 1)}$$

$$P_2:\text{Pressão à jusante (seção 2)}$$

Para esse cálculo, edite o arquivo **[estimate.js](./estimate.js)**, seguindo a seguinte estrutura:

```js
/**
 * Estima a vazão mássica
 * @param {*} d1 Diâmetro da seção 1
 * @param {*} d2 Diâmetro da seção 2
 * @param {*} ro Densidade do flúido
 * @param {*} p1 Pressão na seção 1
 * @param {*} p2 Pressão na seção 2
 * @returns Vazão mássica
 */
function estimate(d1, d2, ro, p1, p2){
   //TODO seu código aqui!
   return 0
}
```

### Totalização da vazão

Após a remoção dos dados espúrios e cálculo da vazão instantânea, podemos totalizar a vazão em um período através da integração numérica. A integração nada mais é que a soma dos valores das vazões instantâneas calculadas, conforme a imagem abaixo:

![Integração](https://github.com/gustavoleitao/desafio-grad/blob/main/imgs/trapezio.png?raw=true)

Considere que cada medida estimada é representada pelo par `( x, f(x) )`, onde `x` representa o instante de tempo, e `f(x)` representa o valor estimado.

O valor da totalização pode ser calculado através da soma da área de cada trapézio formado pela ligação de pontos consecutivos.

Para o cálculo, edite o arquivo **[integrate.js](./integrate.js)**, seguindo a seguinte estrutura:

```js
/**
 * Realiza a integração pelo método dos trapézios
 * @param {Array} data Array de objetos que contém par (x,y) 
 * @returns valor total da integral numérica
 */
function integrate(data){
    // TODO seu código aqui
    return 0
 }
```

A entrada será do tipo *array* de objetos. Considere o seguinte exemplo de entrada abaixo:

```json
[
    {   "x": 1.0, 
        "y": 1.0
    }, 
    {
        "x": 2.0, 
        "y": 1.0
    }
]
````

## Executando os testes

Para executar todos os testes localmente, execute:

```shell
$ npm install
$ npm test
````
