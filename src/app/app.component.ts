import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  urlVideo = 'https://vjs.zencdn.net/v/oceans.mp4';
 // urlVideo = 'assets/img/oceans.mp4';
  // tslint:disable-next-line:max-line-length
  urlPoster = 'assets/img/img15.jpg';
}
