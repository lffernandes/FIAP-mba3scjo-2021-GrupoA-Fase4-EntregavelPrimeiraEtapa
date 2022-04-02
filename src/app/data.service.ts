import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public baseUrl = "listou-api.herokuapp.com";
  constructor(

    private http: HttpClient
  ) { }
  public getTodasListas() {
    return this.http.get(`${this.baseUrl}/api/admin/listar-tudo-lista`);
  }
  public getPcdsParticipantes() {
    return this.http.get(`${this.baseUrl}/v1/participantes/pcds`);
  }
  public getGeraisParticipantes() {
    return this.http.get(`${this.baseUrl}/v1/participantes/gerais`);
  }
  public getSorteioIdosos() {
    return this.http.get(`${this.baseUrl}/v1/participantes/sorteioidosos`);
  }
  public getSorteioPcds() {
    return this.http.get(`${this.baseUrl}/v1/participantes/sorteiopcds`);
  }
  public getSorteioGerais() {
    return this.http.get(`${this.baseUrl}/v1/participantes/sorteiogerais`);
  }
  public getParticipantesValidos() {
    return this.http.get(`${this.baseUrl}/v1/participantes/participantesvalidos`);
  }
}
