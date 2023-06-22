import { NavLink } from "react-router-dom"

export const Header = () => {
	return (
		<>
			<nav>
				<div className='header-left'>
					<h1 className='nav-white'>DEMO Streaming</h1>
				</div>
				<div className="header-right">
					<p className='p-nav'>Login</p>
					<button className='nav-btn'>Start your free trial</button>
				</div>
			</nav>
			<div className='header-lower'>
				<h2>Popular Titles</h2>
				<div className="header-back">
					<NavLink to='/inicio' className='nav-link'>
						<h3 className='nav-back'>Volver</h3>
					</NavLink>
				</div>
			</div>
		</>

	)
}