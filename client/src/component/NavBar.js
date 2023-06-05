

import React from 'react'
import {AppBar,Box,Button,Container,IconButton,Toolbar,Typography} from "@mui/material"
import {Menu} from '@mui/icons-material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import Usericons from './user/Usericons';
import { useValue } from '../context/ContextProvider';



const NavBar=()=> {

    const{state:{currentUser},
    dispatch        
}=useValue()

    return (
        <AppBar>
            <Container>
                <Toolbar disableGutters>
                    <Box sx={{ mr: 1 }}>
                        <IconButton size='large' color='inherit'>
                            <Menu />
                        </IconButton>
                    </Box>
                    <Typography
                        variant='h6'
                        component='h1'
                        noWrap
                        sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        BACKPACKING
                    </Typography>
                    <Typography
                        variant='h6'
                        component='h1'
                        noWrap
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        BP
                    </Typography>
                    {!currentUser ? (
                        <Button 
                            color='inherit' 
                            startIcon={<AccountCircleIcon/>} 
                            onClick={()=>dispatch({type:'OPEN_LOGIN'})}
                        >
                            Sign In
                    </Button>
                    ) : (
                        <Usericons/>
                    )}
                    
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default NavBar;