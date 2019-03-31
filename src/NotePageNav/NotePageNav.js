import React from 'react'

export default function NotePageNav(props){
    return(
        <div className='notePageNav'>
            <button
                tag='button'
                role='link'
                onClick={() => props.history.goBack()}
                className='NotePageNav__back-button'
            >
            <br/>
            Back
            </button>
            {props.folder && (
                <h3 className='NotePageNav__folder-name'>
                    {props.folder.name}
                </h3>
            )}
        </div>
    )
}

NotePageNav.defaultProps = {
    history: {
        goBack: () => {}
    }
}