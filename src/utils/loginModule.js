import axios from "axios";

const login = (url) => {
    axios.get(url)
    .then((req)=>{
        console.log(req)
    })
}