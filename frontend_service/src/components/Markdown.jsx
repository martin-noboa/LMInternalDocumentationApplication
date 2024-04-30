import { Component } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

class Markdown extends Component {
    state = {
        response: [],
    }

    componentDidMount() {
        axios.get('http://localhost:8000/test/')
            .then(res => {
                const data = res.data;
                console.log('Response:', data);
                this.setState({
                    response: data
                });
            })
            .catch(err => {
                console.error('Error fetching data:', err);
            });
    }
    render() {
        const { response } = this.state;
        return (
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <p>{response}</p>
                </CardContent>
            </Card>
        );
    }
}

export default Markdown;