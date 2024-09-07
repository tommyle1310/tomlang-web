import React from 'react';
import { ContentState, ContentBlock } from 'draft-js';
import { Input } from '../ui/input';
import MultipleChoice from '../DragAndDrop/MultipleChoice';
import Title from '../DragAndDrop/Title';
import { DROP_DISPLAY } from '@/lib/constants/variables';

interface MediaProps {
    contentState: ContentState;
    block: ContentBlock;
}

const Media: React.FC<MediaProps> = ({ contentState, block }) => {
    const entity = contentState.getEntity(block.getEntityAt(0));
    const { src, type } = entity.getData();
    const srcType = src.match(/key='([^']+)'/);
    const blockType = srcType ? srcType[1] : null;
    console.log(blockType)

    if (type === 'html') {
        switch (blockType) {
            case 'title':
                return <Title />
            case 'multiple-choice':
                return <MultipleChoice type={DROP_DISPLAY} onSelect={() => { }} options={[{ id: 1, label: '1' }, { id: 2, label: '2' }, { id: 3, label: '3' }, { id: 4, label: '4' }]} question='hello world' />
            default:

                return <div dangerouslySetInnerHTML={{ __html: src }} />;
        }
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
