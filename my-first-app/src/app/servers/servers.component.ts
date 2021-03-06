import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styles: [`
    h3 {
      color: darkBlue;
    }
  `]
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus = "No server was created!";
  serverName = "Server Name";

  constructor() {
    setTimeout(() => { this.allowNewServer = true }, 3000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = "Server was created! The server name is " + this.serverName;
  }

  onUpdateServerName(event: Event) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
