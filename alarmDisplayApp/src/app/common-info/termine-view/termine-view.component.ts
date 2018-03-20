import { EventItem } from './event-item';
import { EventService } from './event-service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-termine-view',
    templateUrl: './termine-view.component.html',
    styleUrls: ['./termine-view.component.css']
})
export class TermineViewComponent implements OnInit {

    public events: EventItem[];

    constructor(private eventService: EventService) {
    }

    ngOnInit() {
        this.eventService.getEvents().then(evts => this.events = evts);
    }
}
