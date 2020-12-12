import { OrderByPipe } from './order-by.pipe';

describe('OrderByPipe', () => {
  const pipe = new OrderByPipe();
  const mockList = [
    {
      notItemName: 'Simple string',
      value: 277
    },
    {
      itemName: 'Gender',
      value: 15
    },
    {
      itemName: 'Mock Name',
      value: 1
    },
    {
      itemName: 'Stranger',
      value: 97324,
    },
  ];

  const sortedListByValue = mockList.sort((a, b) => a.value > b.value ? -1 : 1);

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('list should be sorted by descending value field', () => {
    const transformedArray = pipe.transform(mockList, 'value');

    expect(transformedArray).toEqual(sortedListByValue);
    expect(transformedArray.length).toBe(mockList.length);
  });

  it('list should be sorted by ascending value field', () => {
    expect(pipe.transform(mockList, 'value', false)).toEqual(sortedListByValue.reverse());
  });
});
