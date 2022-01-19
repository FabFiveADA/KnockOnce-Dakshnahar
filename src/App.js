
import './App.css';
import React from 'react';
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/appointmentDB");

const appointmentSchema = mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    mail:{
      type: String,
      required:true
  },
  phone:{
    type: String,
    required:true
  },
  date:{
    type: String,
    required:true
}
});
const Appointments = mongoose.model("Appointment", appointmentSchema);
function addinfo(name, mail, phone, date) {
  const appointment = new Appointments({
         name: name,
    mail: mail,
    phone: phone,
          date:date
    });
    appointment.save();
}
function App() {
  const [name, setname] = React.useState("");
  const [mail, setmail] = React.useState("");
  const [phone, setphone] = React.useState("");
  const [date, setdate] = React.useState("");

  return (
    <div className="App text-centre">
      <div className='formi'>
      <div className='title'>
        <h1>Appointment Form</h1>
      </div>
        <div className='name'>
        <label>Name</label>
        <input type='text' placeholder='Enter your Name' onChange={(e) => { setname(e.target.value)}}></input>
        
      </div>
        <div className='mail'>
          <label>Email</label>
        <input type='email' placeholder='Enter your mailid' onChange={(e) => { setmail(e.target.value)}}></input>
        
        <label>Phone</label>
      <input type='number' placeholder='Enter your contact number' onChange={(e) => { setphone(e.target.value)}}></input>
      </div>
        <div className='date'>
        <label>Date</label>
        <input type='date' onChange={(e) => { setdate(e.target.value)}}></input>
        
        </div>
        <button type='submit' onClick={addinfo(name,mail,phone,date)}>Submit</button>
      </div>
      
    </div>
  );
}

export default App;
