import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
  const pipe = new FilterPipe();
  const expectedValue = {
    itemName: 'Gender',
    value: 15
  };

  const mockList = [
    {
      itemName: 'Mock Name',
      value: 1
    },
    {
      notItemName: 'Simple string',
      value: 277
    },
    {
      itemName: 'Stranger',
      value: 97324,
    },
    expectedValue,
  ]
  it('create an instance', () => {

    expect(pipe).toBeTruthy();
  });

  it('on term gen pipe should return list which contain object with itemName Gender', () => {
    expect(pipe.transform(mockList, 'itemName', 'gen')).toContain(expectedValue);
  })

  it('on empty term or with spaces pipe should return all list', () => {
    expect(pipe.transform(mockList, 'itemName', '')).toEqual(mockList);
  })

  it('should not return object without field', () => {
    expect(pipe.transform(mockList, 'itemName', 'Simple')).not.toContain({
      notItemName: 'Simple string',
      value: 277
    });
  });
});
