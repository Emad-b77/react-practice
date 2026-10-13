import { useState } from "react";

function useCounter(){
    const [count , setCount] = useState(0)
    return [count , setCount]
}

export default useCounter