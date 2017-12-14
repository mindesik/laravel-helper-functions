var crypto = require('crypto');
var Tense = require('tense');
var tense = new Tense;
var slug = require('slug');

/**
 * Laravel helper functions
 * See docs at https://laravel.com/docs/master/helpers#available-methods
 */
var lh = {
    
    // Strings
    camel_case: function (string) {
        var words = string.replace('-',' ').replace('_',' ').split(' ');
        var result = words.shift().toLowerCase();
        
        for (var i in words) {
            result += words[i].substr(0, 1).toUpperCase() + words[i].slice(1, words[i].length);
        }
        
        return result;
    },

    class_basename: function (string) {
        return string.split('\\').pop();
    },

    e: function (string) {
        return string.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    },

    ends_with: function (string, search) {
        return string.endsWith(search);
    },

    snake_case: function (string) {
        var words = string.replace('-',' ').replace('_',' ').split(' ');
        var result = [];
        
        for (var i in words) {
            if (words[i].substr(0, 1) === words[i].substr(0, 1).toUpperCase()) {
                var word = words[i].toLowerCase();
            } else {
                var word = result.pop() + words[i].toLowerCase();
            }
            
            result.push(word);
        }
        
        return result.join('_');
    },

    str_limit: function (string, limit) {
        var result = string.substr(0, limit);
        if (string.length > limit) {
            result += '...';
        }
        
        return result;
    },

    starts_with: function (string, search) {
        return string.startsWith(search);
    },

    str_contains: function (string, search) {
        return string.indexOf(search) !== -1;
    },

    str_finish: function (string, addition) {
        var result = string;
        
        if (!string.endsWith(addition)) {
            result += addition;
        }
        
        return result;
    },

    str_is: function (pattern, string) {
        if (pattern.endsWith('*')) {
            return string.startsWith(pattern.replace('*', ''));
        } else {
            return pattern === string;
        }
    },

    str_plural: function (string, amount) {
        if (!amount) {
            amount = 2;
        }
        
        if (amount === 1) {
            return string;
        }
        
        return tense.pluralize(string);
    },

    str_random: function (length) {
        if (!length) {
            length = 16;
        }
        
        return crypto.randomBytes(Math.ceil(length / 2)).toString('hex').slice(0, length);
    },
    
    str_singular: function (string) {
        return tense.singularize(string);
    },
    
    str_slug: function (string, join) {
        if (!join) {
            join = '-';
        }
        
        return slug(string, join);
    },
    
    studly_case: function (string) {
        var result = lh.camel_case(string);
        var result = result.substr(0, 1).toUpperCase() + result.slice(1, result.length);
        
        return result;
    },
    
    title_case: function (string) {
        var words = string.replace('-',' ').replace('_',' ').split(' ');
        var result = [];
        
        for (var i in words) {
            result.push(words[i].substr(0, 1).toUpperCase() + words[i].slice(1, words[i].length));
        }
        
        return result.join(' ');
    },
}

module.exports = lh;
