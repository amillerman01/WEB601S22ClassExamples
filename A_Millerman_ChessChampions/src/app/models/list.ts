import { Content } from "./content";

export class List {
  private _items: Content[]; // private array starts with an _

  constructor() { // initially set the content array to be empty
    this._items = []; // initialize array
  }

  get items(): Content[] { // getter method that returns the array
    return this._items;
  }

  addContent(oneitem: Content): void { // add content method that adds one item to the end of the array
    this._items.push(oneitem);
  }

  getLength(): number { // A method that returns the length of the array
    return this._items.length;
  }

  printProperties(index: number): string {
    return `<div class="content-wrapper" style="text-align: center; width: 500px; margin: 0 auto;">
              <h1>${this._items[index].title}</h1>
              <p>${this._items[index].body}</p>
              <h6 style="color: dodgerblue;">${this._items[index].author}</h6>
              <img src="${this._items[index].imageLink}">
              <div style="font-weight: bold;">${this._items[index].type}</div>
            </div>`;
  }
}
