import { Container, Form, ListGroup, OverlayTrigger, Tooltip } from "react-bootstrap"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowsRotate, faCheck, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons"
import PhotoList from "./PhotoList"
import InformationInput from "./InformationInput"

export default (props) => {
    return <>
        <Container className="h-100 d-flex justify-content-start align-items-center" style={{width:"27%", flexDirection:"column"}}>
            <PhotoList data={props.data} setImage={props.setImage} selected={props.selected} session={props.session}/>
            <InformationInput setImageData={props.setImageData} data={props.data} selected={props.selected} session={props.session}/>
        </Container>
    </>
}