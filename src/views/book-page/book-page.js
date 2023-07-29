import { RootView } from "../../common/root-view";
import onChange from 'on-change';
import { Header } from '../../components/header/header.js';
import './book-page.css';

export class BookPage extends RootView {
	constructor(appState) {
		super();
		this.appState = appState;
		this.appState = onChange(this.appState, this.appStateHook.bind(this));
		this.setTitle('Book');
	}

	appStateHook(path) {
		if (path === 'book-page') {
			this.render();
		}
	}



	render() {
		fetch("https://openlibrary.org/books/OL23080354M.json")
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				console.log(data);

				const page = document.createElement('div');
				page.innerHTML = `
					<p class="book-title">${data.work_titles}</p>
					<section> 
						<img 
						class="book-img"
						src="https://covers.openlibrary.org/b/id/13028488-L.jpg"
						/>
						<div class="book-info">
							<p>Автор: ${data.author ? data.author : 'Не задано'} </p>
							<p>Жанр: ${data.genres}</p>
							<p>Первая публикация: ${data.publish_date}</p>
							<p>Число страниц: ${data.number_of_pages} </p>
							<button>В избранное</button>
						</div>
					</section>
					<div class="description-block">
						<p class="description-title">Описание:</p>
						<p class="description">
							${data.description.value}
						</p>
					</div>
					<div class="tags">
						<p class="tags-title">Теги</p>
						<div class="tags-block">
							<button class="tag"></button>
							<button class="tag">Wizards</button>
							<button class="tag">Wizards</button>
						</div>
					</div>
				`	
				this.app.append(page);
			});
		this.renderHeader();
	}

	renderHeader() {
		const header = new Header(this.appState).render();
		this.app.prepend(header);
	}
}

