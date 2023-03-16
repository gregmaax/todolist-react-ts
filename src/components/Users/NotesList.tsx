import { Notes } from '../../App';
import { Card } from '../UI/Card';

type NotesProps = {
	notes: Notes[];
};

export function NotesList(props: NotesProps) {
	return (
		<Card>
			<div>
				<h1 className="block text-purple-800 text-sm underline font-bold mb-2">
					Mes notes
				</h1>
			</div>

			<ul>
				{props.notes.map((u) => (
					<div
						key={u.id}
						className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
					>
						<h5 className="mb-2 text-xl font-bold tracking-tight text-purple-800 dark:text-white">
							{u.titre}
						</h5>
						<p className="font-normal text-gray-700 dark:text-gray-400">
							{u.note}
						</p>
					</div>
				))}
			</ul>
		</Card>
	);
}
