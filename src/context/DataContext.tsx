"use client";
import { createContext, useContext, useState, ReactNode } from "react";

export interface Member {
  id: string;
  avatar: string;
  username: string;
  joinDate: string;
  role: string;
}

export interface Role {
  id: string;
  name: string;
  color: string;
  visible: boolean;
}

export interface Message {
  id: string;
  avatar: string;
  username: string;
  timestamp: string;
  content: string;
}

interface DataContextProps {
  members: Member[];
  setMembers: (members: Member[]) => void;
  roles: Role[];
  setRoles: (roles: Role[]) => void;
  messages: Message[];
  setMessages: (messages: Message[]) => void;
}

const initialMembers: Member[] = [
  { id: "1", avatar: "/avatars/1.png", username: "Ayush", joinDate: "2023-01-10", role: "Admin" },
  { id: "2", avatar: "/avatars/2.png", username: "Nitesh", joinDate: "2023-02-15", role: "Moderator" },
  { id: "3", avatar: "/avatars/3.png", username: "Adarsh", joinDate: "2023-03-20", role: "Member" },
];

const initialRoles: Role[] = [
  { id: "1", name: "Admin", color: "#f87171", visible: true },
  { id: "2", name: "Moderator", color: "#60a5fa", visible: true },
  { id: "3", name: "Member", color: "#34d399", visible: true },
];

const initialMessages: Message[] = [
  { id: "1", avatar: "/avatars/1.png", username: "Ayush", timestamp: "2024-06-01 10:00", content: "Welcome to the server!" },
  { id: "2", avatar: "/avatars/2.png", username: "Nitesh", timestamp: "2024-06-01 10:05", content: "Hello everyone!" },
];

export const DataContext = createContext<DataContextProps>({
  members: [],
  setMembers: () => {},
  roles: [],
  setRoles: () => {},
  messages: [],
  setMessages: () => {},
});

export function DataProvider({ children }: { children: ReactNode }) {
  const [members, setMembers] = useState<Member[]>(initialMembers);
  const [roles, setRoles] = useState<Role[]>(initialRoles);
  const [messages, setMessages] = useState<Message[]>(initialMessages);

  return (
    <DataContext.Provider value={{ members, setMembers, roles, setRoles, messages, setMessages }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
} 