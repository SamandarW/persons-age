function pow(x, n){
    return x ** n
}
console.log(pow(5,3))

function sqrt(x){
    return x ** (1/2)
}
console.log(sqrt(16))

function abs(x){
    if (x > 0){
        return x
    }else{
        return -(x)
    }
}
console.log(abs(-100))

function floor(k){
    if (k >0){
  return k - (k % 1)
    }else {
        return (-1 + (k -(k % 1)))
    }
}
console.log(floor(-5.8))

function ceil(m){
    return (1 + (m - (m % 1)))
}
console.log(ceil(4.9))

function round(a){
    return a.toFixed(0)
}
console.log(round(5.5))

function trunc(c){
    return c-(c % 1)
}
console.log(trunc(55.6))



