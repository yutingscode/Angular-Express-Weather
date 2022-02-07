export interface IWeather {
    name: string;
    visibility: string;
}

export class Weather implements IWeather {
    constructor(
        public name: string,
        public visibility: string,
      ) {
        this.name = name;
        this.visibility = visibility;
      }
}