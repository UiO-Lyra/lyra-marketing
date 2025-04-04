# lyra-marketing
# Testing Website
* Go to folder for this website, example `cd ./Documents/lyra-marketing`
* Run `python -m http.server 8000` in terminal to start server
* In browser, go to http://localhost:8000/main.html

# Adding text to site
## Adding text to text.json
* In json folder open text.json
* Add some description of what the text is, example if adding title for paragraph about space: `"spaceTitle": {"no": ..., "en": ...}`.
* Add text where ... is.

## Inserting text into main.html
* Make some leaf element, meaning you cannot pick an element with sub elements.
* At the element where you want to insert text, add the class from text.json and add "Text" to it: `<div class="spaceTitleText"><\div>` 
