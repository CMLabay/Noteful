import React from 'react'

const NoteContext = React.createContext({
    deleteNote: () => {},
    AddNote: () => {},
    addFolder: () => {console.log('we ;made it')},
    folders: [],
    notes:[],

})

export default NoteContext