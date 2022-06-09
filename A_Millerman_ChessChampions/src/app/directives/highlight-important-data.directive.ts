import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightImportantData]'
})
export class HighlightImportantDataDirective {
  private isHighlighted: boolean = false;
  @Input() colour: string = '';
  @HostBinding('style.backgroundColor') get textColour() {
    return this.isHighlighted ? this.colour : 'transparent';
  }
  constructor(private elm: ElementRef) { }

  // hover over type
  @HostListener("mouseover") onMouseOver() {
    this.elm.nativeElement.style.border = "4px solid #0000ff"
  }
  @HostListener("mouseout") onMouseOut() {
    this.elm.nativeElement.style.border = "none"
  }

  // click on title
  @HostListener("click") onClick() {
    this.isHighlighted = !this.isHighlighted;
  }

}
