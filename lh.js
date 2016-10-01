var lh = function () {
    //
}

lh.camelCase = function (text) {
    var words = text.split(' ');
    var result = words.shift().toLowerCase();
    
    for (var i in words) {
        result += words[i].substr(0, 1).toUpperCase() + words[i].slice(1, words[i].length);
    }
    
    return result;
}

lh.snakeCase = function (text) {
    var words = text.split(' ');
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
}

lh.strLimit = function (text, limit) {
    var result = text.substr(0, limit);
    if (text.length > limit) {
        result += '...';
    }
    
    return result;
}

lh.strContains = function (text, search) {
    return text.indexOf(search) !== -1;
}

module.exports = lh;