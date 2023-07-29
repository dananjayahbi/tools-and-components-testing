import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

// Custom Context Menu Option Example
const CKEditorComponent = ({ initialContent, onContentChange }) => {
  return (
    <CKEditor
      editor={ClassicEditor}
      data={initialContent}
      config={{
        // Add custom configurations and toolbar settings here
        toolbar: {
          items: [
            'heading',
            '|',
            'bold',
            'italic',
            'underline',
            'strikethrough',
            '|',
            'fontSize',
            'fontFamily',
            '|',
            'alignment',
            '|',
            'numberedList',
            'bulletedList',
            'blockQuote',
            'insertTable',
            '|',
            'link',
            'imageUpload',
            'mediaEmbed',
            '|',
            'undo',
            'redo',
            'wordCount',
            'myCustomButton',
          ],
        },
        language: 'en',
        image: {
          toolbar: [
            'imageTextAlternative',
            '|',
            'imageStyle:alignLeft',
            'imageStyle:full',
            'imageStyle:alignRight',
          ],
        },
        mediaEmbed: {
          previewsInData: true,
        },
        alignment: {
          options: ['left', 'right', 'center', 'justify'],
        },
        fontSize: {
          options: [9, 10, 12, 14, 'default', 18, 24, 36],
        },
        // Add custom styles
        ckfinder: {
          uploadUrl: '/upload', // Replace with your upload URL
        },
        table: {
          contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells'],
        },
        // Add custom context menu option
        simpleUpload: {
          uploadUrl: '/upload', // Replace with your upload URL
        },
        // Context menu options
        context: {
          options: ['link', 'myCustomContextMenuOption'], // Include your custom option here
        },
      }}
      onReady={(editor) => {
        // You can do something when the editor is ready (optional).
      }}
      onChange={(event, editor) => {
        const data = editor.getData();
        onContentChange(data);
      }}
    />
  );
};

export default CKEditorComponent;
