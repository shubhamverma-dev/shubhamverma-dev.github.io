import { Component, OnInit } from '@angular/core';
import { BinaryNode } from 'src/app/models/models';
import {getRndInteger} from '../../../utills/generic';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {

  constructor() { }

  node: BinaryNode;

  ngOnInit() {}

  addNode() {
    this.node = new BinaryNode(getRndInteger(0, 1000));
  }

}
