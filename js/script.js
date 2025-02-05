// funzione per generare la casella
function createSquare() {

    // creo un elemento
    let elementSquare = document.createElement('div');

    //assegno una classe all'elemento 
    elementSquare.classList.add('square');

    // restituisco il valore del'elemento alla funzione
    return elementSquare;
}


function createBombs() {
    let bombs = [];

    for (let b = 1; b <= 16;) {
        const randomNumber = Math.floor(Math.random() * 100)
        
        if(!bombs.includes(randomNumber)) {
            bombs.push(randomNumber)
            b++
        }
    }

    return bombs;
    
}

const startGame = document.getElementById('start');
startGame.addEventListener('click', function(){
    
    // richiamo l'elemento #grid dal dom
    const grid = document.getElementById('grid');

    grid.innerHTML = '';

    let bombs = createBombs();
    console.log(bombs)
    
    

    // inizio un ciclo di 100 interazioni 
    for (let i = 1; i <= 100; i++) {

        //assegno ad'una variabile il valore di una funzione per generare una casella ad'ogni interazione
        let square = createSquare();

        square.addEventListener('click', function() {

            console.log(i);

            this.classList.toggle('clickedSquare');
            
            if (bombs.includes(i)) {

                this.classList.toggle('clickedBomb');

                alert('BOOM');

                // // grid.innerHTML = '';

            }

        });

       

        // mostro il numero dell'interazione del su ogni casella creata
        square.innerText = i;
        
        // appendo la casella all'elemento #grid
        grid.append(square);
        
    }
    
    

    
});