
import { routeConfiguration } from "./Router/route.configuration";
import {RoutesFromConfig} from "./Router/RoutesFromConfig";


function App() {
  return (
    <div className="App">
      <RoutesFromConfig routes={routeConfiguration}/>
    </div>
  );
}

export default App;
