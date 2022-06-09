import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightImportantData]'
})
export class HighlightImportantDataDirective {

  constructor(private elm: ElementRef) { }
  @HostListener("mouseover") onMouseOver() {
    this.elm.nativeElement.style.border = "4px solid #0000ff"
  }
  @HostListener("mouseout") onMouseOut() {
    this.elm.nativeElement.style.border = "none"
  }
}
