import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../service/book.service';

@Component({  
  selector: 'app-home-nav',
  templateUrl: './home-nav.component.html',
  styleUrls: ['./home-nav.component.css']
})
export class HomeNavComponent implements OnInit {

  @Output() tabSwitch: EventEmitter<string> = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/enter-page'])
  }

  selectCategory(val){
this.tabSwitch.emit(val)
  }

}
