const scoreDisplay = document.getElementById("score")
const startButton  = document.getElementById("start")
const grid = document.querySelector('.grid')
let currentSnake = [2,1,0]
let direction = 1
let intervalTime = 1000
let timerId = 0
let squares = []
let width = 10
let apple = 0
let speed = .9
let score = 0


function createGrid(){
for (let i = 0; i < width*width; i++){
    let square = document.createElement("div")
    square.classList.add("square")
    grid.appendChild(square)
    squares.push(square)
    }
    } 
createGrid()
currentSnake.forEach(index => squares[index].classList.add("snake"))

function startGame(){
    currentSnake.forEach(index => squares[index].classList.remove("snake"))
    squares[apple].classList.remove("apple")
    intervalTime = 500
    timerId = setInterval(move, intervalTime)
    currentSnake = [2,1,0]
    direction = 1
    score = 0
    scoreDisplay.textContent = score
    currentSnake.forEach(index =>squares[index].classList.add("snake"))
    generateApple()
}
startButton.addEventListener("click",startGame)

function move(){
     if (
         (direction === 1) && (currentSnake[0] % width === width - 1 ) ||
         (direction === -1) && (currentSnake[0] % width === 0) ||
         (direction === width) && (currentSnake[0] + width >= 100)||
         (direction === - width) && (currentSnake[0] - width <= 0)||
         squares[currentSnake[0]+direction].classList.contains("snake")
     )
     return clearInterval(timerId)
     let tail = currentSnake.pop()
    squares[tail].classList.remove("snake")
    currentSnake.unshift(currentSnake[0] + direction)
    squares[currentSnake[0]].classList.add("snake")
     
     if (squares[currentSnake[0]].classList.contains("apple")){
         squares[currentSnake[0]].classList.remove("apple")
      generateApple()
      squares[tail].classList.add("snake")
      currentSnake.push(tail)
      score++
      scoreDisplay.textContent = score
      clearInterval(timerId)
      intervalTime = intervalTime * speed
      timerId = setInterval(move, intervalTime)
     }
    
    
}

function generateApple(){
    do {apple = Math.floor(Math.random() * 100)}
    while (squares[apple].classList.contains("snake"))
    squares[apple].classList.add("apple")}

function control(e){
    if ((e.key === "ArrowLeft") && direction === 1){
        return 
    } else if (e.key === "ArrowLeft"){
        direction = -1
    
    } else if ((e.key === "ArrowUp") && (direction === width)){
        return
    } else if (e.key === "ArrowUp"){
        direction = -width
        console.log("up")
    } else if ((e.key === "ArrowRight") && (direction === -1)){
        return
    } else if (e.key === "ArrowRight"){
        direction = 1
        console.log("right")
    } else if ((e.key === "ArrowDown") && (direction === -width)){
        return
    } else if (e.key === "ArrowDown"){
        direction = width
        console.log("down")
    }}
    


document.addEventListener("keydown", control)
