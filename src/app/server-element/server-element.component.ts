import { 
  Component, 
  OnInit ,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit,
OnChanges
 {
  @Input('serverElement') element:{
  type:boolean,
  name:string,
  content:string,

}
@Input()
 name:string;
 
 constructor() {
    console.log('constructor was called');
   }

  ngOnInit(): void {
    console.log('ngOnInit was called!');
  }
  ngOnChanges(changes:SimpleChanges){
    console.log('OnChanges was called!');
    console.log(changes);

  }
}
