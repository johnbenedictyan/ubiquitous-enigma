import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, Switch } from 'react-router-dom';

import { CustomNavbar } from './components/navbar';
import { V1BarChartPage } from './pages/v1/bar';
import { V1InputPage } from './pages/v1/input';
import { V1PieChartPage } from './pages/v1/pie';
import { V2BarChartPage } from './pages/v2/bar';
import { V2InputPage } from './pages/v2/input';
import { V2PieChartPage } from './pages/v2/pie';

function App() {

    return (
        <div className="App">
            <CustomNavbar />
            <Switch>
                <Route exact path="/v1/pie" component={V1PieChartPage} />
                <Route exact path="/v1/bar" component={V1BarChartPage} />
                <Route exact path="/v1/input" component={V1InputPage} />
                <Route exact path="/v2/pie" component={V2PieChartPage} />
                <Route exact path="/v2/bar" component={V2BarChartPage} />
                <Route exact path="/v2/input" component={V2InputPage} />
            </Switch>
        </div>
    );
}

export default App;
