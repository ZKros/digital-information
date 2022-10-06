import { Component, OnInit } from '@angular/core';
import { DigimonService } from 'src/app/service/digimon.service';

@Component({
	selector: 'app-digimon-list',
	templateUrl: './digimon-list.component.html',
	styleUrls: ['./digimon-list.component.css']
})
export class DigimonListComponent implements OnInit {
	private allDigimons: [];
	constructor(
		public service: DigimonService,
	) { }

	ngOnInit(): void {
		this.service.loadingDigimon.subscribe(res => {
			this.allDigimons = res
			this.service.allDigimonsSearch = this.allDigimons;
		})
	}

	search(value: string) {
		const filter = this.allDigimons.filter((res: string) => {
			return !res.indexOf(value.toLowerCase())
		})

		this.service.allDigimonsSearch = filter;
	}

}
