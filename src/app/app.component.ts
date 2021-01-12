import { Component } from "@angular/core";
import { createWorker } from "tesseract.js";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  img =
    "https://stackblitz.com/files/uploadplan/github/MatsuKaki/uploadplan/master/src/app/20200623110946_1_PDV-INDICE%20NOTAIRE%201%20-%20CAGES%20A%20ET%20B%20-%20TECHNIQUES%20A001%20(1).png";

  img2 =
    "https://github.com/MatsuKaki/uploadplan/blob/master/src/app/20200623110946_1_PDV-INDICE%20NOTAIRE%201%20-%20CAGES%20A%20ET%20B%20-%20TECHNIQUES%20A001%20(1).png";

  img3 =
    "https://github.com/MatsuKaki/ionic-v4-kality/blob/master/src/app/pages/kality/pictures/immeuble1.jpg";

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
    await worker.loadLanguage("eng");
    await worker.initialize("eng");
    const {
      data: { text }
    } = await worker.recognize(this.img3);

    this.ocrResult = text;
    console.log(text);
    await worker.terminate();
  }
}
