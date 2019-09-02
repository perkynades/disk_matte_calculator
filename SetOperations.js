class SetOperations {
    /**
     * Makes a bitstring of a set. SetA is the template for the bitstring
     * If element in set B is a part of set A it is represented with a 1
     * If the element is not part of set A it is represented with a 0
     * Eg.  setA = {1,2,3,4,5}
     *      setB = {2,4,5}
     *      returnValue = "0, 1, 0, 1, 1"
     * @param {*} setUnivarsal The initial set
     * @param {*} setA The set to be compared
     */
    static makeBitString(setUnivarsal, setA) {
        const outputSting = new String();
        // Filling output string with 0 for every element in setUniversal 
        setUnivarsal.forEach(() => {
            outputSting.push('0');
        });

        // Make array of sets
        const arraySetUnivarsal = this.makeArrayFromSet(setUnivarsal);
        const arraySetA = this.makeArrayFromSet(setA);

        // looping through all values in arraySetA
        for (let i = 0; i < arraySetA.length; i++) {
            // Fetching the current element in Set A
            let elementInSetA = arraySetA[i];
            for (let k = 0; k < arraySetUnivarsal.length; k++) {
                // Fetcing the current element in Set Universal
                let elementInSetUniversal = arraySetUnivarsal[k];

                // Checking if the elements are the same. If so wrinting a 1 to 
                if (elementInSetUniversal === elementInSetA) {
                    outputSting[k] = '1';
                }
            }
        }

    }

    static union(setA, setB) {
        const outputSet = new Set();

        // adding set A to the union
        setA.forEach((value1) => {
            outputSet.add(value1);
        })

        // adding all values of set B to the union
        setB.forEach((value1) => {
            outputSet.add(value1)
        })

        return outputSet;
    }

    static makeArrayFromSet(set) {
        const output = [];
        set.forEach(value => {
            output.push(value);
        })
        return output
    }
}

export default SetOperations;