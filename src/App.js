import { useState } from 'react';


function App() {
  const [formData,setData] = useState({
    firstname:"",
    lastname:"",
    email:"",
    country:"India",
    street:"",
    city:"",
    state:"",
    postalcode:"",
    checkbox1:false,checkbox2:false,checkbox3:false,
    radio:""
  });

  function ChangeHandler(event){
    const {name,value,type,checked} = event.target;
    setData(prevFormData => {
      return {
        ...prevFormData,
        [name]:type==="checkbox"?checked:value
      }
    });
  }

    function submitHandler(event){
      event.preventDefault();
      console.log(formData);
    } 

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white mt-2">
      <form className="bg-white px-8 py-6 rounded-lg shadow-md w-full max-w-2xl space-y-2"
      onSubmit={submitHandler}>
        <label htmlFor="firstname" className="block text-sm font-medium text-gray-700 mb-1">First Name</label> 
        <input type="text" placeholder="Enter your first name" id="name" 
        name="firstname" onChange={ChangeHandler} value={formData.firstname}
        className=" w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>

        

        <label htmlFor="lastname" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>  
        <input type="text" placeholder="Enter your last name" id="lastname" 
        name="lastname" onChange={ChangeHandler} value={formData.lastname}
        className=" w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>

        <br />

        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>          
        <input type="email" placeholder="Enter your email" id="email" 
        name="email" onChange={ChangeHandler} value={formData.email}
        className=" w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>

        <br />

      <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Country</label>      
      <select id="country" name="country" onChange={ChangeHandler} value={formData.country}
      className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option value="India">India</option>
        <option value="usa">USA</option>
        <option value="canada">Canada</option>
        <option value="uk">UK</option>
        <option value="australia">Australia</option>
      </select>

      <br/>

      <label htmlFor="street" className="block text-sm font-medium text-gray-700 mb-1">Street Address</label> 
      <input type="text" placeholder="enter your street address" onChange={ChangeHandler}
      value={formData.street} name="street" 
      className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>

      <br/>

      <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1"> City </label> 
      <input type="text" placeholder="enter your city" onChange={ChangeHandler}
      value={formData.city} name="city" 
      className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>

      <br/>

      <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1"> State/Province </label> 
      <input type="text" placeholder="enter your state" onChange={ChangeHandler}
      value={formData.state} name="state" 
      className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>

      <br/>

      <label htmlFor="postalcode" className="block text-sm font-medium text-gray-700 mb-1"> ZIP/Postal Code </label> 
      <input type="text" placeholder="enter your postal code" onChange={ChangeHandler}
      name="postalcode" 
      className=" w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>

      <br/>

      <div  className="space-y-4"> 
        <fieldset>  
          <legend className="text-sm font-medium text-gray-700 py-2">By Email</legend>   

          <div className="flex items-start space-x-2">
        <input type="checkbox" className="mt-2"
      name="checkbox1" 
      id="checkbox1"
      onChange={ChangeHandler} 
      checked={formData.checkbox1}/>
      <div className="flex flex-col"> 
      <label htmlFor="checkbox1" className="text-sm font-medium text-gray-700">comments</label>  
      <p className="text-sm text-gray-500">Get notified when someone posts a comment on a posting.</p>  
      </div>
      </div> 

      <div className="flex items-start space-x-2 ">
      <input type="checkbox" 
      name="checkbox2" className="mt-2"
      id="checkbox2"
      onChange={ChangeHandler}
      checked={formData.checkbox2}/>  
      <div className="flex flex-col">
       <label htmlFor="checkbox2" className="text-sm font-medium text-gray-700">candidates</label> 
      <p className="text-sm text-gray-500">Get notified when a candidate applies for a job.</p>  
      </div>
      </div>

      <div className="flex items-start space-x-2">
        <input type="checkbox" 
        id="checkbox3"
      name="checkbox3"  className="mt-2"
      onChange={ChangeHandler}
      checked={formData.checkbox3}/> 
      <div className="flex flex-col">
      <label htmlFor="checkbox3" className="text-sm font-medium text-gray-700"> offers</label>  
      <p className="text-sm text-gray-500"> Get notified when a candidate accepts or declines an offer.</p>  
      </div>
      </div>
 
        </fieldset>
        </div>

      <br/>

      <div className="space-y-3">
      <fieldset>
      <legend className="text-sm font-medium text-gray-700 ">Push Notifications</legend> 
      <p className="text-sm text-gray-500"> These are delivered via SMS to your mobile phone</p>  

      <div className="flex items-center space-y-2">
      <input type="radio" className="mr-3 mt-2"
      name="radio" 
      onChange={ChangeHandler}
      />  
      <label htmlFor="radio" className="text-sm text-gray-700 font-bold"> Everything</label>  
      </div>

      <div className="flex items-center space-y-2">
      <input type="radio" className="mr-3 mt-2"
      name="radio" 
      onChange={ChangeHandler}
      /> 
      <label htmlFor="radio" className="text-sm text-gray-700 font-bold"> Same as email</label> 
      </div>

      <div className="flex items-cente space-y-2">
      <input type="radio" className="mr-3 mt-2"
      name="radio" 
      onChange={ChangeHandler}
      />  
      <label htmlFor="radio" className="text-sm text-gray-700 font-bold"> No push notifications</label> 
      </div>

      </fieldset>
      </div>

      <br/>

      <button className=" bg-blue-500 hover:bg-blue-800 text-white font-bold rounded py-2 px-4">Save</button>



      </form>
    </div>
  );
}

export default App;
