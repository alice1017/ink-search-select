# ink-search-select

![mpm](https://img.shields.io/npm/v/ink-search-select.svg?style=flat)
![node](https://img.shields.io/node/v/ink-search-select.svg?style=flat)

> incremental search and select component for [ink](https://github.com/vadimdemedes/ink)

![DEMO](https://raw.githubusercontent.com/alice1017/ink-search-select/master/media/demo.gif)


## Usage

```js
import SearchSelect from "ink-search-select";
import React from 'react';
import { render } from 'ink';

let app;
const languages = [
    "JavaScript", "Java", "Python", "Ruby",
    "TypeScript", "ECMAScript", "AppleScript",
    "Swift", "Perl", "Lua", "Clojure", "C++", "C",
    "Go", "Haskell", "Scala", "Scheme", "BrainFu*k"
];
const items = languages.map(lang => {
    return { label: lang.toLowerCase(), value: lang };
});
const onSelect = (item) => {
    console.log(`You selected: '${item.value}'`);
    app.unmount();
};

app = render(
    <SearchSelect
        items={items}
        label="Query: "
        desc="Search any languages"
        onSelect={onSelect}
    />
);
```

## Dependencies

* **[ink](https://github.com/vadimdemedes/ink)** : `^2.1.1`,
* **[ink-select-input](https://github.com/vadimdemedes/ink-select-input)** : `^3.1.1`,
* **[ink-text-input](https://github.com/vadimdemedes/ink-text-input)** : `^3.1.1`

## Installation

```code
npm install ink-search-select
```

or

```code
yarn add ink-search-select
```

## Props

### label

| Type     | Default            |
| -------- | ------------------ |
| `string` | `"Search query: "` |

A label string in front of text input.

### desc

| Type     | Default             |
| -------- | ------------------- |
| `string` | `"Search anything"` |

A description string of search. It displays between until text inputted after rendered.

### placeholder

| Type     | Default |
| -------- | ------- |
| `string` | `"..."` |

A placeholder string of text input.

### items (from ink-select-input)

| Type    | Default |
| ------- | ------- |
| `array` | `[]`    |

An items array to display in a list. Each item must be an **object** and have `label` and `value` props, it may also optionally have a `key` prop. If no key prop is provided, the value will be used as the item key.

### itemComponent (from ink-select-input)

| Type        | Default                                                                            |
| ----------- | ---------------------------------------------------------------------------------- |
| `Component` | `Item` |

A custom ink component to override the default item component.

### onSelect (from ink-select-input)

| Type   | Default    |
| ------ | ---------- |
| `func` | `() => {}` |

A function to call when user selects an item. Item object is passed to that function as an argument.
