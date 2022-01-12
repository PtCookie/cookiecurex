import { format } from 'date-fns';

class RateDate {
  readonly #date: Date;

  constructor(value: number | string | Date) {
    this.#date = new Date(value);
  }

  toString(): string {
    return format(this.#date, 'yyyy-MM-dd');
  }
}

export default RateDate;
