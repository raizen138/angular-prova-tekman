import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { HomeComponent } from "./home/home.component";
import { TermComponent } from "./term/term.component";
import { PlayComponent } from "./play/play.component";
import { ProgressService } from "./termProgress.service";
import { ChartsModule } from "ng2-charts";
import { DataService } from "./data.service";
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

const Routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "term", component: TermComponent },
  { path: "play", component: PlayComponent },
  { path: "", component: HomeComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(Routes),
    ChartsModule,
    MatListModule,
    MatButtonModule,
    MatSidenavModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    HomeComponent,
    TermComponent,
    PlayComponent
  ],
  bootstrap: [AppComponent],
  providers: [ProgressService, DataService]
})
export class AppModule {}
