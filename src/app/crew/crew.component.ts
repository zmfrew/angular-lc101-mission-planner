import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  crew: object[] = [
    { name: "Eileen Collins", firstMission: false },
    { name: "Mae Jemison", firstMission: false },
    { name: "Ellen Ochoa", firstMission: true }
  ];

  selectedMember = null

  constructor() { }

  ngOnInit() {
  }

  add(name: string, isFirstMission: boolean) {
    if (this.crew.filter(e => e.name === name).length === 0) {
      this.crew.push({ name: name, firstMission: isFirstMission })
    }
  }

  edit(member: object) {
    this.selectedMember = member

  }

  remove(member: object) {
    let index = this.crew.indexOf(member)
    this.crew.splice(index, 1)
  }

  save(name: string, member: object) {
    member['name'] = name
    this.selectedMember = null
  }
}
