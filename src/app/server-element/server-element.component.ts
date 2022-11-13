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
  AfterViewChecked,
  AfterContentChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild
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
AfterContentInit,
AfterContentChecked,
AfterViewInit,
 AfterViewChecked
 {
  @Input('serverElement') element:{
  type:boolean,
  name:string,
  content:string,

}
@Input()
 name:string;

 @ViewChild('heading') header:ElementRef
 @ContentChild('paragraghContent') paragraph:ElementRef

 
 
 constructor() {
    console.log('constructor was called');
   }

  ngOnInit(): void {
    console.log('ngOnInit was called!');
    console.log('this is the header content'+this.header.nativeElement.textContent);
    console.log('this is the paragragh content'+this.paragraph.nativeElement.textContent);



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
    console.log('this is the paragragh content'+this.paragraph.nativeElement.textContent);

  }
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked was called!');

  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit was called!');
    console.log('this is the header content'+this.header.nativeElement.textContent);


  }
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked was called!');

  }
  ngOnDestroy(){
    console.log('ngOnDestroy was called!');

  }
}
