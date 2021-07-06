import CookieConsent, { Cookies } from "react-cookie-consent";
import React, { Component } from "react";
export default class Cookie extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <CookieConsent
        enableDeclineButton
        flipButtons
        location="bottom"
        buttonText="Accept all cookies"
        cookieName="myAwesomeCookieName2"
        style={{
          background: "rgb(0, 12, 35)",
          borderRadius: "20px",
          width: "98%",
          left: "1%",
        }}
        buttonStyle={{
          color: "rgb(88, 255, 197)",
          fontSize: "13px",
          backgroundColor: "rgb(0, 12, 35)",
        }}
        expires={150}
      >
        {" "}
        <spam style={{ color: "rgb(88, 255, 197)" }}>
          {"Accept all cookies để có thể chơi nhiều game hơn"}
        </spam>
      </CookieConsent>
    );
  }
}
