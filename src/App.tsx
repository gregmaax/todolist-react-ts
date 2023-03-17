import React, { useState } from 'react';
import { Card } from './components/UI/Card';
import { AddUser } from './components/Users/AddUser';
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
			<AddUser onAddNotes={addNotesHandler} />
			<NotesList notes={notesList} />
		</div>
	);
}

export default App;
