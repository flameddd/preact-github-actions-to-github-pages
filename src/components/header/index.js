import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';
import baseroute from '../../baseroute';

const Header = () => (
	<header class={style.header}>
		<h1>Preact App</h1>
		<nav>
      <Link activeClassName={style.active} href={`${baseroute}/`}>Home</Link>
      <Link activeClassName={style.active} href={`${baseroute}/profile`}>Me</Link>
      <Link activeClassName={style.active} href={`${baseroute}/profile/john`}>John</Link>
		</nav>
	</header>
);

export default Header;
