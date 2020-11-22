import { Quote } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Citation } from '../citation';
import { Photo } from '../Photo';
import { SiteLink } from '../SiteLink';

@Component({
  selector: 'app-greetings',
  templateUrl: './greetings.component.html',
  styleUrls: ['./greetings.component.css']
})
export class GreetingsComponent implements OnInit {
  message: string;
  citation: Citation;
  constructor() { }

  ngOnInit(): void {
    this.message = "Hello, Angular";
    this.citation = new Citation("Patience is a key element of success",
    "Bill Gates");
    this.citation.links.push(new SiteLink("https://en.wikipedia.org/wiki/Bill_Gates", "Bill Gares Wiki"));
    this.citation.links.push(new SiteLink("https://www.gatesfoundation.org/", "Foundation of Bill Gates"));
    this.citation.links.push(new SiteLink("https://www.gatesnotes.com/", "Bill Gates Blog"));
    this.citation.links.push(new SiteLink("https://twitter.com/billgates", "Bill Gates Twitter"));
    this.citation.photos.push(new Photo("../../assets/images/3-15.jpg", "Game Screen"));
    this.citation.photos.push(new Photo("../../assets/images/photo_16.jpg", "Karachuny"));
    this.citation.photos.push(new Photo("../../assets/images/SeniorLecturer.jpg", "Senior Lecturer"));
  }

}
