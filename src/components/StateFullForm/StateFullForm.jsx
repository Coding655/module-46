import { useState } from "react";

const StateFullForm = () => {
    /* email state */
    const [email, setEmail] = useState(null)
    /* password state */
    const [password, setPassword]= useState(null);
    // text state
    const [text, setText] = useState('');
    const [error, setError] = useState('');
    /* event handler  */
    const handleStateFullForm = e =>{
        e.preventDefault()
        if(password.length < 6){
            setError('you have to use 6 letters or characters')
        }
        else{
            setError('')
            console.log(email,text,password)
        }
        
       
        // console.log(e.target.name.value)
        // console.log(e.target.email.value)
        // console.log(e.target.password.value)
        console.log("btn clicked")
    }
    /* onChange text */
    const handleTextChange = e =>{
        setText(e.target.value)
    }
    
    /* onChange pass */
    const handlePassChange = e =>{
       setPassword(e.target.value)
    }
    /* onChange Email */

    const handleOnChangeEmail = e => {
        // console.log(e.target.value)
        setEmail(e.target.value)
    }
    return (
        <div>
            <form onSubmit={handleStateFullForm}>
                
                <input type="text" name="name" value={text}
                onChange={handleTextChange}
                />
                <br />
                <input type="email" name="email" 
                onChange={handleOnChangeEmail}
                />
                <br />
                <input type="password" name="password" required  
                onChange={handlePassChange}
                />
                <br />
                <input type="submit" value="submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StateFullForm;