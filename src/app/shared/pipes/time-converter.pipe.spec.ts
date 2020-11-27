import { TimeConverterPipe } from './time-converter.pipe';

describe('TimeConverterPipe', () => {
  const pipe = new TimeConverterPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transform 90 minutes to 1h 30min if need hours', () => {
    expect(pipe.transform(90, 'minutes', 'hours')).toEqual('1h 30min');
  });

  it('transform 10 minutes to 10 min if need minutes', () => {
    expect(pipe.transform(10, 'minutes', 'minutes')).toEqual('10min');
  });
});
