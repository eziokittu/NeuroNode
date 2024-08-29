import React, {useEffect, useState} from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Element } from 'react-scroll';

import Navbar from './components/Navbar/Navbar';
// import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';

// Pages importing
import Dashboard from './components/Body/Dashboard';
import NotFound from './components/Body/NotFound';
import Credits from './components/Body/Credits/Credits';
import DL_CNN_1_catdog from './components/Body/Models/DL/DL_CNN_1_catdog';
import DL_ANN_option1 from './components/Body/Models/DL/DL_ANN_option1';
import Other_option1 from './components/Body/Models/Other/Other_option1';
import ML_Classification_option1 from './components/Body/Models/ML/ML_Classification_option1';
import ML_StudentPerformance from './components/Body/Models/ML/ML_StudentPerformance';

const App = () => {
  const [serverActive, setServerActive] = useState(false);
	const [sidebarOpen, setSidebaropen] = useState(false);

  const toggleSidebar = () => {
    setSidebaropen(!sidebarOpen);
  }

  // Function to format time
	const formatTime = (timestamp) => {
		// Create a new Date object using the timestamp
		const currentDate = new Date(timestamp);

		// Get hours, minutes, and seconds
		const hours = currentDate.getHours();
		const minutes = currentDate.getMinutes();
		const seconds = currentDate.getSeconds();

		// Format hours, minutes, and seconds to ensure they have leading zeros if necessary
		const formattedHours = hours < 10 ? `0${hours}` : hours;
		const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
		const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

		// Construct the HH:MM:SS string
		return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
	}

  // React useEffect hook to check server readiness
	useEffect(() => {
		const checkServerReady = async () => {
			try {
				const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/working`);
				if (response.ok) {
					console.log("Server is ready at: " + formatTime(Date.now()));
					setServerActive(true); // Server is ready
				} else {
					console.log("Server not ready");
					setServerActive(false); // Server is not ready
				}
			} catch (error) {
				console.log("Error checking server status:", error);
				setServerActive(false); // Error occurred, assume server is not ready
			}
		};

		// Call the check immediately once
		checkServerReady();

		// Set the interval to continuously check server status
		const intervalId = setInterval(checkServerReady, 5*60*1000); // Check every 5 mins

		// Clean up interval on component unmount
		return () => clearInterval(intervalId);
	}, []);

  return (
		<div>
			{/* Routing */}
			<BrowserRouter>
				<Navbar serverActive={serverActive} toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen}/>
				<Sidebar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
				<Routes>
					<Route path="*" element={<NotFound />} />
					<Route exact path="/" element={<Dashboard />} />
					<Route exact path="/dashboard" element={<Dashboard />} />
					<Route exact path="/credits" element={<Credits />} />

					<Route exact path="/models/ml/regression/1" element={<ML_StudentPerformance />} />
					<Route exact path="/models/ml/classification/1" element={<ML_Classification_option1 />} />
					<Route exact path="/models/dl/ann/1" element={<DL_ANN_option1 />} />
					<Route exact path="/models/dl/cnn/1" element={<DL_CNN_1_catdog />} />
					<Route exact path="/models/other/1" element={<Other_option1 />} />

				</Routes>
				{/* <Footer /> */}
			</BrowserRouter>
		</div>
  )
}

export default App

// colours