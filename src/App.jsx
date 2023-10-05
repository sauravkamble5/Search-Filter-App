import { useState, useEffect } from "react";

function App() {
  const [apiUsers, setapiUsers] = useState([])
const[searchItem, setSearchItem] = useState('');
const [filteredUsers, setfilteredUsers] = useState([])

useEffect(() => {
  fetch('https://dummyjson.com/users')
  .then(res => res.json())
  .then(data => {
    setapiUsers(data.users)
    setfilteredUsers(data.users)
  } )
  .catch(err => console.log(err))
}, []) 

const handleInputChange = (e) => {
  const searchTerm = e.target.value;
setSearchItem(searchTerm);

const filteredItems = apiUsers.filter((user) => 
user.firstName.toLowerCase().includes(searchTerm.toLowerCase())
);
setfilteredUsers(filteredItems);
}

  return (
<div>
<input 
type="text"
placeholder="Type to search"
value={searchItem}
onChange={handleInputChange} />

{filteredUsers.length === 0 
? <p>No Users Found</p> 
: <ul> 
  {filteredUsers.map(user => <li key={user.id}>{user.firstName}</li>)}
  </ul>}

</div>
    
  )
}

export default App
