import React, {useState, useEffect, useRef} from "react"
import styled from "styled-components"
import CaretUp from "./CaretUp";
import CaretDown from "./CaretDown";

const SelectDropDown = ({ optionsList, selectedOptions = [], selectorText, onSubmit }) =>{ 
    const [hidden, setHidden] = useState(true)
    const [selectedItems, setSelectedItems] = useState(selectedOptions)

    const node = useRef()
    const selectorNode = useRef()

    useEffect(() => {
        document.addEventListener('mouseup', handleClickOutside)
        document.addEventListener("keydown", handleEscKey, false)
        return () => {
            document.removeEventListener('mouseup', handleClickOutside)
            document.removeEventListener('keydown', handleEscKey, false)
        }
    },[])
    
    const  handleEscKey = event => {
        if(event.keyCode === 27){
            setHidden(true)
        }
    }

    const  handleClickOutside = e => {
        e.stopPropagation()
        if (node.current && !node.current.contains(e.target) && !selectorNode.current.contains(e.target)) {
            setHidden(true)
        }
    }
    const submitAction = () => {
        if(onSubmit){
            onSubmit(selectedItems)
        }
        setHidden(true);
    }
    const onChange = ({ option }) => {
        if(isOptionSelected(option)){
            removeFromSelectedList(option)
        }else{
            addToSelectedList(option)
        }
    }

    const isOptionSelected  = (option) => selectedItems.filter(op => op.name === option.name).length >0

    const removeFromSelectedList  = (option) => setSelectedItems(selectedItems.filter(op => op.name !== option.name))

    const addToSelectedList = option => setSelectedItems(selectedItems.concat(option));

    return(
        <Wrapper>
        <SelectorBox ref={selectorNode} onClick={()=> setHidden(!hidden)}>
            {selectorText} {hidden? <CaretUp/>: <CaretDown/> }
        </SelectorBox>
        {!hidden && 
            <Box ref={node}>
                <OptionsList>
                { optionsList.map( option => 
                    <SelectOption key={option.name} onClick={(event) => onChange({ event, option })} selected={isOptionSelected(option)}>
                        { option.name }
                    </SelectOption>
                )}
                </OptionsList>
                <FooterPanel>
                    <Action onClick={submitAction}> Apply </Action>
                </FooterPanel>
            </Box>
        }
        </Wrapper>
    )
}

/**
 *  STYLES
 */

const Wrapper = styled.div`
    margin: 8px;
`

const SelectorBox = styled.div`
    width: 175px;
    padding: 4px;
    cursor: pointer;
    border-bottom: 1px solid #d5d5d5;
`

const Box = styled.div`
    background-color: #fff;
    height: 280px;
    width: 175px;
    z-index: 105;
    position: absolute;
    margin-top: 5px;
    border: 1px solid #d5d5d5;

`
const OptionsList = styled.div`
    height: 80%;
    overflow-y: auto;
    overflow-x: hidden;
    margin: 8px;
`
const SelectOption = styled.div`
    font-size: .8rem;
    cursor: pointer;
    padding: 4px 12px;
    &:hover{
        background-color: #f3f3f3;
    }
    ${({ selected }) => selected && `
        background-color: #f3f3f3;
    `}
`
const FooterPanel = styled.div`
    margin: 8px;
`
const Action = styled.button`
    font-weight: 400;
    font-size: 14px;
    width: 100%;
    display: block;
    text-align: center;
    height: 100%;
    padding: 8px;
    background-color: #292929;
    border: none;
    cursor: pointer;
    color: #fff;
`
export default SelectDropDown