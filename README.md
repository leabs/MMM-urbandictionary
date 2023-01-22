# MMM-UrbanDictionary

Magic Mirror Module to show random daily word from urbandictionary.com

![MMM-urbandictionary module screenshot](/screenshot/mirror.png)

## Installation

1. Navigate into your MagicMirror's `modules` folder and execute `git clone https://github.com/leabs/MMM-UrbanDictionary.git`
2. Navigate to your config file in `config/config.js` and add the module to the modules array:

```
modules: [
    {
        module: 'MMM-UrbanDictionary',
        position: 'top_right',
    }
]
```

note: The custom css for this module `style.css` is located in the `MMM-UrbanDictionary` folder and is set for a width of 420px. This value may have to be adjusted for your mirror and preferred location for the module.
