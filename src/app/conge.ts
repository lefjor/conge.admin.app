import {CongeStatus} from './conge-status.enum';

export class UserConge {
  idUserConge : string;
  isSelected : boolean;
  user:User;
  conge:Conge;
}

export class User {
  firstname:string;
  lastname:string;
  matricule:string;
  isPartialTime?:boolean;
}

export class Conge {
  beginDate:Date;
  isBeginDateMorning:boolean;
  isBeginDateAfternoon:boolean;
  endDate:Date;
  isEndDateMorning:boolean;
  isEndDateAfternoon:boolean;
  reason:string;
  offDayNumber:number;
  otherDetails:string;
  isError:boolean;
  errorMessage:string;
  status : CongeStatus;
}
