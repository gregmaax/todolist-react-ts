import { Notes } from '../../App';
import { Card } from '../UI/Card';

type NotesProps = {
	notes: Notes[];
};

export function NotesList(props: NotesProps) {
	return (
		<Card>
			<div>
				<h1>Mes notes</h1>
			</div>
			<div>
				{props.notes.map((u) => (
					<div key={u.id}>
						<h2>{u.titre}</h2>
						<p>{u.note}</p>
					</div>
				))}
			</div>
		</Card>
	);
}
