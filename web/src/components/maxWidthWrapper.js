import React from "react";
import PropTypes from 'prop-types'
import styled from 'styled-components'

const MaxWidthWrapper = ({ children, width }) => {
  return <Wrapper style={{'--width': width + 'px'}}>{children}</Wrapper>;
};

const Wrapper = styled.div`
  max-width: var(--width);
  margin: 0 auto;
`

MaxWidthWrapper.propTypes = {
  width: PropTypes.number.isRequired
}

export default MaxWidthWrapper;
