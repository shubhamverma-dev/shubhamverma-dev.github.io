import {DragPosition, TreeNode} from '../../models/models';

@Component({
  selector: 'app-test-d3',
  templateUrl: './test-d3.component.html',
  styleUrls: ['./test-d3.component.css']
})
export class TestD3Component implements OnInit {
  numbers: TreeNode[][] =  Array.from(Array(24).keys())
    .map(num => getDummyData(num + 1, 1000).map(value => {
      return new TreeNode(value, new DragPosition(0, 0));
    }));
  nodeStyle3;
  constructor() {
  }

  changeDrag(event: DragEvent) {
      this.nodeStyle3 = {
        left : `${event.x - 102}px`,
        top: `${event.y - 89}px`
      };
  }

  changeDragNode(event: DragEvent, node: TreeNode) {
    node.position.left = event.x - 102;
    node.position.top = event.y - 89;
    // this.nodeStyle3 = {
    //   left : `${event.x - 102}px`,
    //   top: `${event.y - 89}px`
    // };
  }

  ngOnInit() {
  }
}

import { Component, OnInit } from '@angular/core';


import {arrayToMatrix, getDummyData} from '../../utills/generic';
