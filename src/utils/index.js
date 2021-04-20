export function makeRandomString(length) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}


export function getRandomSeq(seq = [1,2,3,4,5,6,7,8]){
    let result = []
    while(seq.length != 0){
        let position = Math.floor(Math.random() * seq.length)
        result.push(seq[position]);
        seq.splice(position, 1);
    }
    return result
}

export function twoArrEqual(a, b) { 
    return a.sort().toString() == b.sort().toString() 
}