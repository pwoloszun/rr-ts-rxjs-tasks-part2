const successColor = '#007700';
const errorColor = '#FF3300';
const completeColor = successColor;

export function fullObserver(tag: string): any {
  return {
    next(value: string) {
      const message = tag.length < 5 ? `[${tag}]:\t\t` : `[${tag}]:\t`;
      console.log(`%c${message}`, `color: ${successColor}; font-weight: bold;`, value);
    },
    error(error: Error) {
      const message = tag.length < 5 ? `[${tag}]:\t\t ERROR` : `[${tag}]:\t ERROR`;
      console.log(`%c${message}`, `color: ${errorColor}; font-weight: bold;`, error.stack || error);
    },
    complete() {
      const message = tag.length < 5 ? `[${tag}]:\t\t COMPLETE` : `[${tag}]:\t COMPLETE`;
      console.log(`%c${message}`, `color: #ffffff; background-color: ${completeColor}`);
    }
  };
}

export function randomBetween(min: number, max: number): number {
  return Math.floor(min + Math.random() * (max - min));
}
