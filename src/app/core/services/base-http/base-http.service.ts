import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "@/environments/environment"


const { apiUrl: baseUrl } = environment;

@Injectable({
  providedIn: 'root'
})
export class BaseHttpService {
  constructor(private api: HttpClient) { }

  getAll<T>(path: string) {
    return this.api.get<T>(`${baseUrl}/${path}`);
  }

  getById<T>(path: string, id: string) {
    return this.api.get<T>(`${baseUrl}/${path}/${id}`);
  }

  create<T>(path: string, data: any) {
    return this.api.post<T>(`${baseUrl}/${path}`, data);
  }

  update<T>(path: string, id: string, data: any) {
    return this.api.put<T>(`${baseUrl}/${path}/${id}`, data);
  }

  delete<T>(path: string, id: string) {
    return this.api.delete<T>(`${baseUrl}/${path}/${id}`);
  }

}
