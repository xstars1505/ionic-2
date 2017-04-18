import {Component, OnInit} from '@angular/core';
import {Quote} from "../../data/quote.interface";
import quotes from '../../data/quotes';
import {Quotes} from "../quotes/quotes";
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class Library implements OnInit{
  quoteCollection: {category: string, quotes: Quote[], icon: string}[];
  quotesPage = Quotes;
  constructor() {
  }

  ngOnInit() {
    this.quoteCollection = quotes;
  }
}
