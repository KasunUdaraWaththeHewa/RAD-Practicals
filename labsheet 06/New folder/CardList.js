import React from 'react';

const cards = [
  { title: 'Card 1', content: 'This is the content of Card 1' },
  { title: 'Card 2', content: 'This is the content of Card 2' },
  { title: 'Card 3', content: 'This is the content of Card 3' },
];

const Card = ({ title, content }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

const CardList = () => {
  return (
    <div>
      {cards.map((card, index) => (
        <Card key={index} title={card.title} content={card.content} />
      ))}
    </div>
  );
};

export default CardList;
