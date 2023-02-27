import { FC } from 'react';
import './styles.css';

type Props = { tasting_notes: string[]; regionGradient: string };
export const TastingNotes: FC<Props> = ({ tasting_notes, regionGradient }) => {
	return (
		<div
			className='tasting-notes'
			style={{ background: regionGradient || 'blue' }}>
			{tasting_notes.map((item, index) => (
				<div key={index} className='tasting-notes-label'>
					{item}
				</div>
			))}
		</div>
	);
};
