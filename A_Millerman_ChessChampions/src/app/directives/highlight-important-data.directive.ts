import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightImportantData]'
})
export class HighlightImportantDataDirective {
  private isTitleApplied: boolean = false;

  private isTypeApplied: boolean = false;
  private isTagApplied: boolean = false;
  private initialColourOfTagText: string;

  @Input() colour: string = '';
  // highlightType can only be the values: "type", "title", "tags" or undefined
  @Input() highlightType?: "type" | "title" | "tag" | "author";
  // the next step would be to make an ENUM of these 3 types, so we can use that everywhere instead
  @HostBinding('style.backgroundColor') get textColour() {
    return this.isTitleApplied ? this.colour : 'transparent';
  }
  @HostBinding('class.typeBorder') get typeBorder() { return this.isTypeApplied; }
  @HostBinding('class.titleBackground') get titleBackground() { return this.isTitleApplied; }
  @HostBinding('class.tagFontColor') get tagFontColor() { return this.isTagApplied; }

  constructor(private elm: ElementRef) {
    this.initialColourOfTagText = this.elm.nativeElement.style.color;
  }

  // hover over type or tags
  @HostListener("mouseover") onMouseOver() {
    this.hoverAffect(true);
  }
  @HostListener("mouseout") onMouseOut() {
    this.hoverAffect(false);
  }

  private hoverAffect(newState: boolean) {
    if (this.highlightType === "type" || this.highlightType === "author") {
      // reset type background color
      this.isTypeApplied = newState;
      // this.elm.nativeElement.style.border = newState ? "4px solid #0000ff" : "none";
    }

    if (this.highlightType === "tag" || this.highlightType === "author") {
      // reset tag font color back to original value
      this.isTagApplied = newState;
      // this.elm.nativeElement.style.color = newState ? 'darkred' : this.initialColourOfTagText;
    }
  }

  // click on title
  @HostListener("click") onClick() {
    if (this.highlightType === 'title' || this.highlightType === "author") {
      this.isTitleApplied = !this.isTitleApplied;
    }
  }

}
