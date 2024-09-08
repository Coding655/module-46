import { useEffect, useRef } from "react";

const RefForm = () => {
    const handleRefForm = e =>{
        e.preventDefault()
        console.log(nameRef.current.value)
        console.log(emailRef.current.value)
        console.log(phoneRef.current.value)
    }
    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const phoneRef = useRef(null)

    useEffect(()=>{
        nameRef.current.focus()
    }, [])

    return (
        <div>
            <form onSubmit={handleRefForm}>
                <input ref={nameRef} type="text" name="name" />
                <br />
                <input ref={emailRef} type="email" name="email" id="" />
                <br />
                <input ref={phoneRef} type="text" name="phone" />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default RefForm;