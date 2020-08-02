import { Component, OnInit, Input } from '@angular/core';
import { BinaryNode } from 'src/app/models/models';

@Component({
  selector: 'app-tree-template',
  templateUrl: './tree-template.component.html',
  styleUrls: ['./tree-template.component.css']
})
export class TreeTemplateComponent implements OnInit {

  @Input() node: BinaryNode;

  constructor() { }

  ngOnInit() {
  }

}
