(function (root, factory) {
    if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like enviroments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        factory();
    }
}(this, function () {

    /**
     * Trim Character on left and right
     * @param  {String} char 
     * @return {String}      
     */
    String.prototype.trim = function(char) {
        var pattern = (typeof char !== 'string') ? 
                        /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g : 
                        new RegExp('^['+ char +']+|['+ char +']+$', 'g');
    
        return this.replace(pattern, '');
    };

    /**
     * Trim Character on left side
     * @param  {String} char 
     * @return {String}      
     */
    String.prototype.leftTrim = function(char) {
        var pattern = (typeof char !== 'string') ? 
                        /^[\s\uFEFF\xA0]+/g : 
                        new RegExp('^['+ char +']+', 'g');

        return this.replace(pattern, '');
    }

    /**
     * Trim Character on right side
     * @param  {String} char 
     * @return {String}      
     */
    String.prototype.rightTrim = function(char) {
        var pattern = (typeof char !== 'string') ? 
                        /[\s\uFEFF\xA0]+$/g : 
                        new RegExp('['+ char +']+$', 'g');

        return this.replace(pattern, '');
    }
    
}));
