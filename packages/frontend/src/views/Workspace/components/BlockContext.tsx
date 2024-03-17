import type { Active, DragEndEvent, DragStartEvent, Over, UniqueIdentifier } from '@dnd-kit/core';
import { DndContext, KeyboardSensor, PointerSensor, closestCenter, useSensor, useSensors } from '@dnd-kit/core';
import {
    SortableContext,
    arrayMove,
    sortableKeyboardCoordinates as coordinateGetter,
    verticalListSortingStrategy as strategy,
} from '@dnd-kit/sortable';
import type { Dispatch, FC, PropsWithChildren, SetStateAction } from 'react';

export interface BlockContextProps extends PropsWithChildren {
    items: UniqueIdentifier[];
    onChange: Dispatch<SetStateAction<UniqueIdentifier[]>>;
    onDragStart?: (e: DragStartEvent, active?: Active) => void;
    onDragEnd?: (e: DragEndEvent, active?: Active, over?: Over | null) => void;
    renderOverlay?: (id: UniqueIdentifier) => JSX.Element;
}

const BlockContext: FC<BlockContextProps> = ({ items, children, onChange, onDragEnd, onDragStart }) => {
    const sensors = useSensors(useSensor(PointerSensor), useSensor(KeyboardSensor, { coordinateGetter }));

    const handleDragStart = (event: DragStartEvent) => {
        const { active } = event;
        onDragStart?.(event, active);
    };

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;
        const canDrop = over?.id && active.id !== over.id;

        canDrop &&
            onChange(items => {
                const oldIndex = items.indexOf(active.id);
                const newIndex = items.indexOf(over?.id);
                return arrayMove(items, oldIndex, newIndex);
            });

        onDragEnd?.(event, active, over);
    };

    return (
        <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}>
            <SortableContext items={items} strategy={strategy}>
                {children}
            </SortableContext>
        </DndContext>
    );
};

export default BlockContext;
