import './App.css';
import { Typography,AppBar,Card,CardAction,CardContent,CardMedia,CssBaseline,Grid,Toolbar,Container, CardActions } from '@material-ui/core'
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { grid, padding, positions, typography } from '@mui/system';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete';
import { makeStyles } from '@material-ui/core/styles'
import mobile from './download.jpg'
import m from './abc.jpeg'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ChatSharpIcon from '@mui/icons-material/ChatSharp';
import LocalGroceryStoreSharpIcon from '@mui/icons-material/LocalGroceryStoreSharp';
import PersonOutlineSharpIcon from '@mui/icons-material/PersonOutlineSharp';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import Pagination from '@mui/material/Pagination';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Divider from '@mui/material/Divider';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import { useState } from 'react';
const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));
const st=makeStyles((theme)=>({
  cont:{
    backgroundColor:theme.palette.background.paper,
    padding:theme.spacing(8,0,6)
  },
  icon:{
    align:'center',
    marginLeft:'1050px',
    backgroundColor:'orange'
  },
  button:{
    marginTop:'40px'
  },
  cardGrid:
  {
    padding:'20px 0'

  },
  card:
  {
    height:'100%',
    display:'flex',
    flexDirection:'column'
  },
  media:
  {
    
  },
  content:
  {
    flexGrow:1,
  },
  pag:
  {
    align:'center',
    position:'relative',
    marginLeft:'500px'
  }

}))
function App() {
  const cla=st()
  const [value, setValue] = useState(2);
  const [hover, setHover] = useState(-1);
  return (
    <div className="App">
      <CssBaseline>
        <AppBar position='relative' color='gray'>
        <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Search Product
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        <div className={cla.icon}>
          <Toolbar>
            <ShoppingCartOutlinedIcon/>
            <Typography variant='overline' >Cart</Typography>
            <ChatSharpIcon/>
            <Typography variant='overline' >Message</Typography>
            <PersonOutlineSharpIcon/>
            <Typography variant='overline'>Sign in</Typography>
            
            
          </Toolbar>
          </div>
        </AppBar>
      </CssBaseline>
      <main className={cla.cont}>

          <Container maxWidth='sm'>
          <List
      sx={{
        width: '90%',
        maxWidth: 200,
        bgcolor: 'background.paper',
        marginLeft:'-400px'
      }}
    >
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Photos" secondary="Jan 9, 2014" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Bags" secondary="Jan 7, 2014" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Umbrella" secondary="July 20, 2014" />
      </ListItem>
    </List>
            </Container>
            
            <Container className={cla.cardGrid} maxWidth='lg' maxHeight='lg'> 
              <Grid container spacing={4}>
                <Grid item>
                  <Card className={cla.card}>
                    <CardMedia component="img"
                    className={cla.media} image="material-ui\src\download.jpg" sx={{ width: 151 }}>
                    </CardMedia>
                    <CardContent className={cla.content} align='center'>
                    <Typography variant='h6' gutterBottom> Ram:4 GB</Typography>
                    <Typography variant='h6' gutterBottom> Hard-Drive:320 GB</Typography>
                    <Typography variant='h6' gutterBottom> Processor: iCore-3</Typography>
                    </CardContent>
                    <CardActions>
                      <Button size='sm'>Edit</Button>
                      <Button size='sm'>View</Button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item>
                  <Card className={cla.card}>
                    <CardMedia component="img"
                    className={cla.media} image="material-ui\src\download.jpg" sx={{ width: 151 }}>
                    </CardMedia>
                    <CardContent className={cla.content} align='center'>
                    <Typography variant='h6' gutterBottom> Ram:4 GB</Typography>
                    <Typography variant='h6' gutterBottom> Hard-Drive:320 GB</Typography>
                    <Typography variant='h6' gutterBottom> Processor: iCore-3</Typography>
                    </CardContent>
                    <CardActions>
                      <Button size='sm'>Edit</Button>
                      <Button size='sm'>View</Button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item>
                  <Card className={cla.card}>
                    <CardMedia component="img"
                    className={cla.media} image="material-ui\src\download.jpg" sx={{ width: 151 }}>
                    </CardMedia>
                    <CardContent className={cla.content} align='center'>
                    <Typography variant='h6' gutterBottom> Ram:4 GB</Typography>
                    <Typography variant='h6' gutterBottom> Hard-Drive:320 GB</Typography>
                    <Typography variant='h6' gutterBottom> Processor: iCore-3</Typography>
                    </CardContent>
                    <CardActions>
                      <Button size='sm'>Edit</Button>
                      <Button size='sm'>View</Button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item>
                  <Card className={cla.card}>
                    <CardMedia component="img"
                    className={cla.media} image="material-ui\src\download.jpg" sx={{ width: 151 }}>
                    </CardMedia>
                    <CardContent className={cla.content} align='center'>
                    <Typography variant='h6' gutterBottom> Ram:4 GB</Typography>
                    <Typography variant='h6' gutterBottom> Hard-Drive:320 GB</Typography>
                    <Typography variant='h6' gutterBottom> Processor: iCore-3</Typography>
                    </CardContent>
                    <CardActions>
                      <Button size='sm'>Edit</Button>
                      <Button size='sm'>View</Button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item>
                  <Card className={cla.card}>
                    <CardMedia component="img"
                    className={cla.media} image="material-ui\src\download.jpg" sx={{ width: 151 }}>
                    </CardMedia>
                    <CardContent className={cla.content} align='center'>
                    <Typography variant='h6' gutterBottom> Ram:4 GB</Typography>
                    <Typography variant='h6' gutterBottom> Hard-Drive:320 GB</Typography>
                    <Typography variant='h6' gutterBottom> Processor: iCore-3</Typography>
                    </CardContent>
                    <CardActions>
                      <Button size='sm'>Edit</Button>
                      <Button size='sm'>View</Button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item>
                  <Card className={cla.card}>
                    <CardMedia component="img"
                    className={cla.media} image="material-ui\src\download.jpg" sx={{ width: 151 }}>
                    </CardMedia>
                    <CardContent className={cla.content} align='center'>
                    <Typography variant='h6' gutterBottom> Ram:4 GB</Typography>
                    <Typography variant='h6' gutterBottom> Hard-Drive:320 GB</Typography>
                    <Typography variant='h6' gutterBottom> Processor: iCore-3</Typography>
                    </CardContent>
                    <CardActions>
                      <Button size='sm'>Edit</Button>
                      <Button size='sm'>View</Button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item>
                  <Card className={cla.card}>
                    <CardMedia component="img"
                    className={cla.media} image="material-ui\src\download.jpg" sx={{ width: 151 }}>
                    </CardMedia>
                    <CardContent className={cla.content} align='center'>
                    <Typography variant='h6' gutterBottom> Ram:4 GB</Typography>
                    <Typography variant='h6' gutterBottom> Hard-Drive:320 GB</Typography>
                    <Typography variant='h6' gutterBottom> Processor: iCore-3</Typography>
                    </CardContent>
                    <CardActions>
                      <Button size='sm'>Edit</Button>
                      <Button size='sm'>View</Button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item>
                  <Card className={cla.card}>
                    <CardMedia component="img"
                    className={cla.media} image="material-ui\src\download.jpg" sx={{ width: 151 }}>
                    </CardMedia>
                    <CardContent className={cla.content} align='center'>
                    <Typography variant='h6' gutterBottom> Ram:4 GB</Typography>
                    <Typography variant='h6' gutterBottom> Hard-Drive:320 GB</Typography>
                    <Typography variant='h6' gutterBottom> Processor: iCore-3</Typography>
                    </CardContent>
                    <CardActions>
                      <Button size='sm'>Edit</Button>
                      <Button size='sm'>View</Button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item>
                  <Card className={cla.card}>
                    <CardMedia component="img"
                    className={cla.media} image="material-ui\src\download.jpg" sx={{ width: 151 }}>
                    </CardMedia>
                    <CardContent className={cla.content} align='center'>
                    <Typography variant='h6' gutterBottom> Ram:4 GB</Typography>
                    <Typography variant='h6' gutterBottom> Hard-Drive:320 GB</Typography>
                    <Typography variant='h6' gutterBottom> Processor: iCore-3</Typography>
                    </CardContent>
                    <CardActions>
                      <Button size='sm'>Edit</Button>
                      <Button size='sm'>View</Button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item>
                  <Card className={cla.card}>
                    <CardMedia component="img"
                    className={cla.media} image="material-ui\src\download.jpg" sx={{ width: 151 }}>
                    </CardMedia>
                    <CardContent className={cla.content} align='center'>
                    <Typography variant='h6' gutterBottom> Ram:4 GB</Typography>
                    <Typography variant='h6' gutterBottom> Hard-Drive:320 GB</Typography>
                    <Typography variant='h6' gutterBottom> Processor: iCore-3</Typography>
                    </CardContent>
                    <CardActions>
                      <Button size='sm'>Edit</Button>
                      <Button size='sm'>View</Button>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
            </Container>
            
      <Pagination count={10} variant="outlined" shape="rounded"  className={cla.pag}/>
      <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
        
      }}
    >
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
          
      </main>
     
      </div>
      
  );
}

export default App;
