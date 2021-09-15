import { Draggable } from 'react-beautiful-dnd';
export function Column() {

    return <Draggable draggableId="draggable-1" index={0} type="Person">
        {(provided, snapshot) => (
            <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
            >
                <h4>My draggable</h4>
            </div>
        )}
    </Draggable>;
}