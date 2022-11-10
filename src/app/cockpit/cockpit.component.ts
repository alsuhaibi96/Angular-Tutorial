import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  serverName='';
  serverContent='';

  constructor() { }

  ngOnInit(): void {
  }
  /**Create server type */
onCreateServer(){
//   this.serverElements.push({
//     type:0,
//     name:this.serverName,
//     content:this.serverContent
//   })
 }

/**Create bluePrint type */

onCreateBluePrint(){
//   this.serverElements.push({
//     type:1,
//     name:this.serverName,
//     content:this.serverContent
//   })
 }

}
