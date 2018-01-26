import { Component, ElementRef, ViewChild, Renderer2, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('myIframe') input: ElementRef;

  constructor(private renderer: Renderer2) {}

  changeLocation() {
    this.input.nativeElement.contentWindow.top
      .LocusMaps({
        command: 'setPosition',
        lat: 5.06792587586318,
        lng: -79.0697255561301
      })
      .then(x => console.log(x))
      .catch(err => console.log(err));
  }
}
