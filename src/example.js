import SearchSelect from "../src/";
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
    return { label: lang, value: lang.toLowerCase() };
});
const onSelect = (item) => {
    console.log(`You selected: '${item.label}'`);
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
