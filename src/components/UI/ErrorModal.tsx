import { Fragment } from 'react';
import Button from './Button';
import { Card } from './Card';

type ErrorModalDataProps = {
	title: string | null;
	message: string | null;
	onConfirm: () => void;
};

export function ErrorModal(props: ErrorModalDataProps) {
	return (
		<Fragment>
			<div
				className="backdrop: fixed to-backdrop-color z-10 h-max w-full top-0 left-0"
				onClick={props.onConfirm}
			></div>
			<div className="fixed w-5/6 z-100 l-1/10 overflow-hidden">
				<Card>
					<header>
						<h2>{props.title}</h2>
					</header>
					<div>
						<p>{props.message}</p>
					</div>
					<footer>
						<Button
							className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
							onClick={props.onConfirm}
						>
							Fermer
						</Button>
					</footer>
				</Card>
			</div>
		</Fragment>
	);
}
