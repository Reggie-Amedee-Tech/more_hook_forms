import React, { useState } from 'react';

const UserForm = (props) => {
    const [firstName, setFirstname] = useState("");
    const [firstNameCheck, setFirstNameCheck] = useState("")
    const [lastName, setLastname] = useState("");
    const [lastNameCheck, setLastNameCheck] = useState("")
    const [email, setEmail] = useState("");
    const [validEmail, setValidEmail] = useState("");
    const [password, setPassword] = useState("");
    const [validPassword, setValidPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)

    const createUser = (e) => {
        e.preventDefault();
        const createUser = {firstName, lastName, email, password, confirmPassword}
        console.log("Welcome", createUser)
        setHasBeenSubmitted( true );
    }

    const firstNameChecker = (e) => {
        setFirstname(e.target.value);
        
        if (e.target.value.length < 2) {
            setFirstNameCheck("First name must have at least 2 characters!")
        } else {
            setFirstNameCheck("")
        }
    }

    const lastNameChecker =(e) => {
        setLastname(e.target.value);
        if (e.target.value.length < 2) {
            setLastNameCheck("Last name must be at least 2 characters")
        } else {
            setLastNameCheck("")
        }
    }

    const passwordCheck = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 8) {
            setValidPassword("Password must be at least 8 characters")
        } else if (password !== confirmPassword ) {
            setPassword("The passwords must match")
        }
        
    }

    const validateEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 5) {
            setValidEmail("A valid email is required!")
        } else {
            setValidEmail("Thank you for submitting your email!")
        }
        
    }


    /*const formMessage = () => {
        if (hasBeenSubmitted === true) {
            return "Thank you for submitting this form"
        } else {
            return "Please fill out all of the fields in this form"
        }
    }*/

    return(
        <form onSubmit={ createUser }>
            {
                hasBeenSubmitted ?
                <h3>Thank You for filling out this form!</h3> :
                <h3>Please fill out this form!</h3>
            }
            <div>
                <label>First Name: </label>
                <input type="text" onChange={firstNameChecker} value={ firstName }/>
                {
                    <p>{firstNameCheck}</p>
                }
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" onChange={lastNameChecker} value={ lastName }/>
                <p>{lastNameCheck}</p>
            </div>
            <div>
                <label>Email: </label>
                <input type="text" onChange={ validateEmail } value={ email }/>
                {
                    
                    <p>{validEmail}</p>
                    
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ passwordCheck } value={ password }/>
                <p>{validPassword}</p>
                <p>{password}</p>
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={(e) => setConfirmPassword(e.target.value)} value={ confirmPassword }/>
            </div>

            <div>
                <h3>Your Form Data</h3>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPassword}</p>
            </div>

            <input type="submit" value="Submit"/>

        </form>
    )
}

export default UserForm;