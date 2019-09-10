import {CHANGE_DATA_RANGE, CHANGE_SELECTION, DELETE_ARTICLE} from '../constants'

const defaultFilters = {
    selected: [],
    dateRange: {
        from: null,
        to: null
    }
}

export default (filters = defaultFilters, action) => {
    const {type, payload} = action

    switch (type) {
        case CHANGE_DATA_RANGE: 
        // return(Object.assign({}, filters, {dateRange: payload.dateRange}))
            return {...filters, dateRange: payload.selected}

        case CHANGE_SELECTION:
            return {...filters, selected: payload.selected}

        case DELETE_ARTICLE:
            return {...filters, selected: filters.selected.filter(id => id !== payload.id)}
    }

    return filters
}