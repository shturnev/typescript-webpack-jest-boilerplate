import {R} from '../modules/for-test';
import { sum } from '../modules/foo';

test('basic', () => {
    expect(R.test1).toBe(3);
});

test('basic again', () => {
    expect(sum(1, 2)).toBe(6);
});