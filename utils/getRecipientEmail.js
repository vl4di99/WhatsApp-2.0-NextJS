const getRecipientEmail = (users, userLoggedIn) =>
  users?.filter((filteredUser) => filteredUser !== userLoggedIn?.email)[0];

export default getRecipientEmail;
