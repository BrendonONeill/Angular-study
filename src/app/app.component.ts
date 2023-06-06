import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    this.serverOnline = Math.random() > 0.5 ? true : false
  }
  title = 'my-first-app';
  serverStat = 'online';
  servername = "dog";
  serverOnline = false
  servers = ["testingserver", "partyserver"]

  onClickButton() {
    this.serverStat = 'offline';
    this.serverOnline = !this.serverOnline;
    this.servers.push(this.servername);
  }

  onChangeInput(e: Event) {
    this.servername = (<HTMLInputElement>e.target).value
  }

  getColour() {
    if (this.serverOnline) {
      return "Green"
    }
    else {
      return "Red"
    }
  }
}
