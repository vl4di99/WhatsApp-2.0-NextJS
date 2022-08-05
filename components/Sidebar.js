import styled from "styled-components";
import { Button } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import { getAuth, signOut } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import {db, auth} from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function Sidebar() {
  const EmailValidator = require("email-validator");
  const [user] = useAuthState(auth);

  const createChat = () => {
    const input = prompt(
      "Please enter an email address for the user you wish to chat with"
    );

    if (!input) return null;

    if (EmailValidator.validate(input)) {
      //We need to add the chat to the "chats" collection from the database
      await addDoc(collection(db, "chats"),{
        users: [user.email, input]
      })
    }
  };

  return (
    <Container>
      <Header>
        <UserAvatar
          onClick={() => {
            signOut(auth);
          }}
        />
        <IconsContainer>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </IconsContainer>
      </Header>
      <Search>
        <SearchIcon />
        <SearchInput placeholder="Search in chat" />
      </Search>
      <SidebarButton onClick={createChat}>Start a new chat</SidebarButton>
    </Container>
  );
}

export default Sidebar;

const Container = styled.div``;

const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 2px;
`;

const SearchInput = styled.input`
  outline-width: 0;
  border: none;
  flex: 1;
`;

const SidebarButton = styled(Button)`
  width: 100%;
  &&& {
    border-top: 1px solid whitesmoke;
    border-bottom: 1px solid whitesmoke;
  }
`;

const Header = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  height: 80px;
  border-bottom: 1px solid whitesmoke;
`;

const UserAvatar = styled(AccountCircleIcon)`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

const IconsContainer = styled.div``;
