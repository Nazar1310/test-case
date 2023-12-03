import React, { FC, ReactNode } from 'react';
import { createContext } from 'react';

interface Lang {
  label: string;
  notfound: string;
}
interface LangTypes {
  en: Lang;
}
const langArr: LangTypes = {
  en: {
    label: 'English',
    notfound: 'Not found page'
  }
};
export interface LangContextValue {
  lang: Lang;
}
const LangContext = createContext<LangContextValue>({
  lang: langArr.en
});
interface Props {
  children: ReactNode;
}
export const LangProvider: FC<Props> = (props) => {
  const { children } = props;

  return (
    <LangContext.Provider
      value={{
        lang: langArr.en
      }}>
      {children}
    </LangContext.Provider>
  );
};
export default LangContext;
