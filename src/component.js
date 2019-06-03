import React, { PureComponent } from 'react';
import PropTypes from "prop-types";
import {render, Box, Color, Text} from 'ink';
import SelectInput, { Item } from 'ink-select-input';
import TextInput from "ink-text-input";

// * Flags
const FOCUSED = true;
const NOT_FOCUSED = false;

export default class SearchSelect extends PureComponent {

    static propTypes = {
        label: PropTypes.string,
        items: PropTypes.array,
        focused: PropTypes.bool,
        itemComponent: PropTypes.func,
        onSelect: PropTypes.func,
        placeholder: PropTypes.string
    };

    static defaultprops = {
        label: "Search query: ",
        items: [],
        focused: NOT_FOCUSED,
        itemComponent: Item,
        onSelect: () => {},
        placeholder: "..."
    };

    state = {
        searchQuery: "",
        searchedItems: [],
        focused: null
    };

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        const { label, placeholder } = this.props;
        const { searchQuery } = this.state;

        return (
            <Box flexDirection="row">
                <Text>{label}</Text>
                <TextInput
                    value={searchQuery}
                    onChange={this.handleChange}
                    placeholder={placeholder}
                />
            </Box>
        );
    }

    async handleChange(searchQuery) {
        this.setState({searchQuery});
    }
}
