import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

export interface IModel {
  id: number;
  year: number;
  make: string;
  model: string;
  hasDetails: 0;
}

@Component({
  selector: "app-models-page",
  templateUrl: "./models-page.component.html",
  styleUrls: ["./models-page.component.sass"]
})
export class ModelsPageComponent implements OnInit {
  years: number[] = [];
  makes: string[] = [];

  models: IModel[] = [];

  selectedYear = 0;
  selectedMake = "";

  page = 0;

  displayedColumns: string[] = ["year", "make", "model"];

  constructor(private http: HttpClient) {}

  get hasPrev() {
    return this.page > 0;
  }

  get hasNext() {
    return this.models.length === 10;
  }

  fetchModelsAndResetPage() {
    this.page = 0;
    this.fetchModels();
  }

  nextPage() {
    this.page++;
    this.fetchModels();
  }

  prevPage() {
    this.page--;
    this.fetchModels();
  }

  ngOnInit() {
    this.fetchYears();
    this.fetchMakes();
    this.fetchModels();
  }

  fetchYears() {
    this.http
      .get<number[]>("https://vehicle-data.azurewebsites.net/api/years")
      .subscribe(years => (this.years = years));
  }

  fetchMakes() {
    this.http
      .get<string[]>("https://vehicle-data.azurewebsites.net/api/makes")
      .subscribe(makes => (this.makes = makes));
  }

  fetchModels() {
    this.http
      .get<IModel[]>("https://vehicle-data.azurewebsites.net/api/models", {
        params: {
          make: String(this.selectedMake || ""),
          year: String(this.selectedYear || ""),
          fetch: "10",
          offset: String(this.page * 10)
        }
      })
      .subscribe(models => (this.models = models));
  }
}
