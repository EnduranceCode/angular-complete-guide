import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  template: `
  <div class="jumbotron">
    <h3>In the Servers Component</h3>
    <app-server></app-server>
    <app-server></app-server>
  </div>`,
  styles: [`
    h3 {
      color: blue;
    }
  `]
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
