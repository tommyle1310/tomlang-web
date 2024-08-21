// utils/styleToTailwind.ts
export const styleToTailwind = (style: string): string => {
    const styleMap: { [key: string]: string } = {
        'color: #dc3545': 'text-red-500',
        'color: #28a745': 'text-green-500',
        'color: #007bff': 'text-blue-500',
        'color: #6c757d': 'text-gray-500',
        'background-color: #f8f9fa': 'bg-gray-100',
        'background-color: #343a40': 'bg-gray-800',
        'font-weight: bold': 'font-bold',
        'font-weight: normal': 'font-normal',
        'font-style: italic': 'italic',
        'text-align: center': 'text-center',
        'text-align: left': 'text-left',
        'text-align: right': 'text-right',
        'margin: 10px': 'm-2.5',
        'padding: 10px': 'p-2.5',
        'margin-top: 10px': 'mt-2.5',
        'padding-top: 10px': 'pt-2.5',
        'border: 1px solid #dee2e6': 'border border-gray-300',
        'border-radius: 4px': 'rounded',
        'width: 100px': 'w-24',
        'height: 100px': 'h-24',
        // Add more mappings here as needed
    };

    return styleMap[style] || '';
};
