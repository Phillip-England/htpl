# HTPL
What if HTML was a programming language? With Javascript, we can *extend* HTML. What will happen if we really press this idea?

## Inspiration
Two of my favorite tools revolve around HTML's attributes. Both Tailwind and HTMX center on this idea of extracting data from attributes and doing something special with it. I believe more can be sqeezed out of this idea.


## Attribute Listing

### proxy-click

#### Action
click one element, and have it forward the click onto another element

#### Use Case
I created this to make it easy to hide a file input and click it using another, prettier, button.

#### Example
```html
<button proxy-click='#hidden-input'>Click Me!</button>
<input id='hidden-input' type='file' class='hidden' />
```
