import { RootComponent } from '../../common/root-component';
import './search.css';

export class Search extends RootComponent {
	constructor(state) {
		super('form');
		this.state = state;
	}

	search(event) {
		event.preventDefault();
		const formData = new FormData(this.el);
		this.state.searchQuery = formData.get('searchInput');
	}

	render() {
		this.el.classList.add('search-form');
		this.el.innerHTML = `
			<div class="search__wrapper">
				<input
					name="searchInput"
					type="text"
					placeholder="Найти книгу или автора...."
					class="search__input"
					value="${this.state.searchQuery ? this.state.searchQuery : ''}"
					
				/>
				<img src="/static/search.svg" alt="Иконка поиска" />
				<button class="input-btn" type="submit">
					<i class="bi bi-search "></i>
				</button>
			</div>
		`;
		this.el.addEventListener('submit', this.search.bind(this));
		return this.el;
	}
}