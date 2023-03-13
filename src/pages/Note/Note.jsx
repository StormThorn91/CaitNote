import { NoteAPI } from "api/note-api";
import { NoteForm } from "components/NoteForm/NoteForm";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteNote, updateNote } from "store/notes/notes-slice";

export function Note(props) {
  const { noteId } = useParams();
  const note = useSelector((store) => store.noteSlice.noteList.find(note => note.id === noteId));

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [isEditable, setIsEditable] = useState(false);

  const submit = async (formValues) => {
    const updatedNote = await NoteAPI.updateById(note.id, formValues);
    dispatch(updateNote(updatedNote));
    setIsEditable(false);
  }

  const deleteNote_ = async () => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      NoteAPI.deleteById(note.id);
      dispatch(deleteNote(note));
      navigate("/");
    }
  }

  return <>{note && (
    <NoteForm
      isEditable={isEditable}
      note={note}
      title={isEditable ? "Edit Note" : note.title}
      onClickEdit={() => setIsEditable(!isEditable)}
      onClickDelete={deleteNote_}
      onSubmit={isEditable && submit}
    />)
  }
  </>;
}
