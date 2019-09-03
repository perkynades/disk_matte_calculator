/**
 * Does opreations on sets. Uses Bit strings for most operations.
 * Also parses to and from array and bitstring
 */
class SetOperations {
    /**
     * Makes a bitstring of a set. SetA is the template for the bitstring
     * If element in set B is a part of set A it is represented with a 1
     * If the element is not part of set A it is represented with a 0
     * Eg.  setUniversal = {1,2,3,4,5}
     *      setB = {2,4,5}
     *      returnValue = "0, 1, 0, 1, 1"
     * @param {*} setUnivarsal The initial set
     * @param {*} setA The set to be compared
     * @return {string} outstrings
     */
    static makeBitString(setUnivarsal, setA) {
        // initializing the output string
        let outputString = '';

        // creating a temporary array to hold all the bit string values
        const tempArray = [];
        // Filling output string with 0 for every element in setUniversal
        setUnivarsal.forEach(() => {
            tempArray.push('0');
        });

        // Make array of sets
        const arraySetUnivarsal = this.makeArrayFromSet(setUnivarsal);
        const arraySetA = this.makeArrayFromSet(setA);

        // looping through all values in arraySetA
        for (let i = 0; i < arraySetA.length; i++) {
            // Fetching the current element in Set A
            const elementInSetA = arraySetA[i];
            for (let k = 0; k < arraySetUnivarsal.length; k++) {
                // Fetcing the current element in Set Universal
                const elementInSetUniversal = arraySetUnivarsal[k];

                // Checking if the elements are the same. If so wrinting a 1 to
                if (elementInSetUniversal === elementInSetA) {
                    tempArray[k] = 1;
                }
            }
        }

        // Converting the temporary array to a string
        tempArray.forEach((value) => {
            outputString += value;
        });

        return outputString;
    }

    /**
     * Retruns a union between two sets
     * @param {*} setA
     * @param {*} setB
     * @return {Set} outputset
     */
    static union(setA, setB) {
        const outputSet = new Set();

        // adding set A to the union
        setA.forEach((value1) => {
            outputSet.add(value1);
        });

        // adding all values of set B to the union
        setB.forEach((value1) => {
            outputSet.add(value1);
        });

        return outputSet;
    }

    /**
     * Finds the intersections between two sets within a universal set
     * @param {set} setUnivarsal
     * @param {set} setA
     * @param {set} setB
     * @return {String}
     */
    static intersection(setUnivarsal, setA, setB) {
        const outputIntersectionArray = [];
        const setABitString = this.makeBitString(setUnivarsal, setA);
        const setBBitString = this.makeBitString(setUnivarsal, setB);

        const setABitArray = this.makeArrayFromBitString(setABitString);
        const setBBitArray = this.makeArrayFromBitString(setBBitString);

        // Looping through the array
        for (let i = 0; i < setABitArray.length; i++) {
            console.log(`${setABitArray[i]} ${setBBitArray[i]}`);
            // Checking that both arrays at index i holds an 1.
            if (setABitArray[i] == 1 && setBBitArray[i] == 1) {
                // writing result to output array

                outputIntersectionArray[i] = 1;
            } else {
                outputIntersectionArray[i] = 0;
            }
        }

        return this.makeBitStingFromArray(outputIntersectionArray);
    }

    /**
     * Making an array from a set
     * @param {*} set the set to be converted
     * @return {Array} output
     */
    static makeArrayFromSet(set) {
        const output = [];
        set.forEach((value) => {
            output.push(value);
        });
        return output;
    }

    /**
     * Takes a bitstring and turns it into an array
     * @param {*} bitstring
     * @return {array}
     */
    static makeArrayFromBitString(bitstring) {
        return bitstring.split('');
    }

    /**
     * Makes a bitstring from an array
     * @param {*} array
     * @return {String} outputSting
     */
    static makeBitStingFromArray(array) {
        let ouputString = '';
        array.forEach((element) => {
            ouputString += element;
        });
        return ouputString;
    }
}


export default SetOperations;
