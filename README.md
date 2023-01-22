# MMM-UrbanDictionary

A [MagicMirror](https://github.com/MichMich/MagicMirror) Module to show random daily word from urbandictionary.com. This shows the word, definition, example, and author and updates every 3 minutes.

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

_note_: The custom CSS for this module `style.css` is located in the `MMM-UrbanDictionary` folder and is set for a width of `420px`. This value may have to be adjusted for your mirror and preferred location for the module.
