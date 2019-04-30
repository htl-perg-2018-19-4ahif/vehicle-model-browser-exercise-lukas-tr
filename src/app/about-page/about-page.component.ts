import { Component, OnInit } from "@angular/core";
import { LoremIpsum } from "lorem-ipsum";

@Component({
  selector: "app-about-page",
  templateUrl: "./about-page.component.html",
  styleUrls: ["./about-page.component.sass"]
})
export class AboutPageComponent implements OnInit {
  text: string[] = [];

  constructor() {}

  ngOnInit() {
    this.updateText();
  }

  updateText() {
    const lorem = new LoremIpsum({
      sentencesPerParagraph: {
        max: 8,
        min: 4
      },
      wordsPerSentence: {
        max: 16,
        min: 4
      }
    });

    this.text = new Array(5).fill(null).map(() => lorem.generateParagraphs(1));
  }
}
