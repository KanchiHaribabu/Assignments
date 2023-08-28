import React from 'react'

const Employee=(props)=>{

    return (
        <div>
            <h1>Name :{props.name}</h1>

            <h1>Id :{props.id}</h1>
            
            <h1>Salary :{props.salary}</h1>

        </div>
    )

}

export default Employee;