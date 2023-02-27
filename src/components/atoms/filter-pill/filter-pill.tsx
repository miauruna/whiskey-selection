import React, { FC } from 'react';
import './styles.css';

export type FilterPillProps = {
	label: string;
	isActive: boolean;
	onToggleFilter?: () => void;
};
const FilterPill: FC<FilterPillProps> = ({
	label,
	isActive,
	onToggleFilter,
}) => {
	return (
		<div
			onClick={onToggleFilter}
			className={`filter-pill-init ${isActive && 'filter-pill-active'}`}>
			{label}
		</div>
	);
};

export default FilterPill;
