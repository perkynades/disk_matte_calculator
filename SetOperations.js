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
     */
    static makeBitString(setUnivarsal, setA) {
        // initializing the output string
        let outputString = new String();

        // creating a temporary array to hold all the bit string values
        let tempArray = [];
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
            let elementInSetA = arraySetA[i];
            for (let k = 0; k < arraySetUnivarsal.length; k++) {
                // Fetcing the current element in Set Universal
                let elementInSetUniversal = arraySetUnivarsal[k];

                // Checking if the elements are the same. If so wrinting a 1 to 
                if (elementInSetUniversal === elementInSetA) {
                    tempArray[k] = 1
                }
            }
        }

        // Converting the temporary array to a string
        tempArray.forEach(value => {
            outputString += value;
        })

        return outputString;

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

    static intersection(setUnivarsal, setA, setB) {
        let outputIntersectionArray = [];
        const setA_BitString = this.makeBitString(setUnivarsal, setA);
        const setB_BitString = this.makeBitString(setUnivarsal, setB);

        const setA_BitArray = this.makeArrayFromBitString(setA_BitString);
        const setB_BitArray = this.makeArrayFromBitString(setB_BitString);

        // Looping through the array
        for (let i = 0; i < setA_BitArray.length; i++) {
            console.log(`${setA_BitArray[i]} ${setB_BitArray[i]}`);
            // Checking that both arrays at index i holds an 1.
            if (setA_BitArray[i] == 1 && setB_BitArray[i] == 1) {
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
     * @returns {Array} output 
     */
    static makeArrayFromSet(set) {
        const output = [];
        set.forEach(value => {
            output.push(value);
        })
        return output
    }

    /**
     * Takes a bitstring and turns it into an array
     * @param {*} bitstring 
     */
    static makeArrayFromBitString(bitstring) {
        return bitstring.split('');
    }

    /**
     * Makes a bitstring from an array
     * @param {*} array
     * @retruns outputSting
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