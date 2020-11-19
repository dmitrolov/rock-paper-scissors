const possibleGameResults = {
    "11": 'Draw',
    "12": 'Player 2 Wins, paper beats rock',
    "13": 'Player 1 Wins, rock beats scissors',
    "21": 'Player 1 Wins, paper beats rock',
    "22": 'Draw',
    "23": 'Player 2 Wins, scissors beats paper',
    "31": 'Player 2 Wins, rock beats scissors',
    "32": 'Player 1 Wins, scissors beats paper',
    "33": 'Draw',
}

function onPlayButtonClick() {
    const {player1Choise, player2Choise} = document.getElementsByClassName('playersChoise')[0].elements
    const result = player1Choise.value + player2Choise.value;
    const winMessage = possibleGameResults[result];
    document.getElementsByClassName('resultAnswer')[0].innerHTML = winMessage ? winMessage : "Pick 2 values"
}
