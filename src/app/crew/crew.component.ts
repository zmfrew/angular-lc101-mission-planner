import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})

interface CrewMember {
  name: string
  firstMission: boolean
}

export class CrewComponent implements OnInit {

  crew: CrewMember[] = [
    { name: "Eileen Collins", firstMission: false },
    { name: "Mae Jemison", firstMission: false },
    { name: "Ellen Ochoa", firstMission: true }
  ];

  selectedMember?: CrewMember = null

  constructor() { }

  ngOnInit() {
  }

  add(name: string, isFirstMission: boolean) {
    if (this.crew.filter(member => member.name === name).length === 0) {
      this.crew.push({ name: name, firstMission: isFirstMission })
    }
  }

  edit(member: CrewMember) {
    this.selectedMember = member
  }

  remove(member: CrewMember) {
    let index = this.crew.indexOf(member)
    this.crew.splice(index, 1)
  }

  save(name: string, member: CrewMember) {
    member['name'] = name
    this.selectedMember = null
  }
}
