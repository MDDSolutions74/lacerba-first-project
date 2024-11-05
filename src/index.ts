function greeting(name:string, lang: 'eng' | 'ita'){
    if(lang === 'ita'){
        console.log(`Ciao ${name}`)
    }else{
        console.log(`Hello ${name}`)
    }
}

greeting('Matteo', 'eng')

const random = (min: number, max: number): string => {
    const numero: number = Math.random() * (max - min) + min;
    return `Il numero random è ${numero}`
}
console.log(random(7,4))

//* Funzione che calcola la somma dei numeri di un array
const arr = [1,2,3,4,5]
function somma(arr: number[]):number {
    let sum = 0;
    for(let num of arr){
        sum += num
    }
    return sum
}

//* Funzione per fare la media
function media(arr: number[]):number{
    // return somma(arr) / arr.length
    //*Possiamo usare la funzione somma che abbiamo usato in precedenza per trovare la somma totale dei numeri dell'array
    const sum = somma(arr);//* Ricalcoliamo la somma
    return sum / arr.length
}


console.log(`somma = ${somma(arr)}`)
console.log(`media = ${media(arr)}`)