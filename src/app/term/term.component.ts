import { Component, OnInit, ViewChild } from "@angular/core";
import { DataService } from "../data.service";
import { Router, ActivatedRoute } from "@angular/router";
import { MatSelectionList } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";
import { style } from "@angular/animations";

@Component({
  selector: "app-term",
  templateUrl: "./term.component.html",
  styleUrls: ["./term.component.css"]
})
export class TermComponent implements OnInit {
  term: any;
  data: any;
  public pieChartType: string = "pie";
  public pieChartColors = [
    {
      backgroundColor: ["#ED993E", "#F2F2F2"]
    }
  ];

  lastItemSelected = 0;

  constructor(private ds: DataService, private router: Router) {
    this.ds.term.subscribe(termDs => {
      this.term = termDs;
    });

    // Esta data la cogeriamos de la base de datos mediante un web-service
    this.data = [
      {
        id: 1,
        label: "Sesión 1",
        seen: true
      },
      {
        id: 2,
        label: "Sesión 2",
        seen: true
      },

      {
        id: 3,
        label: "Sesión 3",
        seen: true
      },

      {
        id: 4,
        label: "Sesión 4",
        seen: true
      },

      {
        id: 5,
        label: "Sesión 5",
        seen: true
      },

      {
        id: 6,
        label: "Sesión 6",
        seen: true
      },

      {
        id: 7,
        label: "Sesión 7",
        seen: true
      },
      {
        id: 8,
        label: "Sesión 8",
        seen: true
      },
      {
        id: 9,
        label: "Sesión 9",
        seen: true
      },
      {
        id: 10,
        label: "Sesión 10",
        seen: true
      },
      {
        id: 11,
        label: "Sesión 11",
        seen: true
      },
      {
        id: 12,
        label: "Sesión 12",
        seen: true
      },
      {
        id: 13,
        label: "Sesión 13",
        seen: true
      },
      {
        id: 14,
        label: "Sesión 14",
        seen: true
      },
      {
        id: 15,
        label: "Sesión 15",
        seen: true
      },
      {
        id: 16,
        label: "Sesión 16",
        seen: true
      },
      {
        id: 17,
        label: "Sesión 17",
        seen: true
      },
      {
        id: 18,
        label: "Sesión 18",
        seen: false
      },
      {
        id: 19,
        label: "Sesión 19",
        seen: false
      },
      {
        id: 20,
        label: "Sesión 20",
        seen: false
      },
      {
        id: 21,
        label: "Sesión 21",
        seen: false
      },
      {
        id: 22,
        label: "Sesión 22",
        seen: false
      },
      {
        id: 23,
        label: "Sesión 23",
        seen: false
      },
      {
        id: 24,
        label: "Sesión 24",
        seen: false
      },
      {
        id: 25,
        label: "Sesión 25",
        seen: false
      },
      {
        id: 26,
        label: "Sesión 26",
        seen: false
      },
      {
        id: 27,
        label: "Sesión 27",
        seen: false
      },
      {
        id: 28,
        label: "Sesión 28",
        seen: false
      },
      {
        id: 29,
        label: "Sesión 29",
        seen: false
      },
      {
        id: 30,
        label: "Sesión 30",
        seen: false
      }
    ];
  }

  ngOnInit() {
    if (this.term == null) {
      this.router.navigate(["/home"]);
    }
  }

  itemClicked(item) {
    //console.log(item);

    if (this.lastItemSelected == item) {
      this.playSession(item);
    } else {
      if (this.lastItemSelected != 0) {
        var lastSelect = document.getElementById(
          "button-array" + this.lastItemSelected
        );
        lastSelect.className =
          "mat-focus-indicator button-not-selected mat-button mat-button-base";
        if (this.data.find(x => x.id === this.lastItemSelected).seen) {
          lastSelect.getElementsByClassName("list-ico")[0].innerHTML =
            '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16"><path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/><path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/></svg>';
        } else {
          lastSelect.getElementsByClassName("list-ico")[0].innerHTML =
            '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16"><path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/><path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299l.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/><path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884l-12-12 .708-.708 12 12-.708.708z"/></svg>';
        }
      }

      var elementSelect = document.getElementById("button-array" + item);

      elementSelect.className =
        "mat-focus-indicator button-selected mat-button mat-button-base";
      this.lastItemSelected = item;

      elementSelect.getElementsByClassName("list-ico")[0].innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-caret-right-square-fill" viewBox="0 0 16 16"><path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.5 10a.5.5 0 0 0 .832.374l4.5-4a.5.5 0 0 0 0-.748l-4.5-4A.5.5 0 0 0 5.5 4v8z"/></svg>';
    }
  }

  playSession(item) {
    console.log(item);
    this.router.navigate(["/play"], { queryParams: { hasFullView: true } });
  }
}
