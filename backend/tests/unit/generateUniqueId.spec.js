const genareteUniqueId = require('../../src/utils/genareteUniqueId');

describe('Generate Unique ID', () => {
    it('should generate an unique ID', () => {
        const id = genareteUniqueId();

        expect(id).toHaveLength(8);
    });
});