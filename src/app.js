import './assets/main.css';
import { FavoritesView } from './views/favorites/favirites.js';
import { MainView } from './views/main/main';
import { BookPage } from './views/book-page/book-page';

// #book-page?id=QUEDSDdd
// як дістати з URL query параметри
class App {
	routes = [
		{path: "", view: MainView },
		{path: "#favorites", view: FavoritesView },
		{path: "#book-page", view: BookPage }
	];
	appState = {
		favorites: []
	};

	constructor() {
		window.addEventListener('hashchange', this.route.bind(this));
		this.route();
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
