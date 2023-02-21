let stop = false;
const arrData = document.querySelectorAll('.wrapper__square');
let arr = Array(9).fill(null);
const button = document.querySelector('.button');
const resultGame = document.querySelector('.result');
const text = document.querySelector('.text')


const concat = function(a, b, c) {
    let result = arr[a] + arr[b] + arr[c];
    if (result === "XXX" || result === "OOO") {
        return result
    } 
    switch(result) {
        case "XXnull": return ['X', c];
        case "XnullX": return ['X', b];
        case "nullXX": return ['X', a];
        case "OOnull": return ['O', c];
        case "OnullO": return ['O', b];
        case "nullOO": return ['O', a]
    }
}

const changedColorAndStop = function(a, b, c) {
    arrData[a].style.color="green";
    arrData[b].style.color="green";
    arrData[c].style.color="green"
    
    stop = true;
}

const checkWin = function() {
    for (let i = 0; i < 3; i++) {
        let result = concat(i, i+3, i+6);
        if (result === "XXX") {
            changedColorAndStop(i, i+3, i+6);
            resultGame.classList.remove('hidden');
            text.textContent = 'YOU WIN!'
        }
        if(result === "OOO") {
            changedColorAndStop(i, i+3, i+6);
            resultGame.classList.remove('hidden');
            text.textContent = 'YOU LOSE!'
        }
    }
    for (let i = 0; i <=6; i+=3) {
        let result = concat(i, i + 1, i + 2);
        if (result === "XXX") {
            changedColorAndStop(i, i + 1, i + 2);
            resultGame.classList.remove('hidden');
            text.textContent = 'YOU WIN!'
            
        }
        if (result === "OOO") {
            changedColorAndStop(i, i + 1, i + 2);
            resultGame.classList.remove('hidden');
            text.textContent = 'YOU LOSE!'
        }
    }
    let result = concat(0, 4, 8)
    if (result === "XXX") {
        changedColorAndStop(0, 4, 8);
        resultGame.classList.remove('hidden');
        text.textContent = 'YOU WIN!'
    }
    if (result === "OOO") {
        changedColorAndStop(0, 4, 8);
        resultGame.classList.remove('hidden');
        text.textContent = 'YOU LOSE!'
    }
    result = concat(2, 4, 6)
    if (result === "XXX") {
        changedColorAndStop(2, 4, 6);
        resultGame.classList.remove('hidden');
        text.textContent = 'YOU WIN!'
    }
    if (result === "OOO") {
        changedColorAndStop(2, 4, 6);
        resultGame.classList.remove('hidden');
        text.textContent = 'YOU LOSE!'
    }
    const fillArr = arr.filter(item => {
            return item !== null
        })
        if (fillArr.length === arr.length) {
            resultGame.classList.remove('hidden');
            text.textContent = 'DRAW'
        }
    
}



const botTurn = function() {
    for (let i = 0; i < 3; i++) {
        let result = concat(i, i+3, i+6);
        if (typeof (result) === "object" && result[0] === "O") {
            arrData[result[1]].innerHTML = "O";
            arr[result[1]] = "O";
            return;
        } 
    }
    for (let i = 0; i <=6; i+=3) {
        let result = concat(i, i + 1, i + 2);
        if (typeof (result) === "object" && result[0] === "O") {
            arrData[result[1]].innerHTML = "O";
            arr[result[1]] = "O";
            return;
        } 
    }
      
    let result = concat(0, 4, 8)
    if (typeof (result) === "object" && result[0] === "O") {
        arrData[result[1]].innerHTML = "O";
        arr[result[1]] = "O";
        return
    } 

    result = concat(2, 4, 6)
    if (typeof (result) === "object" && result[0] === "O") {
        arrData[result[1]].innerHTML = "O";
        arr[result[1]] = "O";
        return;
    } 

    for (let i = 0; i < 3; i++) {
        let result = concat(i, i+3, i+6);
        if (typeof (result) === "object" && result[0] === "X") {
            arrData[result[1]].innerHTML = "O";
            arr[result[1]] = "O";
            return;
        } 
    }
    for (let i = 0; i <=6; i+=3) {
        let result = concat(i, i + 1, i + 2);
        if (typeof (result) === "object" && result[0] === "X") {
            arrData[result[1]].innerHTML = "O";
            arr[result[1]] = "O";
            return;
        } 
    }
      
    result = concat(0, 4, 8)
    if (typeof (result) === "object" && result[0] === "X") {
        arrData[result[1]].innerHTML = "O";
        arr[result[1]] = "O";
        return
    } 

    result = concat(2, 4, 6)
    if (typeof (result) === "object" && result[0] === "X") {
        arrData[result[1]].innerHTML = "O";
        arr[result[1]] = "O";
        return;
    } 

    let randomNumbersArray = [];
    for (let i = 0; i < 9; i++) {
        if (arr[i] === null) {
            randomNumbersArray.push(i)
        }
    }

    let randomNumber = Math.round(Math.random() * (randomNumbersArray.length - 1));
    
    arrData[randomNumbersArray[randomNumber]].innerHTML="O";
    arr[randomNumbersArray[randomNumber]] = "O";
}

addEventListener('click', function(event) {
    if (stop === true) {return}
    if(event.target.className === 'wrapper__square' && event.target.textContent === '') {
        event.target.innerHTML = "X"
        arr[event.target.dataset.num] = "X"
        
} else {
    return
}

    checkWin();
    if (stop === true) {return}
    botTurn();
    checkWin();
    console.log('click');
})


button.addEventListener('click', function() {
    for (let i = 0; i < arrData.length; i++) {
        arrData[i].textContent = "";
        arr[i] = null;
        arrData[i].style.color = "black";
    }
    stop = false;
    resultGame.classList.add('hidden')
    
})

