var transformer = require('jstransformer');
var marked = transformer(require('jstransformer-marked'));
 
var options = {};
var res = marked.render('Some **markdown**', options);
// => {body: 'Some <strong>markdown</strong>', dependencies: []}

{body: String, dependencies: Array.<String>}

transformer.render(str, options, locals);
=> {body: String, dependencies: Array.<String>}

transformer.renderAsync(str[, options], locals, callback);
transformer.renderAsync(str[, options], locals);
=> Promise({body: String, dependencies: Array.<String>})

transformer.renderFile(filename, options, locals)
=> {body: String, dependencies: Array.<String>}

transformer.renderFileAsync(filename[, options], locals, callback);
transformer.renderFileAsync(filename[, options], locals);
=> Promise({body: String, dependencies: Array.<String>})

var formats = transformer.inputFormats;
=> ['md', 'markdown']

var md = require('jstransformer')(require('jstransformer-markdown'))
var outputFormat = md.outputFormat
=> 'html'