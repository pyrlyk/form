import React, {useState} from "react";
import "./Form.css"

function Form() {
    const [username, setUsername] = useState('');
    const [comment, setComment] = useState('');
    const [topic, setTopic] = useState("angular");
 
    const handleSubmit = () =>{
        alert(`${username} ${comment} ${topic}`)
    }

    return (
        <form onSubmit={handleSubmit} className = "form">
            <div className = "input">
                <label>Username:</label>
                <input type='text'
                        placeholder = "Enter your name"
                       value={username}
                       onChange={(event) => setUsername(event.target.value)}/>
            </div>
            
            <div className = "label">
                <label>Comments:</label>
                <textarea
                    value={comment}
                    placeholder = "Enter your comment"
                    onChange={(event) => setComment(event.target.value)}/>
            </div>

            <div>
                <label className = "select">Topic:</label>
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