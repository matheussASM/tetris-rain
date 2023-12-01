import './App.css'
import Tetromino from './components/Tetromino/Tetromino'


function getRandomPosition(){
  const borderLimit = 98;
  const spawnLimit= 60;
  let randomHorizontalPosition;
  let listNumber = [];

  for(let i=0;i<spawnLimit;i++){
      randomHorizontalPosition = Math.floor(Math.random()*borderLimit);
      listNumber.push(randomHorizontalPosition);
  };

  return listNumber
} 

function App() {
  let horizontalPosition = getRandomPosition();
  let verticalPosition = Math.floor(Math.random()*100);
  return (
  <>
    {horizontalPosition.map((item, index)=>{
      return <Tetromino key={index} color={'#F50057'} horizontalPosition={item} verticalPosition={verticalPosition} />
    })}
  </>
  )
}

export default App

