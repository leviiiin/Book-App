import onChange from 'on-change';
import { FavoritesView } from './views/favorites/favirites.js';
import { MainView } from './views/main/main';
import { BookPage } from './views/book-page/book-page';
import './assets/main.css';


// #book-page?id=QUEDSDdd
// як дістати з URL query параметри
class App {
	routes = [
		{ path: "", view: MainView },
		{ path: "#favorites", view: FavoritesView },
		{ path: "#book-page", view: BookPage }
	];
	appState = {
		favorites: []
	};

	constructor() {
		// зберегти данні з localstorage в this.appState. JSON.parse()
		this.appState = onChange(this.appState, this.saveFavorites.bind(this));
		// this.appState = JSON.parse(localStorage.setItem('CARD'));
		window.addEventListener('hashchange', this.route.bind(this));
		this.route();
	}
	
	saveFavorites(path) {
		if (path === 'favorites') {
			localStorage.getItem('CARD', JSON.stringify(this.appState.favorites));
			// якщо path = 'favorites', тоді збережи массив в localStorage. JSON.stringify
		}
	}

	route() {
		if (this.currentView) {
			this.currentView.destroy();
		}
		const view = this.routes.find(r => r.path == location.hash).view;
		this.currentView = new view(this.appState);
		this.currentView.render();
	}
}
new App();
