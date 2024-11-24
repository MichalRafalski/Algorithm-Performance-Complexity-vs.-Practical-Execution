const { findDuplicatesDiff } = require('./methods');

describe('findDuplicatesDiff', () => {
    it('should find duplicates in a small array', () => {
        const result = findDuplicatesDiff([..."caiopa"]);
        expect(result).toEqual(["a"]);
    });

    it('should find multiple duplicates in a small array', () => {
        const result = findDuplicatesDiff([..."capoeira"]);
        expect(result).toEqual(["a"]);
    });

    it('should return an empty array when there are no duplicates', () => {
        const result = findDuplicatesDiff([..."CapoeirA"]);
        expect(result).toEqual([]);
    });

    it('should handle an empty array', () => {
        const result = findDuplicatesDiff([]);
        expect(result).toEqual([]);
    });

    it('should handle an array with no duplicates', () => {
        const result = findDuplicatesDiff([..."abcdef"]);
        expect(result).toEqual([]);
    });

    it('should handle an array with all duplicates', () => {
        const result = findDuplicatesDiff([..."aaaaaa"]);
        expect(result).toEqual(["a"]);
    });

    it('should handle an array with many duplicates', () => {
        const result = findDuplicatesDiff([..."abbbbaaccccaaadddddde"]);
        expect(result).toEqual(["a","b","c","d"]);
    });


});
