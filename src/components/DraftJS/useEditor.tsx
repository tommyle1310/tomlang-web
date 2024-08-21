import { useState, ChangeEvent, MouseEvent } from 'react';
import { EditorState, RichUtils, AtomicBlockUtils, ContentState, DraftBlockType } from 'draft-js';
import axios from 'axios';
import { RenderConfig, stateToHTML } from 'draft-js-export-html';

const customStyleMap: { [styleName: string]: RenderConfig } = {
    PRIMARY: { style: { color: '#007bff' } },
    WARNING: { style: { color: '#ffc107' } },
    DANGER: { style: { color: '#dc3545' } },
    INFO: { style: { color: '#17a2b8' } },
    SUCCESS: { style: { color: '#28a745' } },
    UPPERCASE: { style: { textTransform: 'uppercase' } },
    LOWERCASE: { style: { textTransform: 'lowercase' } },
    SMALL: { style: { fontSize: '12px' } },
    MEDIUM: { style: { fontSize: '16px' } },
    LARGE: { style: { fontSize: '24px' } },
};

const useEditor = () => {
    const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
    const [fileInputKey, setFileInputKey] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false); // Add loading state

    const onBoldClick = (e: MouseEvent<HTMLSpanElement>) => {
        e.preventDefault();
        setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
    };

    const changeTextColor = (color: string) => (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setEditorState(RichUtils.toggleInlineStyle(editorState, color));
    };

    const changeTextSize = (size: string) => (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setEditorState(RichUtils.toggleInlineStyle(editorState, size));
    };

    const toggleBlockType = (blockType: DraftBlockType) => (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setEditorState(RichUtils.toggleBlockType(editorState, blockType));
    };

    const logPlainText = () => {
        const contentState = editorState.getCurrentContent();
        console.log(contentState.getPlainText());
    };

    const logHTML = () => {
        const contentState: ContentState = editorState.getCurrentContent();
        const html = stateToHTML(contentState, {
            inlineStyles: customStyleMap,
            blockRenderers: {
                atomic: (block) => {
                    const entityKey = block.getEntityAt(0);
                    if (entityKey) {
                        const entity = contentState.getEntity(entityKey);
                        const { src, mediaType } = entity.getData();
                        if (mediaType === 'image') {
                            return `<figure><img src="${src}" alt="Media" /></figure>`;
                        } else if (mediaType === 'video') {
                            return `<figure><video controls src="${src}"></video></figure>`;
                        }
                    }
                    return ''; // Return an empty string if no valid entity is found
                },
            },
        });
        console.log(html);
    };

    const addMedia = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const contentState = editorState.getCurrentContent();
        const contentStateWithEntity = contentState.createEntity(
            'media',
            'IMMUTABLE',
            { src: 'https://example.com/sample.png', mediaType: 'image' }
        );
        const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
        const newEditorState = AtomicBlockUtils.insertAtomicBlock(
            EditorState.set(editorState, { currentContent: contentStateWithEntity }),
            entityKey,
            ' '
        );
        setEditorState(newEditorState);
    };

    const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const isImage = file.type.startsWith('image/');
            const isVideo = file.type.startsWith('video/');
            if (!isImage && !isVideo) {
                console.log('Unsupported file type');
                return;
            }

            const formData = new FormData();
            formData.append('file', file);
            formData.append('upload_preset', 'ml_default'); // Replace with your preset

            setLoading(true); // Set loading to true before upload

            try {
                const response = await axios.post<{ secure_url: string }>('https://api.cloudinary.com/v1_1/dlavqnrlx/upload', formData);
                const mediaUrl = response.data.secure_url;
                console.log('Media URL:', mediaUrl);

                const contentState = editorState.getCurrentContent();
                const contentStateWithEntity = contentState.createEntity(
                    'media',
                    'IMMUTABLE',
                    { src: mediaUrl, mediaType: isImage ? 'image' : 'video' }
                );
                const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
                const newEditorState = AtomicBlockUtils.insertAtomicBlock(
                    EditorState.set(editorState, { currentContent: contentStateWithEntity }),
                    entityKey,
                    ' '
                );
                setEditorState(newEditorState);
            } catch (error) {
                console.error('Error uploading media:', error);
            } finally {
                setLoading(false); // Set loading to false after upload
            }
        } else {
            console.log('No file selected');
        }
        setFileInputKey(prevKey => prevKey + 1);
    };

    return {
        editorState,
        setEditorState,
        fileInputKey,
        changeTextSize,
        toggleBlockType,
        changeTextColor,
        onBoldClick,
        logPlainText,
        logHTML,
        addMedia,
        handleFileChange,
        loading, // Return loading state
    };
};

export default useEditor;
