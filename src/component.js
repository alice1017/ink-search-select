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
            items,
            itemComponent,
            onSelect,
            placeholder
        } = this.props;
        const { searchQuery, find } = this.state;

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
                        items={items}
                        itemComponent={itemComponent}
                        onSelect={onSelect}
                    />
                </Box>
            </Box>
        );
    }

    async handleChange(searchQuery) {
        // todo: impelement SEARCH behavior

        await this.setState({searchQuery});
        await this.setState({
            find: NOT_FOUND // todo: implement FOUND behavior
        });
    }
}
