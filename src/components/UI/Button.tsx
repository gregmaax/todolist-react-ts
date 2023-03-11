import { ChildrenProps } from './Card';

export type ButtonProps = React.DetailedHTMLProps<
	React.ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
>;

export function Button(buttonProps: ButtonProps) {
	return (
		<button
			className={buttonProps.className}
			type={buttonProps.type || 'button'}
			onClick={buttonProps?.onClick}
		>
			{buttonProps.children}
		</button>
	);
}

export default Button;
