import React, { useRef } from 'react'
import styled from 'styled-components'
import { useReactToPrint } from 'react-to-print'
import { StaticImage } from "gatsby-plugin-image"

import Header from './cocktailMenuHeader'
import DrinkList from './cocktailMenuDrinks'
import PrintButton from './printButton'

const CocktailMenu = ({drinks}) => {
  const menuEl = useRef()

  const handlePrint = useReactToPrint({
    content: () => menuEl.current,
  });

  return (
    <div style={{position: 'relative'}}>
      <PrintButton handlePrint={handlePrint} />
      <LetterheadWrapper ref={menuEl}>
        <Header />
        <ThinLineBox />
        <LineBox />
        <DrinkList drinks={drinks} />
        <BoxingGloves>
          <StaticImage
            src="../images/boxing-gloves-cocktail.png"
            width={100}
            quality={100}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="The Fitzroy logo title"
          />
        </BoxingGloves>
      </LetterheadWrapper>
    </div>
  )
}

const LetterheadWrapper = styled.div`
  width: 8.5in;
  height: 11in;
  position: relative;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
`

const ThinLineBox = styled.div`
  position: absolute;
  width: 6.25in;
  height: 8.375in;
  right: 1.125in;
  bottom: 0.9375in;
  border: 1px solid;
`

const LineBox = styled.div`
  position: absolute;
  width: 6.4375in;
  height: 8.1875in;
  bottom: 1.03125in;
  right: 1.03125in;
  border: 2px solid;
`

const BoxingGloves = styled.div`
  position: absolute;
  bottom: 1.25in;
  right: 1.25in;
`

export default CocktailMenu