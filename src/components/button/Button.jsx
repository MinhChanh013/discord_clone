import React from 'react'
import { Link } from 'react-router-dom'
import './Button.scss'
const Button = ({
    to,
    href,
    onClick,
    white = false,
    black = false,
    blue = false,
    active,
    className,
    small,
    normal,
    big,
    children,
    ...passProps
}) => {

    let Type = 'button'
    const props = { onClick, ...passProps }

    if (to) {
        props.to = to
        Type = Link
    }
    else if (href) {
        props.href = href
        Type = 'a'
    }

    let size = ""
    if (!!small) {
        size = 'small'
    }
    else if (!!normal) {
        size = 'normal'
    }
    else if (!!big) {
        size = 'big'
    } else {
        size = 'language'
    }

    let classe = ""
    if (!!black) {
        classe = "black"
    }
    else if (!!white) {
        classe = "white"
    }
    else if(!!blue){
        classe = "blue"
    }
    else{
        classe = ""
    }

    const classes = `btn ${size} ${classe} ${className}`

    return (
        <Type className={classes} {...props}>
            <span className='chil-btn'>{children}</span>
        </Type>
    )
}

export default Button