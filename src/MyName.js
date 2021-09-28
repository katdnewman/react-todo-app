import React, {useState} from 'react'

export default function MyName() {
    const [name, setName] = useState('')

    function handleNameChange(evt) {setName(evt.target.value)
    }
    
    return (
        <div>
            <h1>Hello {name}</h1>
            <input type="text" value={name} onChange={handleNameChange} />
        </div>
        )
    }