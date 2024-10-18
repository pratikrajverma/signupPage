import React, { useState } from "react";
import '../App.css'

const Wrapper = () => {
 
  const [formdata, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });


  function changehandler(e) {
    setFormData({
       ...formdata,
      [e.target.name] :  e.target.value,
    });
  }


  function submithandler(e){

    e.preventDefault();

    createUser(formdata)

    setFormData({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    });
     

    async function createUser(data){
        try {


         
          const response = await fetch('http://localhost:4000/api/v1/createUser', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });
          


          console.log(response)

        }catch(error){
            console.log('Error:', error);
        }

      }
      

    

    

  
  }
  return (
    <div>
      <p  >
        Sign up page 
      </p>

   <form className="flex flex-col m-auto mt-10 border p-5 rounded-2xl  w-[300px] shadow-lg"
          onSubmit={submithandler}>
        <label>name</label>
        <input  className="border" type="text" value={formdata.name} name="name" onChange={(e) => changehandler(e)} />

        <label>email</label>
        <input className="border" type="text" value={formdata.email} name="email"  onChange={(e) => changehandler(e)}/>

        <label>phone</label>
        <input className="border" type="text" value={formdata.phone} name="phone"  onChange={(e) => changehandler(e)}/>

        <label>password</label>
        <input className="border" type="text" value={formdata.password} name="password" onChange={(e) => changehandler(e)} />


        <label>confirm password</label>
        <input className="border" type="text" value={formdata.confirmPassword} name="confirmPassword" onChange={(e) => changehandler(e)} />

        <button
          className="bg-blue-500 p-3 mt-10 rounded-lg w-36 hover:scale-95 m-auto "
          type="submit"
        >
          submit
        </button>
      </form>  

    

    
    </div>
  );
}

export default Wrapper;

// const[formdata,setFormdata] = useState({
//   name: '',
//   email: '',
//   phone: '',
//   message: '',
// })

// const setInputdata = (e) => {
//   setFormdata({...formdata, [e.target.name]: e.target.value })
// }

// const submithandler = (e) => {
//   e.preventDefault();

//   console.log(formdata);

//   setFormdata({name: '',
//   email: '',
//   phone: '',
//   message: '',})
// }
