import { Box, Button, Typography, styled } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import plusSvg from "../assets/+.svg"

const GameTabStyle = styled(Box)(({theme})=> ({
  color: theme.palette.info.light,
  display: "flex",
  flexDirection: "row",
  h4: {
    flexGrow: 1,
    textAlign: "center",
    borderBottom: "1px solid",
  },
  ".first": {
    marginRight: "8px",
    color: theme.palette.primary.main
  },
  ".second": {
    marginLeft: "8px"
  }
}))

type Props = {}

const NewGame = (_props: Props) => {

  const navigate = useNavigate();

  const handleNewGame = () => {
    navigate("/games/mygame");
  }

  return (
    <Box sx={{padding: "10px 39px"}}>
      <GameTabStyle>
        <Typography variant='h4' className='first'>یافتن بازی</Typography>
        <Typography variant='h4' className='second'>بازی های من</Typography>
      </GameTabStyle>
      <Button 
        fullWidth 
        variant='contained' 
        color='warning'
        onClick={handleNewGame}
        startIcon={<img src={plusSvg} alt='+'/>}
        sx={{marginTop: "12px"}}>
          افزودن بازی جدید 
        </Button>
    </Box>
  )
}

export default NewGame