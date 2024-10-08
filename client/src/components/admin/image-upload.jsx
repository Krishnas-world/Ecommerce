import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { UploadCloudIcon, XIcon } from 'lucide-react';
import { Button } from '../ui/button';

export default function ProductImageUpload({ imageFile, setImageFile }) {
    const inputRef = useRef(null);
    const [previewUrl, setPreviewUrl] = useState('');

    function handleImageChange(e) {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            console.log('Selected file:', selectedFile); // Log file object
            setImageFile(selectedFile);
            setPreviewUrl(URL.createObjectURL(selectedFile));
        }
    }


    function handleDrop(e) {
        e.preventDefault();
        const droppedFile = e.dataTransfer.files?.[0];
        if (droppedFile) {
            setImageFile(droppedFile);
            setPreviewUrl(URL.createObjectURL(droppedFile));
        }
    }
    function handleDragOver(e) {
        e.preventDefault();
    }

    function handleRemoveImage() {
        console.log('Removing image file:', imageFile); // Log file object
        setImageFile(null);
        setPreviewUrl('');
        if (inputRef.current) {
            inputRef.current.value = '';
        }
    }
    

    return (
        <div className='w-full max-w-md mx-auto mt-4'>
            <Label className='text-lg font-semibold mb-2 block'>
                Upload Image
            </Label>
            <div
                className="border-2 border-dashed rounded-lg p-4 cursor-pointer"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                onClick={() => inputRef.current?.click()}
            >
                <Input
                    id="upload"
                    type="file"
                    className="hidden"
                    ref={inputRef}
                    onChange={handleImageChange}
                />
                {previewUrl ? (
                    <div className='flex flex-col items-center'>
                        <img src={previewUrl} alt="Preview" className='w-full h-32 object-cover mb-2' />
                        <div className='flex items-center justify-between w-full'>
                            <p className='text-sm font-medium'>{imageFile ? imageFile.name : 'No file selected'}</p>
                            <Button
                                variant="ghost"
                                size='icon'
                                className='text-muted-foreground hover:text-foreground'
                                onClick={handleRemoveImage}
                            >
                                <XIcon className='w-4 h-4' />
                                <span className='sr-only'>Remove File</span>
                            </Button>
                        </div>
                    </div>
                ) : (
                    <Label htmlFor='image-upload' className='flex flex-col items-center justify-center h-32'>
                        <UploadCloudIcon className='w-10 h-10 text-muted-foreground mb-2' />
                        <span>Drag and Drop or Click to upload image</span>
                    </Label>
                )}
            </div>
        </div>
    )
}

// Define prop types
ProductImageUpload.propTypes = {
    imageFile: PropTypes.instanceOf(File),
    setImageFile: PropTypes.func.isRequired,
};
