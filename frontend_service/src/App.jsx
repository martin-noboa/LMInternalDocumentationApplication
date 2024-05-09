import Navbar from './components/Navbar';
import Markdown from './components/Markdown';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
    return (
    <div>
        <Navbar />
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Markdown filename="index.md" />
                </Route>
                <Route path="/test">
                    <Markdown filename="test.md" />
                </Route>
            </Switch>
        </BrowserRouter>
    </div>
    );
} 


export default App;
