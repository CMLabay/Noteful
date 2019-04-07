import React from 'react'

const NoteContext = React.createContext({
    deleteNote: () => {},
    AddNote: () => {},
    AddFolder: () => {},
    folders: [],
    notes:[],

})

export default NoteContext