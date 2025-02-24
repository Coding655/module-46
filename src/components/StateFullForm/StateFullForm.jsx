import { useState } from "react";

const StateFullForm = () => {

        const [name, setName] = useState(null);
        const [email, setEmail] = useState(null);
        const [password, setPassword] = useState(null);
        const [error, setError] = useState('');


    const handleStateFullForm = e =>{
        e.preventDefault()
        if(password.length < 6){
            setError('please input 6 character longer password ')
        }
        else{
            setError('')
            console.log(name,email,password)
        }
       
    }

    const handleEmailChange = e =>{
        // console.log(e.target.value)
        setEmail(e.target.value)
    }
    const handlePasswordChange = e =>{
        setPassword(e.target.value)
    }
    const handleNameChange = e =>{
        setName(e.target.value)
    }

    return (
        <div>
             <form onSubmit={handleStateFullForm}>
                <input
                onChange={handleNameChange} type="text" name="name" />
                <br />
                <input 
                    onChange={handleEmailChange}
                    type="email" name="email" id="" />
                <br />
                <input
                onChange={handlePasswordChange}    
                type="password" name="password" required />
                <br />
                <input type="submit" value="submit"  />

                {
                error && <p>{error}</p>
                }  
            </form>
                  
        </div>
    );
};

export default StateFullForm;