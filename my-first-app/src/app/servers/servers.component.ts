import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  template: `
  <div class="jumbotron">
    <h3>In the Servers Component</h3>
    <app-server></app-server>
    <app-server></app-server>
  </div>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
