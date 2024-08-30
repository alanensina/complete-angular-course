import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { signal, effect, computed } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Product } from './product';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-signals-example';
  theme = signal('light');
  label = this.theme();

  //computed signals
  price = 10;
  quantity = signal(10);
  totalPrice = computed(() => this.price * this.quantity()); // total price cant be changed, only computed

  products = signal([
    {id: 1, name: "Milk", price: 1.42},
    {id: 2, name: "Bread", price: 2.67},
    {id: 3, name: "Eggs", price: 3.15},
    {id: 4, name: "Tomatoes", price: 2.41}
  ])

  filterName = signal('');

  allProducts: Product[] = [
    {id: 1, name: "PS5", price: 350},
    {id: 2, name: "Xbox", price: 299.99},
    {id: 3, name: "Nintendo Switch", price: 245.99},
    {id: 4, name: "Nintendo 64", price: 100}
  ]

  constructor(){
    effect(() => {
      this.label = this.theme();
    })
  }

  ngOnInit(){
    //this.theme.set('dark'); 
    //this.theme.update(currentValue => currentValue === 'light' ? 'dark' : 'light'); // the initial value is not discard and can be used to update the value

    //document.body.className = this.theme();
  }
  
  filteredProducts = computed(() => {
    return this.products().filter(
      product => product.name
      .toLocaleLowerCase()
      .includes(this.filterName().toLocaleLowerCase()))
  })

  changeFilter(event: Event){
    let newFilterName = (event.target as HTMLInputElement).value;
    this.filterName.set(newFilterName);
  }

  toggleDarkMode(){
    this.theme.update(currentValue => currentValue === 'light' ? 'dark' : 'light'); 
  }

  changeQuantity(event: Event){
    this.quantity.set((event?.target as HTMLInputElement).valueAsNumber);
  }
}
