import { Component, OnInit ,EventEmitter , Output} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  serverContent='';

  /**Properties that uses eventEmitter of angular framework */
@Output() serverCreated=new EventEmitter<Server>();
@Output() bluePrintCreated=new EventEmitter<Server>();

  constructor() { }

  ngOnInit(): void {
  }


  /**Create server type with the local reference input element */
onCreateServer(serverInput:HTMLInputElement){
this.serverCreated.emit({
  name:serverInput.value,
  content:this.serverContent
})
 }

/**Create bluePrint type */

onCreateBluePrint(serverInput:HTMLInputElement){
  this.bluePrintCreated.emit({
    name:serverInput.value,
    content:this.serverContent
  })
 }

}
