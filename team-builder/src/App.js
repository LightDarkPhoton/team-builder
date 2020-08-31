import React, { useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

import Form from './Form';

// List of team members with key/value pairs associated with them

const initialTeamMembersList = [
  {
    name: 'Andrew',
    email: 'andrew@gmail.com',
    role: 'Web Developer',
  },
]

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}

// Simulating async data

const fakeAxiosGet = () => {
  return Promise.resolve( {status: 200, success: true, data: initialTeamMembersList})
}

const fakeAxiosPost = (url, { name, email, role }) => {
  const newTeamMember = { name, email, role }
  return Promise.resolve({ status: 200, success: true, data: newTeamMember})
}

function App() {

  // Give the state variable you just declared a default value. You will need to keep track of a list of team members and each team member will have several key/value pairs associated with them.

  const [teamMembers, setTeamMembers] = useState([initialTeamMembersList])

  const [formValues, setFormValues] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) =>
  {

    setFormValues( { ...formValues, [inputName]: inputValue})

  }

  const submitForm = () => {

    const teamMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role.trim(),
    }

    if (!teamMember.name) return

    fakeAxiosPost('fake.com', teamMember)
      .then(res => {
        const newTeamMemberFromAPI = res.data
        setTeamMembers([...teamMembers, newTeamMemberFromAPI]
          )
      })
      .catch(err => {
        debugger
      })
      .finally(() => {
        setFormValues(initialFormValues)
      })
  }

  // Render your list of team members.

  useEffect(() => {
    fakeAxiosGet('fakeapi.com').then(res => setTeamMembers(res.data))
  }, [])

  return (
    <div className="App">

      <Form
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />

      {
        teamMembers.map( member => {
          return <div>
            {member.name} |
            {member.email} |
            {member.role}
          </div>
        })
      }
    </div>
  );
}

export default App;
