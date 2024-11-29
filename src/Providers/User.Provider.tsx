"use client";
import { User } from "../lib/models/users.model";
import axios from "axios";
import {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";

interface UserContextType {
  users: User[];
}

const UserContext = createContext<UserContextType>({
  users: [],
});

const useUser = () => useContext(UserContext);

interface UserProviderProps {
  children: ReactNode;
}

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_URL}/api/users`
        );
        setUsers(response.data);
      } catch (err) {
        console.error("Error fetching User:", err);
      }
    };

    fetchUsers();
  }, []);

  return (
    <UserContext.Provider value={{ users }}>{children}</UserContext.Provider>
  );
};

export { useUser, UserProvider };
