import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightImportantData]'
})
export class HighlightImportantDataDirective {
  private isHighlighted: boolean = false;
  private initialColourOfTagText: string;

  @Input() colour: string = '';
  // highlightType can only be the values: "type", "title", "tags" or undefined
  @Input() highlightType?: "type" | "title" | "tag";
  // the next step would be to make an ENUM of these 3 types, so we can use that everywhere instead
  @HostBinding('style.backgroundColor') get textColour() {
    return this.isHighlighted ? this.colour : 'transparent';
  }
  constructor(private elm: ElementRef) {
    this.initialColourOfTagText = this.elm.nativeElement.style.color;
  }

  // hover over type or tags
  @HostListener("mouseover") onMouseOver() {
    if (this.highlightType === "type") {
      // set type background color
      this.elm.nativeElement.style.border = "4px solid #0000ff";
    }

    if (this.highlightType === "tag") {
      // set tag font color
      this.elm.nativeElement.style.color = 'darkred';
    }
  }
  @HostListener("mouseout") onMouseOut() {
    if (this.highlightType === "type") {
      // reset type background color
      this.elm.nativeElement.style.border = "none"
    }

    if (this.highlightType === "tag") {

      // reset tag font color back to original value
      this.elm.nativeElement.style.color = this.initialColourOfTagText;
    }
  }

  // click on title
  @HostListener("click") onClick() {
    if (this.highlightType === 'title') {
      this.isHighlighted = !this.isHighlighted;
    }
  }

}
