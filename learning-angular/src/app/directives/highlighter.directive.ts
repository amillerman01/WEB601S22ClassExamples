import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective implements OnInit {
  @Input() colour?: string;
  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {
    this.el.nativeElement.style.backgroundColor = this.colour || "green";
  }
  // changeColor(): void {
  //   this.el
  // }

}
