type ImageUploaderProps = {
    maxSize: number;
    allowedFileTypes: string[];
    initialSrc: string;
    onChange: (files: FileList | null) => void;
};
declare const useImageUploader: ({ maxSize, allowedFileTypes, initialSrc, onChange }: ImageUploaderProps) => {
    previewUrl: string | null;
    fileError: string;
    handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export default useImageUploader;
