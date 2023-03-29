import React from 'react'

function Input({ label, name, type, value, onChange, placeholder }) {
  return (
      <div className="form-group">

         <form action="">


              <div className="flexError">
                  <p>Name</p>
                  <span id="errorName"></span>
              </div>
              <input
                  type="text"
                  name=""
                  id="infoName"
                  placeholder="e.g. Stephen king"
              />


              <div class="flexError">
                  <p>Email Address</p>
                  <span id="errorMail"></span>
              </div>
              <input
                  type="text"
                  name=""
                  id="infoMail"
                  placeholder="e.g. stephenking@lorem.com"
              />


              <div class="flexError">
                  <p>PhoneNumber</p>
                  <span id="errorNum"></span>
              </div>
              <input
                  type="text"
                  name=""
                  id="infoNumber"
                  placeholder="e.g. +1 234 567 890"
              />
         </form>
      </div>
  )
}

export default Input