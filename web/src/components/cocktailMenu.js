import React, { useRef } from 'react'
import styled from 'styled-components'
import { useReactToPrint } from 'react-to-print'
import { StaticImage } from "gatsby-plugin-image"

import Header from './cocktailMenuHeader'
import DrinkList from './cocktailMenuDrinks'
import PrintButton from './printButton'
import LetterheadWrapper from './letterheadWrapper'

const CocktailMenu = ({title, drinks}) => {
  const menuEl = useRef()

  const handlePrint = useReactToPrint({
    content: () => menuEl.current,
  });

  return (
    <div style={{position: 'relative'}}>
      <PrintButton handlePrint={handlePrint} />
      <LetterheadWrapper ref={menuEl}>
        <Header title={title} />
        <ThinLineBox />
        <LineBox />
        <DrinkList drinks={drinks} />
        <BoxingGloves>
          <StaticImage
            src="../images/boxing-gloves-cocktail.png"
            width={100}
            height={100}
            quality={100}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="The Fitzroy logo title"
          />
        </BoxingGloves>
      </LetterheadWrapper>
    </div>
  )
}

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
  height: 100px;
  width: 100px;
  bottom: 1.25in;
  right: 1.25in;
`

export default CocktailMenu