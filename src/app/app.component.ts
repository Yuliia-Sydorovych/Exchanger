import { Component} from '@angular/core';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'currencyConverter';
  
  posts:any;
  leftValue:any;
  rightValue:any;
  usd:any;
  eur:any;

  ngOptions = ['UAH', 'USD', 'EUR'];

  chosenOptLeft = this.ngOptions[0];
  chosenOptRight = this.ngOptions[1];

  constructor(private service:PostService) {}

  ngOnInit() {
    this.service.getPosts()
      .subscribe(response => {
        this.posts = response;
        this.posts.forEach((element: { cc: string; rate: any; }) => {
          element.cc === this.ngOptions[1]?this.usd = element.rate:null;
          element.cc === this.ngOptions[2]?this.eur = element.rate:null;
        });
      });
  }
}