var regexInput = document.getElementById('regex');
var results = document.getElementById('results');
var output = document.getElementById('output');

regexInput.addEventListener('keyup', () => {
    
});

function search() {
    if (regexInput.value === '') return;
    findMatches(document.getElementById('text').value, new RegExp(escapeHtml(regexInput.value), 'g'));
}

function findMatches(text, regex) {
    text = escapeHtml(text);
    var matches = [];
    var values = '';
    while ((result = regex.exec(text))) {
        matches.push(new Match(result.index, result[0].length));
        values += '<li>' + result[0] + '</li>';
    }
    results.innerHTML = values;
    output.innerHTML = markMatches(text, matches);
}

function Match(index, length) {
    this.index = index;
    this.length = length;
}

function markMatches(text, matches) {
    for (var i = 0; i < matches.length; i++) {
        var match = matches[matches.length - i - 1];
        text = text.substring(0, match.index) + '<mark>' + text.substring(match.index, match.index + match.length) + '</mark>' + text.substring(match.index + match.length);
    }
    return text;
}

function escapeHtml(unsafe) {
    return unsafe
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
 }

