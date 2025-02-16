import { useState, useEffect } from 'react'
import './App.css'
import MyButton from './components/MyButton';
import Nav from './components/Nav';

function App() {
  const [count, setCount] = useState(0)
  // const [name, setName] = useState("Patinyaporn")
  // const [data, setData] = useState([])

  // const user = {
  //   firstName: "Patinyaporn",
  //   lastName: "Sudtho"
  // }

  // useEffect(() => {
  //   // Fetch API
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(response => response.json())
  //     .then(data => setData(data));

  // }, []);

  // function handleIncreaseClick() {
  //   setCount(count + 1)
  // }
  // function handleDecreaseClick() {
  //   setCount(count - 1)
  // }

  return (
    <>
      {/* <MyProfile data={user} />
      <p>My name is {user.firstName} {user.lastName}</p>
      <p>{count}</p>
      <button onClick={handleIncreaseClick}>Increase</button>
      <button onClick={handleDecreaseClick}>Decrease</button>
      <ul>
        {data.map(user => (
          <li key={user.id}>
            <h3>{user.name}</h3>
            <p><em>Email: {user.email}</em></p>
            <p>Phone: {user.phone}</p>
          </li>
        ))}
      </ul> */}
      <Nav />
    </>
  )
}

export default App;
