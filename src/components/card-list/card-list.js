import { RootComponent } from '../../common/rootComponent';
import { Card } from '../card/card';
import './card-list.css';

export class CardList extends RootComponent {
	constructor(appState, parentState) {
		super();
		this.appState = appState;
		this.parentState = parentState;
	}

	render() {
		if (this.parentState.loading) {
			this.el.innerHTML = `<div class="card_list__loader">Загрузка...</div>`;
			return this.el;
		}
		const cardGrid = document.createElement('div');
		cardGrid.classList.add('card_grid');
		// todo: оптимізувати рендер карток через 1 фрагмент
		// https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment
		this.el.append(cardGrid);
		for (const card of this.parentState.list) {
			cardGrid.append(new Card(this.appState, card).render());
		}
		return this.el;
	}
}