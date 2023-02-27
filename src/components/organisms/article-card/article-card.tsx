import React, { FC } from 'react';
import { Article } from '../../../pages/home/home-loader';
import './styles.css';

type Props = {
	article: Article;
};

const ArticleCard: FC<Props> = ({ article }) => {
	return (
		<div className='article-wrapper'>
			<img
				src={`assets/${article.img}`}
				alt={article.img}
				className='article-image'
			/>
			<div className='article-text-group'>
				<h1 className='article-title'>{article.title}</h1>
				<h2 className='article-teaser'>{article.teaser}</h2>
			</div>
		</div>
	);
};

export default ArticleCard;
