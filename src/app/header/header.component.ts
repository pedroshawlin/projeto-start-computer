import { Component } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { CarrinhoService } from '../carrinho.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(
    public carrinhoService: CarrinhoService,
  ) {}


}
