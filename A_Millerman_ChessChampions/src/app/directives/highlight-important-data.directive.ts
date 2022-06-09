import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightImportantData]'
})
export class HighlightImportantDataDirective {
  private isHighlighted: boolean = false;
  private initialColourOfTagText: string;

  @Input() colour: string = '';
  @HostBinding('style.backgroundColor') get textColour() {
    return this.isHighlighted ? this.colour : 'transparent';
  }
  constructor(private elm: ElementRef) {
    this.initialColourOfTagText = this.elm.nativeElement.style.color;
  }

  // hover over type or tags
  @HostListener("mouseover") onMouseOver() {
    // set type background color
    this.elm.nativeElement.style.border = "4px solid #0000ff";

    // set tag font color
    this.elm.nativeElement.style.color = 'darkred';
  }
  @HostListener("mouseout") onMouseOut() {
    // reset type background color
    this.elm.nativeElement.style.border = "none"

    // reset tag font color back to original value
    this.elm.nativeElement.style.color = this.initialColourOfTagText;
  }

  // click on title
  @HostListener("click") onClick() {
    this.isHighlighted = !this.isHighlighted;
  }

}
