import React, {useState} from "react";

function Form() {
    const [username, setUsername] = useState('');
    const [comment, setComment] = useState('');
    const [topic, setTopic] = useState({topic: 'react'});

    const handleSubmit = () =>{
        alert(`${username} ${comment} ${topic}`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username</label>
                <input type='text' value={username} onChange={() => setUsername()}/>
            </div>

            <div>
                <label>Comments</label>
                <textarea value={comment} onChange={() => setComment()}/>
            </div>

            <div>
                <label>Topic</label>
                <select value={topic} onChange={() => setTopic()}>
                    <option value="react">React</option>
                    <option value="angular">Angular</option>
                    <option value="vue">Vue</option>
                </select>
            </div>

            <button type="submit">Submit</button>
        </form>
    )
}


export default Form;