       // Это первый способ найти индекс чисел в масиве в каком-то массиве
       function findNumber(symbol, array) {
        let result = {};
        for (let f = 0; f < array.length; f++) {
            if (symbol === array[f]) {
                result[symbol] = f;
            }
        }
        if (result[symbol] === undefined) {
            result[symbol] = -1;
        }
        return result;
    }

    function findNumbers(numbers, array) {
        for (let i = 0; i < numbers.length; i++) {
            let symbol = numbers[i];
            console.log(findNumber(symbol, array));
        }
    }


    // Это второй способ найти индекс чисел в масиве в каком-то массиве, этот лучше 1-го, пот здесь вторую часть 
    //можно в коде где угодно поставить и она будет работать 
    function findNumber(symbol, array, result2) {
        for (let f = 0; f < array.length; f++) {
            if (symbol === array[f]) {
                result[symbol] = f;
            }
        }
        if (result[symbol] === undefined) {
            result[symbol] = -1;
        }
    }

    
    function findNumbers(numbers, array) {
        let result = {};
        for (let i = 0; i < numbers.length; i++) {
            let symbol = numbers[i];
            console.log(findNumber(symbol, array, result2));
            result = result + result2;
        }
        return result;
    }