import { Component } from '@angular/core';
/**An interface that has the properties of server */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  /**Deifne basic varaible for storing servers */
  serverElements=[{
    type:1,
    name:'server test',
    content:'conetnt test'
  }];

/**when the server is created */
onServerCreated(serverData:Server){
  this.serverElements.push({
    type:0,
    name:serverData.name,
    content:serverData.content
  })

}

/**when the bluePrintServer is created */
onBluePrintCreated(serverData:Server){
  this.serverElements.push({
    type:1,
    name:serverData.name,
    content:serverData.content
  })
}

/**called when change first element called
 * 
 */
onFirstChange(){
  this.serverElements[0].name='changed'
}

/**called when delete first element called
 * 
 */
deleteFirst(){
  this.serverElements.splice(0,1);
}


}