import { useState } from 'react';
import { AddNote } from './components/Users/AddNote';
import { NotesList } from './components/Users/NotesList';

export type Notes = {
	id: string;
	titre: string;
	note: string;
};
function App() {
	const [notesList, setNotesList] = useState<Notes[]>([]);

	const addNotesHandler = (uTitre: string, uNote: string) => {
		setNotesList((prevNotesList): Notes[] => {
			return [
				...prevNotesList,
				{ titre: uTitre, note: uNote, id: Math.random().toString() },
			];
		});
	};

	return (
		<div>
			<AddNote onAddNotes={addNotesHandler} />
			<NotesList notes={notesList} />
		</div>
	);
}

export default App;
