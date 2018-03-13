import { 
  Component, 
  Input, 
  ElementRef, 
  ContentChild, 
  OnInit, 
  OnChanges,
   DoCheck,
   SimpleChanges,
   AfterContentInit,
   AfterContentChecked,
   AfterViewInit,
   AfterViewChecked,
   OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements 
OnInit, 
OnChanges,
DoCheck,
AfterContentChecked,
AfterContentInit,
AfterViewInit,
AfterViewChecked,
OnDestroy  
{

 @Input('carItem') car: {name: string, year: number};
 @Input() name: string;
 @ContentChild('carHeading') carHeading: ElementRef;

constructor(){
  console.log('constructor');
}

ngOnInit(){
  console.log('ngOnInit');
}

ngOnChanges(changes: SimpleChanges){
  console.log('ngOnChanges', changes);
}

ngDoCheck(){
  console.log('ngDoCheck');
}

AfterContentInit(){
  console.log('ngAfterContentInit');
}

ngAfterContentChecked(){
  console.log('ngAfterContentChecked');
}

AfterViewInit(){
  console.log('ngAfterViewInit');
}

ngAfterViewChecked(){
  console.log('ngAfterViewChecked');
}

ngOnDestroy(){
  console.log('ngOnDestroy');
}

}
