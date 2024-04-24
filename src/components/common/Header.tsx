import { IconButton, styled } from '@mui/material'
import bell from "../../assets/bell.svg"
import avatar from "../../assets/avatar.png"

const StyledHeader = styled("div")(({theme}) => ({
  width: '100%',
  padding: "13px 30px 17px 28px",
  backgroundColor: theme.palette.secondary.main,
  "div": {
    display: 'flex',
    justifyContent: 'space-between',
    ".avatar": {
      width: "32px",
      height: "32px"
    },
    ".bell": {
      width: "24px",
      height: "24px"
    } 
  }
}));


const Header = () => {
  return (
    <StyledHeader>
      <div>
        <IconButton>
          <img className='bell' src={bell} alt='notification' />
        </IconButton>
        <IconButton>
          <img className='avatar' src={avatar} alt='notification' />
        </IconButton>
      </div>
    </StyledHeader>
  )
}

export default Header