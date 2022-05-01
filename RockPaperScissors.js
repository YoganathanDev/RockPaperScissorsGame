const computerOutput =document.getElementById('computerchoice')
const userOutput =document.getElementById('yourchoice')
const resultOutput =document.getElementById('result')
//Picking all button
const possibleChoice=document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoice.forEach(possibleButton=>possibleButton.addEventListener('click', (e) =>
{
    userChoice = e.target.id
    userOutput.innerHTML = userChoice

    computerPickedChoice()
    getResult()
}
))

//Computer choice
function computerPickedChoice()
{
    const randomNumber = Math.floor(Math.random() * 3 + 1);

    if(randomNumber === 1)
    {
        computerChoice = 'Rock'
    }
    if(randomNumber === 2)
    {
        computerChoice = 'Paper'
    }
    if(randomNumber === 3)
    {
        computerChoice = 'Scissors'
    }
    computerOutput.innerHTML = computerChoice
}


function getResult()
{
    if(computerChoice === userChoice)
    {
        result = 'Match Tie'
    }

    if(computerChoice==='Rock' && userChoice==='Paper' )
    {
        result = 'You Win'
    }

    if(computerChoice==='Rock' && userChoice==='Scissors')
    {
        result = 'You Lose'
    }

    if(computerChoice==='Paper' && userChoice==='Rock')
    {
        result = 'You Lose'
    }

    if(computerChoice==='Paper' && userChoice==='Scissors')
    {
        result = 'You Win'
    }

    if(computerChoice==='Scissors' && userChoice==='Rock')
    {
        result = 'You Win'
    }

    if(computerChoice==='Scissors' && userChoice==='Paper')
    {
        result = 'You Lose'
    }
    resultOutput.innerHTML = result
}
