import React, { useState, useEffect, memo } from 'react'
import './index.scss'
import SearchBox from '../../components/SearchBox'
import Card from '../../components/Card'
import { useDebounce } from '../../helper/debounce'
import Dropdown from '../../components/Dropdown'

const dropdownTypes = ['All', 'Forks', 'Archived']

function Lists({ repos }) {
    const [search, setSearch] = useState('')
    const [filteredData, setFilteredData] = useState([])
    const [type, setType] = useState('')
    const debouncedSearchTerm = useDebounce(search, 500);
    useEffect(
        () => {
            let searchArray = type === '' ? [...repos] : [...filteredData]
            if (debouncedSearchTerm) {
                const data = searchArray.filter(element => {
                    return element.name.toLowerCase().includes(search.toLowerCase());
                });
                setFilteredData(data)
            } else {
                setFilteredData(searchArray);
            }
        },
        [debouncedSearchTerm, repos]
    );

    useEffect(() => {
        let data = [...repos]
        if (type === 'Archived') {
            data = repos.filter(element => element.archived === true)
        } else if (type === 'Forks') {
            data = repos.filter(element => element.forks >= 1)
        }
        setFilteredData(data)

    }, [type])

    return (
        <div className='lists-wrapper'>
            <div className='filters'>
                <SearchBox value={search} onChange={e => setSearch(e.target.value)} />
                <Dropdown changeFilter={e => setType(e)} options={dropdownTypes} value={type} placeHolder='Select Type' />
            </div>
            {filteredData.length > 0 ?
                <div>
                    {filteredData.map(item => <div className='cards' key={item.id}><Card repo={item} />   </div>)}
                </div>
                : <div className='noDataFound'>No data Found</div>}

        </div>
    )
}

export default memo(Lists)