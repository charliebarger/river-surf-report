import React, { PropsWithChildren, useState } from "react";
import { DetailedConditionsCardProps } from "@/components/utility/DetailedConditionsCard";
import { RiverAPIReturn } from "@/helpers/API_Calls/riverData";
import DetailedConditionsCard from "@/components/utility/DetailedConditionsCard";
import { useSortable } from "@dnd-kit/sortable";
import { DndContext, DragEndEvent, useSensors } from "@dnd-kit/core";
import { TouchSensor, MouseSensor, useSensor } from "@dnd-kit/core";
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
    <div ref={setNodeRef} style={stylez} {...attributes} {...listeners}>
      {children}
    </div>
  );
};

interface Index {
  index: string;
}

const Favorites = () => {
  const [mockedCards, setMockedCards] =
    useState<MockedRiverData[]>(mockWaveData);
  const touchSensor = useSensor(TouchSensor);
  const mouseSensor = useSensor(MouseSensor);

  const sensors = useSensors(mouseSensor, touchSensor);

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

  return (
    <main className="mb-8 px-4  md:px-6 lg:mb-10 ">
      <h1 className="relative mx-auto my-6 max-w-4xl text-3xl font-semibold capitalize ">
        Favorites
      </h1>
      <section className=" mx-auto max-w-4xl ">
        <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
          <SortableContext
            items={mockedCards.map((item) => item.id)}
            strategy={verticalListSortingStrategy}
          >
            <div className=" flex flex-col gap-6  ">
              {mockedCards.map((item, index) => (
                <div
                  className="m-auto w-full max-w-4xl"
                  key={item.locationData.country + index}
                >
                  <DraggableWrapper key={index} id={item.id}>
                    <DetailedConditionsCard
                      locationData={item.locationData}
                      riverData={item.riverData}
                    />
                  </DraggableWrapper>
                </div>
              ))}
            </div>
          </SortableContext>
        </DndContext>
      </section>
      xp
    </main>
  );
};

export default Favorites;
