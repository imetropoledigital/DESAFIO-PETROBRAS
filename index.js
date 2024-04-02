const data = []
for (i = 0;i<90;i++){
    const s = Math.random()
    if (s < 0.05){
        data.push(s * 1000)
    }else{
        data.push(s)
    }
}
console.log(data)