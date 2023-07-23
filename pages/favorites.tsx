import React, { PropsWithChildren, useReducer, useState } from 'react';
import { DetailedConditionsCardProps } from '@/components/utility/DetailedConditionsCard';
import { getConditions } from '@/helpers/functions';
import { RiverAPIReturn } from '@/helpers/API_Calls/riverData';
import DetailedConditionsCard from '@/components/utility/DetailedConditionsCard';
import PageSubHeader from '@/components/utility/PageSubHeader';
import { useSortable } from '@dnd-kit/sortable';
import Button from './EditButton';
import DragHandler from '@/assets/images/dragHandler.svg';
import TrashCan from '@/assets/images/trashCan.svg';
import { SurfConditionStatus } from 'report.types';
import {
  restrictToVerticalAxis,
  restrictToParentElement,
  restrictToWindowEdges,
} from '@dnd-kit/modifiers';
import {
  DndContext,
  DragEndEvent,
  useSensors,
  TouchSensor,
  useSensor,
  KeyboardSensor,
  MouseSensor,
  closestCenter,
  DragStartEvent,
  UniqueIdentifier,
} from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { set } from 'date-fns';

const mockRiverAxisData: RiverAPIReturn = {
  data: [
    {
      dateTime: '2023-05-22T08:00:00',
      value: 10,
    },
    {
      dateTime: '2023-05-22T09:00:00',
      value: 15,
    },
    {
      dateTime: '2023-05-22T10:00:00',
      value: 20,
    },
    {
      dateTime: '2023-05-22T11:00:00',
      value: 18,
    },
    {
      dateTime: '2023-05-22T12:00:00',
      value: 25,
    },
    {
      dateTime: '2023-05-22T13:00:00',
      value: 30,
    },
    {
      dateTime: '2023-05-22T14:00:00',
      value: 28,
    },
    {
      dateTime: '2023-05-22T15:00:00',
      value: 32,
    },
    {
      dateTime: '2023-05-22T16:00:00',
      value: 35,
    },
    {
      dateTime: '2023-05-22T17:00:00',
      value: 38,
    },
    {
      dateTime: '2023-05-22T18:00:00',
      value: 36,
    },
    {
      dateTime: '2023-05-22T19:00:00',
      value: 33,
    },
    {
      dateTime: '2023-05-22T20:00:00',
      value: 28,
    },
    {
      dateTime: '2023-05-22T21:00:00',
      value: 25,
    },
    {
      dateTime: '2023-05-22T22:00:00',
      value: 23,
    },
    {
      dateTime: '2023-05-22T23:00:00',
      value: 20,
    },
    {
      dateTime: '2023-05-23T00:00:00',
      value: 18,
    },
    {
      dateTime: '2023-05-23T01:00:00',
      value: 15,
    },
    {
      dateTime: '2023-05-23T02:00:00',
      value: 13,
    },
    {
      dateTime: '2023-05-23T03:00:00',
      value: 10,
    },
  ],
  error: false,
};

interface MockedRiverData extends DetailedConditionsCardProps {
  id: string;
}

const mockWaveData: MockedRiverData[] = [
  {
    id: '1',
    locationData: {
      wave: {
        name: 'Boulder Creek Wave',
        url: 'https://example.com/boulder-creek-wave',
      },
      state: 'Colorado',
      country: 'United States',
    },
    riverData: {
      weather: {
        temp: 75,
        wind: 7,
      },
      flow: {
        current: 950,
        threshold: {
          fair: 700,
          good: 900,
        },
        chartData: mockRiverAxisData,
      },
    },
  },
  {
    id: '2',
    locationData: {
      wave: {
        name: 'Glenwood Wave',
        url: 'https://example.com/glenwood-wave',
      },
      state: 'Colorado',
      country: 'United States',
    },
    riverData: {
      weather: {
        temp: 70,
        wind: 6,
      },
      flow: {
        current: 200,
        threshold: {
          fair: 800,
          good: 1000,
        },
        chartData: mockRiverAxisData,
      },
    },
  },
  {
    id: '3',
    locationData: {
      wave: {
        name: 'Animas River Wave',
        url: 'https://example.com/animas-river-wave',
      },
      state: 'Colorado',
      country: 'United States',
    },
    riverData: {
      weather: {
        temp: 68,
        wind: 5,
      },
      flow: {
        current: 1150,
        threshold: {
          fair: 800,
          good: 1000,
        },
        chartData: mockRiverAxisData,
      },
    },
  },
  {
    id: '4',
    locationData: {
      wave: {
        name: 'Clear Creek Whitewater Park',
        url: 'https://example.com/clear-creek-whitewater-park',
      },
      state: 'Colorado',
      country: 'United States',
    },
    riverData: {
      weather: {
        temp: 72,
        wind: 8,
      },
      flow: {
        current: 900,
        threshold: {
          fair: 700,
          good: 900,
        },
        chartData: mockRiverAxisData,
      },
    },
  },
  {
    id: '5',
    locationData: {
      wave: {
        name: 'South Platte River Wave',
        url: 'https://example.com/south-platte-river-wave',
      },
      state: 'Colorado',
      country: 'United States',
    },
    riverData: {
      weather: {
        temp: 70,
        wind: 6,
      },
      flow: {
        current: 1050,
        threshold: {
          fair: 800,
          good: 1000,
        },
        chartData: mockRiverAxisData,
      },
    },
  },
];

