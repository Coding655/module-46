import { useEffect, useRef } from "react";


const UseRef = () => {
    const handleSubmit = e => {
        e.preventDefault()
        console.log(nameRef.current.value)
        console.log(emailRef.current.value)
        console.log(passwordRef.current.value)
      
    }
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    useEffect(()=>{
        nameRef.current.focus();
        // emailRef.current.focus();
        
    },[])
    return (
        <div>
               <form onSubmit={handleSubmit}>
                
                <input ref={nameRef} type="text" name="name" 
               
                />
                <br />
                <input ref={emailRef} type="email" name="email" 
               
                />
                <br />
                <input ref={passwordRef} type="password" name="password" required  
                
                />
                <br />
                <input type="submit" value="submit" />
            
            </form>
        </div>
    );
};

export default UseRef;