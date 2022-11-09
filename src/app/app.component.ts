import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /**Deifne basic varaible for storing servers */
  serverElements=[];

  serverName='';
  serverContent='';

// content="hello";

/**Constrauctor that intializes the app component */
constructor(){
  // this.content='hi'
}


/**Create server type */
onCreateServer(){
  this.serverElements.push({
    type:0,
    name:this.serverName,
    content:this.serverContent
  })
}

/**Create bluePrint type */

onCreateBluePrint(){
  this.serverElements.push({
    type:1,
    name:this.serverName,
    content:this.serverContent
  })
}
}
