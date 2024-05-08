import React, { useState } from 'react'
import Adverts from '../Utils/Adverts';

const Contacts = () => {
  const [details, setDetails] = useState({});

  // Create an asynchronuous function 'sendData'
  const sendData = async () => {
    // Create an object 'userDetail to hold all details provided by the client with a unique id
    const userDetail = {id: (Math.random() * 1450).toFixed(), ...details};
    try {
      // Make a 'POST' request to the server 
      const response = await fetch('https://epa-greenlite-database.onrender.com/customerContacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // Convert 'userDetail' into a JSON string for it to be transferred to the server
        body: JSON.stringify(userDetail),
      });
      if(!response.ok) {
        // If 'response' isn't ok, throw a new error object displaying the error code and statusText 
        throw new Error(`${response.status} Error: ${response.statusText}`);
      } else {
        // If not, alert the client that the data has been sent successfully to the server
        alert('Your message was sent successfully!!!');
        // Await the response data that will be sent from the server upon the successful transfer of the client data and convert it to a JSON object
        const data = await response.json();
        // Display the response in the browser console
        console.log(data);
      }
    } catch (error) {
      // Get and display the error message from the thrown error object using the 'message' property to the client
      alert(error.message);
        // Display the error message in the browser console
      console.error(error.message);
    }
  };

  const handleSubmission = e => {
    e.preventDefault();
    // Check if any or all of the input field are empty
    if(!details['name'] || !details['email'] || !details['subject'] || !details['message']) {
      alert('Inputs invalid!!!');
    } else {
      // If not, call 'sendData' function
      sendData();
      // Clear all input fields on the client side after a successful data submission
      setDetails({...details, name:"", email:"", subject:"", message:""});
    }
    
  }

  return (
    <div>
      <main className="container animate-greenSliderCenter">
        <h1 className="my-[30px] font-bold text-4xl text-gray-700 text-center">LEAVE A COMMENT</h1>
        <p className="w-[90%] mb-[40px] mx-auto text-1xl text-center text-gray-700 font-light">Feel free to contact us at any time and ask any questions. We are always open for any suggestions and collaborations.</p>
        <form className="w-[90%] my-[20px] mx-auto p-[10px]">
          <div>
            <label className="form-label" htmlFor="name">Your Name (required)</label>
            <input value={details["name"]} onChange={e => setDetails({...details, name: e.target.value})} className="form-input" placeholder='Tell us your name...' type="text" required />
          </div>
          <div>
            <label className="form-label" htmlFor="email">Your Email (required)</label>
            <input value={details["email"]} onChange={e => setDetails({...details, email: e.target.value})} className="form-input" placeholder='Drop your email address here...' type="email" name="email" id="email" required />
          </div>
          <div>
            <label className="form-label" htmlFor="subject">Subject</label>
            <input value={details["subject"]} onChange={e => setDetails({...details, subject: e.target.value})} className="form-input" placeholder='Subject of your message...' type="text" name="subject" id="subject" required />
          </div>
          <div>
            <label className="form-label" htmlFor="subject">Your Message</label>
            <textarea value={details["message"]} onChange={e => setDetails({...details, message: e.target.value})} className='form-message' name="message" id="message" cols="30" rows="10" placeholder='Drop your message...' required></textarea>
          </div>
          <button onClick={handleSubmission} className="form-button" type='button'>SEND</button>
        </form>
      </main>
      <Adverts />
    </div>
  )
}

export default Contacts