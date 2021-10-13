import React from 'react';

import { CardContainer, Thumbnail, CardBody } from './styles';

export function Card({
	thumbnailImage,
	CardTitle,
	CardText,
	PublishedDate,
	clickAction,
}) {
	return (
		<CardContainer>
			<Thumbnail src={thumbnailImage} />
			<CardBody>
				<h1>{CardTitle}</h1>
				<p>{CardText}</p>
				<p>{PublishedDate}</p>
				<button onClick={clickAction}>Detalhes</button>
			</CardBody>
		</CardContainer>
	);
}
