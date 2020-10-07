import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  urlVideo:any;
  urlPoster: any;
  constructor() { }

  ngOnInit() {
    //this.urlVideo = 'https://vjs.zencdn.net/v/oceans.mp4';
     this.urlVideo = 'assets/img/oceans.mp4';
    
     this.urlPoster = 'assets/images/movies/01.jpg';
  }

}
