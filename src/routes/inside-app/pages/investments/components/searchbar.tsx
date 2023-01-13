import React from 'react'
import { Input, InputGroup } from 'rsuite';
import SearchIcon from '@rsuite/icons/legacy/Search'
import './styles/index.scss'
import { SearchBar } from 'rsuite/esm/Picker';

const Searchbar = () => {
    return (
        <InputGroup inside style={styles.wrapper} >
            <Input placeholder='Search Bundles' style={styles.input} />
            <InputGroup.Button style={styles.btnWrap} className='search'>
                <SearchIcon />
            </InputGroup.Button>
        </InputGroup>
    );
}

const styles = {
    wrapper: {
        fontSize: 17.5,
        borderRadius: 20,
        height: 50,
    },
    input: {
        borderRadius: 20
    },
    btnWrap: {
        height: 49,
        width: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
}

export default Searchbar;