import { NoteAPI } from 'api/note-api';
import { TextCard } from 'components/TextCard/TextCard';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteNote } from 'store/notes/notes-slice';
import s from './style.module.css'

export function NoteList({ noteList }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const deleteNote_ = async (note) => {
        if (window.confirm("Are you sure you want to delete this note?")) {
          NoteAPI.deleteById(note.id);
          dispatch(deleteNote(note));
          navigate("/");
        }
      }

    return (
        <div className={`row justify-content-center`}>
            {
                noteList.map((note) =>
                    <div className={s.card_container}>
                        <TextCard key={note.id}
                            title={note.title}
                            content={note.content}
                            subtitle={note.created_at}
                            onClick={() => navigate("/note/" + note.id)}
                            onClickTrash={() => deleteNote_(note)}
                        />
                    </div>

                )
            }
        </div>
    );
};