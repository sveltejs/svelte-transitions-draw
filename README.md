# svelte-transitions-draw ([demo](https://svelte.technology/repl?version=2.6.2&gist=897a0ede58c59201d57cee7f119bee50))

Draw transition plugin for [Svelte](https://svelte.technology).

This transition will only work with `<path>` elements.

![draw](https://user-images.githubusercontent.com/1162160/40150651-d3451460-5948-11e8-8a8b-1986776a414e.gif)

## Usage

Recommended usage is via [svelte-transitions](https://github.com/sveltejs/svelte-transitions), but you can use this module directly if you prefer. Note that it assumes an ES module or CommonJS environment.

Install with npm or yarn:

```bash
npm install --save svelte-transitions-draw
```

Then add the plugin to your Svelte component's exported definition:

```html
<label>
  <input type=checkbox bind:checked=visible> visible
</label>

<svg viewBox='0 0 100 100'>
  {#if visible}
    <path d="M10,10 L90,10 90,90 10,90 Z" transition:draw/>
  {/if}
</svg>

<script>
  import draw from 'svelte-transitions-draw';

  export default {
    transitions: { draw }
  };
</script>
```


## Parameters

As with most transitions, you can specify `delay` and `duration` parameters (both in milliseconds) and a custom `easing` function (which should live on your `helpers`):

```html
<path
  in:draw='{delay: 250, duration: 1000, easing: quintOut}'
  d='M10,10 L90,10 90,90 10,90 Z'
/>

<script>
  import draw from 'svelte-transitions-draw';
  import { elasticOut } from 'eases-jsnext';

  export default {
    helpers: { elasticOut },
    transitions: { draw }
  };
</script>
```


## License

[LIL](LICENSE)
