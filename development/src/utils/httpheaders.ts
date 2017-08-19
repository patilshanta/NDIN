import { Headers } from "@angular/http";

export function HttpHeaders() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    return { headers };
} 
