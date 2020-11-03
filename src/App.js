import "./App.css";
import AppNavbar from "./components/AppNavbar";
import Student from "./components/Student";
import AddStudent from "./components/AddStudent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<AppNavbar />
			<Router>
				<Switch>
					<Route exact path="/student" component={Student} />
          <Route exact path="/addstudent" component={AddStudent} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
