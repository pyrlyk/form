import React, {useState} from "react";

function Form() {
    const [username, setUsername] = useState('');
    const [comment, setComment] = useState('');
    const [topic, setTopic] = useState("angular");

    const handleSubmit = () =>{
        alert(`${username} ${comment} ${topic}`)
    }

    return (
        <form onSubmit={handleSubmit} className = "form">
            <div >
                <label>Username:</label>
                <input type='text'
                       value={username}
                       onChange={(event) => setUsername(event.target.value)}/>
            </div>

            <div>
                <label>Comments:</label>
                <textarea
                    value={comment}
                    onChange={(event) => setComment(event.target.value)}/>
            </div>

            <div>
                <label>Topic:</label>
                <select defaultValue={topic}
                        onChange={(event) => setTopic(event.target.value)}>
                    <option value="angular">Angular</option>
                    <option value="react">React</option>
                    <option value="vue">Vue</option>
                </select>
            </div>

            <button className = "button" type="submit" value = "submit">Submit</button>            
        </form>

    )
}


export default Form;