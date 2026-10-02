import { createContext } from "react";

const UserContext = createContext({
    loggedInUser : "user"
});

export default UserContext;