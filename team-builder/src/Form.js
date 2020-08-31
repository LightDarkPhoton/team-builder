import React from 'react'

//  In Form.js build out your markup.

//  Build inputs for name, email and role (backend engineer, frontend engineer, designer, etc. Use your imagination).

//  You will have to decide which component is responsible for maintaining the state of the form (Form itself, or its parent App). Each approach has advantages and disadvantages.

//  Render your Form component in App. The App component should hand down through props any callback(s) needed for Form to do its job (adding new members to your team members state on submit).

export default function Form(props) {

    const {values, update, submit} = props

    const onChange = evt => {
        // 🔥 STEP 5 - IMPLEMENT the change handler for our inputs and dropdown
        // a) pull the name of the input from the event object
        // b) pull the value of the input from the event object
        const { name, value } = evt.target
        // c) use the `update` callback coming in through props
        update(name, value)
      }

      const onSubmit = evt => {
        // 🔥 STEP 6 - IMPLEMENT the submit handler and attach it to the JSX
        // a) don't allow the browser to reload!
        evt.preventDefault()
        // c) use the `submit` callback coming in through props
        submit()
      }

    return (
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group submit'>

                <h2> Add a Teammate</h2>
                <button disabled={!values.name ? true: false}>submit</button>
            </div>

            <div className='form-group inputs'>

                <h4>General Team Information</h4>

                <label>Name:
                    <input
                        value={values.name}
                        onChange={onChange}
                        name='name'
                        placeholder='type username'
                        maxLength='20'
                        type='text'
                    ></input>
                </label>

                <label>Email:
                    <input
                        value={values.email}
                        onChange={onChange}
                        name='email'
                        placeholder='type email'
                        maxLength='30'
                        type='text'
                    ></input>
                </label>

                <label>
                    <input
                        value={values.role}
                        onChange={onChange}
                        name='role'
                        placeholder='type role'
                        maxLength='30'
                        type='text'    
                    ></input>
                </label>
            </div>
        </form>
    )
}