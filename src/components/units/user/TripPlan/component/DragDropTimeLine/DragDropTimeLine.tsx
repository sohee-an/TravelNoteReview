import React, { useState } from 'react';
import { Button, Card, CardContent } from '@material-ui/core';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { DropResult } from 'react-beautiful-dnd';

import * as Styled from './styles';
interface CardItem {
  id: string;
  text: string;
  image: string;
}

interface CardList {
  id: string;
  item: CardItem[];
}

const initialCards = {
  waitCard: {
    id: '1',

    color: 'gray',
    items: [
      {
        id: '1',
        img: 'https://tse2.mm.bing.net/th?id=OIP.gqeBTMZ_xbDGMohh_GS49wHaEx&pid=Api&P=0&h=180',
        location: '서울특별시 강남1',
        desc: '강남에서 놀기',
        startTime: '2023-09-26',
        endTime: '2023-09-26',
      },
      {
        id: '2',
        img: 'https://tse2.mm.bing.net/th?id=OIP.gqeBTMZ_xbDGMohh_GS49wHaEx&pid=Api&P=0&h=180',
        location: '서울특별시 강남2',
        desc: '강남에서 놀기',
        startTime: '2023-09-26',
        endTime: '2023-09-26',
      },
    ],
  },
  contents: {
    id: '2',
    title: '1일차',
    items: [
      {
        id: '3',
        img: 'https://tse2.mm.bing.net/th?id=OIP.gqeBTMZ_xbDGMohh_GS49wHaEx&pid=Api&P=0&h=180',
        location: '서울특별시 강남3',
        desc: '강남에서 놀기',
        startTime: '2023-09-26',
        endTime: '2023-09-26',
      },
      {
        id: '4',
        img: 'https://tse2.mm.bing.net/th?id=OIP.gqeBTMZ_xbDGMohh_GS49wHaEx&pid=Api&P=0&h=180',
        location: '서울특별시 강남3',
        desc: '강남에서 놀기',
        startTime: '2023-09-26',
        endTime: '2023-09-26',
      },
    ],
  },
};

export default function DraggableCardList() {
  const [cards, setCards] = useState<any>(initialCards);

  const handleDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!source || !destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      const listId = source.droppableId;
      const newList = { ...cards[listId] };
      const movedItem = newList.items.splice(source.index, 1)[0];
      newList.items.splice(destination.index, 0, movedItem);

      setCards((prevCards: any) => ({
        ...prevCards,
        [listId]: newList,
      }));
    } else {
      // 다른 목록으로 아이템을 이동하는 경우
      const sourceListId = source.droppableId;
      const destinationListId = destination.droppableId;

      const sourceList = { ...cards[sourceListId] };
      const destinationList = { ...cards[destinationListId] };

      const movedItem = sourceList.items.splice(source.index, 1)[0];
      destinationList.items.splice(destination.index, 0, movedItem);

      setCards((prevCards: any) => ({
        ...prevCards,
        [sourceListId]: sourceList,
        [destinationListId]: destinationList,
      }));
    }
  };
  // 여행 추가 handleClick
  const handleClick = () => {};

  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
        {Object.keys(cards).map((listId, index) => {
          const list = cards[listId];

          return (
            <Droppable droppableId={listId} key={listId} direction="horizontal">
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="task-list"
                  style={{
                    display: 'flex',
                    overflowX: 'auto',
                    borderRadius: '5px',
                    padding: '1rem',
                    background:
                      listId === 'waitCard' ? 'whiteSmoke' : 'transparent',
                  }}
                >
                  <div
                    style={{
                      display: `${index === 0 ? 'flex' : ''} `,
                    }}
                  >
                    {index !== 0 && (
                      <Styled.DayStyle>{list.title}</Styled.DayStyle>
                    )}
                    <div style={{ display: 'flex' }}>
                      {list.items.map((card: any, index: number) => (
                        <Draggable
                          key={card.id}
                          draggableId={card.id}
                          index={index}
                        >
                          {(provided) => (
                            <div
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              ref={provided.innerRef}
                              className="task-item"
                            >
                              <div
                                style={{
                                  display: 'flex',
                                  width: '200px',
                                  height: '200px',
                                }}
                              >
                                <Card>
                                  <CardMedia
                                    component="img"
                                    height="100"
                                    image={card.img}
                                    alt="Paella dish"
                                  />
                                  <CardContent>
                                    <Typography
                                      variant="body2"
                                      color="text.secondary"
                                    >
                                      <Styled.TripCardContentsWrapper>
                                        <h6>{card.location}</h6>
                                        <span>{card.startTime}</span> ~
                                        <span>{card.endTime}</span>
                                        <h6>{card.desc}</h6>
                                      </Styled.TripCardContentsWrapper>
                                    </Typography>
                                  </CardContent>
                                </Card>
                              </div>
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {index !== 0 && (
                        <Button onClick={handleClick}>+ 추가</Button>
                      )}
                    </div>
                  </div>
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          );
        })}
      </DragDropContext>
    </div>
  );
}