interface DraggableEditCardProps {
  waveName: string;
  state: string;
  country: string;
  isActive: boolean;
  id: string;
  dispatch: React.Dispatch<SortAction>;
}

const DraggableEditCard = ({
  waveName,
  state,
  country,
  isActive,
  id,
  dispatch,
}: DraggableEditCardProps) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: id });

  const stylez = {
    transform: CSS.Transform.toString(transform),
    transition,
  } as const;

  return (
    <li ref={setNodeRef} style={stylez} className={isActive ? 'z-40' : ''}>
      <div
        className={`flex items-center justify-between rounded-lg border-2 border-[#e5e7eb] bg-white p-3 font-semibold text-[#1481BA] ${
          isActive && ' shadow-xl  '
        }
        } `}
      >
        <div className='flex gap-4'>
          <button className='w-6' type='button' onClick={() => {}}>
            <TrashCan
              className='w-6 fill-red-600 '
              onClick={() =>
                dispatch({
                  type: 'DELETE',
                  payload: id,
                })
              }
            />
          </button>
          <div>
            <div className=' whitespace-nowrap text-lg '>{waveName}</div>
            <div className='flex gap-1 whitespace-nowrap text-sm text-black '>
              <div>{state} </div>
              <span className=' text-gray-600 '>• </span>
              <div>{country}</div>
            </div>
          </div>
        </div>
        <DragHandler
          className='w-6 fill-gray-400 '
          {...attributes}
          {...listeners}
        />
      </div>
    </li>
  );
};

interface SortAndDeleteFavotites {
  cards: MockedRiverData[];
  dispatch: React.Dispatch<SortAction>;
}

const SortAndDeleteFavotites = ({
  cards,
  dispatch,
}: SortAndDeleteFavotites) => {
  const touchSensor = useSensor(TouchSensor);
  const mouseSensor = useSensor(MouseSensor);
  const keyboardSensor = useSensor(KeyboardSensor, {
    coordinateGetter: sortableKeyboardCoordinates,
  });
  const sensors = useSensors(mouseSensor, touchSensor, keyboardSensor);
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (active.id && over?.id !== undefined) {
      if (active.id !== over.id) {
        dispatch({
          type: SortActionKind.SORT,
          payload: {
            activeId: active.id,
            overId: over.id,
          },
        });
      }
    }
    setActiveId(null);
  }

  function handleDragStart(event: DragStartEvent) {
    const { active } = event;
    setActiveId(active.id);
  }

  return (
    <DndContext
      onDragEnd={handleDragEnd}
      onDragStart={handleDragStart}
      sensors={sensors}
      collisionDetection={closestCenter}
      modifiers={[
        restrictToVerticalAxis,
        restrictToWindowEdges,
        restrictToParentElement,
      ]}
    >
      <SortableContext
        items={cards.map((item) => item.id)}
        strategy={verticalListSortingStrategy}
      >
        <ul className=' m-auto flex w-full max-w-4xl flex-col gap-6'>
          {cards.map((item) => (
            <DraggableEditCard
              key={item.id}
              waveName={item.locationData.wave.name}
              state={item.locationData.state}
              country={item.locationData.country}
              id={item.id}
              isActive={activeId === item.id}
              dispatch={dispatch}
            />
          ))}
        </ul>
      </SortableContext>
    </DndContext>
  );
};

const FavoriteWaveList = ({ cards }: { cards: MockedRiverData[] }) => {
  console.log(cards, 'redo');
  return (
    <ul className=' m-auto flex w-full max-w-4xl flex-col gap-6'>
      {cards.map((item) => (
        <DetailedConditionsCard
          key={item.id}
          locationData={item.locationData}
          riverData={item.riverData}
        />
      ))}
    </ul>
  );
};

enum SortActionKind {
  MY_ORDER = 'MY_ORDER',
  HIGHEST = 'HIGHEST',
  Rating = 'Rating',
  ALPHABETICAL = 'ALPHABETICAL',
  SORT = 'SORT',
}

// An interface for our actions

