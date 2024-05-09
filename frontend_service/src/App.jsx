import Navbar from './components/Navbar';
import Markdown from './components/Markdown';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
    return (
    <div>
        <Navbar />
        <Router>
        <Switch>
            <Route path="/file1">
                <Markdown filename="file1.md" />
            </Route>
            <Route path="/file2">
                <Markdown filename="file2.md" />
            </Route>
        </Switch>
        </Router>
    </div>
    );
} 


export default App;
