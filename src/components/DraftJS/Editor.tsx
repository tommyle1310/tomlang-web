import React from 'react';
import { Editor, EditorState, Modifier, AtomicBlockUtils, ContentState } from 'draft-js';
import mediaBlockRenderer from './MediaBlockRenderer';
import useEditor from './useEditor';
import { customStyleMap } from '@/lib/constants/draftConstants';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import ReactDOMServer from 'react-dom/server';
import { DRAG_DISPLAY, DROP_DISPLAY, MULTIPLE_CHOICE, TITLE } from '@/lib/constants/variables';
import MultipleChoice from '../DragAndDrop/MultipleChoice';
import Title from '../DragAndDrop/Title';


const MyEditor: React.FC = () => {
    const {
        editorState,
        setEditorState,
        onBoldClick,
        changeTextColor,
        changeTextSize,
        toggleBlockType,
        addMedia,
        logHTML,
        fileInputKey,
        handleFileChange,
    } = useEditor();

    const handleDrop = (event: React.DragEvent) => {
        event.preventDefault();

        try {
            const itemData = event.dataTransfer.getData('application/json');
            const item = JSON.parse(itemData) as { id: string, key: string, content: JSX.Element }; // Adjust based on actual data structure

            let htmlContent = '';
            if (item.content.key === MULTIPLE_CHOICE) {
                const { options, question } = item.content.props.children.props;
                const jsxElement = <MultipleChoice type={DROP_DISPLAY} options={options} question={question} onSelect={() => { }} />;
                // Convert JSX to HTML string
                htmlContent = ReactDOMServer.renderToStaticMarkup(jsxElement);
            }
            else if (item.content.key === TITLE) {
                // const { options, question } = item.content.props.children.props;
                const jsxElement = <Title type={DROP_DISPLAY} />;
                // Convert JSX to HTML string
                htmlContent = ReactDOMServer.renderToStaticMarkup(jsxElement);
            }

            // Create a new ContentState with the HTML content
            const contentState = editorState.getCurrentContent();
            const contentStateWithEntity = contentState.createEntity(
                'media',
                'IMMUTABLE',
                { src: htmlContent, type: 'html' }
            );
            const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
            const newEditorState = AtomicBlockUtils.insertAtomicBlock(
                EditorState.set(editorState, { currentContent: contentStateWithEntity }),
                entityKey,
                ' '
            );

            // Update the editor state with the new content
            setEditorState(newEditorState);
        } catch (error) {
            console.error('Error parsing dropped data:', error);
        }
    };


    return (
        <div
            className="custom-editor relative"
            onDrop={handleDrop}
            onDragOver={(event) => event.preventDefault()}
        >
            {/* Editor Controls */}
            <div className="custom-editor-btns">
                <button className='draft-btn' onMouseDown={onBoldClick}><i className="fa-solid fa-bold"></i></button>

                <Popover>
                    <PopoverTrigger><i className="fa-solid fa-palette text-primary-500 draft-btn"></i></PopoverTrigger>
                    <PopoverContent>
                        <div className="flex flex-row z-20 bg-white">
                            <button className='flex w-10 h-10 rounded-md hover:bg-slate-100 border border-slate-300 justify-center items-center' onMouseDown={changeTextColor('PRIMARY')}>
                                <div className='bg-primary-500 w-3 h-3 rounded-full'></div>
                            </button>
                            <button className='flex w-10 h-10 rounded-md hover:bg-slate-100 border border-slate-300 justify-center items-center' onMouseDown={changeTextColor('WARNING')}>
                                <div className='bg-warning-500 w-3 h-3 rounded-full'></div>
                            </button>
                            {/* Add other color buttons similarly */}
                        </div>
                    </PopoverContent>
                </Popover>

                <button className='text-xs draft-btn' onMouseDown={changeTextSize('SMALL')}>A</button>
                <button className='text-md draft-btn' onMouseDown={changeTextSize('MEDIUM')}>A</button>
                <button className='text-xl draft-btn' onMouseDown={changeTextSize('LARGE')}>A</button>
                <button className='draft-btn' onMouseDown={toggleBlockType('unordered-list-item')}><i className="fa-solid fa-list-ul"></i></button>
                <button className='draft-btn' onMouseDown={toggleBlockType('ordered-list-item')}><i className="fa-solid fa-arrow-up-1-9"></i></button>
                <button className='draft-btn' onMouseDown={addMedia}><i className="fa-solid fa-panorama"></i></button>
                <button className='draft-btn' onMouseDown={logHTML}>log html</button>

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
        </div>
    );
};

export default MyEditor;
