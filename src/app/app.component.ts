import { Component, OnDestroy } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  products: any[];
  subscription: Subscription;
  constructor(db: AngularFireDatabase) {
    this.subscription = db.list('/products').valueChanges().subscribe(products => {
      this.products = products;
      console.log(this.products);
    });
  }
  ngOnDestroy() {
      this.subscription.unsubscribe();
  }
}
