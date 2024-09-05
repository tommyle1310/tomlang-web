import React from 'react';
import { ContentBlock, ContentState } from 'draft-js';
import Media from './Media'; // Ensure this path is correct

// Inline the type definition here instead of importing from MediaWrapper
interface MediaWrapperProps {
    contentState: ContentState;
    block: ContentBlock;
}

const MediaWrapper: React.FC<MediaWrapperProps> = ({ contentState, block }) => {
    return <Media contentState={contentState} block={block} />;
};

const mediaBlockRenderer = (block: ContentBlock) => {
    if (block.getType() === 'atomic') {
        return {
            component: MediaWrapper, // Use MediaWrapper directly
            editable: false,
            props: {}, // Add props if necessary
        };
    }
    return null;
};

export default mediaBlockRenderer;
