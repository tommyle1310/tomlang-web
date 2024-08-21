import React from 'react';
import { Editor } from 'draft-js';
import mediaBlockRenderer from './MediaBlockRenderer'; // Ensure correct path
import useEditor from './useEditor'; // Ensure correct path
import { customStyleMap } from '@/lib/constants/draftConstants';
import { Button } from '../ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';

const MyEditor: React.FC = () => {
    const {
        editorState,
        setEditorState,
        fileInputKey,
        loading, // Access loading state
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
        <div className="custom-editor relative">
            {/* Loading Spinner */}
            {loading && (
                <div className="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center z-10">
                    <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-primary"></div>
                </div>
            )}

            {/* Editor Controls */}
            <div className="custom-editor-btns">
                <button className=' draft-btn ' onMouseDown={onBoldClick}><i className="fa-solid fa-bold"></i></button>
                <Popover>
                    <PopoverTrigger><i className="fa-solid fa-palette text-primary-500 draft-btn"></i></PopoverTrigger>
                    <PopoverContent>
                        <div className="flex flex-row z-20 bg-white">
                            <button className='flex   w-10 h-10 rounded-md max-w-screen-sm  hover:duration-300 hover:bg-slate-100 border border-slate-300 justify-center items-center ' onMouseDown={changeTextColor('PRIMARY')}><div className='bg-primary-500 w-3 h-3 rounded-full'></div></button>
                            <button className='flex   w-10 h-10 rounded-md max-w-screen-sm  hover:duration-300 hover:bg-slate-100 border border-slate-300 justify-center items-center ' onMouseDown={changeTextColor('WARNING')}><div className='bg-warning-500 w-3 h-3 rounded-full'></div></button>
                            <button className='flex   w-10 h-10 rounded-md max-w-screen-sm  hover:duration-300 hover:bg-slate-100 border border-slate-300 justify-center items-center ' onMouseDown={changeTextColor('DANGER')}><div className='bg-danger-500 w-3 h-3 rounded-full'></div></button>
                            <button className='flex   w-10 h-10 rounded-md max-w-screen-sm  hover:duration-300 hover:bg-slate-100 border border-slate-300 justify-center items-center ' onMouseDown={changeTextColor('INFO')}><div className='bg-info-500 w-3 h-3 rounded-full'></div></button>
                            <button className='flex   w-10 h-10 rounded-md max-w-screen-sm  hover:duration-300 hover:bg-slate-100 border border-slate-300 justify-center items-center ' onMouseDown={changeTextColor('SUCCESS')}><div className='bg-success-500 w-3 h-3 rounded-full'></div></button>
                        </div>
                    </PopoverContent>
                </Popover>

                <button className='text-xs draft-btn ' onMouseDown={changeTextSize('SMALL')}>A</button>
                <button className='text-md draft-btn ' onMouseDown={changeTextSize('MEDIUM')}>A</button>
                <button className='text-xl draft-btn ' onMouseDown={changeTextSize('LARGE')}>A</button>
                <button className='draft-btn' onMouseDown={toggleBlockType('unordered-list-item')}><i className="fa-solid fa-list-ul"></i></button>
                <button className='draft-btn' onMouseDown={toggleBlockType('ordered-list-item')}><i className="fa-solid fa-arrow-up-1-9"></i></button>
                <button className='draft-btn' onMouseDown={addMedia}><i className="fa-solid fa-panorama"></i></button>
                <input
                    key={fileInputKey}
                    type="file"
                    accept="image/*,video/*"
                    onChange={handleFileChange}
                    style={{ display: 'none' }}
                    id="fileInput"
                />
                <label htmlFor="fileInput" className='draft-btn'>
                    <i className="fa-solid fa-photo-film"></i>
                </label>
            </div>

            {/* Draft Editor */}
            <Editor
                editorState={editorState}
                onChange={setEditorState}
                customStyleMap={customStyleMap}
                blockRendererFn={mediaBlockRenderer}
            />

            <Button className='bg-red-300 w-32' onMouseDown={logHTML}>Log HTML</Button>
        </div>
    );
};

export default MyEditor;
