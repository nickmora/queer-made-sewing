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
        },
        "& .card":{
            padding: theme.spacing(3),
            margin: theme.spacing(3)
        }
    },
    Footer:{
        background: "darkgray",
        color: "lightgray"
    },
    NavBar: {
        flexGrow:1,
    },
    Mission:{
        "& img":{
            maxWidth: "100%",
            marginTop: 20
        },
        "& .card":{
            padding: theme.spacing(3),
            margin: theme.spacing(3)
        }
    },
    Contact:{
        "& .card":{
            padding: theme.spacing(3),
            margin: theme.spacing(3)
        },
        "& img":{
            maxWidth: "100%"
        }
    },
    Volunteer:{
        "& .card":{
            padding: theme.spacing(3),
            margin: theme.spacing(3)
        },
        "& img":{
            maxWidth: "100%",
        }
    },
    Events:{
        "& .card":{
            padding: theme.spacing(3),
            margin: theme.spacing(3)
        },
    },
    History:{
        "& .card":{
            padding: theme.spacing(3),
            margin: theme.spacing(3)
        },
        "& img":{
            maxWidth: "100%",
        }
    },
}))

export default useStyles;