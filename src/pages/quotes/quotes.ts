import {Component, OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Quote} from "../../data/quote.interface";


@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class Quotes implements OnInit{

  quoteGroup: {category: string, quotes: Quote[], icon: string}[];
  constructor(private navCtrl: NavController, private navParams: NavParams) {
  }

  ngOnInit() {
    this.quoteGroup = this.navParams.data;
  }
}
