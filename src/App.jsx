import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Main from './Pages/Main/Main'
import './styles/App.scss'


function App() {

	return (
			<div className='App'>
			<Router>
				<Header />
				<Routes>
					<Route exact path='/' element={<Main />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	)
}

export default App
