import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {

  experiments = ["Mars soil sample", "Plant growth in habitat", "Human bone density"]

  selectedExperiment = null

  constructor() { }

  ngOnInit() {
  }

  add(name: string) {
    if (this.experiments.filter(e => e === name).length === 0) {
      this.experiments.push(name)
    }
  }

  edit(experiment: string) {
    this.selectedExperiment = experiment
  }

  remove(experiment: string) {
    let index = this.experiments.indexOf(experiment)
    this.experiments.splice(index, 1)
  }

  save(name: string, experiment: string) {
    let index = this.experiments.indexOf(experiment)
    this.experiments[index] = name
    this.selectedExperiment = null
  }
}
