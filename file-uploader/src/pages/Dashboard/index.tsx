import React, { FC, useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { downloadFile, getFilesPaginate, removeFile } from '../../redux/actions/fileActions';
import FileListItem from '../../components/FileListItem';
import { IFile } from '../../types/file';
import Preloader from '../../components/Preloader';

const Dashboard: FC = () => {
  const dispatch = useAppDispatch();
  const { files, isLoading, error } = useAppSelector((state) => state.file);

  useEffect(() => {
    dispatch(getFilesPaginate({ page: 1, paginate: 20 }));
  }, []);

  const remove = useCallback((file: IFile) => {
    dispatch(removeFile(file));
  }, []);
  const download = useCallback((file: IFile) => {
    dispatch(downloadFile(file));
  }, []);

  return (
    <div>
      {error && <h2 className="error">{error}</h2>}
      {isLoading && <Preloader />}
      <div className="files-container">
        {files.map((file) => (
          <FileListItem key={file.id} file={file} onRemove={remove} onDownload={download} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
