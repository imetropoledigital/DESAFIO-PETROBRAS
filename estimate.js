/**
 * Estima a vazão mássica
 * @param {*} d1 Diâmetro da seção 1
 * @param {*} d2 Diâmetro da seção 2
 * @param {*} ro Densidade do flúido
 * @param {*} p1 Pressão na seção 1
 * @param {*} p2 Pressão na seção 2
 * @returns Vazão mássica
**/

function estimate(d1, d2, ro, p1, p2){
   massleak = (1/Math.sqrt(1-Math.pow((d2/d1), 4))) * Math.PI * (Math.pow(d2, 2)/4) * (Math.sqrt(2*ro*(p1-p2)));
   return massleak; 
}

module.exports = estimate
