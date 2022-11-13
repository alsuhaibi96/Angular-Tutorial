import { 
  Component, 
  OnInit ,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterViewInit,
  AfterViewChecked
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit,
OnChanges,
DoCheck,
AfterContentInit
// AfterViewInit,
// AfterViewChecked,
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
  ngDoCheck(): void {
    console.log('ngDoCheck was called!');
    
  }
  ngAfterContentInit(){
    console.log('ngAfterContentInit was called!');

  }
}
