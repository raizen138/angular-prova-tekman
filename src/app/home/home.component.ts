import { Component, OnInit } from "@angular/core";
import { ProgressService } from "../termProgress.service";
import { DataService } from "../data.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  progress;
  public pieChartType: string = "pie";
  public pieChartColors = [
    {
      backgroundColor: ["#ED993E", "#F2F2F2"]
    }
  ];

  constructor(
    private progressService: ProgressService,
    private ds: DataService,
    private router: Router
  ) {
    this.progress = this.progressService.terms;
    console.log(this.progress);
  }

  ngOnInit() {
    /*this.progress = this.progressService.getProgress();
    console.log(this.progress);*/
  }

  onSelectTerm(idTerm) {
    var idToGet = idTerm.split("term");
    var termToGet = this.progress[idToGet[1]];
    console.log(termToGet);
    this.ds.term.next(termToGet);
    this.router.navigate(["/term"]);
  }
}
