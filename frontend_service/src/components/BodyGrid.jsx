import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Markdown from './Markdown';



export default function BodyGrid() {
  return (
    <Box sx={{ flexGrow: 1, marginX: 2 }}> 
      <Grid rowSpacing={1} container spacing={2}>
        <Grid xs={12}>
          <Markdown />
        </Grid>
      </Grid>
    </Box>
  );
}
