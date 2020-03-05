import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    Banner: {
        // background: "black",
        "& img":{
            maxHeight: 520,
        }
    },
    Home:{
        // background: "red",
        "& .background-img":{
            minWidth: 900,
        },
        "& .contact":{
            marginTop:  theme.spacing(30),
        }
    },
    Footer:{
        background: "darkgray",
        color: "lightgray"
    },
    NavBar: {
        flexGrow:1,
    }
}))

export default useStyles;