/**
 * Does opreations on sets. Uses Bit strings for most operations.
 * Also parses to and from array and bitstring
 * @author Steffen Holanger
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
    static makeBitStringFromSet(setUnivarsal, setA) {
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
     * @return {String} Bitstring of elements
     */
    static intersection(setUnivarsal, setA, setB) {
        const outputIntersectionArray = [];
        const setABitString = this.makeBitStringFromSet(setUnivarsal, setA);
        const setBBitString = this.makeBitStringFromSet(setUnivarsal, setB);

        const setABitArray = this.makeArrayFromBitString(setABitString);
        const setBBitArray = this.makeArrayFromBitString(setBBitString);

        // Looping through the array
        for (let i = 0; i < setABitArray.length; i++) {
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

    /**
     * Complements a se
     * @param {Set} setUniversal The universal set
     * @param {Set} setA The set to be complemented
     * @return {String} A bit string holding the values
     */
    static complement(setUniversal, setA) {
        const bitString = this.makeBitStringFromSet(setUniversal, setA);
        const array = this.makeArrayFromBitString(bitString);
        const outputArray = [];


        array.forEach((element) => {
            if (element == 0) {
                element = 1;
            } else {
                element = 0;
            }
            outputArray.push(element);
        });
        const bitStringOutput = this.makeBitStingFromArray(outputArray);
        return bitStringOutput;
    }

    /**
     * Returns the cardinality of a set
     * @param {Set} set The set to get the cardinality from
     * @return {Integer}
     */
    static cardinality(set) {
        return this.makeArrayFromSet(set).length;
    }

    /**
     * Checks if a set contains an element
     * @param {Set} set The set
     * @param {*} element The element to check
     * @return {boolean} true if the set contains element, false if not
     */
    static isAnElementInSet(set, element) {
        return set.has(element);
    }

    /**
     * Makes a bit array from a set
     * @param {Set} setUnivarsal
     * @param {Set} setA
     * @return {Array}
     */
    static makeBitArrayFromSet(setUnivarsal, setA) {
        return this.makeArrayFromBitString(
            this.makeBitStringFromSet(setUnivarsal, setA));
    }

    /**
     *
     * @param {Set} setUniversal
     * @param {Set} superset The possible superset
     * @param {Set} subset The possible subset
     * @return {boolean}
     */
    static isSubset(setUniversal, superset, subset) {
        let output = false;
        const supersetArray = this.makeBitArrayFromSet(setUniversal, superset);
        const subsetArray = this.makeBitArrayFromSet(setUniversal, subset);

        const trueOrFalseSet = new Set();

        if (subsetArray.length > supersetArray) {
            output = false;
        }

        supersetArray.forEach((element, index) => {
            if (element == 0 && subsetArray[index] == 1) {
                trueOrFalseSet.add('false');
            }
            if (element == 1 && subsetArray[index] == 1) {
                trueOrFalseSet.add('true');
            }
        });

        if (trueOrFalseSet.has('true')) {
            output = true;
        }

        if (trueOrFalseSet.has('false')) {
            output = false;
        }

        return output;
    }

    /**
     * Checks if two sets, set A and B, are disjunct
     * @param {Set} setUnivarsal universal set
     * @param {Set} setA set A
     * @param {Set} setB set B
     * @return {boolean} true if they are disjunct and false if not
     */
    static disjunct(setUnivarsal, setA, setB) {
        const intersectionBitString =
            this.intersection(setUnivarsal, setA, setB);

        const intersectionArray =
            this.makeArrayFromBitString(intersectionBitString);
        const setOfBitStringValues = new Set(intersectionArray);

        // the intersection-bitstring-set should
        // not hold any values of 1 to be disjunct
        return !setOfBitStringValues.has('1');
    }

    /**
     * Converts a bitstring to a set
     * @param {Set} setUnivarsal the universal set
     * @param {bitstring} bitstring a bitstring to be converted
     * @return {Set} A set holding the values based on the bitstring
     */
    static makeSetFromBitstring(setUnivarsal, bitstring) {
        const arrayOfBitstring = this.makeArrayFromBitString(bitstring);
        const arrayOfValuesInUniversal = this.makeArrayFromSet(setUnivarsal);

        const outputSet = new Set();

        arrayOfBitstring.forEach((element, index) => {
            if (element == 1) {
                const value = arrayOfValuesInUniversal[index];
                outputSet.add(value);
            }
        });

        return outputSet;
    }
}


export default SetOperations;