interface DeleteAction {
  type: 'DELETE';
  payload: string;
}

const surfConditions: { [key in SurfConditionStatus]: number } = {
  Good: 3,
  Fair: 2,
  Poor: 1,
};

const SortByBestRating = (flowItms: MockedRiverData[]) => {
  return [...flowItms].sort((a, b) => {
    const aCondition = getConditions(
      a.riverData.flow.current,
      a.riverData.flow.threshold.good,
      a.riverData.flow.threshold.fair
    ).condition;

    const bCondition = getConditions(
      b.riverData.flow.current,
      b.riverData.flow.threshold.good,
      b.riverData.flow.threshold.fair
    ).condition;

    return surfConditions[bCondition] - surfConditions[aCondition];
  });
};

const SortByPlace = (
  flowItms: MockedRiverData[],
  activeId: UniqueIdentifier,
  overId: UniqueIdentifier
) => {
  const oldIndex = flowItms.findIndex((item) => item.id === activeId);
  const newIndex = flowItms.findIndex((item) => item.id === overId);
  return arrayMove(flowItms, oldIndex, newIndex);
};

const SortByAlphabetical = (flowItms: MockedRiverData[]) => {
  return [...flowItms].sort((a, b) => {
    const aName = a.locationData.wave.name.toUpperCase();
    const bName = b.locationData.wave.name.toUpperCase();
    if (aName < bName) {
      return -1;
    }
    if (aName > bName) {
      return 1;
    }
    return 0;
  });
};

const SortByHighestCurrentFlow = (flowItms: MockedRiverData[]) => {
  return [...flowItms].sort((a, b) => {
    return b.riverData.flow.current - a.riverData.flow.current;
  });
};

type SortAction =
  | { type: SortActionKind.MY_ORDER }
  | { type: SortActionKind.HIGHEST }
  | { type: SortActionKind.Rating }
  | { type: SortActionKind.ALPHABETICAL }
  | {
      type: SortActionKind.SORT;
      payload: { activeId: UniqueIdentifier; overId: UniqueIdentifier };
    }
  | { type: 'DELETE'; payload: string };

const reducer = (state: MockedRiverData[], action: SortAction) => {
  switch (action.type) {
    case SortActionKind.MY_ORDER:
      return mockWaveData;
    case SortActionKind.HIGHEST:
      return SortByHighestCurrentFlow(state);
    case SortActionKind.Rating:
      return SortByBestRating(state);
    case SortActionKind.ALPHABETICAL:
      return SortByAlphabetical(state);
    case SortActionKind.SORT:
      return SortByPlace(state, action.payload.activeId, action.payload.overId);
    case 'DELETE':
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};

const Favorites = () => {
  const [state, dispatch] = useReducer(reducer, mockWaveData);
  const [editable, setEditable] = useState<boolean>(false);
  console.log(state);

  const handleEdit = () => {
    setEditable((prevState) => !prevState);
  };

  type SortOption = 'My Order' | 'Highest Flows' | 'Rating' | 'Alphabetical';

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    console.log('reached', selectedValue);
    switch (selectedValue) {
      case 'My Order':
        dispatch({ type: SortActionKind.MY_ORDER });
        break;
      case 'Highest Flows':
        console.log('reached');
        dispatch({ type: SortActionKind.HIGHEST });
        break;
      case 'Rating':
        dispatch({ type: SortActionKind.Rating });
        break;
      case 'Alphabetical':
        dispatch({ type: SortActionKind.ALPHABETICAL });
        break;
      default:
        break;
    }
  };

  return (
    <main className='mb-8 px-4  md:px-6 lg:mb-10 '>
      <div className='mx-auto my-6 flex max-w-4xl items-center justify-between '>
        <h1 className='relative text-3xl font-semibold capitalize '>
          Favorites
        </h1>
        {editable ? (
          <Button buttonType='controls' handleClick={handleEdit} type='button'>
            Done
          </Button>
        ) : (
          <Button buttonType='controls' handleClick={handleEdit} type='button'>
            Edit
          </Button>
        )}
      </div>
      {!editable && (
        <div className='mx-auto my-6 flex max-w-4xl items-center gap-2  '>
          <span>Sort By:</span>
          <div className='flex-1 rounded border border-gray-400 bg-white px-2 '>
            <select
              className='w-full py-2 focus:outline-none'
              onChange={handleSortChange}
            >
              <option>My Order</option>
              <option>Highest Flows</option>
              <option>Rating</option>
              <option>Alphabetical</option>
            </select>
          </div>
        </div>
      )}
      {editable ? (
        <SortAndDeleteFavotites cards={state} dispatch={dispatch} />
      ) : (
        <FavoriteWaveList cards={state} />
      )}
    </main>
  );
};

export default Favorites;
