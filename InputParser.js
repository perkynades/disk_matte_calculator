/**
 * Class used to parse input from user. Acts as a middleware between UI and main application.
 * This ensures that each Set has the same format.
 */
class InputParser {
    /**
     * Constructs a parsed input object from the string.
     * Which automatically sends the input through the middleware.
     * Lets user use object to get input as a string or array.
     * @param {string} string the string to parse
     */
    constructor() {

    }
    /**
     * removes whitespace
     * @param {*} string the string
     * @return {*} string the returned string
     */
    static removeWhitespace(string) {
        const regex = /\s+/gm;
        const newString = string.replace(regex, '');
        if (newString == null || newString == '') {
            throw new Error('String has to contain at least one character.');
        }
        return newString;
    }

    /**
     * Remove all extra commas from string
     * @param {*} string the string to remove extra commas
     * @return {*} newString without extra commas
     */
    static removeExtraComma(string) {
        const regex = /([,])\,+/gm;
        const newString = string.replace(regex, ',');
        console.log(newString.charAt(newString.length - 1));
        if (newString == null || newString == '' || newString == ',') {
            throw new Error('String has to contain at least one element');
        }
        return newString;
    }

    /**
     * Create a array from a string, seperated by ,
     * @param {*} string the string to create array from
     * @return {*} arr array of elements to create set with
     */
    static createArrayFromString(string) {
        const arr = string.split(',');

        if (arr.length < 1) {
            throw new Error('String has to contain at least one element. Excluding ,');
        }
        return arr;
    }

    /**
     * Returns a parsed string as a string.
     * @param {*} string string to parse
     * @return {*} string the parsed input as a string
     */
    static parseToString(string) {
        let str = '';
        try {
            str = this.removeWhitespace(string);
            str = this.removeExtraComma(str);
        } catch (err) {
            throw err.message;
        }
        return str;
    }

    /**
     * Returns parsed input as an array.
     * @param {*} string the string to parse
     * @return {*} array the parsed input as a array
     */
    static parseToArray(string) {
        let arr = [];
        try {
            let str = this.removeWhitespace(string);
            str = this.removeExtraComma(str);
            arr = this.createArrayFromString(str);
        } catch (err) {
            throw err;
        }
        return arr;
    }
}

export default InputParser;
