import styled from "styled-components"
import { getInnerData } from "../../utils/utils"

const CustomButton = styled.button`
  
`



export const GetButton = () => {
  const handleClickButton = () => {
    const getData = getInnerData();
    console.log(getData);
  }
  return (
    <CustomButton onClick={handleClickButton}>GetButton</CustomButton>
  )
}
