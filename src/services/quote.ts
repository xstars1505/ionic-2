import {Quote} from "../data/quote.interface";
export class QuotesService {
    private favoriteQuotes: Quote[] = [];

    addQuoteToFavorite(selectedQuote: Quote) {
        this.favoriteQuotes.push(selectedQuote);
    }

    removeQuoteFromFavorite(quote: Quote) {
        const position = this.favoriteQuotes.findIndex((quoteEl: Quote) => {
            return quoteEl.id == quote.id;
        });
        this.favoriteQuotes.splice(position);

    }

    getFavoriteQuotes() {
        return this.favoriteQuotes.slice();
    }

    isQuoteFavorite(quote: Quote) {
        return this.favoriteQuotes.find((quoteEl: Quote) => {
            return quoteEl.id == quote.id;
        });
    }
}