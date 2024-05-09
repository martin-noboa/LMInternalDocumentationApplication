import Navbar from './components/Navbar';
import Markdown from './components/Markdown';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
    return (
    <div>
        <Navbar />
        <Router>
        <Switch>
            <Route path="">
                <Markdown filename="index.md" />
            </Route>
            <Route path="/test">
                <Markdown filename="test.md" />
            </Route>
        </Switch>
        </Router>
    </div>
    );
} 


export default App;
