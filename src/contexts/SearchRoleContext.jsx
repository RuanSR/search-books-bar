import { createContext, useState } from "react";

export const SearchRoleContext = createContext({});

export function SearchRoleProvider({children}){
  //{search, maxResult, index}
  const [searchRole, setSearchRole] = useState({search: 'java', maxResult: 2, index: 0});

  return <SearchRoleContext.Provider value={{searchRole, setSearchRole}}>
    {children}
  </SearchRoleContext.Provider>
}