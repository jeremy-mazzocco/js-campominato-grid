let livelloDiDifficolta = 100;

// Aggiungo funzionalita' al click del Bottone
const selectButton = document.getElementById('btn');
selectButton.addEventListener('click',
    function () {

        // Cicla per 100 volte le seguenti operazioni
        for (let i = 1; i < livelloDiDifficolta + 1; i++) {

            // Crea un elemento
            const createSquare = document.createElement('div');

            // dagli una classe
            createSquare.classList.add('square');

            // appendilo al container
            const selectContainer = document.querySelector('.container');
            selectContainer.append(createSquare);

            // scrivi all'interno dell'elemento
            createSquare.innerHTML += i;

        }
    }
)




