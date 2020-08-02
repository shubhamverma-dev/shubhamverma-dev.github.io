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
    const n = new BinaryNode(getRndInteger(0, 1000));
    if (this.node) {
       this.insertNodeInTree(n);
    } else {
      this.node = n;
    }
  }

  insertNodeInTree(nodeToInsert: BinaryNode) {
    let root = this.node;
    let prevNode: BinaryNode;

    while (root) {
      prevNode = root;
      if (root.value >= nodeToInsert.value) {
        root = root.right;
      } else {
        root = root.left;
      }
    }

    if (prevNode.value >= nodeToInsert.value) {
      prevNode.right = nodeToInsert;
    } else {
      prevNode.left = nodeToInsert;
    }
  }

}
