import Aragorn from '../js/Aragorn';

  it('should throw Error with message \'Track key undefined \' when null is passed to stopTrace', () => {
    try {
        Aragorn.stopTrace(null);
        // Fail test if above expression doesn't throw anything.
        expect(true).toBe(false);
    } catch (e) {
        expect(e.message).toBe("Aragon is unable to stop Trace : Trace Key Undefined");
    }
  });


  it('should throw Error with message \'Trace key should be string \' when key is passed on any other type to stopTrace', () => {
    try {
        Aragorn.stopTrace(123);
        // Fail test if above expression doesn't throw anything.
        expect(true).toBe(false);
    } catch (e) {
        expect(e.message).toBe("Aragon is unable to stop Trace : Trace Key should be string");
    }
  });


  it('should throw Error with message \'Trace key Missing \' when null is passed to stopTrace', () => {
    try {
        Aragorn.stopTrace("RANDOM_KEY");
        // Fail test if above expression doesn't throw anything.
        expect(true).toBe(false);
    } catch (e) {
        expect(e.message).toBe("Aragon is unable to stop Trace : Trace Key Missing");
    }
  });



 
  it('should throw Error with message \'Track key undefined \' when null is passed to startTrace', () => {
    try {
        Aragorn.startTrace(null);
        // Fail test if above expression doesn't throw anything.
        expect(true).toBe(false);
    } catch (e) {
        expect(e.message).toBe("Aragon is unable to start Trace : Trace Key Undefined");
    }
  });


  it('should throw Error with message \'Trace key should be string \' when key is passed on any other type to startTrace', () => {
    try {
        Aragorn.startTrace(123);
        // Fail test if above expression doesn't throw anything.
        expect(true).toBe(false);
    } catch (e) {
        expect(e.message).toBe("Aragon is unable to start Trace : Trace Key should be string");
    }
  });