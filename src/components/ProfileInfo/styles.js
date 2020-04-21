import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme)=>({
    root:{
        borderRadius:"4px",
        padding:"12px",
        margin:"24px",
        backgroundColor: "#84a9ac",
        color: "#cae8d5"
    },
    button:{
        backgroundColor: "#3b6978",
        marginTop: "20px"
    },
    label:{
        marginBottom: "8px",
        width:"280px",
        '&:last-child' :{
            marginBottom:'0'
        }
    }
}))

export default styles;

