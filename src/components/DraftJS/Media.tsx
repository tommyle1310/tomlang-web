// Media.tsx
import React from 'react';
import { ContentState, ContentBlock } from 'draft-js';

interface MediaProps {
    contentState: ContentState;
    block: ContentBlock;
}

const Media: React.FC<MediaProps> = ({ contentState, block }) => {
    const entityKey = block.getEntityAt(0);
    if (!entityKey) {
        return null;
    }
    const entity = contentState.getEntity(entityKey);
    const { src, mediaType } = entity.getData();

    if (mediaType === 'image') {
        return <img src={src} alt="Media" className='aspect-square w-1/2' />;
    } else if (mediaType === 'video') {
        return <video controls src={src} className='aspect-video w-2/5' />;
    }
    return null;
};

export default Media;
