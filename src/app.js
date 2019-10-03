document.addEventListener('DOMContentLoaded', () => {
  
  let playerChoice

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
    playerChoice = move
    document.getElementById('player-move').innerHTML = playerMove
  }

  const displayCpuMove = (move) => {
    let cpuPick = `Computer played ${move}`
    document.getElementById('cpu-move').innerHTML = cpuPick
    changeCpuImg(move)
    let results = declareWinner(playerChoice, move)
    winnerMessage(results)
  }

  const changeCpuImg = (path) => {
    let cpuImage = document.getElementById('cpu_choice').innerHTML
    switch (path) {
      case 'Rock':
        document.getElementById('cpu_choice').innerHTML = '<img src="https://github.com/shsteindorsson/rps_challenge/blob/master/src/img/rock.png?raw=true" alt="CPU-image" id="cpu_img">'
        break
      case 'Paper':
        document.getElementById('cpu_choice').innerHTML = '<img src="https://github.com/shsteindorsson/rps_challenge/blob/master/src/img/paper.png?raw=true" alt="CPU-image" id="cpu_img">'
        break
      case 'Scissors':
        document.getElementById('cpu_choice').innerHTML = '<img src="https://github.com/shsteindorsson/rps_challenge/blob/master/src/img/scissors.png?raw=true" alt="CPU-image" id="cpu_img">'
        break
      default:
        throw `${path} image is not defined`
    }
  }
  
  const cpuMove = () => {
    let randomNumber = Math.floor(Math.random()*3)
    switch (randomNumber) {
      case 0:
        return 'Rock'
      case 1:
        return 'Paper'
      case 2:
        return 'Scissors'
      default:
        throw `${randomNumber} as a computer move is not defined`
    }
  }

  const declareWinner = (player, cpu) => {
    if (player == cpu) {
      return 'Tie - no one is victorious'
    }
    switch (player) {
      case 'Rock':
        switch (cpu) {
          case 'Paper':
            return 'The computer is victorius'
          case 'Scissors':
            return 'You are victorious'
          default:
            throw 'CPU not defined'
        }
      case 'Paper':
        switch (cpu) {
          case 'Rock':
            return 'You are victorious'
          case 'Scissors':
            return 'The computer is victorius'
          default:
            throw 'CPU not defined'
        }
      case 'Scissors':
        switch (cpu) {
          case 'Rock':
            return 'The computer is victorius'
            case 'Paper':
              return 'You are victorious'
            default:
              throw 'CPU not defined'
        }
    }
  }
  const winnerMessage = (msg) => {
    document.getElementById('game-results').innerHTML = msg
  }
})