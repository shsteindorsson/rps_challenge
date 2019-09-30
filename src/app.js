document.addEventListener('DOMContentLoaded', () => {
  
  document.getElementById('rock').addEventListener('click',function(){
    //alert("clicked rock")
    displayPlayerMove('Rock')
  })

  document.getElementById('paper').addEventListener('click',function(){
    //alert("clicked paper")
    displayPlayerMove('Paper')
  })

  document.getElementById('scissors').addEventListener('click',function(){
    //alert("clicked scissors")
    displayPlayerMove('Scissors')
  })

  const displayPlayerMove = (move) => {
    //alert(move)
    let playerMove = `You played ${move}!`
    document.getElementById('player-move').innerHTML = playerMove
  }

})