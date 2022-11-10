import { Component, OnInit ,EventEmitter , Output} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  serverName='';
  serverContent='';

  /**Properties that uses eventEmitter of angular framework */
@Output() serverCreated=new EventEmitter<Server>();
@Output() bluePrintCreated=new EventEmitter<Server>();

  constructor() { }

  ngOnInit(): void {
  }


  /**Create server type */
onCreateServer(){
this.serverCreated.emit({
  name:this.serverName,
  content:this.serverContent
})
 }

/**Create bluePrint type */

onCreateBluePrint(){
  this.bluePrintCreated.emit({
    name:this.serverName,
    content:this.serverContent
  })
 }

}
