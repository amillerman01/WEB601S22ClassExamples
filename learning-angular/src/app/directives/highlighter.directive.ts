import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective {
  @Input() colour?: string;
  private isHighlighted: boolean = false;
  private initialColour: string;
  private initialTextColor: string;
  @HostBinding('style.backgroundColor')
  get backgroundColour() {
    return this.isHighlighted ? this.colour || "green" :
      this.initialColour;
  }
  @HostBinding('style.color')
  get textColour() {
    return this.isHighlighted ? this.checkLuminance(this.colour || "green") :
      this.checkLuminance(this.initialColour);
  }
  @HostBinding('attr.title')
  get setTitleText() {
    // I can set the title attribute on elements based on a condition too
    return "";
  }

  constructor(private elm: ElementRef) {
    this.initialColour = this.elm.nativeElement.style.backgroundColor;
    this.initialTextColor = this.elm.nativeElement.style.color;
    // console.log("Value of initialColor is ", this.initialColour)
  }

  @HostListener('click') onClick() {
    this.isHighlighted = !this.isHighlighted;
  }

  checkLuminance(color: string): string {
    // run luminance check on the color to return either black or white for the text color for maximum contrast
    return this.isHighlighted ? "white" : "black";
  }
}
