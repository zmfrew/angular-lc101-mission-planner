import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  equipment = ["habitat dome", "drones", "food containers", "oxygen tanks"]

  selectedPiece = null

  constructor() { }

  ngOnInit() {
  }

  add(name: string) {
    if (this.equipment.filter(e => e === name).length === 0) {
      this.equipment.push(name)
    }
  }

  edit(piece: string) {
    this.selectedPiece = piece
  }

  remove(piece: string) {
    let index = this.equipment.indexOf(piece)
    this.equipment.splice(index, 1)
  }

  save(name: string, piece: string) {
    let index = this.equipment.indexOf(piece)
    this.equipment[index] = name
    this.selectedPiece = null
  }
}
