import React from 'react';
import { ChangeEvent } from 'react';
import { Card } from '../UI/Card';

export function AddUser() {
	function addNoteHandler(event: ChangeEvent<HTMLFormElement>) {
		event.preventDefault();
	}
	return (
		<Card>
			<form
				onSubmit={addNoteHandler}
				className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
			>
				<div className="mb-4">
					<label
						htmlFor="titre"
						className="block text-gray-700 text-sm font-bold mb-2"
					>
						Titre de la note
					</label>
					<input
						id="titre"
						type="text"
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					/>
				</div>
				<div className="mb-4">
					<label
						htmlFor="note"
						className="block text-gray-700 text-sm font-bold mb-2"
					>
						Contenu
					</label>
					<textarea
						id="note"
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					/>
				</div>
				<div className="text-right">
					<button
						type="submit"
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					>
						Valider
					</button>
				</div>
			</form>
		</Card>
	);
}
