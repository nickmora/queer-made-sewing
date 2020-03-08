import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    Banner: {
        // background: "black",
        "& img":{
            maxHeight: 520,
        },
        marginBottom: theme.spacing(5)
    },
    Home:{
        "& .background-img":{
            maxWidth: "100%"
        },
        "& .big":{
            backgroundImage: "url(https://thehuntswoman.com/wp-content/uploads/2018/11/Dissolve_D430_35_246_600px.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
        },
        "& .contact":{
            marginTop:  theme.spacing(30),
        },
        "& .card":{
            padding: theme.spacing(3),
            margin: theme.spacing(3)
        },
        "& .white":{
            backgroundColor: "rgba(255,255,255,0.8)",
            marginLeft: theme.spacing(24),
            marginRight: theme.spacing(24),
            paddingTop: theme.spacing(10),
        },
        "& .wrapper": {
            position: "relative",
            paddingBottom: "56.25%", /* 16:9 */
            paddingTop: "25px",
            height: 0,
            margin: theme.spacing(10, 2, 2, 2),
            background: "white",
        },
        "& .wrapper iframe": {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
        },        
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