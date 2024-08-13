// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { ThemeProvider, createTheme, styled, useTheme } from '@mui/material/styles'

// Styled component for the triangle shaped background image
const TriangleImg = styled('img')({
  right: 0,
  bottom: 0,
  height: 170,
  position: 'absolute'
})

// Styled component for the trophy image
const TrophyImg = styled('img')({
  right: 36,
  bottom: 20,
  height: 98,
  position: 'absolute'
})



const Achivement = () => {
  // ** Hook
  const theme = useTheme()

  const imageSrc = theme.palette.mode === 'light' ? 'triangle-light.png' : 'triangle-dark.png'

  return (
  
       <Card className='space-y-5' sx={{ position: 'relative' }}>
      <CardContent>
      <Typography variant='h6' sx={{ letterSpacing: '0.25px' }}>
          DOT-MART
        </Typography>
        <Typography variant='body2' >Grocery</Typography>
        
        <Typography variant='h5' sx={{ my: 3.1, color: 'primary.main' }}>
          420.8k
        </Typography>
        <Button size='small' variant='contained'>
          View Sales
        </Button>
        {/* <TriangleImg alt='triangle background' src="https://res.cloudinary.com/ddkso1wxi/image/upload/v1675919455/Logo/Copy_of_Zosh_Academy_nblljp.png" /> */}
        <TrophyImg alt='trophy' src='https://ik.imagekit.io/vite/_Pngtree_lion%20head%20face%20logo%20silhouette_15317165.png?updatedAt=1723483782619' />
      </CardContent>
    </Card>
   
   
  )
}

export default Achivement;
