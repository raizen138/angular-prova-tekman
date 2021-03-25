import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ProgressService {
  constructor(private http: HttpClient) {}

  //Esto no me funcionaba
  getProgress() {
    return this.http.get("/services/getProgress.php");
  }

  terms = [
    {
      graphData: [100, 0],
      name: "1º Trimestre",
      value: 50,
      valueMax: 50,
      id: "term0"
    },
    {
      graphData: [60, 40],
      name: "2º Trimestre",
      value: 30,
      valueMax: 50,
      id: "term1"
    },
    {
      graphData: [0, 100],
      name: "3º Trimestre",
      value: 0,
      valueMax: 50,
      id: "term2"
    }
  ];
}
