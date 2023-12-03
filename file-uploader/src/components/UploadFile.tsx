import { ChangeEvent, FC, useCallback } from 'react';
import { useAppDispatch } from '../hooks/redux';
import { uploadFile as uploadFileFetch } from '../redux/actions/fileActions';

const UploadFile: FC = () => {
  const dispatch = useAppDispatch();

  const selectFile = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    const selectedFiles = files as FileList;
    dispatch(uploadFileFetch(selectedFiles?.[0]));
  }, []);

  return (
    <div>
      <label htmlFor="upload-input" className="button upload-button"></label>
      <input id="upload-input" type="file" onChange={selectFile} />
    </div>
  );
};
export default UploadFile;
