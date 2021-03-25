import { Component, VERSION, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { MatSidenavModule } from "@angular/material/sidenav";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  hasFullView = false;

  languages = [
    {
      id: 1,
      name: "Español"
    },
    {
      id: 2,
      name: "Català"
    },
    {
      id: 3,
      name: "English"
    }
  ];

  cursos = [
    {
      id: 1,
      name: "3º de Infantil"
    },
    {
      id: 2,
      name: "4º de Infantil"
    },
    {
      id: 3,
      name: "5º de Infantil"
    }
  ];

  constructor(private activatedRoute: ActivatedRoute) {}

  private setHasFullView() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.hasFullView = params["hasFullView"] || false;
    });
  }

  ngOnInit() {
    this.setHasFullView();
  }

  saveChanges() {
    var inputValue = (<HTMLInputElement>document.getElementById("selLang"))
      .value;
    var inputValue2 = (<HTMLInputElement>document.getElementById("selCurs"))
      .value;

    localStorage.setItem("Language", inputValue);
    localStorage.setItem("Curso", inputValue2);
  }

  name = "Angular " + VERSION.major;
}
