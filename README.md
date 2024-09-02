# HTPL
What if HTML was a programming language? With Javascript, we can *extend* HTML. What will happen if we really press this idea?

## Inspiration
Two of my favorite tools revolve around HTML's attributes. Both Tailwind and HTMX center on this idea of extracting data from attributes and doing something special with it. I believe more can be sqeezed out of this idea.


## Attribute Listing
All of the attributes for HTPL are listed here:

### ht-click-proxy
Click one element, and have it forward the click onto another element. I created this to make it easy to hide a file input and click it using another, prettier, button.
```html
<button ht-click-proxy='#hidden-input'>Click Me!</button>
<input id='hidden-input' type='file' class='hidden' />
```

### ht-mass-toggle
Attach any type of event to an element. Specify target elements. Then toggle a list of classes on those elements when the event is fired.

click the button here
```html
 <button ht-mass-toggle="click:#header #text:hidden text-blue-700"></button>
 <h1 id="header" class="hidden">Header</h1>
 <p id="text" class="hidden">Some Text!</p>
```

to get this result
```html
 <button ht-mass-toggle="click:#header #text:hidden text-blue-700"></button>
 <h1 id="header" class="text-blue-700">Header</h1>
 <p id="text" class="text-blue-700">Some Text!</p>
```

for clarity
```bash
eventType:selector anotherSelector:className anotherClassName
```