import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import styles from "./ConstructorElementWrapper.module.css";
import { Identifier } from "dnd-core";
import { IBurgerConstructorIngridient } from "../BurgerConstructor/BurgerConstructor";

interface IConstructorElementWrapper {
  item: IBurgerConstructorIngridient,
  index: number,
  handleDeleteElement: (id: string) => void,
  moveCard: (dragIndex: number, hoverIndex: number) => void,
}

type TDragObject = {
  index: number
}

type TCollectedProps = {
  handlerId: Identifier | null
}

const ConstructorElementWrapper: React.FC<IConstructorElementWrapper> = ({
  item,
  handleDeleteElement,
  index,
  moveCard
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const { _id, id, type, name, price, image } = item;

  const [{ handlerId }, drop] = useDrop<TDragObject, unknown, TCollectedProps>({
    accept: 'ing',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      }
    },
    hover(item: { index: number }, monitor) {
      if (!ref.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = index
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect()
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      // Determine mouse position
      const clientOffset = monitor.getClientOffset()
      // Get pixels to the top
      const hoverClientY = clientOffset!.y - hoverBoundingRect.top
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }
      // Time to actually perform the action
      moveCard(dragIndex, hoverIndex)
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex
    },
  })
  const [{ isDragging }, drag] = useDrag({
    type: "ing",
    item: () => {
      return { _id, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));
  return (
    <div ref={ref} data-handler-id={handlerId} className={styles.constructorElementWrapper} style={{ opacity }}>
      <ConstructorElement
        extraClass={`${styles.draggable}`}
        text={name}
        price={price}
        thumbnail={image}
        handleClose={() => handleDeleteElement(id)}
      />
    </div>
  );
}
export default ConstructorElementWrapper;