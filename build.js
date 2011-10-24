var interleave = require('interleave'),
    fs = require('fs'),
    path = require('path'),
    config = {
        aliases: {
            'cog': 'github://DamonOehlman/cog/cogs/$1',
            'eve': 'github://DmitryBaranovskiy/eve/eve.js'
        }
    };
    
// build each of the css files
interleave(['src/css', 'src/js'], {
    multi: 'pass',
    path: 'dist',
    config: config
});    

// build each of the css files
interleave(['src/css/controls', 'src/js/controls'], {
    multi: 'pass',
    path: 'dist/controls',
    config: config
});