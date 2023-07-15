import React, { PropsWithChildren, useState } from "react";
import { DetailedConditionsCardProps } from "@/components/utility/DetailedConditionsCard";
import { RiverAPIReturn } from "@/helpers/API_Calls/riverData";
import DetailedConditionsCard from "@/components/utility/DetailedConditionsCard";
import { useSortable } from "@dnd-kit/sortable";
import {
  restrictToVerticalAxis,
  restrictToWindowEdges,
} from "@dnd-kit/modifiers";
import {
  DndContext,
  DragEndEvent,
  useSensors,
  PointerSensor,
  TouchSensor,
  useSensor,
  KeyboardSensor,
  MouseSensor,
  closestCenter,
  DragOverlay,
  DragStartEvent,
  UniqueIdentifier,
} from "@dnd-kit/core";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { CSS } from "@dnd-kit/utilities";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

const mockRiverAxisData: RiverAPIReturn = {
  data: [
    {
      dateTime: "2023-05-22T08:00:00",
      value: 10,
    },
    {
      dateTime: "2023-05-22T09:00:00",
      value: 15,
    },
    {
      dateTime: "2023-05-22T10:00:00",
      value: 20,
    },
    {
      dateTime: "2023-05-22T11:00:00",
      value: 18,
    },
    {
      dateTime: "2023-05-22T12:00:00",
      value: 25,
    },
    {
      dateTime: "2023-05-22T13:00:00",
      value: 30,
    },
    {
      dateTime: "2023-05-22T14:00:00",
      value: 28,
    },
    {
      dateTime: "2023-05-22T15:00:00",
      value: 32,
    },
    {
      dateTime: "2023-05-22T16:00:00",
      value: 35,
    },
    {
      dateTime: "2023-05-22T17:00:00",
      value: 38,
    },
    {
      dateTime: "2023-05-22T18:00:00",
      value: 36,
    },
    {
      dateTime: "2023-05-22T19:00:00",
      value: 33,
    },
    {
      dateTime: "2023-05-22T20:00:00",
      value: 28,
    },
    {
      dateTime: "2023-05-22T21:00:00",
      value: 25,
    },
    {
      dateTime: "2023-05-22T22:00:00",
      value: 23,
    },
    {
      dateTime: "2023-05-22T23:00:00",
      value: 20,
    },
    {
      dateTime: "2023-05-23T00:00:00",
      value: 18,
    },
    {
      dateTime: "2023-05-23T01:00:00",
      value: 15,
    },
    {
      dateTime: "2023-05-23T02:00:00",
      value: 13,
    },
    {
      dateTime: "2023-05-23T03:00:00",
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
    id: "1",
    locationData: {
      wave: {
        name: "Boulder Creek Wave",
        url: "https://example.com/boulder-creek-wave",
      },
      state: "Colorado",
      country: "United States",
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
    id: "2",
    locationData: {
      wave: {
        name: "Glenwood Wave",
        url: "https://example.com/glenwood-wave",
      },
      state: "Colorado",
      country: "United States",
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
    id: "3",
    locationData: {
      wave: {
        name: "Animas River Wave",
        url: "https://example.com/animas-river-wave",
      },
      state: "Colorado",
      country: "United States",
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
    id: "4",
    locationData: {
      wave: {
        name: "Clear Creek Whitewater Park",
        url: "https://example.com/clear-creek-whitewater-park",
      },
      state: "Colorado",
      country: "United States",
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
    id: "5",
    locationData: {
      wave: {
        name: "South Platte River Wave",
        url: "https://example.com/south-platte-river-wave",
      },
      state: "Colorado",
      country: "United States",
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

const DraggableWrapper = ({
  children,
  id,
}: PropsWithChildren<{ id: string }>) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: id });

  const stylez = {
    transform: CSS.Transform.toString(transform),
    transition,
  } as const;

  return (
    <li ref={setNodeRef} style={stylez} {...attributes} {...listeners}>
      {children}
    </li>
  );
};

const Favorites = () => {
  const [mockedCards, setMockedCards] =
    useState<MockedRiverData[]>(mockWaveData);
  const touchSensor = useSensor(TouchSensor);
  const mouseSensor = useSensor(MouseSensor);
  const keyboardSensor = useSensor(KeyboardSensor, {
    coordinateGetter: sortableKeyboardCoordinates,
  });
  const [activeId, setActiveId] = useState<MockedRiverData | null>(null);

  const sensors = useSensors(mouseSensor, touchSensor, keyboardSensor);

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    console.log(active.id, over?.id);
    if (active.id && over?.id !== undefined) {
      if (active.id !== over.id) {
        setMockedCards((items) => {
          const oldIndex = items.findIndex((item) => item.id === active.id);

          const newIndex = items.findIndex((item) => item.id === over.id);
          return arrayMove(items, oldIndex, newIndex);
        });
      }
    }
  }

  function handleDragStart(event: DragStartEvent) {
    const { active } = event;
    const activeCard = mockedCards.find((item) => item.id === active.id);
    if (activeCard) {
      setActiveId(activeCard);
    }
  }

  return (
    <main className="mb-8 px-4  md:px-6 lg:mb-10 ">
      <div className="mx-auto my-6 flex max-w-4xl items-center justify-between ">
        <h1 className="relative text-3xl font-semibold capitalize ">
          Favorites
        </h1>
        <button className="ml-2 self-center rounded-md border border-blue-500 py-1 px-2 text-sm font-semibold text-blue-500 ">
          Edit
        </button>
      </div>
      <div className="mx-auto my-6 flex max-w-4xl items-center gap-2  ">
        <span>Sort By:</span>
        <div className="flex-1 rounded border border-gray-400 bg-white px-2 ">
          <select className="w-full py-2 ">
            <option>My Order</option>
            <option>Highest Flows</option>
            <option>Rating</option>
            <option>Alphabetical</option>
          </select>
        </div>
      </div>
      <section className=" mx-auto max-w-4xl ">
        <DndContext
          onDragEnd={handleDragEnd}
          onDragStart={handleDragStart}
          sensors={sensors}
          collisionDetection={closestCenter}
          modifiers={[restrictToVerticalAxis, restrictToWindowEdges]}
        >
          <SortableContext
            items={mockedCards.map((item) => item.id)}
            strategy={verticalListSortingStrategy}
          >
            <ul className=" m-auto flex w-full max-w-4xl flex-col gap-6">
              {mockedCards.map((item, index) => (
                <DraggableWrapper key={item.id} id={item.id}>
                  <DetailedConditionsCard
                    locationData={item.locationData}
                    riverData={item.riverData}
                  />
                </DraggableWrapper>
              ))}
            </ul>
          </SortableContext>
          {/* <DragOverlay>
            {activeId ? (
              <DetailedConditionsCard
                locationData={activeId.locationData}
                riverData={activeId.riverData}
              />
            ) : null}
          </DragOverlay> */}
        </DndContext>
      </section>
    </main>
  );
};

export default Favorites;
