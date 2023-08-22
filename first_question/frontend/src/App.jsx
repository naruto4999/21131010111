import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { useGetHelloQuery } from "./api/apiSlice";
function App() {
    const { data, isLoading } = useGetHelloQuery();
    console.log(data);

    return (
        <>
            <h1 className="text-red-500">Yooo</h1>
        </>
    );
}

export default App;
