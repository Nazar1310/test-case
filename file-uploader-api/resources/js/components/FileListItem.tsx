import { FC } from 'react';
import { IFile } from '../types/file';

interface FileListItemProps {
  file: IFile;
  onRemove: (file: IFile) => void;
  onDownload: (file: IFile) => void;
}
const FileListItem: FC<FileListItemProps> = (props) => {
  const { file, onRemove, onDownload } = props;
  return (
    <div className="file-item">
      <div>
        <div className="img"></div>
        <span>{file.name}</span>
        <span>{file.mime_type}</span>
        <div className="file-item-footer">
          <div className="button remove-button" onClick={() => onRemove(file)} />
          <div className="button download-button" onClick={() => onDownload(file)} />
        </div>
      </div>
    </div>
  );
};

export default FileListItem;
