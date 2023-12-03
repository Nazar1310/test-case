import { FC, useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { downloadFile, removeFile } from '../redux/actions/fileActions';
import { initFiles } from '../redux/reducers/fileReducer'
import FileListItem from '../components/FileListItem';
import { IFile } from '../types/file';
import Preloader from '../components/Preloader';
import Navbar from '../components/NavBar';
import '../assets/scss/dasboard.scss';

interface FileListItemProps {
  files: IFile[];
}
const Dashboard: FC<FileListItemProps> = (props) => {
  const dispatch = useAppDispatch();
  const { files, isLoading, error } = useAppSelector((state) => state.file);

  useEffect(() => {
    dispatch(initFiles(props.files));
  }, []);

  const remove = useCallback((file: IFile) => {
    dispatch(removeFile(file));
  }, []);
  const download = useCallback((file: IFile) => {
    dispatch(downloadFile(file));
  }, []);

  return (
    <div className="dashboard-container">
      <Navbar />
      <div>
        {error && <h2 className="error">{error}</h2>}
        {isLoading && <Preloader />}
        <div className="files-container">
          {files.map((file) => (
            <FileListItem key={file.id} file={file} onRemove={remove} onDownload={download} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
