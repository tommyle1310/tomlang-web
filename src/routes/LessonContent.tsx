import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import React from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from 'react-router-dom';


// Function to convert inline styles to Tailwind classes
const convertStyleToClass = (style: string): string => {
    const styleMap: { [key: string]: string } = {
        // Color mappings
        'color: #dc3545': 'text-red-600', // Example color
        'color: #000': 'text-black',
        'color: #fff': 'text-white',
        // Font size mappings
        'font-size: 16px': 'text-base',
        'font-size: 24px': 'text-xl',
        'font-size: 12px': 'text-sm',
        // Font weight mappings
        'font-weight: bold': 'font-bold',
        'font-weight: normal': 'font-normal',
        // Text alignment mappings
        'text-align: center': 'text-center',
        'text-align: left': 'text-left',
        'text-align: right': 'text-right',
        // Margin mappings
        'margin: 10px': 'm-2.5',
        'margin: 20px': 'm-5',
        // Padding mappings
        'padding: 10px': 'p-2.5',
        'padding: 20px': 'p-5',
        // Background color mappings
        'background-color: #f8f9fa': 'bg-gray-100',
        'background-color: #343a40': 'bg-gray-800',
        // Border mappings
        'border: 1px solid #dee2e6': 'border border-gray-300',
        'border-radius: 5px': 'rounded-sm',
        // List styles
        'list-style-type: disc': 'list-disc',
        'list-style-type: circle': 'list-circle',
        'list-style-type: square': 'list-square',
        'padding-left: 40px': 'pl-10', // Example for padding-left in lists
    };

    const styles = style.split(';').map(s => s.trim()).filter(Boolean);
    const tailwindClasses = styles.map(style => styleMap[style] || '').join(' ');
    return tailwindClasses;
};

// Function to process HTML string
const processHTML = (html: string): string => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    const traverse = (node: Node) => {
        if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as HTMLElement;
            const style = element.getAttribute('style');
            if (style) {
                element.className = convertStyleToClass(style);
            }

            // Handle list elements
            if (element.nodeName === 'UL') {
                element.classList.add('list-disc', 'pl-4'); // Add Tailwind classes for ul
            }
            if (element.nodeName === 'OL') {
                element.classList.add('list-decimal', 'pl-4'); // Add Tailwind classes for ol
            }
            if (element.nodeName === 'LI') {
                element.classList.add('mb-2'); // Add Tailwind class for li margin-bottom
            }

            // Handle img elements
            if (element.nodeName === 'IMG') {
                element.classList.add('w-48', 'aspect-square'); // Add Tailwind classes for images
            }

            for (const child of element.childNodes) {
                traverse(child);
            }
        }
    };

    traverse(doc.body);
    return doc.body.innerHTML;
};

const LessonContent: React.FC = () => {
    let content: string = `<p><br></p>
<figure><img src="https://res.cloudinary.com/dlavqnrlx/image/upload/v1724236366/chickenBurger_zetdn6.jpg" alt="Media" /></figure>
<p><span style="font-size: 24px"><span style="color: #17a2b8"><strong>new burger</strong></span></span></p>
<ol>
  <li><span style="font-size: 24px"><span style="font-size: 16px"><span style="font-size: 12px"><span style="color: #17a2b8"><span style="color: #dc3545"><span style="color: #ffc107">adsa</span></span></span></span></span></span></li>
  <li><span style="font-size: 24px"><span style="font-size: 16px"><span style="font-size: 12px"><span style="color: #17a2b8"><span style="color: #dc3545"><span style="color: #ffc107"><span style="color: #007bff">sad</span></span></span></span></span></span></span></li>
</ol>
<ul>
  <li><span style="font-size: 24px"><span style="font-size: 16px"><span style="font-size: 12px"><span style="color: #28a745"><span style="color: #17a2b8"><span style="color: #dc3545"><span style="color: #ffc107"><span style="color: #007bff">asdgdsgds</span></span></span></span></span></span></span></span></li>
</ul>
<p><br></p>`;

    // Convert inline styles to Tailwind classes
    const processedContent: string = processHTML(content);

    return (
        <div className=' fc gap-6'>
            <Breadcrumb className='max-lg:p-4'>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink>
                            <Link to="/">Home</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink>
                            <Link to="/course/abc">Course</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Lesson abc</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <div className="p-4" dangerouslySetInnerHTML={{ __html: processedContent }} />
            <Pagination >
                <PaginationContent className=' rounded-md'>
                    <PaginationItem className=' hover:duration-300 rounded-md hover:bg-slate-400  '>
                        <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem className=' hover:duration-300 hover:bg-slate-400   rounded-md'>
                        <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem className=' hover:duration-300 hover:bg-slate-400   rounded-md'>
                        <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem className=' hover:duration-300 rounded-md hover:bg-slate-400  '>
                        <PaginationNext href="#" />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>

        </div>
    );
};

export default LessonContent;
