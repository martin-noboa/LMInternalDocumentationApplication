import { Component } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Unstable_Grid2';

class Markdown extends Component {
    state = {
        htmlContent: '', // Store HTML content separately
    }

    componentDidMount() {
        axios.get('http://localhost:8000/test/')
            .then(res => {
                const htmlContent = res.data; // Assuming res.data contains HTML content
                console.log('HTML Content:', htmlContent);
                this.setState({
                    htmlContent: htmlContent // Store HTML content in state
                });
            })
            .catch(err => {
                console.error('Error fetching data:', err);
            });
    }
    render() {
        const { htmlContent } = this.state;
        return (
            <Grid xs={12}>
                <Card sx={{ minWidth: 275, padding: '16px' }}>
                    <CardContent>
                        <div dangerouslySetInnerHTML={{ __html: htmlContent }} /> {/* Pass htmlContent as a string */}
                    </CardContent>
                </Card>
            </Grid>
        );
    }
}

export default Markdown;
