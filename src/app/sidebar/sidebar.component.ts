import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  constructor() {}

  ngOnInit() {}

  open(event) {
    event.stopPropagation();
    const target = event.target;
    let targetAccordion, openedAccordion, targetAccordionHeaderIcon, openedAccordionHeaderIcon;
    if (target.classList.contains('app-accordion-header')) {
      targetAccordion = target.parentElement;
    } else if (target.classList.contains('accordion-icon')) {
      targetAccordion = target.parentElement.parentElement;
    } else if (target.classList.contains('accordion-title')) {
      targetAccordion = target.parentElement.parentElement;
    }

    if (targetAccordion) {
      targetAccordionHeaderIcon = targetAccordion.children[0].children[0];
      const openedAccordions = document.querySelectorAll('.app-accordion.open');
      if (openedAccordions.length > 0) {
        openedAccordion = openedAccordions[0];
        openedAccordionHeaderIcon = openedAccordion.children[0].children[0];
        if (targetAccordion !== openedAccordion) {
          openedAccordion.classList.remove('open');
          openedAccordionHeaderIcon.classList.remove('fa-angle-up');
          openedAccordionHeaderIcon.classList.add('fa-angle-down');

          targetAccordion.classList.add('open');
          targetAccordionHeaderIcon.classList.remove('fa-angle-down');
          targetAccordionHeaderIcon.classList.add('fa-angle-up');
        }
      } else {
        targetAccordion.classList.add('open');
        targetAccordionHeaderIcon.classList.remove('fa-angle-down');
        targetAccordionHeaderIcon.classList.add('fa-angle-up');
      }
    }
  }
}
