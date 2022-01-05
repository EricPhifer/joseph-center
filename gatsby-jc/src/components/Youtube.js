import React from "react"
import styled from "styled-components"

const StyledYouTube = styled.div`
    overflow: hidden;
    position: relative;
    width: 100%;
    ::after {
        padding-top: 56.25%;
        display: block;
        content: "";
    }
    iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`

const YouTube = ({id}) => {
    return (
        <div className="youtube">
            <StyledYouTube>
                <iframe
                    title={id}
                    src={`https://www.youtube-nocookie.com/embed/${id}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    />
            </StyledYouTube>
        </div>
    )
}

export default YouTube;