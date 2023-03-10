import axios from "axios"

const url = "http://localhost:8000/tasks";
export const getTasks = () => {
    return axios.get<string[]>(url).then((res)=>{
        return res.data;
    });
}