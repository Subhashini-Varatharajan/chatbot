import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchTenant'
})
export class SearchTenantPipe implements PipeTransform {

  transform(value: any, SearchString:string) {
    // SearchString = SearchString.trim();
    if(SearchString=="" || SearchString==null || SearchString.trim() == ""){
    return value;
  }
 const users = [];
 for (let i = 0; i < value.length; i++) {
   if (value[i].toLowerCase() == SearchString.trim().toLowerCase()) {
     users.push(value[i]);
   } else if (value[i].substr(0, SearchString.trim().length).toLowerCase() == SearchString.trim().toLowerCase()) {
     users.push(value[i]);
   }
 }
 return users;
  }

}
