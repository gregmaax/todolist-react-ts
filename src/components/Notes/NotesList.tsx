import { MouseEventHandler, useState } from 'react';
import { textChangeRangeNewSpan } from 'typescript';
import { Notes } from '../../App';
import { Card } from '../UI/Card';

type NotesProps = {
	notes: Notes[];
};

export function NotesList(props: NotesProps) {
	const onDeleteNote = () => {
		alert('Note supprimée');
	};

	const displayNotes =
		props.notes.length > 0 &&
		props.notes.map((u) => (
			<div
				key={u.id}
				className="max-w-sm p-6 mt-1 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 flex items-center"
			>
				<div className="border-r-black mr-10 w-60">
					<h5 className="mb-2 text-xl font-bold tracking-tight text-purple-800 dark:text-white">
						{u.titre}
					</h5>
					<p className="font-normal text-gray-700 dark:text-gray-400">
						{u.note}
					</p>
				</div>
				<div className="w-10 right-0 text-center">
					<button
						className="bg-red-600 text-slate-200 rounded-xl p-1 top-1/2"
						onClick={() => onDeleteNote()}
					>
						DEL
					</button>
				</div>
			</div>
		));

	return (
		<Card>
			<div>
				<h1 className="block text-purple-800 text-sm underline font-bold mb-2">
					Mes notes
				</h1>
			</div>

			<ul>{displayNotes}</ul>
		</Card>
	);
}
