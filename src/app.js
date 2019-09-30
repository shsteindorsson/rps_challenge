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
    changeCpuImg(move)
  }

  const changeCpuImg = (path) => {
    let cpuImage = document.getElementById('cpu_choice').innerHTML
    console.log(path)
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
        break
    }
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