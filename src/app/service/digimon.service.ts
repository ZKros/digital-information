import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class DigimonService {

	public allDigimonsSearch: any;

	public urlDigimon = 'https://digimon-api.vercel.app/api/digimon'

	constructor(private http: HttpClient) { }

	get loadingDigimon(): Observable<[]> {
		return this.http.get<any>(this.urlDigimon).pipe(
			tap(res => res),
			tap(res => {
				this.allDigimonsSearch = res;
			})
		);
	}
}
