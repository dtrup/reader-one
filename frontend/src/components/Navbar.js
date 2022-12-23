import * as React from 'react';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-router-dom'
import Topbar from './Topbar'
import { Box, Typography, AppBar, Toolbar, IconButton, Menu, Container,MenuItem, Button } from '@mui/material';


const pages = [
  { title: 'Home', url: '' },
  { title: 'Texts', url: 'texts' },
  { title: 'About', url: 'about' },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [isSidebar, setIsSidebar] = useState(true);


  return (
    <AppBar position="static">
      <Container maxWidth="xl" sx={{backgroundColor: "#858ca1"}}>
        <Toolbar disableGutters >
          <Box sx={{padding: 3}}>
           <img src="/logo-mic.jpg" /> 
          </Box>
           <Typography
            variant="h2"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              paddingRight: 10
            }}
          >
            X-lingual
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.title} onClick={handleCloseNavMenu} >
                  <Typography >
                  <Link to={`/${page.url}`} style={{textDecoration: "none", color: "#4cceac", fontSize: "15px"}}>{page.title}</Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
           BILINGUAL READS
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.title}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Typography color="secondary" textAlign="center">
                 <Link to={`/${page.url}`}  style={{textDecoration: "none", color: "#4cceac", fontSize: "20px", fontWeight: 700}}>{page.title}</Link>
                 </Typography>
              </Button>
            ))}
          </Box>
          <Topbar setIsSidebar={setIsSidebar} />

         
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;