
import './App.css'
import ListItem from './components/listItem'
import UserCard from './components/UserCard'

function App() {
  
  const namesArray = ["Maria", "Jeiron", "Gabriela", "Frank"]

  const listContent = namesArray.map((name, index) => <ListItem key={`item-${index}`} content={name} />)
  
  const userArray = [{name: "Maria", age:33}, {name: "Jeiron", age:30}]

  return (
    <div className="App">
      <h2>Primera lista. Generada en la parte funcional</h2>
      <ul>
        {listContent}
      </ul>
      <hr />
      <h2>Segunda lista. Generada directamente en la parte visual</h2>
      <ul>
        {
          namesArray.map((name, index) => <ListItem key={`item-${index}`} content={name} />)
        }
      </ul>
      <hr />
      {
        userArray.map((user, index) => {
          return <UserCard Userdata={user} key={`user-{index}`} />
        })
      }
    </div>
  )
}

export default App
