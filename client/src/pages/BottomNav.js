// import "../style/index.scss";
// import * as React from 'react';
// import Grid from '@mui/material/Grid';
// import Container from '@mui/material/Container';
// import Avatar from "@mui/material/Avatar";
// import BottomNavigation from '@mui/material/BottomNavigation';
// import BottomNavigationAction from '@mui/material/BottomNavigationAction';
// import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
// import SearchIcon from '@mui/icons-material/Search';
// import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
// import IconButton from '@mui/material/IconButton';





// export default function BottomNav(props) {
// const [value, setValue] = React.useState('recents');

//   const handleChange = (event: React.SyntheticEvent, newValue: String) => {
//     setValue(newValue);
//   };

//   return(

//   <Container sx={{ py: 8 }} maxWidth="md" className={{classes.containerdStyle style={{ color: 'white', backgroundColor: '#e91e63' }}> 
//   <Grid container spacing={3}>
// <BottomNavigation  xs={12} sx={{ height: '100%', display: 'flex', flexDirection: 'row' }} value={value} onChange={handleChange}>
//     <BottomNavigationAction

//         label="Home"
//         value="home"
//         icon={<HomeOutlinedIcon  fontSize="large"/>}
//       />
//       <BottomNavigationAction
//         label="Search"
//         value="search"
//         icon={<SearchIcon fontSize="large" />}
//       />
//       <BottomNavigationAction
//         label="Chat"
//         value="chat"
//         icon={<ChatBubbleOutlineOutlinedIcon fontSize="large" />}
//         />

// <BottomNavigation
//         label="User"
//         value="user">
//         <IconButton   href="#" sx={{ height: '100%', display: 'flex', flexDirection: 'column',  justifyContent:'center', }}>
 
//   <Avatar src={'https://source.unsplash.com/random%27%7D'} sx={{ selfAlign:'center',width: 36, height: 36, }}/>

//           </IconButton>
//           </BottomNavigation>
// </BottomNavigation>
// </Grid>
// </Container>
//   )
// }


