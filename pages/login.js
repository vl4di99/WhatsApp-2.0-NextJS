import styled from "styled-components";
import Head from "next/head";
import { Button } from "@mui/material";
import { auth, googleProvider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

function Login() {
  const signIn = async () => {
    await signInWithPopup(auth, googleProvider).catch((err) => {
      alert("Error while signing in");
      console.log(err);
    });
  };
  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>

      <LoginContainer>
        <Logo
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png"
          alt="WhatsApp Logo"
        />
        <Button onClick={signIn}>Sign in with Google</Button>
      </LoginContainer>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: whitesmoke;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 4px 14px -3px rgba(0, 0, 0, 0.7);
`;

const Logo = styled.img`
  height: 200px;
  width: 200px;
  margin-bottom: 50px;
`;
