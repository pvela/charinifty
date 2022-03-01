import {makeStyles} from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    link:{
        textDecoration:"none",
        color: "black",
        fontSize: "20px",
    },
    icon:{
        color: "white"
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        marginTop: 70,
        width: 240,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen
        })
      }    
  
}))
