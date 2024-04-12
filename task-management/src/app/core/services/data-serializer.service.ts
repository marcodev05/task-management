import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataSerializerService {

  constructor() { }

  buildRequestParameters(param: any): string {
    return "?" + this.serializeParameters(param);
  }

  serializeParameters(obj: any, prefix?: string): string {
    const parts: string[] = [];
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const value = obj[key];
        if (value !== null && typeof value === 'object') {
          parts.push(this.serializeParameters(value, prefix ? `${prefix}.${key}` : key));
        } else {
          let finalKey = prefix ? `${prefix}.${key}` : key;
          if (!isNaN(Number(key))){
            finalKey = prefix ? `${prefix}[${key}]` : `[${key}]`;
          }   
          parts.push(`${encodeURIComponent(finalKey)}=${encodeURIComponent(value)}`);
        }
      }
    }
    return parts.join('&');
  }
}
