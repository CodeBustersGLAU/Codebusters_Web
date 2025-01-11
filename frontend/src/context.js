import { createContext, useContext, useState } from "react";

const UserContext = createContext(null);

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [club, setClub] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser, club, setClub }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
