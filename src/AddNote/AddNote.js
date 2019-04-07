import React, { Component } from 'react'
import NotefulForm from '../NotefulForm/NotefulForm'
import NoteContext from '../NoteContext'
import ValidateNote from '../ValidateNote/ValidateNote'

export default class AddNote extends Component {
  constructor(props){
    super(props);
    this.state = {
      nameValid: false,
      name: '',
      validationMessages: {
        name: '',
      }
    }
  }
  static defaultProps = {
    history: {
      push: () => { }
    },
  }
  static contextType = NoteContext;

  validateName(fieldValue) {
    const fieldErrors = {...this.state.validationMessages};
    let hasError = false;

    fieldValue = fieldValue.trim();
    if(fieldValue.length === 0) {
      fieldErrors.name = 'Name is required';
      hasError = true;
    }

    this.setState({
      validationMessages: fieldErrors,
      nameValid: !hasError
    }, this.formValid );
}

  handleSubmit = e => {
    e.preventDefault()
    const newNote = {
      name: e.target['note-name'].value,
      content: e.target['note-content'].value,
      folderId: e.target['note-folder-id'].value,
      modified: new Date(),
    }
    //this.setState({name}, () => {this.validateName(newNote.name)})
  }
  render() {
    console.log('inside of Addnote ')
    const { folders=[] } = this.context
    return (
      <section className='AddNote'>
        <h2>Create a note</h2>
        <NotefulForm>
          <div className='field'>
            <label htmlFor='note-name-input'>
              Name
            </label>
            <input type='text' id='note-name-input' />
            <ValidateNote hasError={!this.state.name} message={this.state.validationMessages.name}></ValidateNote>
          </div>
          <div className='field'>
            <label htmlFor='note-content-input'>
              Content
            </label>
            <textarea id='note-content-input' />
          </div>
          <div className='field'>
            <label htmlFor='note-folder-select'>
              Folder
            </label>
            <select id='note-folder-select'>
              <option value={null}>...</option>
              {folders.map(folder =>
                <option key={folder.id} value={folder.id}>
                  {folder.name}
                </option>
              )}
            </select>
          </div>
          <div className='buttons'>
            <button type='submit'>
              Add new note
            </button>
          </div>
        </NotefulForm>
      </section>
    )
  }
}
