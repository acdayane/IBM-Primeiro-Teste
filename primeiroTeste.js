function subArrayComSomaMaxima(arr) {
    let maxSoma = -Infinity;

    for (let i=2; i<arr.length+1; i++) { //quantidade de elementos na soma até o final do array
        for (let j=0; j<arr.length-i+1; j++) { //primeiro elemento da soma
            let soma = 0;
            for (let k=j; k<(j+i); k++) { //soma da quantidade de elementos definida em i e iniciada em j
                soma = arr[k] + soma
            }
            if (soma > maxSoma) {
                maxSoma = soma;
            }
        }
    }
    console.log(maxSoma)
}

subArrayComSomaMaxima([-2, 1, -3, 4, -1, 2, 1, -5, 4])
subArrayComSomaMaxima([1,1,1,1,1,1,1,1,1,1,1,1,1])
subArrayComSomaMaxima([-2, 1, -3, 4, 24, -1, 2, 1, -5, 4])
subArrayComSomaMaxima([-2, 1, -3, 4, 24, -1, 2, 1, -5, 4, -9999, 999, 999])