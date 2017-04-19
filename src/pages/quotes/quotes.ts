import {Component, OnInit} from '@angular/core';
import {NavParams, AlertController} from 'ionic-angular';
import {Quote} from "../../data/quote.interface";
import {QuotesService} from "../../services/quote";


@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class Quotes implements OnInit{

  quoteGroup: {category: string, quotes: Quote[], icon: string}[];
  constructor(
      private navParams: NavParams,
      private quotesService: QuotesService,
      private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.quoteGroup = this.navParams.data;
  }

  onAddToFavorite(selectedQuote: Quote) {
    const alert = this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you sure?',
      message: 'Are you sure you want to add to favorite?',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.quotesService.addQuoteToFavorite(selectedQuote);
          }
        },
        {
          text: 'No, I dont',
          role: 'cancel',
          handler: () => {
            console.log('Cancel');
          }
        }
      ]
    });

    alert.present();
  }

  onRemoveFromFavorite(quote: Quote) {
    this.quotesService.removeQuoteFromFavorite(quote);
  }

  isQuoteFavorite(quote: Quote) {
    return this.quotesService.isQuoteFavorite(quote);
  }
}
