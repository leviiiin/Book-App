export class RootComponent {
  constructor(tag = 'div') {
    this.el = document.createElement(tag);
  }

  render() {
    this.el;
  }
}
