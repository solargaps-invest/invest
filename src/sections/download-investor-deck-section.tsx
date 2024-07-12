import { styles } from '../constants/style-constants';
import { ChangeEvent, FormEvent, useState, InputHTMLAttributes } from 'react';
import { SectionHeader } from '../components/section-header/section-header.component';
import { downloadInvestorDeckSection } from '../constants/content-constants';

// TODO: form add validation

type Contact = {
	[key: string]: string; // Add index signature
};
export const DownloadInvestorDeckSection = () => {
	const { header, inputPlaceholder, id, policy } = downloadInvestorDeckSection;

	// const [submit, submitting] = useFormspark({
	// 	formId: FORMSPARK_FORM_ID,
	// });

	const [contacts, setContacts] = useState<Contact>({ name: '', email: '', phone: '' });

	const onSubmit = async (e: FormEvent) => {
		e.preventDefault();
		// await submit({ contacts });
	};

	const onChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
		setContacts({ ...contacts, [e.target.name]: e.target.value });
	};

	return (
		<section id={id} className="bg-background-yellow">
			<div className={`${styles.sectionLayout} flex flex-col items-center`}>
				<SectionHeader header={header} headerStyles={`${styles.h3PaddingSm} text-background-primary`} />
				<form
					onSubmit={onSubmit}
					className="bg-background-primary bg-custom-radial flex max-w-[40.6rem] flex-col gap-6 rounded-2xl border p-12 xl:gap-9"
				>
					<input type="hidden" name="_feedback.dark" value="https://your-website.com/thanks" />
					<div className="flex flex-col flex-wrap justify-between gap-6">
						{inputPlaceholder.map(input => (
							<TextFieldInput
								key={input.name}
								id={input.name}
								name={input.name}
								placeholder={input.value}
								required
								onChange={onChange}
								type={input.type}
								value={contacts[input.name] as keyof Contact}
							/>
						))}
					</div>
					<button type="submit" className={`${styles.button} w-full max-w-none justify-center`}>
						SEND
					</button>
					<p className="text-brand-grey-tertiary text-xxs">{policy}</p>
				</form>
			</div>
		</section>
	);
};

type TextFieldInputProps = InputHTMLAttributes<HTMLInputElement> & {
	id: string;
};

const TextFieldInput = ({ id, ...rest }: TextFieldInputProps) => {
	return (
		<div className="max-h-72 items-stretch">
			<input id={id} className={`${styles.input}`} {...rest} />
		</div>
	);
};
