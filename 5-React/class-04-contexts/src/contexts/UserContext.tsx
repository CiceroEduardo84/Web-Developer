import React, { createContext } from "react";

type UserContexts = {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
};

export const UserContext = createContext({} as UserContexts);
