import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Regions from "./pages/Regions";
import Assets from "./pages/Assets";
import TrendsMetrics from "./pages/TrendsMetrics";
import About from "./pages/About";

function App() {
	return (
		<Router>
			<div className="min-h-screen flex flex-col">
				<Header />
				<main className="flex-1">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/regions" element={<Regions />} />
						<Route path="/assets" element={<Assets />} />
						<Route path="/tnm" element={<TrendsMetrics />} />
						<Route path="/about" element={<About />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
