/* MagicMirror²
 * Module: MMM-urbandictionary
 *
 * By Steven Leabo https://stevenleabo.com
 * MIT Licensed.
 */
Module.register("MMM-urbandictionary", {
  // Module config defaults.
  defaults: {
    //update every 3 minutes
    updateInterval: 180000,
    //fade speed
    fadeSpeed: 4000,
    //initial load delay
    initialLoadDelay: 0,
    //retry delay
    retryDelay: 2500,
    //api url
    apiBase: "https://api.urbandictionary.com/v0/random"
  },
  getHeader: function () {
    return "UrbanDictionary.com Random Word";
  },
  getStyles: function () {
    return [
      "style.css" // will try to load it from the vendor folder, otherwise it will load is from the module folder.
    ];
  },

  // Define start sequence.
  start: function () {
    Log.info("Starting module: " + this.name);

    this.lastComplimentIndex = -1;
    this.word = "";
    // Schedule update timer.
    setInterval(() => {
      this.updateDom(this.config.fadeSpeed);
    }, this.config.updateInterval);
  },

  /**
   * Retrieve the word of the day along with description, example, and author.
   *
   * @returns {string[]} array with word, description, example, and author
   */
  getWord: async function () {
    const response = await fetch(this.config.apiBase);
    const json = await response.json();
    const word = json.list[0].word;
    //This removes  the brackets from definition and example and it limits the amount of characters to 130 for each so they fit nice.
    const definition = json.list[0].definition
      .replace(/[\[\]]/g, "")
      .substr(0, 130);
    const example = json.list[0].example.replace(/[\[\]]/g, "").substr(0, 130);
    const author = json.list[0].author;
    return [word, definition, example, author];
  },

  // Override dom generator.
  getDom: function () {
    const wrapper = document.createElement("div");
    wrapper.className = this.config.classes
      ? this.config.classes
      : "urban bright pre-line";
    //wrapper.innerHTML = this.config.word;
    this.getWord().then((response) => {
      wrapper.innerHTML =
        "<div class='word'>" +
        response[0] +
        "</div>" +
        "<div class='description'>" +
        "<strong>Description: </strong>" +
        response[1] +
        "</div>" +
        "<br>" +
        "<div class='example'>" +
        "<strong>Example: </strong>" +
        "<em>" +
        response[2] +
        "</em>" +
        "</div>" +
        "<br>" +
        "Author: " +
        response[3];
    });
    //wrapper.innerHTML = this.config.word;
    return wrapper;
  }
});
