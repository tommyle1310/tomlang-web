// MyEditor.tsx
import React from 'react';
import { Editor } from 'draft-js';
import mediaBlockRenderer from './MediaBlockRenderer'; // Ensure correct path
import useEditor from './useEditor'; // Ensure correct path
import { customStyleMap } from '@/lib/constants/draftConstants';

const MyEditor: React.FC = () => {
    const {
        editorState,
        setEditorState,
        fileInputKey,
        onBoldClick,
        changeTextColor,
        logPlainText,
        logHTML,
        changeTextSize,
        toggleBlockType,
        addMedia,
        handleFileChange,
    } = useEditor();

    return (
        <div className="custom-editor">
            <span onMouseDown={onBoldClick}>Bold</span>
            <button onMouseDown={changeTextColor('PRIMARY')}>Primary</button>
            <button onMouseDown={changeTextColor('WARNING')}>Warning</button>
            <button onMouseDown={changeTextColor('DANGER')}>Danger</button>
            <button onMouseDown={changeTextColor('INFO')}>Info</button>
            <button onMouseDown={changeTextColor('SUCCESS')}>Success</button>
            <button onMouseDown={changeTextSize('SMALL')}>small</button>
            <button onMouseDown={changeTextSize('MEDIUM')}>medium</button>
            <button onMouseDown={changeTextSize('LARGE')}>large</button>
            <button onMouseDown={toggleBlockType('unordered-list-item')}>Bullet List</button>
            <button onMouseDown={toggleBlockType('ordered-list-item')}>Ordered List</button>
            <button onMouseDown={logHTML}>Log HTML</button>
            <button onMouseDown={addMedia}>Add Default Media</button>
            <input
                key={fileInputKey}
                type="file"
                accept="image/*,video/*"
                onChange={handleFileChange}
                style={{ display: 'none' }}
                id="fileInput"
            />
            <label htmlFor="fileInput">
                Upload Local Media
            </label>
            <Editor
                editorState={editorState}
                onChange={setEditorState}
                customStyleMap={customStyleMap}
                blockRendererFn={mediaBlockRenderer}
            />
        </div>
    );
};

export default MyEditor;
