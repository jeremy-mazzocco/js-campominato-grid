// BONUS: Prendi il livello di difficolta dal DOM e settalo in una variabile
const livelloSelezionato = document.getElementById('difficolta').value;

// Aggiungo funzionalita' al click del Bottone
const selectButton = document.getElementById('btn');
selectButton.addEventListener('click',
    function () {
        let numeroDiCelle;
        // const numeroDiCelle = 100;

        // BONUS: in base al livello selezionato: assegna il giusto valore alla variabile numeroDiCelle
        if (livelloSelezionato === "Easy") {
            numeroDiCelle = 100;
        } else if (livelloSelezionato === "Medium") {
            numeroDiCelle = 81;
        } else if (livelloSelezionato === "Hard") {
            numeroDiCelle = 49;
        }

        // Cicla per 100 volte le seguenti operazioni
        for (let i = 1; i <= numeroDiCelle; i++) {

            // Crea un elemento
            const createSquare = document.createElement('div');

            // dagli una classe
            createSquare.classList.add('square');

            // appendilo al container
            const selectContainer = document.querySelector('.container');
            selectContainer.append(createSquare);

            // scrivi il numero all'interno dell'elemento
            let numeroNellaCella = i;
            createSquare.innerHTML += numeroNellaCella;

            // BONUS: in base al livello selezionato: cambia la classe
            if (livelloSelezionato === "Easy") {
                createSquare.classList.add('square-easy');
            } else if (livelloSelezionato === "Medium") {
                createSquare.classList.add('square-medium');
            } else if (livelloSelezionato === "Hard") {
                createSquare.classList.add('square-hard');
            }
            // colora la cella al click
            createSquare.addEventListener('click',
                function () {
                    createSquare.style.backgroundColor = 'blue';
                });
        }
    }
);




//  MY FUNCTIONS




