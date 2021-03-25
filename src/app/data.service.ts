import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class DataService {
  term: BehaviorSubject<any> = new BehaviorSubject<any>(null);
}
