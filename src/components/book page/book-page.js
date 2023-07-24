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
        const page = document.createElement('div');
		page.innerHTML = `
			<p class="book-title">The Lord of the Rings</p>
            <section> 
                <img 
				class="book-img"
				src="https://covers.openlibrary.org/b/id/10210983-L.jpg"
				/>
				<div class="book-info">
					<p>Автор: </p>
					<p>Категория: </p>
					<p>Первая публикация: </p>
					<p>Число страниц: </p>
					<button>В избранное</button>
				</div>
            </section>
			<div class="description-block">
				<p class="description-title">Описание:</p>
				<p class="description">
					A Game of Thrones is the first novel in A Song of Ice and Fire, a series of fantasy novels by the American author George R. R. Martin. 
					It was first published on August 1, 1996. The novel won the 1997 Locus Award and was nominated for both the 1997 Nebula Award and the 1997 World Fantasy Award. 
					The novella Blood of the Dragon, comprising the Daenerys Targaryen chapters from the novel, won the 1997 Hugo Award for Best Novella. 
					In January 2011, the novel became a New York Times Bestseller and reached No. 1 on the list in July 2011.
				</p>
			</div>
			<div class="tags">
				<p class="tags-title">Теги</p>
				<div class="tags-block">
					<button class="tag">Wizards</button>
					<button class="tag">Wizards</button>
					<button class="tag">Wizards</button>
				</div>
			</div>
		`
		this.app.append(page);
		this.renderHeader();
    }

    renderHeader() {
		const header = new Header(this.appState).render();
		this.app.prepend(header);
	}
}


fetch('https://openlibrary.org/works/OL82565W.json')
	.then((response) => {
		return response.json();
	})
	.then((data) => {
		console.log(data);
	})