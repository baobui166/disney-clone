import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="/images/cta-logo-one.svg" />
        <SignUp>Get All There</SignUp>
        <Description>
          Get Premier Access to Raya and the Last Dragon for an additional fee
          with a Disney+ subscription. As of 03/26/21, the price of Disney+ and
          The Disney Bundle will increase by $1.
        </Description>
        <CTALogoTwo src="/images/cta-logo-two.png" />
      </CTA>
    </Container>
  );
}

export default Login;

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 70px);
  overflow-x: hidden;
  padding: 0 calc(30vw - 5px);
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    background-image: url("/images/login-background.jpg");
    background-position: top;
    background-size: cover;
    opacity: 0.7;
  }
`;

const CTA = styled.div`
  max-width: 1200px;
  padding: 80px 40px;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const CTALogoOne = styled.img``;
const CTALogoTwo = styled.img`
  width: 100%;
  height: 90px;
  object-fit: contain;
`;

const SignUp = styled.div`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  border-radius: 5px;
  margin-top: 20px;
  text-transform: uppercase;
  font-size: 18px;
  cursor: pointer;
  transition: all ease 200ms;
  letter-spacing: 1.5px;

  &:hover {
    background: #0483ee;
  }
`;

const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  margin-top: 10px;
  line-height: 1;
`;
