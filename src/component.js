import React, { PureComponent } from 'react';
import PropTypes from "prop-types";
import {Box, Color, Text} from 'ink';
import SelectInput, { Item } from 'ink-select-input';
import TextInput from "ink-text-input";

// * Flags
const FOUND = true;
const NOT_FOUND = false;

// * Helper Components
const Selector = ({ find, desc, items, itemComponent, onSelect}) => {
    if (find === FOUND) {
        return (
            <Box>
                <SelectInput
                    items={items}
                    itemComponent={itemComponent}
                    onSelect={onSelect}
                />
            </Box>
        );
    }
    else if (find === NOT_FOUND) {
        return (
            <Color gray>
                <Text>{desc}</Text>
            </Color>
        );
    }
};

export default class SearchSelect extends PureComponent {

    static propTypes = {
        label: PropTypes.string,
        desc: PropTypes.string,
        items: PropTypes.array,
        itemComponent: PropTypes.func,
        onSelect: PropTypes.func,
        placeholder: PropTypes.string
    };

    static defaultProps = {
        label: "Search query: ",
        desc: "Search anything",
        items: [],
        itemComponent: Item,
        onSelect: () => {},
        placeholder: "..."
    };

    state = {
        searchQuery: "",
        foundItems: [],
        find: NOT_FOUND
    };

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        const {
            label,
            desc,
            itemComponent,
            onSelect,
            placeholder
        } = this.props;
        const { searchQuery, find, foundItems } = this.state;

        return (
            <Box flexDirection="column">
                <Box flexDirection="row">
                    <Text>{label}</Text>
                    <TextInput
                        value={searchQuery}
                        onChange={this.handleChange}
                        placeholder={placeholder}
                    />
                </Box>
                <Box>
                    <Selector
                        find={find}
                        desc={desc}
                        items={foundItems}
                        itemComponent={itemComponent}
                        onSelect={onSelect}
                    />
                </Box>
            </Box>
        );
    }

    async search(query) {
        const { items } = this.props;

        if (query.length === 0) {
            return [];
        }

        const itemKeys = await items.map(item => item.label);
        const foundKeys = await itemKeys.filter(key => {
            const length = query.length;
            return (
                key.slice(0, length) === query.slice(0, length)
            );
        });

        return await foundKeys.map(key => {
            const item = items.filter(item => item.label === key);
            return {
                label: key,
                value: item[0].value
            };
        });
    }

    async handleChange(searchQuery) {
        const foundItems = await this.search(searchQuery);

        await this.setState({
            searchQuery: searchQuery,
            find: (foundItems.length > 0) ? FOUND : NOT_FOUND,
            foundItems: foundItems
        });
    }
}
