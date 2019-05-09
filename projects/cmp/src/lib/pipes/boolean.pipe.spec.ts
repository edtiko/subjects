import { BooleanPipe, defaultLabelTrue, defaultLabelFalse } from './boolean.pipe';

describe('BooleanPipe', () => {
  let pipe: BooleanPipe;

  beforeEach(() => {
    pipe = new BooleanPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('#transform should receive a boolean and transform it to the default string values', () => {
    expect(pipe.transform(true)).toBe(defaultLabelTrue);
    expect(pipe.transform(false)).toBe(defaultLabelFalse);
  });

  it('#transform should be able to receive a boolean and transform overriding the default labels', () => {
    const labelTrue = 'Verdadero';
    const labelFalse = 'Falso';
    expect(pipe.transform(true, labelTrue, labelFalse)).toBe(labelTrue);
    expect(pipe.transform(false, labelTrue, labelFalse)).toBe(labelFalse);
  });
});
