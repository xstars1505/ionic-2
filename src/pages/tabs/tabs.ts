import { Component } from "@angular/core";

import { Favorites } from "../favorites/favorites";
import {Library} from "../library/library";

@Component({
    selector: 'page-tabs',
    template: `
        <ion-tabs>
            <ion-tab [root]="favoritesPage" tabTitle="Favorites" tabIcon="star"></ion-tab>
            <ion-tab [root]="libraryPage" tabTitle="Library" tabIcon="book"></ion-tab>
        </ion-tabs>
    `
})
export class TabsPage {
    favoritesPage = Favorites;
    libraryPage = Library;

}