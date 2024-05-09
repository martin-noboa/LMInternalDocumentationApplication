import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function Navbar(){
    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" color="primary" sx={{ marginBottom: 2 }}>
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                LM Documentation
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
      );
}

export default Navbar;
