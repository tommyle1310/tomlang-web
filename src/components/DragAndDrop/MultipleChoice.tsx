import React, { useState } from 'react';
import { Input } from '../ui/input';
import { DRAG_DISPLAY } from '@/lib/constants/variables';
import { Skeleton } from '../ui/skeleton';

interface Option {
    id: number;
    label: string;
}

interface MultipleChoiceProps {
    question: string;
    options: Option[];
    onSelect: (selectedOptionId: number) => void;
    type?: string;
}

const MultipleChoice: React.FC<MultipleChoiceProps> = ({ question, options, onSelect, type = DRAG_DISPLAY }) => {
    const [selectedOption, setSelectedOption] = useState<number | null>(null);

    const handleOptionClick = (optionId: number) => {
        setSelectedOption(optionId);
        onSelect(optionId);
    };

    // Define CSS class names based on type
    const containerClass = `max-w-md mx-auto  fc bg-white shadow-lg rounded-lg ${type === DRAG_DISPLAY ? 'gap-2 p-2' : 'gap-4 p-4'
        }`;

    const inputClass = `p-2 h-5 border rounded-sm ${type === DRAG_DISPLAY ? 'max-w-24' : 'w-full'
        }`;

    const questionClass = `text-lg font-semibold mb-4 ${type === DRAG_DISPLAY ? '' : ' text-gray-800'
        }`;

    const buttonGridClass = `grid grid-cols-1 ${type === DRAG_DISPLAY ? 'gap-2' : 'gap-4'
        } sm:grid-cols-2`;

    const buttonClass = (optionId: number) => `flex items-center justify-center ${type === DRAG_DISPLAY ? 'h-5 aspect-square' : 'h-20 px-4 py-2 '
        } border  transition-all duration-300 ease-in-out ${selectedOption === optionId
            ? 'bg-blue-500 text-white border-blue-500'
            : 'bg-gray-100 text-gray-800 hover:bg-gray-200 border-gray-300 rounded-md'
        }`;

    console.log('check', type);
    return (

        <div className={containerClass}>
            {type === DRAG_DISPLAY ? (
                <Skeleton className="w-full h-5 bg-slate-300 rounded-sm" />

            ) : (
                <Input
                    className={questionClass}
                    value={question}
                    onChange={() => { }}
                />
            )}
            <div className={buttonGridClass}>
                {options.map(option => (
                    type === DRAG_DISPLAY ?
                        <Skeleton className='aspect-video w-10 bg-slate-300' />
                        :
                        <button
                            key={option.id}
                            onClick={() => handleOptionClick(option.id)}
                            className={buttonClass(option.id)}
                        >
                            {type === DRAG_DISPLAY ? null : option.label}
                        </button>
                ))}
            </div>
        </div>
    );
};

export default MultipleChoice;
