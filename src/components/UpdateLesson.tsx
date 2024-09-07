import React from 'react';
import { Link } from 'react-router-dom';
import MyEditor from './DraftJS/Editor';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import DragAndDropExample from './DragAndDrop/ListElements';

interface Item {
  id: string;
  content: JSX.Element;
}

const UpdateLesson = () => {
  const handleDropToEditor = (item: Item) => {
    // Logic to insert item content into the editor
    console.log('Item dropped to editor:', item);
    // Pass this content to your editor component or state handling logic
  };

  return (
    <div className="container mx-auto">
      <Breadcrumb>
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
            <BreadcrumbPage>Create my lesson</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <DragAndDropExample onDropToEditor={handleDropToEditor} />
      <h1 className="text-4xl font-bold mb-6">Create Your Content</h1>
      <MyEditor />
    </div>
  );
};

export default UpdateLesson;
