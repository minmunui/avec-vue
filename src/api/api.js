import axios from "axios";

export const getTest = () => {
    console.log("test")
    axios.get("/test").then((res) => {
        console.log(res)
        return res
    })
}

