import React from 'react';
import { ContentState, ContentBlock } from 'draft-js';

interface MediaProps {
    contentState: ContentState;
    block: ContentBlock;
}

const Media: React.FC<MediaProps> = ({ contentState, block }) => {
    const entity = contentState.getEntity(block.getEntityAt(0));
    const { src, type } = entity.getData();

    if (type === 'html') {
        return <div dangerouslySetInnerHTML={{ __html: src }} />;
    }

    if (type === 'image') {
        return <img src={src} alt="Media" />;
    }

    if (type === 'video') {
        return <video controls src={src}></video>;
    }

    return null;
};

export default Media;
