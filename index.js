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
     * Escape regex sepecial characters
     * @param  {String} chars
     * @return {String}
     */
    function escapeRegexChars(chars) {
        return chars
                .replace(/[.*+?^${}()|[\]\\<>]/g, '\\$&')
                .replace(/\x08/g, '\\x08');
    };

    /**
     * Trim Character on left and right
     * @param  {String} chars
     * @return {String}
     */
    String.prototype.trim = function(chars) {
        var pattern;

        if (typeof chars !== 'string') {
            pattern = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        } else {
            chars = escapeRegexChars(chars);
            pattern = new RegExp('^('+ chars +'+)|('+ chars +'+)$', 'g');
        }

        return this.replace(pattern, '');
    };

    /**
     * Trim Character on left side
     * @param  {String} chars
     * @return {String}
     */
    String.prototype.ltrim = function(chars) {
        var pattern = (typeof chars !== 'string') ?
                        /^[\s\uFEFF\xA0]+/g :
                        new RegExp('^'+ escapeRegexChars(chars) +'+', 'g');

        return this.replace(pattern, '');
    }

    /**
     * Trim Character on right side
     * @param  {String} chars
     * @return {String}
     */
    String.prototype.rtrim = function(chars) {
        var pattern = (typeof chars !== 'string') ?
                        /[\s\uFEFF\xA0]+$/g :
                        new RegExp(escapeRegexChars(chars) +'+$', 'g');

        return this.replace(pattern, '');
    }

}));
