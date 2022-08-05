import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import styled from "styled-components";
import getRecipientEmail from "../utils/getRecipientEmail";

function Chat({ id, users }) {
  const [user] = useAuthState(auth);

  const recipientEmail = getRecipientEmail(users, user);
  return (
    <Container>
      <UserAvatar />
      <p>{recipientEmail}</p>
    </Container>
  );
}

export default Chat;

const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 15px;
  word-break: break-word;

  :hover {
    background-color: #e9eaeb;
  }
`;

const UserAvatar = styled(AccountCircleIcon)`
  margin: 5px;
  margin-right: 15px;
`;
