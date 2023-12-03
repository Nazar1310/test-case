export interface IFile {
  id: number;
  name: string;
  mime_type: string;
  path: string;
  size: number;
}
export interface IFileResponseData {
  files: {
    current_page: number;
    last_page: number;
    per_page: number;
    to: number;
    total: number;
    from: number;
    next_page_url?: string;
    data: IFile[];
  };
}
