import React from 'react'
import PosHeader from '../components/PosHeader'
import PosBoleta from './components/PosBoleta'
import PosCategorias from './components/PosCategorias'
import PosMesas from './components/PosMesas'
import PosPlatos from './components/PosPlatos'

const PosTerminalScreen = () => {
  return (
    <>
      <PosHeader />
      <main className="pos-container">
        <PosCategorias />
        <section className="tabla">
          <PosMesas />
          <div className="pedido">
            <PosPlatos />
            <PosBoleta />
          </div>
        </section>
      </main>
    </>
  )
}

export default PosTerminalScreen
