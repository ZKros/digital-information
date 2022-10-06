import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
	selector: 'digimon-search',
	templateUrl: './digimon-search.component.html',
	styleUrls: ['./digimon-search.component.css']
})
export class DigimonSearchComponent implements OnInit {

	@Output() search: EventEmitter<string> = new EventEmitter();

	constructor() { }

	ngOnInit(): void {
	}

	searchDigimon(value: string) {
		this.search.emit(value)
	}

}
