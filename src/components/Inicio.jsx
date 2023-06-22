import { NavLink } from 'react-router-dom';

export const Inicio = () => {
	return (
		<section className="inicio">
			<article className="inicio-container">
				<div className="inicio-card">
					<NavLink to="/peliculas" className="inicio-link">
						<h2>MOVIES</h2>
						<img src="src/assets/placeholder.png" alt="poster" />
					</NavLink>
					<p className="inicio-p">Popular Movies</p>
				</div>
				<div className="inicio-card">
					<NavLink to="/series" className="inicio-link">
						<h2>SERIES</h2>
						<img src="src/assets/placeholder.png" alt="poster" />
					</NavLink>
					<p className="inicio-p">Popular Series</p>
				</div>
			</article>
		</section>
		
	)
}