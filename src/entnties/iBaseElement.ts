export interface IBaseElement {
  width: number;
  height: number;
  elmentID:number;
  elementType:string;
  callbackFn? : void;
}

export interface IButtonElement extends IBaseElement {
  color?: string;
  onClick? : void;
}