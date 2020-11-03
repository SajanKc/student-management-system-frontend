import "./App.css";
import AppNavbar from "./components/AppNavbar";
import Home from "./components/Home";
import Student from "./components/Student";
import AddStudent from "./components/AddStudent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<AppNavbar />
			<Router>
				<Switch>
					<Route path="/" exact={true} component={Home} />
					<Route exact path="/student" component={Student} />
					<Route exact path="/addstudent" component={AddStudent} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
