import React, { useState } from 'react'

const Form = () => {

    const [user, setUser] = useState({
        firstName: "",
        lastname: "",
        email: "",
        password: "",
        phoneNumber: "",
    });

    const handleFromSubmit = (event) => {
        event.preventDefault();
        console.log("user form data : ", user);

        // clear form fields
        setUser({
            firstName: "",
            lastname: "",
            email: "",
            password: "",
            phoneNumber: "",
        });
    }

    // const {name,value} = e.target 
    // in this following name , value both are come form the e.target object, which is the input field taht trigered on the onChange event

    // what is event ?
    // event it is the passed into the event handler function
    // in this case, it passed automatically by react when an event like onChange happens on an input field

    // event : is and object contains a lots of properties 
    // event.target : is the html element that triggered the event 
    // event.target.name  : come from the name="" in the input , and this identifies the filed 
    // event.target.value : comes from what the user typed , this provide the value to save in state
    // { name, value } = e.target , here we Destructure e.traget , cleaner access in your code 



    // in this when the user start to type in the input field then , onChange call the handleInputchange , and it return current value ,name of the input 
    // field
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser((prev) => ({ ...prev, [name]: value }));
    }

    // in this following :  in side the steUSer ({...prve}) this is fetch or spread the previous latest state data into the new Object
    // [name] : value -> this is the dynamic key assignment in javascript 

    return (
        <div className='h-[90vh] flex justify-center items-center'>
            <form onSubmit={handleFromSubmit} className='bg-gray-600 w-[500px] flex flex-col m-auto p-5 rounded gap-2'>
                <h1 className='text-center font-bold text-3xl'>Sign up</h1>
                <p className='text-center p-3'>Please fill this form to create an account</p>
                <label>
                    <b>First Name</b>
                </label>
                <input
                    className='border p-2 rounded outline-0'
                    type='text'
                    name='firstName'
                    placeholder='Enter First Name'
                    required
                    value={user.firstName}
                    onChange={handleInputChange}
                />

                <label>
                    <b>Last Name</b>
                </label>
                <input className='border p-2 rounded outline-0'
                    type='text'
                    name='lastname'
                    placeholder='Enter Last Name'
                    required
                    value={user.lastname}
                    onChange={handleInputChange}
                />

                <label>
                    <b>Email</b>
                </label>
                <input className='border p-2 rounded outline-0'
                    type='email'
                    name='email'
                    placeholder='Enter Email'
                    required
                    value={user.email}
                    onChange={handleInputChange}
                />

                <label>
                    <b>Password</b>
                </label>
                <input className='border p-2 rounded outline-0'
                    type='password'
                    name='password'
                    placeholder='Enter Password'
                    required
                    value={user.password}
                    onChange={handleInputChange}
                />

                <label>
                    <b>Phone Number</b>
                </label>
                <input className='border p-2 rounded outline-0'
                    type='phone'
                    name='phoneNumber'
                    placeholder='Enter Mobile Number'
                    required
                    value={user.phoneNumber}
                    onChange={handleInputChange}
                />

                <p className='mt-3 text-black font-bold'>By Creating an account you agree to our <a href='#' className='text-orange-400'> terms & policy</a></p>

                <button type='submit' className='bg-black p-3 font-bold text-xl rounded cursor-pointer mt-2 hover:bg-gray-900 duration-300'>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Form
