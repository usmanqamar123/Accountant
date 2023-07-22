import './App.css';
import REACT from 'react';

function App() {
  return (
    <div>

      <div class="banner-image">
        <img src="components/image_rep.jpg" alt="representative" width="100%" height="500px" />
      </div>

      <div class="banner-text">
        <h2>Get <span>$250 </span> of your <br /> Accountant Fees</h2>
      </div>

      <br /><br />

      <div class="email-form">
        <input type="email" placeholder="Enter your email" class="email-input" />
        <button class="invite-button">Invite</button>
      </div>
      <br /><br /><br />

      <div class="step">
        <strong> Its Easy To Earn Credits In Few Simple Steps </strong>
      </div>

      <div class="steps-section">
        <ul class="steps">
          <li>
            <img src="components/refer_icon.png" alt="icon" />

            <h3 id="refer">REFER A FRIEND</h3>
            <p>Share referral link to every friend you know to purchase</p>
          </li>

          <li>
            <img src="components/signup_icon.png" alt="" />

            <h3 id="signup">MAKE SIGNUP</h3>
            <p>When your friend signup through your referral link</p>
          </li>

          <li>
            <img src="components/enroll_icon.png" alt="" />

            <h3 id="enroll">DO ENROLLS</h3>
            <p>When your friends enroll in a course, you will earn again</p>
          </li>
        </ul>
      </div>

      <div class="container">
        <div class="last-image">
          <img src="components/last_image.png" alt="" width="600px" />
        </div>

        <div class="form-text">
          <h3> <strong>$250 Off Account Fees </strong> </h3>
          <p>Sign Up And Claim Your Voucher</p>

          <div class="form-container">
            <form action="" class="form">
              <input class="form-input-first" type="text" placeholder="First Name" />{' '}
              <input class="form-input-last" type="text" placeholder="Last Name " />
              <br />
              <input class="form-input" type="phone" placeholder="+92 3343464" />
              <br />
              <input class="form-input" type="email" placeholder="Email" />
              <br />
              <input class="form-input" type="password" placeholder="Password" />
              <br />
              <input type="submit" value="Sign Up" class="signup-button" />
            </form>
          </div>
        </div>
      </div>

      <br /><br /><br />
    </div>
  );
}

export default App;
