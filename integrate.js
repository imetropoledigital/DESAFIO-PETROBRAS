/**
 * Realiza a integração pelo método dos trapézios
 * @param {Array} data Array de objetos que contém par (x,y) 
 * @returns valor total da integral numérica
*/

function integrate(data){
    let sum = 0;  //VARIABLE ASSOCIATED WITH THE SUM OF EACH AREA SEGMENT ACCORDING TO THE ESTABLISHED POINTS.
    for (let i=0; i < data.length-1; i++){
        sum += ((data[i+1].x - data[i].x)/2)*(data[i].y + data[i+1].y)
    }
    return sum
}

module.exports = integrate

