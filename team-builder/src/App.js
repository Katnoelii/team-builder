import React, { useState } from 'react';
import { v4 as uuid} from 'uuid';
import './App.css';
import Form from './components/Form'
import Member from './components/Member'

const initialMember = [
  {
    id: uuid(),
    name:'Kate',
    email:'kroy15chs@gmail.com',
    role:'Full Stack Web Student'
  }
]
const initialForm = {
  name:'',
  email:'',
  role:''
}

function App() {
  const [members,setMembers] = useState([])
  const [form,setForm] = useState(initialForm)

  const updateForm = (inputName, inputValue) => {

    const updatedFormValues = {...form,[inputName]:inputValue}

    setForm(updatedFormValues)
  }

  const submitForm = () => {
    const newMember = {
      name: form.name.trim(),
      email:form.email.trim(),
      role: form.role,
    }
    setMembers([...members,newMember])
  }
  return (
    <div className="App">
      <header className="header"><h1>Welcome to the Team!</h1></header>
      <Form
      values={form}
      update={updateForm}
      submit={submitForm} 
      />
      <div className='test'>
      {
        members.map(member => {
          return (
            <Member details={member}/>
          )
        })
      }
    </div>
    </div>
  );
}

export default App;
