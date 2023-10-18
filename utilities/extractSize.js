module.exports = {

    /**
     * extract the size reclaimed from the text returned by child_proccess
     * @param {string} string -  the text returned by child_proccess
     * @returns {string} the size
     */
    extractSize: (string) =>{

        //remove new lines from string
        string = string.replace(/[\n\r]/g, "");

        //split the string to extract the size
        let size = string.split("space: ")[1];

        return size

    }

}