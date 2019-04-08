import React, { Component } from 'react'
import NotefulForm from '../NotefulForm/NotefulForm'
import NoteContext from '../NoteContext'
import ValidateNote from '../ValidateNote/ValidateNote'
import './AddNote.css'

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
    console.log('fieldlength ', fieldValue.length)
    if(fieldValue.length === 0) {
      fieldErrors.name = 'Name is required';
      hasError = true;
    }
    console.log('mess ', fieldErrors.name)
    this.setState({
      validationMessages: fieldErrors,
      nameValid: !hasError
    }, this.formValid );
}

  formValid(){
    this.setState({
      formValid: this.state.nameValid
    });
  }
  updateName(name){
    this.setState({name}, ()=>{this.validateName(name)});
  }
  handleSubmit = e => {
    e.preventDefault()
    const note = {
      name: e.target['note-name'].value,
      content: e.target['note-content'].value,
      folderId: e.target['note-folder-id'].value,
      modified: new Date(),
    }
    //this.setState({name}, () => {this.validateName(newNote.name)})
    fetch('http://localhost:9090/notes/', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(note)
    })
    .then(res => {
      console.log('note res', res)
      if(!res.ok)
        return res.json().then(e => Promise.reject(e))
      return res.json()
    })
    .then(note => {
      console.log('note context', this.context)
      this.context.addNote(note)
      this.props.history.push(`./notes/${note.id}`)
    })
    .catch(error => {
      console.log('add note ', {error})
    })
  }

  render() {
    const { folders=[] } = this.context
    console.log('this.state.name ', this.state.name)
    console.log('this.state.validationMessages.name ', this.state.validationMessages.name)
    return (
      <section className='AddNote'>
        <h2>Create a note</h2>
        <NotefulForm onSubmit={this.handleSubmit}>
          <div className='field'>
            <label htmlFor='note-name-input'>
              Name
            </label>
            <input type='text' id='note-name-input' name='note-name' onChange={e => this.updateName(e.target.value)}/>
            <ValidateNote className='validationError' hasError={!this.state.name} message={this.state.validationMessages.name}></ValidateNote>
          </div>
          <div className='field'>
            <label htmlFor='note-content-input'>
              Content
            </label>
            <textarea id='note-content-input' name='note-content' />
          </div>
          <div className='field'>
            <label htmlFor='note-folder-select'>
              Folder
            </label>
            <select id='note-folder-select' name='note-folder-id'> 
              <option value={null}>...</option>
              {folders.map(folder =>
                <option key={folder.id} value={folder.id}>
                  {folder.name}
                </option>
              )}
            </select>
          </div>
          <div className='buttons'>
            <button type='submit' disabled={!this.state.formValid}>
              Add new note
            </button>
          </div>
        </NotefulForm>
      </section>
    )
  }
}
