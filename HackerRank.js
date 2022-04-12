//PlusMinus 

function plusMinus(arr) {
    let arrLen = arr.length;  //Store the array legnth to variable arrLen
    
    //Initiatlize positive count, Negative count and zero count
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;
    
    // Go thorogh the array and count total positive, negative and zero 
    for (let i = 0; i < arrLen; i++){
        if(arr[i] > 0)
        {
            positiveCount++;
        }
       else if(arr[i]<0)
        {
            negativeCount++;
        }
        else if(arr[i] == 0){
            zeroCount++;
        }
        }
    }
        document.write((positiveCount / len).toFixed(6) + " ");
    document.write((negativeCount / len).toFixed(6) + " ");
    document.write((zeroCount / len).toFixed(6));
    document.write("<br>");
