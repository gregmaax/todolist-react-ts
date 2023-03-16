import { ChangeEvent, useState } from 'react';
import Button from '../UI/Button';
import { Card } from '../UI/Card';

type AddNoteProp = {
	onAddNotes: (uTitre: string, uNote: string) => void;
};

export function AddUser(props: AddNoteProp) {
	const [titre, setTitre] = useState('');
	const [note, setNote] = useState('');

	function addNoteHandler(event: ChangeEvent<HTMLFormElement>) {
		event.preventDefault();

		if (titre.trim().length === 0 || note.trim().length === 0) {
			return;
		}

		props.onAddNotes(titre, note);
		setTitre('');
		setNote('');
	}

	function titreChangeHandler(event: ChangeEvent<HTMLInputElement>) {
		setTitre(event.target.value);
	}

	function noteChangeHandler(event: ChangeEvent<HTMLTextAreaElement>) {
		setNote(event.target.value);
	}

	return (
		<Card>
			<form
				onSubmit={addNoteHandler}
				className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md"
			>
				<div className="mb-4">
					<label
						htmlFor="titre"
						className="block text-gray-700 text-sm font-bold underline mb-2"
					>
						Titre de la note
					</label>
					<input
						id="titre"
						type="text"
						onChange={titreChangeHandler}
						value={titre}
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					/>
				</div>
				<div className="mb-4">
					<label
						htmlFor="note"
						className="block text-gray-700 text-sm underline font-bold mb-2"
					>
						Contenu de la note
					</label>
					<textarea
						id="note"
						onChange={noteChangeHandler}
						value={note}
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					/>
				</div>
				<div className="text-right">
					<Button
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						type="submit"
					>
						Enregistrer
					</Button>
				</div>
			</form>
		</Card>
	);
}
