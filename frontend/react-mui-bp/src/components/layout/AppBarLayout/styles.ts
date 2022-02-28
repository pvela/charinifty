import {makeStyles} from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  toolbar: {
    paddingLeft: 0,
    paddingRight: 0
  },
  toolbarLeft: {
    alignItems: 'center',
    display: 'flex',
    flex: 1
  },
  navLinks: {
    marginLeft: theme.spacing(5),
    display: "flex"
  },
  logo: {
    cursor: 'pointer',
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
  
}))
