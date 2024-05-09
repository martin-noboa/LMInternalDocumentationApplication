import { Component } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Unstable_Grid2';

class Markdown extends Component {
    state = {
        htmlContent: '', // Store HTML content separately
    }

    componentDidMount() {
        axios.get('http://localhost:8000/${filename}/')
            .then(res => {
                const htmlContent = res.data; 
                console.log('HTML Content:', htmlContent);
                this.setState({
                    htmlContent: htmlContent 
                });
            })
            .catch(err => {
                console.error('Error fetching data:', err);
            });
    }
    render() {
        const { htmlContent } = this.state;
        return (
            <Box sx={{ flexGrow: 1, marginX: 2 }}> 
                <Grid rowSpacing={1} container spacing={2}>
                    <Grid xs={12}>
                        <Card sx={{ minWidth: 275, padding: '16px' }}>
                                <CardContent>
                                    <div dangerouslySetInnerHTML={{ __html: htmlContent }} /> 
                                </CardContent>
                            </Card>
                    </Grid>
                </Grid>
            </Box>
         
        );
    }
}

export default Markdown;
