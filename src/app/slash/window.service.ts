import {Injectable} from "@angular/core";

@Injectable()
export class WindowRef {
  constructor() {}

  getNativeWindow(): Window {
    return window;
  }
}
