module.exports = (text) => {
    // will not check strings which is longer than the half of the original string
    for(let i=1 ; i<text.length/2 ; i++){
        // check strings which can divide original strings without reminder
        if(text.length % i === 0){
            // repeated: potential repeated string
            let repeated = text.substring(0,i);
            // we will set this flag false if it is not repeated on every step
            let flag_repeated = true;

            // start scanning the original string
            for(let j=0 ; j<text.length-repeated.length+1 ; j+=repeated.length){
                // part of the original string to be compared with potential repeated
                let compare = text.substring(j,j+repeated.length);

                if(compare === repeated){
                }else{
                    flag_repeated = false;
                    break;
                }
            }

            if(flag_repeated){
                let repeatCount = text.length / repeated.length;
                return {repeated: repeated, 
                        count: repeatCount};
            }
        }
    }
}