import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor() {
    document.addEventListener('deviceready', this.onDeviceReady, false);
  }


onDeviceReady(): void {
  document.addEventListener('pause', this.onPause, false);
  document.addEventListener('resume', this.onResume, false);

  // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
  var parentElement = document.getElementById('deviceready');
  var listeningElement = parentElement.querySelector('.listening');
  var receivedElement = parentElement.querySelector('.received');
  listeningElement.setAttribute('style', 'display:none;');
  receivedElement.setAttribute('style', 'display:block;');
}
onPause(): void {
  // TODO: This application has been suspended. Save application state here.
}

onResume(): void {
  // TODO: This application has been reactivated. Restore application state here.
}

}
