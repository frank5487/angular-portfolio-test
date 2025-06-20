import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  authorName = "Yung-Jen Yang";
  greetingDispaly = "Software Engineer";
}
