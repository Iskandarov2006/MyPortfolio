import React, { Fragment } from "react";
import "../css/ContactUs.css";
function ContactUs() {
  return (
    <Fragment>
      <div className="ContactUs">
        <div className="ContactUsPage">
          <h1>Contact Us</h1>
          <div className="Form">
            <form action="https://formspree.io/f/xoqrzoza" method="POST">
              <input
                type="text"
                name="Ismi"
                placeholder="Ismingizni kiriting..."
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Telefon raqamingizni kiriting:..."
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Emailingizni kiriting(shart emas)..."
              />
              <textarea
                name="maqsadi"
                id=""
                cols="30"
                rows="10"
                placeholder="Adminga xabaringizni yozing..."
                required
              ></textarea>
              <div>
                <button type="reset">Reset</button>
                <button type="submit">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ContactUs;
