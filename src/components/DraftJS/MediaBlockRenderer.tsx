import React from 'react';
import { ContentBlock } from 'draft-js';
import Media from './Media'; // Ensure the correct path to your Media component

const mediaBlockRenderer = (block: ContentBlock): { component: React.FC<any>; editable: boolean } | null => {
    if (block.getType() === 'atomic') {
        return {
            component: Media,
            editable: false
        };
    }
    return null;
};

export default mediaBlockRenderer;
