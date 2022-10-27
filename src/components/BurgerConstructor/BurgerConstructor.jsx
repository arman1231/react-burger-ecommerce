import React from 'react'
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import bun02 from '../../images/bun-02.svg'
import sauce03 from '../../images/sauce-03.svg'

export default function BurgerConstructor() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <ConstructorElement
        c
          type="top"
          isLocked={true}
          text="Краторная булка N-200i (верх)"
          price={20}
          thumbnail={bun02}
        />
        <ConstructorElement
          text="Соус традиционный галактический"
          price={30}
          thumbnail={sauce03}
        />
                <ConstructorElement
          text="Соус традиционный галактический"
          price={30}
          thumbnail={sauce03}
        />
                <ConstructorElement
          text="Соус традиционный галактический"
          price={30}
          thumbnail={sauce03}
        />
                <ConstructorElement
          text="Соус традиционный галактический"
          price={30}
          thumbnail={sauce03}
        />
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text="Краторная булка N-200i (низ)"
          price={200}
          thumbnail={bun02}
        />
      </div>
    )
  }
