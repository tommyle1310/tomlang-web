import React from 'react';
import { ContentBlock, ContentState } from 'draft-js';
import Media from './Media'; // Ensure this path is correct

interface MediaWrapperProps {
    contentState: ContentState;
    block: ContentBlock;
}

const MediaWrapper: React.FC<MediaWrapperProps> = ({ contentState, block }) => {
    return <Media contentState={contentState} block={block} />;
};

export default MediaWrapper;
