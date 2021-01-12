import { Component } from "@angular/core";
import { createWorker } from "tesseract.js";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "tesseract.js-angular-app";
  ocrResult = "Recognizing...";
  constructor() {
    this.doOCR();
  }
  async doOCR() {
    const worker = createWorker({
      logger: m => console.log(m)
    });
    await worker.load();
    await worker.loadLanguage("fr");
    await worker.initialize("fr");
    const {
      data: { text }
    } = await worker.recognize("https://jeroen.github.io/images/testocr.png");
    this.ocrResult = text;
    console.log(text);
    await worker.terminate();
  }
}
