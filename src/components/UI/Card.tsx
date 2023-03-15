import React from 'react';

export type ChildrenProps = {
	children: React.ReactNode;
};
export function Card(props: ChildrenProps) {
	return (
		<div className="max-w-5xl flex p-6 m-auto mt-5 justify-start bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
			{props.children}
		</div>
	);
}
