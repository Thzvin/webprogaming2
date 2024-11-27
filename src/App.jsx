import './App.css'
import Counter from './Component/counter'
import Input from './Component/input'
import Nama from './Component/nama'
import Rcolor from './Component/randomcolor'

function App() {

  return (
    <>
       <Input />
      <Nama nama="Dervin" npm="2428250007" github="https://github.com/Thzvin"/>
      <Counter></Counter>
      <Rcolor></Rcolor>
      
    </>
  )
}

export default App
