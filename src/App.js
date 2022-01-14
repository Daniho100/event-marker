import './App.css';
import Event from './components/Event';
import EventForm from './components/EventForm'
import EventList from './components/EventList'
import React, {useState} from 'react';

function App() {
  // const initialState = JSON.parse(localStorage.getItem("todos")) || []
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

    return (
    <div className='kontainer'>    
    <div className='app-wrapper'>
    <div>
    <Event />
    </div>
    <div className='container'>
<EventForm 
input={input}
setInput={setInput}
todos={todos}
setTodos={setTodos}
editTodo={editTodo}
setEditTodo={setEditTodo}
/>
</div>
<div className='container'>
  <EventList
   todos={todos}
   setTodos={setTodos}
   setEditTodo={setEditTodo} />
     </div>
     </div>
     </div>
  );
}

export default App;
