import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'testproject';
  public inc: number = 0;
  public dec: number = 0;
  constructor() {}
 ngOnInit() {
    
 }

 increment() {
   this.inc ++;
 }

 decrement() {
    this.inc --
 }
  
}

