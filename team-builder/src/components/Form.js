import React from 'react'

export default function memberForm(props){
    const {update, values, submit} = props

    const onChange = evt => {
        const { name, value } = evt.target
        update( name, value)
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    return(
        <form onSubmit={onSubmit}>
            <div className='container'>
                <label htmlFor='name'>Name:
                <input
                id='name'
                name='name'
                type='text'
                placeholder='Please enter your name'
                maxLength='20'
                value={values.name}
                onChange={onChange}
                />
                </label>
                <label htmlFor='email'>Email:
                <input
                id='email'
                name='email'
                type='email'
                placeholder='Please enter your email'
                maxLength='30'
                value={values.email}
                onChange={onChange}
                />
                </label>
                <label>Role:
                    <select name='role' value={values.role} onChange={onChange}>
                        <option value=''>Select a Role</option>
                        <option value='Full Stack'>Full Stack Web Student</option>
                        <option value='Data Science'>Data Science Student</option>
                        <option value='iOS Development'>ios student</option>
                        <option value="Team Lead">Team Lead</option>
                        <option value='Section Lead'>Section Lead</option>
                        <option value='instructor'>Instructor</option>
                    </select>
                </label>
            </div>
            <button disabled={!values.name || !values.email || !values.role}>Add New Member</button>
        </form>
    )
}