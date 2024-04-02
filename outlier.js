/**
 * Remove registros espúrios
 * @param {Array} data - Um array de pontos flutuantes (double)
 * @returns {Array} contendo apenas os pontos não-espúrios
**/

function deviationCalculate(data, average){  //FUNCTION RESPONSIBLE FOR CALCULATING THE SAMPLE STANDARD DEVIATION.
    summation = 0;  //VARIABLE ASSOCIATED WITH THE SUM SEGMENT OF THE STANDARD DEVIATION FORMULA.
    if (data.length < 2){
        return 0;
    } else {
        for (let i=0; i < data.length; i++){
            summation += Math.pow((data[i] - average), 2);
        }
        return Math.sqrt(summation/(data.length-1))
    }
}

function averageCalculate(data){  //FUNCTION RESPONSIBLE FOR CALCULATING THE AVERAGE.
    let sum = 0;  //VARIABLE USED TO SUM THE ELEMENTS.
    if (data.length == 0) {
        return 0;
    } else {
        for (let i=0; i < data.length; i++){
            sum += data[i];
        }
        return sum/data.length;
    }
}

function removeOutlier(data){
    average = averageCalculate(data);  //AVERAGE VARIABLE.
    deviation = deviationCalculate(data, average);  //SAMPLE STANDARD DEVIATION VARIABLE.
    new_data = [];  //ARRAY ASSOCIATED WITH THE FILTERED DATA.
    for (let i=0; i < data.length; i++) {
        if (data[i] > (2 * deviation + average) || data[i] < (-2 * deviation + average)) {
            continue;
        }
        new_data.push(data[i]);
    }
    return new_data;
}

module.exports = removeOutlier



