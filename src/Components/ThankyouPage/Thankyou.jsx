import React from 'react'
import thankyou from '../../Assets/images/icon-thank-you.svg'
import './Thankyou.css'

function Thankyou() {
  return (
      <div class="stepThankYou" id="stepThankYou">
          <img src={thankyou} alt="" />
          <h1>Thank you!</h1>
          <p>
              Thanks for confirming your subscription! We hope you have fun
              using our platform. If you ever need support, please feel free to
              email us at support@loremgaming.com.
          </p>
      </div>

  )
}

export default Thankyou