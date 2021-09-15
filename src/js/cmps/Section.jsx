import { Droppable } from 'react-beautiful-dnd';
export function Section() {

    return <Droppable droppableId="droppable-1" type="PERSON">
        {(provided, snapshot) => (
            <div
                ref={provided.innerRef}
                style={{ backgroundColor: snapshot.isDraggingOver ? 'blue' : 'grey' }}
                {...provided.droppableProps}
            >
                <h2>I am a droppable!</h2>
                {provided.placeholder}
            </div>
        )}
    </Droppable>;
}