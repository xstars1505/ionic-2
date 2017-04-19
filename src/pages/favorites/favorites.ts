import { Component } from '@angular/core';
import {ModalController} from 'ionic-angular';
import {QuotesService} from "../../services/quote";
import {Quote} from "../../data/quote.interface";
import {QuotePage} from "../quote/quote";
import {SettingsService} from "../../services/settings";

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class Favorites {

  quotes:Quote[];

  constructor(
      private modalCtrl:ModalController,
      private quotesService:QuotesService,
      private settingsService: SettingsService
  ) {  }

  ionViewWillEnter() {
    this.quotes = this.quotesService.getFavoriteQuotes();
  }

  onViewQuote(quote:Quote) {
    const modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();
    modal.onDidDismiss((remove:boolean) => {
      if (remove) {
        this.onRemoveFromFavorite(quote);
      }
    });

  }

  onRemoveFromFavorite(quote:Quote) {
    this.quotesService.removeQuoteFromFavorite(quote);
    this.quotes = this.quotesService.getFavoriteQuotes();
  }


  isAltBackground() {
    return this.settingsService.isAltBackground();
  }
}
