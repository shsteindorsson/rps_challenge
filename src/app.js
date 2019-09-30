document.addEventListener('DOMContentLoaded', () => {
  
  document.getElementById('rock').addEventListener('click',function(){
    displayPlayerMove('Rock')
    displayCpuMove(cpuMove())
  })

  document.getElementById('paper').addEventListener('click',function(){
    displayPlayerMove('Paper')
    displayCpuMove(cpuMove())
  })

  document.getElementById('scissors').addEventListener('click',function(){
    displayPlayerMove('Scissors')
    displayCpuMove(cpuMove())
  })

  const displayPlayerMove = (move) => {
    let playerMove = `You played ${move}!`
    document.getElementById('player-move').innerHTML = playerMove
  }

  const displayCpuMove = (move) => {
    let cpuPick = `Computer played ${move}`
    document.getElementById('cpu-move').innerHTML = cpuPick
  }

  function cpuMove() {
    let randomNumber = Math.floor(Math.random()*3)
    switch (randomNumber) {
      case 0:
        return 'Rock'
        break
      case 1:
        return 'Paper'
        break
      case 2:
        return 'Scissors'
        break
      default:
        throw `${randomNumber} as a computer move is not defined`
        break
    }
  }

})