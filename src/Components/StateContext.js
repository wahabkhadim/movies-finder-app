import React from "react";

const defaultvalue={
    value:[]
}
const MyContext=React.createContext(defaultvalue)

export const { Provider }= MyContext

export default MyContext;
