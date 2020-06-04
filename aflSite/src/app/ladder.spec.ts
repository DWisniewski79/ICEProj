import { ladder } from './ladder';

describe('Game', () =>{
    it('it create an instance',() => {
        expect(new ladder()).toBeTruthy();     
    });
});