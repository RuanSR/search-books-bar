import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme)=>({
  header:{
    padding: '1rem',
    backgroundColor: '#343a40',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  customTitle:{
    color: '#FFF',
  },
  bookIcon:{
    marginLeft: '15px',
    color: '#FFF',
  }
}));